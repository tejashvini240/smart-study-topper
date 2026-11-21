import { ArrowLeft, ArrowRight, BookOpen, ClipboardCheck, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { Language, PageRoute } from "../types";
import { findClassTrack } from "../data/curriculum";
import { tText, UI_STRINGS } from "../data/translations";

interface ClassPageProps {
  language: Language;
  classId: string;
  initialSubjectId?: string;
  onNavigate: (route: PageRoute) => void;
}

export function ClassPage({
  language,
  classId,
  initialSubjectId,
  onNavigate,
}: ClassPageProps) {
  const cls = findClassTrack(classId);
  const [activeSubjectId, setActiveSubjectId] = useState(
    initialSubjectId && cls.subjects.some((s) => s.id === initialSubjectId)
      ? initialSubjectId
      : cls.subjects[0]?.id ?? ""
  );

  useEffect(() => {
    setActiveSubjectId(
      initialSubjectId && cls.subjects.some((s) => s.id === initialSubjectId)
        ? initialSubjectId
        : cls.subjects[0]?.id ?? ""
    );
  }, [classId, initialSubjectId, cls.subjects]);

  const activeSubject =
    cls.subjects.find((s) => s.id === activeSubjectId) ?? cls.subjects[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Back & Class Header */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={() => onNavigate({ page: "home" })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:underline mb-4 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{tText(UI_STRINGS.backLabel, language)}</span>
              </button>

              <p className="text-xs font-semibold text-blue-700 mb-1">
                {tText(cls.board, language)}
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {tText(cls.title, language)}
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                {tText(cls.description, language)}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
              <span className="font-mono-tabular">
                {cls.subjects.length}{" "}
                {language === "te" ? "సబ్జెక్టులు" : language === "hi" ? "विषय" : "Subjects"}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {language === "te"
                  ? "అన్ని పాఠాలు TS SCERT & NCERT ఆధారంగా"
                  : language === "hi"
                  ? "सभी अध्याय TS SCERT और NCERT पर आधारित"
                  : "100% Authentic TS SCERT & NCERT Chapters"}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-blue-50 min-h-[180px]">
            <img
              src={cls.bannerImage}
              alt={tText(cls.title, language)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Subject Selector Tabs */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          {tText(UI_STRINGS.subjectsInClass, language)}
        </h2>
        <div className="flex flex-wrap gap-2">
          {cls.subjects.map((sub) => {
            const isSelected = sub.id === activeSubject.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveSubjectId(sub.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                {tText(sub.title, language)}
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Subject Chapters */}
      {activeSubject && (
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <p className="text-xs font-medium text-blue-700">
                {tText(activeSubject.textbookName, language)}
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                {tText(activeSubject.title, language)} —{" "}
                <span className="font-mono-tabular">
                  {activeSubject.lessons.length}{" "}
                  {tText(UI_STRINGS.chaptersCountLabel, language)}
                </span>
              </h3>
            </div>
            <button
              type="button"
              onClick={() =>
                onNavigate({
                  page: "practice",
                  classId: cls.id,
                  subjectId: activeSubject.id,
                })
              }
              className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {tText(UI_STRINGS.navPractice, language)}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeSubject.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="border border-slate-200 rounded-xl p-4 hover:border-blue-400 transition-colors bg-slate-50/50 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1.5">
                    <span className="font-mono-tabular font-semibold text-blue-700">
                      {language === "te"
                        ? `పాఠం ${String(lesson.chapterNumber).padStart(2, "0")}`
                        : language === "hi"
                        ? `अध्याय ${String(lesson.chapterNumber).padStart(2, "0")}`
                        : `Chapter ${String(lesson.chapterNumber).padStart(2, "0")}`}
                    </span>
                    <span className="font-mono-tabular">{lesson.durationMin} min</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {tText(lesson.title, language)}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                    {tText(lesson.notes, language)}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-200/70">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        page: "lesson",
                        classId: cls.id,
                        subjectId: activeSubject.id,
                        lessonId: lesson.id,
                      })
                    }
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>{tText(UI_STRINGS.openLesson, language)}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        page: "quiz",
                        classId: cls.id,
                        subjectId: activeSubject.id,
                        lessonId: lesson.id,
                        tab: "lesson",
                      })
                    }
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <ClipboardCheck className="w-3.5 h-3.5" />
                    <span>{tText(UI_STRINGS.startChapterQuiz, language)}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
