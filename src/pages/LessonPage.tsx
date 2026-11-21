import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Lightbulb,
  Mic,
} from "lucide-react";
import { useState } from "react";
import type { Language, PageRoute } from "../types";
import { findLesson } from "../data/curriculum";
import { tText, UI_STRINGS } from "../data/translations";
import { LessonVideoPlayer } from "../components/LessonVideoPlayer";
import { SubjectDiagram } from "../components/SubjectDiagram";

interface LessonPageProps {
  language: Language;
  classId: string;
  subjectId: string;
  lessonId: string;
  onNavigate: (route: PageRoute) => void;
  onExplainByVoice: (prompt: string) => void;
}

type NotesViewMode = "bilingual" | "te" | "en" | "hi";

export function LessonPage({
  language,
  classId,
  subjectId,
  lessonId,
  onNavigate,
  onExplainByVoice,
}: LessonPageProps) {
  const { cls, subject, lesson } = findLesson(classId, subjectId, lessonId);
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});
  const [notesMode, setNotesMode] = useState<NotesViewMode>("bilingual");

  const lessonTitle = tText(lesson.title, language);
  const subjectTitle = tText(subject.title, language);
  const classTitle = tText(cls.title, language);
  const notesText = tText(lesson.notes, language);

  const toggleAnswer = (id: string) => {
    setOpenAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showTelugu = notesMode === "bilingual" || notesMode === "te";
  const showEnglish = notesMode === "bilingual" || notesMode === "en";
  const showHindi = notesMode === "hi" || (language === "hi" && notesMode === "bilingual");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Breadcrumb & Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <button
          type="button"
          onClick={() =>
            onNavigate({ page: "class", classId: cls.id, subjectId: subject.id })
          }
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:underline mb-4 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {classTitle} · {subjectTitle}
          </span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-1">
              {lesson.textbookRef} ·{" "}
              <span className="font-mono-tabular">
                {language === "te"
                  ? `పాఠం ${lesson.chapterNumber}`
                  : language === "hi"
                  ? `अध्याय ${lesson.chapterNumber}`
                  : `Chapter ${lesson.chapterNumber}`}
              </span>
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lessonTitle}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() =>
                onExplainByVoice(
                  language === "te"
                    ? `${classTitle} ${subjectTitle} లోని "${lessonTitle}" పాఠాన్ని సులభంగా ఉదాహరణలతో వివరించండి.`
                    : language === "hi"
                    ? `${classTitle} ${subjectTitle} के अध्याय "${lessonTitle}" को सरल भाषा और उदाहरणों के साथ समझाएं।`
                    : `Explain the chapter "${lessonTitle}" from ${classTitle} ${subjectTitle} clearly with simple words and examples.`
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold hover:bg-blue-100 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Mic className="w-4 h-4" />
              <span>{tText(UI_STRINGS.explainByVoice, language)}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onNavigate({
                  page: "quiz",
                  classId: cls.id,
                  subjectId: subject.id,
                  lessonId: lesson.id,
                  tab: "lesson",
                })
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>{tText(UI_STRINGS.takeLessonMcqTest, language)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. Lesson Video */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          01. {tText(UI_STRINGS.lessonVideoTitle, language)}
        </h2>
        <LessonVideoPlayer
          title={lessonTitle}
          subtitle={`${classTitle} · ${subjectTitle}`}
          diagramType={lesson.diagramType}
          keyPoints={lesson.videoKeyPoints}
          notesText={notesText}
          language={language}
          durationMin={lesson.durationMin}
          searchQuery={
            subject.id.includes("telugu")
              ? `${lesson.title.te} ${lesson.title.en} ${cls.title.en} TS SCERT Telugu lesson`
              : `${lesson.title.en} ${cls.title.en} ${subject.title.en} TS SCERT NCERT lesson`
          }
        />
      </section>

      {/* 2. Pictures & Diagrams */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          02. {tText(UI_STRINGS.picturesDiagramsTitle, language)}
        </h2>
        <SubjectDiagram
          diagramType={lesson.diagramType}
          lessonTitle={lessonTitle}
          language={language}
          bannerImage={cls.bannerImage}
        />
      </section>

      {/* 3. Full Detailed Textbook Notes (Telugu + English Full Paragraphs & Examples) */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-blue-700">
            <BookOpen className="w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-900">
              03. {tText(UI_STRINGS.notesTitle, language)}
            </h2>
          </div>

          <div className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start">
            {(
              [
                { id: "bilingual", label: "Telugu + English" },
                { id: "te", label: "తెలుగు" },
                { id: "en", label: "English" },
                { id: "hi", label: "हिन्दी" },
              ] as Array<{ id: NotesViewMode; label: string }>
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setNotesMode(opt.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  notesMode === opt.id
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Full Paragraph Explanations + Worked Examples */}
          <div className="lg:col-span-8 space-y-6">
            {showTelugu && (
              <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="pb-3 border-b border-slate-100">
                  <p className="text-xs font-semibold text-blue-700">
                    సరళమైన తెలుగు వివరణ · Simple Telugu Explanation
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {lesson.title.te}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {lesson.detailedExplanation.te.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {lesson.workedExamples.te.length > 0 && (
                  <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                      <Lightbulb className="w-4 h-4 shrink-0" />
                      <span>ఉదాహరణలు &amp; సులభ వివరణ (Examples in Telugu)</span>
                    </div>
                    <div className="space-y-2.5 text-sm text-slate-800 leading-relaxed">
                      {lesson.workedExamples.te.map((ex, i) => (
                        <p key={i}>{ex}</p>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )}

            {showEnglish && (
              <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="pb-3 border-b border-slate-100">
                  <p className="text-xs font-semibold text-blue-700">
                    Simple English Explanation · Full Textbook Notes
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {lesson.title.en}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {lesson.detailedExplanation.en.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {lesson.workedExamples.en.length > 0 && (
                  <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                      <Lightbulb className="w-4 h-4 shrink-0" />
                      <span>Worked Examples &amp; Daily Life Applications</span>
                    </div>
                    <div className="space-y-2.5 text-sm text-slate-800 leading-relaxed">
                      {lesson.workedExamples.en.map((ex, i) => (
                        <p key={i}>{ex}</p>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )}

            {showHindi && (
              <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="pb-3 border-b border-slate-100">
                  <p className="text-xs font-semibold text-blue-700">
                    सरल हिन्दी व्याख्या · Simple Hindi Explanation
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {lesson.title.hi}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {lesson.detailedExplanation.hi.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {lesson.workedExamples.hi.length > 0 && (
                  <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                      <Lightbulb className="w-4 h-4 shrink-0" />
                      <span>उदाहरण (Worked Examples)</span>
                    </div>
                    <div className="space-y-2.5 text-sm text-slate-800 leading-relaxed">
                      {lesson.workedExamples.hi.map((ex, i) => (
                        <p key={i}>{ex}</p>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )}
          </div>

          {/* Right Column: Key Formulas, Rules & Quick Revision */}
          <div className="lg:col-span-4 bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              {tText(UI_STRINGS.formulasTitle, language)}
            </h3>
            <div className="space-y-3">
              {lesson.formulasOrRules.map((rule, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-xl p-4 text-sm text-slate-800 leading-relaxed"
                >
                  {tText(rule, language)}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                onExplainByVoice(
                  language === "te"
                    ? `"${lesson.title.te}" పాఠాన్ని విద్యార్థికి ఇంకొక సులభమైన ఉదాహరణతో తెలుగులో వివరించండి.`
                    : language === "hi"
                    ? `"${lesson.title.hi}" अध्याय को एक और आसान उदाहरण के साथ समझाइए।`
                    : `Explain "${lesson.title.en}" in simple Telugu and English with one extra everyday example.`
                )
              }
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <Mic className="w-4 h-4" />
              <span>
                {language === "te"
                  ? "మరిన్ని ఉదాహరణలు వాయిస్‌లో అడగండి"
                  : language === "hi"
                  ? "वॉइस ट्यूटर से और उदाहरण पूछें"
                  : "Ask Voice Tutor for More Examples"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Practice Questions */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
        <h2 className="text-xl font-bold text-slate-900">
          04. {tText(UI_STRINGS.practiceQuestionsTitle, language)}
        </h2>
        <div className="space-y-4">
          {lesson.practiceQuestions.map((pq, idx) => {
            const isOpen = !!openAnswers[pq.id];
            return (
              <div
                key={pq.id}
                className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-700">
                      Q{idx + 1} · {pq.marks}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      {tText(pq.question, language)}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleAnswer(pq.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-blue-700 hover:bg-blue-50 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>
                      {isOpen
                        ? tText(UI_STRINGS.hideAnswer, language)
                        : tText(UI_STRINGS.showAnswer, language)}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {isOpen && (
                  <div className="pt-3 border-t border-slate-200 text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-lg">
                    {tText(pq.answer, language)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 5. Bottom MCQ Test CTA */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            {language === "te"
              ? "ఈ పాఠంపై మీ అవగాహనను 10 నిమిషాల MCQ పరీక్షతో పరీక్షించుకోండి."
              : language === "hi"
              ? "इस अध्याय पर अपनी समझ को 10 मिनट के MCQ टेस्ट से परखें।"
              : "Test your mastery of this chapter with a 10-question, 10-minute textbook MCQ quiz."}
          </p>
          <button
            type="button"
            onClick={() =>
              onNavigate({
                page: "quiz",
                classId: cls.id,
                subjectId: subject.id,
                lessonId: lesson.id,
                tab: "lesson",
              })
            }
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <ClipboardCheck className="w-4 h-4" />
            <span>{tText(UI_STRINGS.takeLessonMcqTest, language)}</span>
          </button>
        </div>
      </section>
    </div>
  );
}
