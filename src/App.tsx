import { useEffect, useState } from "react";
import type { Language, PageRoute } from "./types";
import { findLesson } from "./data/curriculum";
import { tText, UI_STRINGS } from "./data/translations";
import { TopNav } from "./components/TopNav";
import { VoiceAssistant } from "./components/VoiceAssistant";
import {
  LanguageSelectPage,
  LoginPage,
  SplashPage,
} from "./pages/OnboardingPages";
import { HomePage } from "./pages/HomePage";
import { ClassPage } from "./pages/ClassPage";
import { LessonPage } from "./pages/LessonPage";
import { CoursesPage } from "./pages/CoursesPage";
import { QuizPage } from "./pages/QuizPage";
import { PracticePage } from "./pages/PracticePage";
import { CareerPage } from "./pages/CareerPage";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [route, setRoute] = useState<PageRoute>({ page: "language" });
  const [studentName, setStudentName] = useState("Topper Student");
  const [voiceTrigger, setVoiceTrigger] = useState<{
    id: number;
    prompt: string;
  } | null>(null);

  const navigate = (next: PageRoute) => {
    setRoute(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const contextLabel = (() => {
    if (route.page === "lesson") {
      const { cls, subject, lesson } = findLesson(
        route.classId,
        route.subjectId,
        route.lessonId
      );
      return `${tText(cls.title, language)} - ${tText(subject.title, language)} - ${tText(lesson.title, language)}`;
    }
    if (route.page === "class") {
      return `Class Track: ${route.classId}`;
    }
    return undefined;
  })();

  const isMainShell =
    route.page !== "language" &&
    route.page !== "splash" &&
    route.page !== "login";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {isMainShell && (
        <TopNav language={language} route={route} onNavigate={navigate} />
      )}

      <main className="flex-1">
        {route.page === "language" && (
          <LanguageSelectPage
            language={language}
            onSelectLanguage={setLanguage}
            onContinue={() => navigate({ page: "splash" })}
          />
        )}

        {route.page === "splash" && (
          <SplashPage
            language={language}
            onFinish={() => navigate({ page: "login" })}
          />
        )}

        {route.page === "login" && (
          <LoginPage
            language={language}
            onLogin={(name) => {
              setStudentName(name);
              navigate({ page: "home" });
            }}
            onChangeLanguage={() => navigate({ page: "language" })}
          />
        )}

        {route.page === "home" && (
          <HomePage
            language={language}
            studentName={studentName}
            onNavigate={navigate}
          />
        )}

        {route.page === "class" && (
          <ClassPage
            language={language}
            classId={route.classId}
            initialSubjectId={route.subjectId}
            onNavigate={navigate}
          />
        )}

        {route.page === "lesson" && (
          <LessonPage
            language={language}
            classId={route.classId}
            subjectId={route.subjectId}
            lessonId={route.lessonId}
            onNavigate={navigate}
            onExplainByVoice={(prompt) =>
              setVoiceTrigger({ id: Date.now(), prompt })
            }
          />
        )}

        {route.page === "courses" && (
          <CoursesPage language={language} onNavigate={navigate} />
        )}

        {route.page === "quiz" && (
          <QuizPage
            language={language}
            studentName={studentName}
            initialClassId={route.classId}
            initialSubjectId={route.subjectId}
            initialLessonId={route.lessonId}
            initialTab={route.tab}
          />
        )}

        {route.page === "practice" && (
          <PracticePage
            language={language}
            initialClassId={route.classId}
            initialSubjectId={route.subjectId}
          />
        )}

        {route.page === "career" && <CareerPage language={language} />}
      </main>

      {isMainShell && (
        <footer className="bg-white border-t border-slate-200 py-6 px-4 sm:px-6 mt-12 no-print">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="font-medium text-slate-700">
              {tText(UI_STRINGS.appName, language)} ·{" "}
              {tText(UI_STRINGS.tagline, language)}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate({ page: "home" })}
                className="hover:text-blue-700 cursor-pointer"
              >
                {tText(UI_STRINGS.navHome, language)}
              </button>
              <button
                type="button"
                onClick={() => navigate({ page: "courses" })}
                className="hover:text-blue-700 cursor-pointer"
              >
                {tText(UI_STRINGS.navCourses, language)}
              </button>
              <button
                type="button"
                onClick={() => navigate({ page: "quiz" })}
                className="hover:text-blue-700 cursor-pointer"
              >
                {tText(UI_STRINGS.navQuiz, language)}
              </button>
              <button
                type="button"
                onClick={() => navigate({ page: "practice" })}
                className="hover:text-blue-700 cursor-pointer"
              >
                {tText(UI_STRINGS.navPractice, language)}
              </button>
              <button
                type="button"
                onClick={() => navigate({ page: "career" })}
                className="hover:text-blue-700 cursor-pointer"
              >
                {tText(UI_STRINGS.navCareer, language)}
              </button>
            </div>
          </div>
        </footer>
      )}

      {/* Persistent Mic Voice Assistant on ALL pages */}
      <VoiceAssistant
        language={language}
        contextLabel={contextLabel}
        externalPromptTrigger={voiceTrigger}
      />
    </div>
  );
}
