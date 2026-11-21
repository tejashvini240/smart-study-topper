import { ArrowRight, BookOpen, ClipboardCheck } from "lucide-react";
import type { Language, PageRoute } from "../types";
import { COURSE_CARDS } from "../data/curriculum";
import { tText, UI_STRINGS } from "../data/translations";

interface CoursesPageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
}

export function CoursesPage({ language, onNavigate }: CoursesPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <p className="text-xs font-semibold text-blue-700 mb-1">
          {tText(UI_STRINGS.appName, language)}
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {tText(UI_STRINGS.coursesTitle, language)}
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl">
          {language === "te"
            ? "6వ తరగతి నుండి 10వ తరగతి, ఇంటర్ 1st & 2nd సంవత్సరం, NEET, JEE, UPSC, గ్రూప్స్ & కెరీర్ మార్గదర్శనం."
            : language === "hi"
            ? "कक्षा 6 से 10, इंटर प्रथम व द्वितीय वर्ष, NEET, JEE, UPSC, ग्रुप परीक्षा और करियर मार्गदर्शन।"
            : "Structured TS SCERT, Singidi Telugu, TSBIE Intermediate, NCERT, NEET, JEE, UPSC & Career programs."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSE_CARDS.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div>
              <div className="aspect-video w-full bg-blue-50 overflow-hidden">
                <img
                  src={course.image}
                  alt={tText(course.title, language)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 space-y-2.5">
                <p className="text-xs font-semibold text-blue-700">
                  {tText(course.subtitle, language)}
                </p>
                <h2 className="text-lg font-bold text-slate-900">
                  {tText(course.title, language)}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tText(course.syllabusNote, language)}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono-tabular">
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  {course.lessonCount}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <ClipboardCheck className="w-3.5 h-3.5 text-blue-600" />
                  {course.quizCount}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  course.targetClassId === "career"
                    ? onNavigate({ page: "career" })
                    : onNavigate({ page: "class", classId: course.targetClassId })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {language === "te"
                    ? "కోర్సు తెరవండి"
                    : language === "hi"
                    ? "कोर्स खोलें"
                    : "Open Course"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
