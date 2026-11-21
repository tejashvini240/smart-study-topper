import {
  Award,
  CheckCircle2,
  Clock,
  Printer,
  RefreshCw,
  Trophy,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { Language, QuizQuestion } from "../types";
import { CLASS_TRACKS, findLesson } from "../data/curriculum";
import {
  buildChapterFallbackQuiz,
  DAILY_QUIZ_QUESTIONS,
  LEADERBOARD_DATA,
  WEEKLY_MOCK_QUESTIONS,
} from "../data/quizAndCareer";
import { tText, UI_STRINGS } from "../data/translations";
import { BrandLogo } from "../components/BrandLogo";

interface QuizPageProps {
  language: Language;
  studentName: string;
  initialClassId?: string;
  initialSubjectId?: string;
  initialLessonId?: string;
  initialTab?: "lesson" | "daily" | "weekly" | "leaderboard" | "certificate";
}

type QuizTab = "lesson" | "daily" | "weekly" | "leaderboard" | "certificate";

interface ServerQuizItem {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export function QuizPage({
  language,
  studentName,
  initialClassId,
  initialSubjectId,
  initialLessonId,
  initialTab = "lesson",
}: QuizPageProps) {
  const [activeTab, setActiveTab] = useState<QuizTab>(initialTab);
  const [selectedClassId, setSelectedClassId] = useState(
    initialClassId || "class-10"
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    initialSubjectId || "c10-telugu"
  );
  const [selectedLessonId, setSelectedLessonId] = useState(
    initialLessonId || "c10-tel-1"
  );

  const { cls, subject, lesson } = findLesson(
    selectedClassId,
    selectedSubjectId,
    selectedLessonId
  );

  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    buildChapterFallbackQuiz(
      tText(cls.title, language),
      tText(subject.title, language),
      tText(lesson.title, language),
      lesson.textbookRef
    )
  );

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(600); // 10 minutes
  const [loadingFreshQuiz, setLoadingFreshQuiz] = useState(false);
  const [quizError, setQuizError] = useState<string | null>(null);
  const [lastCompletedScore, setLastCompletedScore] = useState<{
    score: number;
    total: number;
    title: string;
  }>({
    score: 9,
    total: 10,
    title: tText(lesson.title, language),
  });

  // Sync when navigating from a specific lesson
  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
    if (initialClassId) setSelectedClassId(initialClassId);
    if (initialSubjectId) setSelectedSubjectId(initialSubjectId);
    if (initialLessonId) setSelectedLessonId(initialLessonId);
  }, [initialClassId, initialSubjectId, initialLessonId, initialTab]);

  // Load questions whenever tab or lesson selection changes
  useEffect(() => {
    if (activeTab === "daily") {
      setQuestions(DAILY_QUIZ_QUESTIONS);
    } else if (activeTab === "weekly") {
      setQuestions(WEEKLY_MOCK_QUESTIONS);
    } else if (activeTab === "lesson") {
      setQuestions(
        buildChapterFallbackQuiz(
          tText(cls.title, language),
          tText(subject.title, language),
          tText(lesson.title, language),
          lesson.textbookRef
        )
      );
    }
    setCurrentIdx(0);
    setAnswers({});
    setSubmitted(false);
    setSecondsLeft(600);
    setQuizError(null);
  }, [activeTab, selectedClassId, selectedSubjectId, selectedLessonId, language, cls.title, subject.title, lesson.title, lesson.textbookRef]);

  // 10-Minute Countdown Timer
  useEffect(() => {
    if (
      submitted ||
      activeTab === "leaderboard" ||
      activeTab === "certificate"
    ) {
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, activeTab]);

  const handleGenerateFreshMcqs = async () => {
    setLoadingFreshQuiz(true);
    setQuizError(null);
    try {
      const res = await fetch("/api/generate-lesson-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classTitle: tText(cls.title, language),
          subjectTitle: tText(subject.title, language),
          lessonTitle: tText(lesson.title, language),
          language,
        }),
      });
      const data = await res.json();
      if (!res.ok || !Array.isArray(data.questions) || data.questions.length === 0) {
        throw new Error(data.error || "Could not generate fresh textbook MCQs.");
      }

      const mapped: QuizQuestion[] = data.questions.map(
        (item: ServerQuizItem, idx: number) => ({
          id: `ai-q-${idx + 1}`,
          question: { en: item.question, te: item.question, hi: item.question },
          options: [
            { en: item.options[0] ?? "A", te: item.options[0] ?? "A", hi: item.options[0] ?? "A" },
            { en: item.options[1] ?? "B", te: item.options[1] ?? "B", hi: item.options[1] ?? "B" },
            { en: item.options[2] ?? "C", te: item.options[2] ?? "C", hi: item.options[2] ?? "C" },
            { en: item.options[3] ?? "D", te: item.options[3] ?? "D", hi: item.options[3] ?? "D" },
          ],
          correctIndex: Math.max(0, Math.min(3, Number(item.correctIndex) || 0)),
          explanation: {
            en: item.explanation,
            te: item.explanation,
            hi: item.explanation,
          },
        })
      );

      setQuestions(mapped);
      setCurrentIdx(0);
      setAnswers({});
      setSubmitted(false);
      setSecondsLeft(600);
    } catch (err: unknown) {
      setQuizError(err instanceof Error ? err.message : "Failed to load AI questions.");
    } finally {
      setLoadingFreshQuiz(false);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) correct += 1;
    });
    setLastCompletedScore({
      score: correct,
      total: questions.length,
      title:
        activeTab === "daily"
          ? tText(UI_STRINGS.quizTabDaily, language)
          : activeTab === "weekly"
          ? tText(UI_STRINGS.quizTabWeekly, language)
          : `${tText(subject.title, language)} — ${tText(lesson.title, language)}`,
    });
  };

  const correctCount = questions.reduce(
    (acc, q, idx) => (answers[idx] === q.correctIndex ? acc + 1 : acc),
    0
  );
  const wrongCount = Object.keys(answers).length - correctCount;

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const tabs: Array<{ id: QuizTab; label: string }> = [
    { id: "lesson", label: tText(UI_STRINGS.quizTabLesson, language) },
    { id: "daily", label: tText(UI_STRINGS.quizTabDaily, language) },
    { id: "weekly", label: tText(UI_STRINGS.quizTabWeekly, language) },
    { id: "leaderboard", label: tText(UI_STRINGS.quizTabLeaderboard, language) },
    { id: "certificate", label: tText(UI_STRINGS.quizTabCertificate, language) },
  ];

  const currentQuestion = questions[currentIdx];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header & Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-blue-700">
              {tText(UI_STRINGS.appName, language)}
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {tText(UI_STRINGS.quizCenterTitle, language)}
            </h1>
          </div>

          {(activeTab === "lesson" || activeTab === "daily" || activeTab === "weekly") && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold">
                {tText(UI_STRINGS.timeRemaining, language)}:
              </span>
              <span className="font-mono-tabular text-base font-bold">
                {formatTimer(secondsLeft)}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Class -> Subject -> Lesson Selector for Lesson Quiz */}
        {activeTab === "lesson" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
            <select
              aria-label="Select Class"
              value={selectedClassId}
              onChange={(e) => {
                const nextCls = CLASS_TRACKS.find((c) => c.id === e.target.value) ?? CLASS_TRACKS[0];
                const nextSub = nextCls.subjects[0];
                const nextLes = nextSub.lessons[0];
                setSelectedClassId(nextCls.id);
                setSelectedSubjectId(nextSub.id);
                setSelectedLessonId(nextLes.id);
              }}
              className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {CLASS_TRACKS.map((c) => (
                <option key={c.id} value={c.id}>
                  {tText(c.title, language)}
                </option>
              ))}
            </select>

            <select
              aria-label="Select Subject"
              value={subject.id}
              onChange={(e) => {
                const nextSub = cls.subjects.find((s) => s.id === e.target.value) ?? cls.subjects[0];
                setSelectedSubjectId(nextSub.id);
                setSelectedLessonId(nextSub.lessons[0]?.id ?? "");
              }}
              className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {cls.subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {tText(s.title, language)}
                </option>
              ))}
            </select>

            <select
              aria-label="Select Lesson"
              value={lesson.id}
              onChange={(e) => setSelectedLessonId(e.target.value)}
              className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {subject.lessons.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.chapterNumber}. {tText(l.title, language)}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={handleGenerateFreshMcqs}
              disabled={loadingFreshQuiz}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold hover:bg-blue-100 cursor-pointer disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingFreshQuiz ? "animate-spin" : ""}`} />
              <span>
                {loadingFreshQuiz
                  ? language === "te"
                    ? "లోడ్ అవుతోంది..."
                    : language === "hi"
                    ? "लोड हो रहा है..."
                    : "Generating 10 MCQs..."
                  : language === "te"
                  ? "కొత్త పాఠ్యపుస్తక MCQలు"
                  : language === "hi"
                  ? "नए पाठ्यपुस्तक MCQ"
                  : "Fresh Chapter MCQs"}
              </span>
            </button>
          </div>
        )}

        {quizError && <p className="text-xs text-red-600">{quizError}</p>}
      </div>

      {/* QUIZ TAKING & RESULTS VIEW */}
      {(activeTab === "lesson" || activeTab === "daily" || activeTab === "weekly") && (
        <>
          {!submitted && currentQuestion ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              {/* Question Palette */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <span className="text-xs font-semibold text-blue-700 font-mono-tabular">
                  {language === "te"
                    ? `ప్రశ్న ${currentIdx + 1} / ${questions.length}`
                    : language === "hi"
                    ? `प्रश्न ${currentIdx + 1} / ${questions.length}`
                    : `Question ${currentIdx + 1} of ${questions.length}`}
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {questions.map((_, i) => {
                    const answered = answers[i] !== undefined;
                    const active = i === currentIdx;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIdx(i)}
                        className={`w-8 h-8 rounded-lg text-xs font-mono-tabular font-bold transition-colors cursor-pointer ${
                          active
                            ? "bg-blue-600 text-white"
                            : answered
                            ? "bg-blue-100 text-blue-800"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {tText(currentQuestion.question, language)}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isPicked = answers[currentIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }))
                      }
                      className={`text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 cursor-pointer ${
                        isPicked
                          ? "bg-blue-50 border-blue-600 text-blue-900 font-semibold"
                          : "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono-tabular font-bold shrink-0 ${
                          isPicked
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{tText(opt, language)}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                >
                  {tText(UI_STRINGS.previousBtn, language)}
                </button>

                <div className="flex items-center gap-2">
                  {currentIdx < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))
                      }
                      className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 cursor-pointer"
                    >
                      {tText(UI_STRINGS.nextBtn, language)}
                    </button>
                  ) : null}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 cursor-pointer"
                  >
                    {tText(UI_STRINGS.submitQuizBtn, language)}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* SCORE REPORT + EXPLANATIONS */
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-xs font-semibold text-blue-700">
                      {tText(UI_STRINGS.scoreLabel, language)}
                    </p>
                    <p className="text-3xl font-extrabold text-slate-900 font-mono-tabular mt-1">
                      {correctCount} / {questions.length}
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-semibold text-emerald-700">
                      {tText(UI_STRINGS.correctLabel, language)}
                    </p>
                    <p className="text-3xl font-extrabold text-emerald-700 font-mono-tabular mt-1">
                      {correctCount}
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-semibold text-red-700">
                      {tText(UI_STRINGS.wrongLabel, language)}
                    </p>
                    <p className="text-3xl font-extrabold text-red-700 font-mono-tabular mt-1">
                      {wrongCount}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setAnswers({});
                      setCurrentIdx(0);
                      setSubmitted(false);
                      setSecondsLeft(600);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 cursor-pointer"
                  >
                    {language === "te"
                      ? "మళ్ళీ రాయండి"
                      : language === "hi"
                      ? "फिर से टेस्ट दें"
                      : "Retake Quiz"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("certificate")}
                    className="px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold hover:bg-blue-100 cursor-pointer"
                  >
                    {tText(UI_STRINGS.quizTabCertificate, language)}
                  </button>
                </div>
              </div>

              {/* Detailed Explanations */}
              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const userAns = answers[idx];
                  const isCorrect = userAns === q.correctIndex;
                  return (
                    <div
                      key={q.id}
                      className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {idx + 1}. {tText(q.question, language)}
                        </h3>
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                            {tText(UI_STRINGS.correctLabel, language)}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 shrink-0">
                            <XCircle className="w-4 h-4" />
                            {tText(UI_STRINGS.wrongLabel, language)}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600">
                        <span className="font-semibold text-emerald-700">
                          {language === "te"
                            ? "సరైన సమాధానం: "
                            : language === "hi"
                            ? "सही उत्तर: "
                            : "Correct Answer: "}
                        </span>
                        {tText(q.options[q.correctIndex], language)}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-700 bg-blue-50 border border-blue-100 rounded-lg p-3">
                        <span className="font-semibold text-blue-800">
                          {tText(UI_STRINGS.explanationLabel, language)}:{" "}
                        </span>
                        {tText(q.explanation, language)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      {/* LEADERBOARD TAB */}
      {activeTab === "leaderboard" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <Trophy className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">
              {tText(UI_STRINGS.quizTabLeaderboard, language)}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs text-slate-500">
                  <th className="py-3 pr-4">Rank</th>
                  <th className="py-3 pr-4">Student</th>
                  <th className="py-3 pr-4">City</th>
                  <th className="py-3 pr-4">Track</th>
                  <th className="py-3 pr-4 text-right">Accuracy</th>
                  <th className="py-3 text-right">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {LEADERBOARD_DATA.map((row) => (
                  <tr key={row.rank}>
                    <td className="py-3.5 pr-4 font-mono-tabular font-bold text-blue-700">
                      #{row.rank}
                    </td>
                    <td className="py-3.5 pr-4 font-semibold text-slate-900">
                      {row.name}
                    </td>
                    <td className="py-3.5 pr-4 text-slate-600">{row.city}</td>
                    <td className="py-3.5 pr-4 text-slate-600">{row.track}</td>
                    <td className="py-3.5 pr-4 text-right font-mono-tabular text-emerald-700 font-semibold">
                      {row.accuracy}
                    </td>
                    <td className="py-3.5 text-right font-mono-tabular font-bold text-slate-900">
                      {row.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CERTIFICATE TAB */}
      {activeTab === "certificate" && (
        <div className="space-y-4">
          <div className="bg-white border-4 border-blue-600 rounded-2xl p-8 sm:p-12 text-center shadow-sm space-y-6">
            <div className="flex justify-center">
              <BrandLogo size="md" language={language} />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-blue-700 tracking-wide">
                {language === "te"
                  ? "ప్రతిభా పురస్కార పత్రం"
                  : language === "hi"
                  ? "उत्कृष्टता प्रमाणपत्र"
                  : "Certificate of Academic Achievement"}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {studentName}
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                {language === "te"
                  ? `"${lastCompletedScore.title}" పాఠ్యపుస్తక క్విజ్‌ను విజయవంతంగా పూర్తి చేసినందుకు ఈ సర్టిఫికెట్ ప్రదానం చేయబడింది.`
                  : language === "hi"
                  ? `"${lastCompletedScore.title}" पाठ्यपुस्तक क्विज़ को सफलतापूर्वक पूरा करने पर यह प्रमाणपत्र प्रदान किया जाता है।`
                  : `Has successfully completed the textbook assessment for "${lastCompletedScore.title}" on Smart Study Topper.`}
              </p>
            </div>

            <div className="inline-flex items-center gap-6 px-6 py-3 bg-blue-50 border border-blue-200 rounded-xl">
              <div>
                <p className="text-xs text-slate-500">
                  {tText(UI_STRINGS.scoreLabel, language)}
                </p>
                <p className="text-xl font-extrabold text-blue-700 font-mono-tabular">
                  {lastCompletedScore.score} / {lastCompletedScore.total}
                </p>
              </div>
              <div className="h-8 w-px bg-blue-200" />
              <div>
                <p className="text-xs text-slate-500">Date</p>
                <p className="text-sm font-semibold text-slate-900 font-mono-tabular">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-center no-print">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>
                  {language === "te"
                    ? "సర్టిఫికెట్ ప్రింట్ / సేవ్"
                    : language === "hi"
                    ? "प्रमाणपत्र प्रिंट / सेव करें"
                    : "Print / Save Certificate"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
