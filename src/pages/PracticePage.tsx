import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import { useState } from "react";
import type { Language } from "../types";
import { CLASS_TRACKS, findSubject } from "../data/curriculum";
import { PREVIOUS_PAPERS } from "../data/quizAndCareer";
import { tText, UI_STRINGS } from "../data/translations";

interface PracticePageProps {
  language: Language;
  initialClassId?: string;
  initialSubjectId?: string;
}

export function PracticePage({
  language,
  initialClassId,
  initialSubjectId,
}: PracticePageProps) {
  const [tab, setTab] = useState<"chapter" | "previous" | "important">("chapter");
  const [selectedClassId, setSelectedClassId] = useState(
    initialClassId || "class-10"
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    initialSubjectId || "c10-telugu"
  );
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const cls =
    CLASS_TRACKS.find((c) => c.id === selectedClassId) ?? CLASS_TRACKS[0];
  const subject = findSubject(cls.id, selectedSubjectId);

  const toggle = (id: string) =>
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
        <div>
          <p className="text-xs font-semibold text-blue-700 mb-1">
            {tText(UI_STRINGS.appName, language)}
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {tText(UI_STRINGS.practicePageTitle, language)}
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTab("chapter")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer ${
              tab === "chapter"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {language === "te"
              ? "పాఠాల వారీ అభ్యాస ప్రశ్నలు"
              : language === "hi"
              ? "अध्यायवार अभ्यास प्रश्न"
              : "Chapter-wise Practice"}
          </button>
          <button
            type="button"
            onClick={() => setTab("previous")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer ${
              tab === "previous"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {language === "te"
              ? "పాత ప్రశ్నాపత్రాలు"
              : language === "hi"
              ? "पिछले वर्ष के प्रश्नपत्र"
              : "Previous Papers"}
          </button>
          <button
            type="button"
            onClick={() => setTab("important")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer ${
              tab === "important"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {language === "te"
              ? "ముఖ్యమైన పరీక్షా ప్రశ్నలు"
              : language === "hi"
              ? "महत्वपूर्ण परीक्षा प्रश्न"
              : "Important Questions"}
          </button>
        </div>

        {tab !== "previous" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
            <select
              aria-label="Filter by Class"
              value={cls.id}
              onChange={(e) => {
                const next =
                  CLASS_TRACKS.find((c) => c.id === e.target.value) ??
                  CLASS_TRACKS[0];
                setSelectedClassId(next.id);
                setSelectedSubjectId(next.subjects[0]?.id ?? "");
              }}
              className="px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {CLASS_TRACKS.map((c) => (
                <option key={c.id} value={c.id}>
                  {tText(c.title, language)}
                </option>
              ))}
            </select>

            <select
              aria-label="Filter by Subject"
              value={subject.id}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {cls.subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {tText(s.title, language)}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Chapter-wise & Important Questions */}
      {(tab === "chapter" || tab === "important") && (
        <div className="space-y-4">
          {subject.lessons.map((lesson) => {
            const list =
              tab === "important"
                ? lesson.practiceQuestions.filter((p) => p.isImportant)
                : lesson.practiceQuestions;

            return (
              <div
                key={lesson.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    {lesson.chapterNumber}. {tText(lesson.title, language)}
                  </h2>
                  <span className="text-xs text-slate-500">
                    {lesson.textbookRef}
                  </span>
                </div>

                <div className="space-y-3">
                  {list.map((pq) => {
                    const isOpen = !!openMap[pq.id];
                    return (
                      <div
                        key={pq.id}
                        className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-xs font-semibold text-blue-700">
                              {pq.marks}
                              {pq.yearTag ? ` · ${pq.yearTag}` : ""}
                            </span>
                            <p className="text-sm font-semibold text-slate-900 mt-1">
                              {tText(pq.question, language)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggle(pq.id)}
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
                          <p className="text-sm text-slate-700 bg-white border border-slate-200 rounded-lg p-3.5 leading-relaxed">
                            {tText(pq.answer, language)}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Previous Year Papers */}
      {tab === "previous" && (
        <div className="space-y-5">
          {PREVIOUS_PAPERS.map((paper) => (
            <div
              key={paper.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      {tText(paper.examTitle, language)}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {tText(paper.subject, language)} ·{" "}
                      <span className="font-mono-tabular">{paper.year}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {paper.questions.map((item, idx) => {
                  const key = `${paper.id}-${idx}`;
                  const isOpen = !!openMap[key];
                  return (
                    <div
                      key={key}
                      className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold text-blue-700">
                            {item.marks}
                          </span>
                          <p className="text-sm font-bold text-slate-900 mt-1">
                            {tText(item.q, language)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-blue-700 hover:bg-blue-50 cursor-pointer whitespace-nowrap shrink-0"
                        >
                          {isOpen
                            ? tText(UI_STRINGS.hideAnswer, language)
                            : tText(UI_STRINGS.showAnswer, language)}
                        </button>
                      </div>
                      {isOpen && (
                        <p className="text-sm text-slate-700 bg-white border border-slate-200 rounded-lg p-3.5 leading-relaxed">
                          {tText(item.ans, language)}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
