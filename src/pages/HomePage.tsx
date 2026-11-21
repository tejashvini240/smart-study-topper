import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  GraduationCap,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { Language, PageRoute } from "../types";
import { CLASS_TRACKS } from "../data/curriculum";
import { tText, UI_STRINGS } from "../data/translations";

interface HomePageProps {
  language: Language;
  studentName: string;
  onNavigate: (route: PageRoute) => void;
}

export function HomePage({ language, studentName, onNavigate }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const hits: Array<{
      classId: string;
      classTitle: string;
      subjectId: string;
      subjectTitle: string;
      lessonId: string;
      lessonTitle: string;
    }> = [];

    for (const cls of CLASS_TRACKS) {
      for (const sub of cls.subjects) {
        for (const les of sub.lessons) {
          const haystack = [
            cls.title.en,
            cls.title.te,
            cls.title.hi,
            sub.title.en,
            sub.title.te,
            sub.title.hi,
            les.title.en,
            les.title.te,
            les.title.hi,
          ]
            .join(" ")
            .toLowerCase();

          if (haystack.includes(q)) {
            hits.push({
              classId: cls.id,
              classTitle: tText(cls.title, language),
              subjectId: sub.id,
              subjectTitle: tText(sub.title, language),
              lessonId: les.id,
              lessonTitle: tText(les.title, language),
            });
          }
          if (hits.length >= 12) return hits;
        }
      }
    }
    return hits;
  }, [searchQuery, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Hero Banner with Search & Quiz CTA */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <p className="text-xs font-semibold text-blue-700">
              {language === "te"
                ? `స్వాగతం, ${studentName} · TS SCERT & NCERT`
                : language === "hi"
                ? `स्वागत है, ${studentName} · TS SCERT और NCERT`
                : `Welcome, ${studentName} · TS SCERT & NCERT`}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {tText(UI_STRINGS.homeHeroTitle, language)}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {tText(UI_STRINGS.homeHeroDesc, language)}
            </p>

            {/* Search Input */}
            <div className="relative max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={tText(UI_STRINGS.searchPlaceholder, language)}
                className="w-full pl-12 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Instant Search Results */}
            {searchQuery.trim().length > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 max-w-2xl shadow-sm">
                {searchResults.length === 0 ? (
                  <p className="p-4 text-xs text-slate-500">
                    {language === "te"
                      ? "సరిపోయే పాఠాలు కనబడలేదు."
                      : language === "hi"
                      ? "कोई मेल खाने वाला अध्याय नहीं मिला।"
                      : "No matching chapters found. Try 'Singidi', 'Optics', 'Quadratic', or 'Polity'."}
                  </p>
                ) : (
                  searchResults.map((hit) => (
                    <button
                      key={hit.lessonId}
                      type="button"
                      onClick={() =>
                        onNavigate({
                          page: "lesson",
                          classId: hit.classId,
                          subjectId: hit.subjectId,
                          lessonId: hit.lessonId,
                        })
                      }
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {hit.lessonTitle}
                        </p>
                        <p className="text-xs text-slate-500">
                          {hit.classTitle} · {hit.subjectTitle}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Dominant Home Action Card: Quiz Center */}
          <div className="lg:col-span-4 bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between gap-5">
            <div>
              <ClipboardCheck className="w-8 h-8 text-blue-100 mb-3" />
              <h2 className="text-xl font-bold mb-2">
                {tText(UI_STRINGS.quizCenterTitle, language)}
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                {language === "te"
                  ? "ప్రతి పాఠానికి 10 MCQ ప్రశ్నలు, 10 నిమిషాల టైమర్, డైలీ క్విజ్, మాక్ టెస్ట్ & సర్టిఫికెట్."
                  : language === "hi"
                  ? "हर अध्याय के लिए 10 MCQ प्रश्न, 10 मिनट टाइमर, दैनिक क्विज़, मॉक टेस्ट और प्रमाणपत्र।"
                  : "10 textbook MCQs per lesson, 10-minute timer, Daily Quiz, Weekly Mock Test, Leaderboard & Certificate."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: "quiz" })}
              className="w-full py-3 px-4 rounded-xl bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{tText(UI_STRINGS.takeQuizNow, language)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Classes Grid (6 to 10, Inter 1st & 2nd Year, NEET, JEE, UPSC/Groups, Career) */}
      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {tText(UI_STRINGS.browseClasses, language)}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              TS SCERT · Singidi Telugu · TSBIE Intermediate · NCERT
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CLASS_TRACKS.map((cls) => {
            const totalLessons = cls.subjects.reduce(
              (acc, sub) => acc + sub.lessons.length,
              0
            );
            return (
              <button
                key={cls.id}
                type="button"
                onClick={() => onNavigate({ page: "class", classId: cls.id })}
                className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between gap-4 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono-tabular font-medium text-slate-500">
                      {cls.subjects.length}{" "}
                      {language === "te" ? "సబ్జెక్టులు" : language === "hi" ? "विषय" : "Subjects"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {tText(cls.title, language)}
                  </h3>
                  <p className="text-xs text-blue-700 font-medium mt-0.5">
                    {tText(cls.board, language)}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {tText(cls.description, language)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span className="font-mono-tabular">
                    {totalLessons}{" "}
                    {language === "te" ? "పాఠాలు" : language === "hi" ? "अध्याय" : "Lessons"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}

          {/* Dedicated Career Card in Grid */}
          <button
            type="button"
            onClick={() => onNavigate({ page: "career" })}
            className="text-left bg-blue-50 border border-blue-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-md transition-all flex flex-col justify-between gap-4 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-blue-700">
                  10th · Inter · Degree
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">
                {tText(UI_STRINGS.navCareer, language)}
              </h3>
              <p className="text-xs text-blue-700 font-medium mt-0.5">
                {language === "te"
                  ? "కెరీర్ మార్గదర్శనం & జీతాల వివరాలు"
                  : language === "hi"
                  ? "करियर मार्गदर्शन और वेतन विवरण"
                  : "Career Roadmaps & Salaries"}
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {language === "te"
                  ? "డాక్టర్, ఇంజనీర్, IAS, పోలీస్, టీచర్, పాలిటెక్నిక్, ITI & CA."
                  : language === "hi"
                  ? "डॉक्टर, इंजीनियर, IAS, पुलिस, शिक्षक, पॉलिटेक्निक, ITI और CA।"
                  : "Doctor, Engineer, IAS, Police, Teacher, Polytechnic, ITI, CA & Defence."}
              </p>
            </div>
            <div className="pt-3 border-t border-blue-200 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>
                {language === "te"
                  ? "మార్గాలు చూడండి"
                  : language === "hi"
                  ? "रोडमैप देखें"
                  : "Explore Careers"}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Study Tools & Sections Row */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {tText(UI_STRINGS.quickSections, language)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <button
            type="button"
            onClick={() => onNavigate({ page: "courses" })}
            className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-500 transition-colors flex items-start gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {tText(UI_STRINGS.navCourses, language)}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {language === "te"
                  ? "చిత్రాలతో కూడిన అన్ని కోర్సుల జాబితా."
                  : language === "hi"
                  ? "चित्रों के साथ सभी पाठ्यक्रमों की सूची।"
                  : "All Academic & Competitive Courses with visual tracks."}
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate({ page: "practice" })}
            className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-500 transition-colors flex items-start gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {tText(UI_STRINGS.navPractice, language)}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {language === "te"
                  ? "అభ్యాస ప్రశ్నలు, పాత పేపర్లు & ముఖ్య ప్రశ్నలు."
                  : language === "hi"
                  ? "अभ्यास प्रश्न, पिछले पेपर और महत्वपूर्ण प्रश्न।"
                  : "Chapter-wise Practice Questions, Previous Papers & Important Q&A."}
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate({ page: "quiz", tab: "certificate" })}
            className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-500 transition-colors flex items-start gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {tText(UI_STRINGS.quizTabCertificate, language)} &amp; {tText(UI_STRINGS.quizTabLeaderboard, language)}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {language === "te"
                  ? "క్విజ్ పూర్తి చేసి టాపర్ సర్టిఫికెట్ పొందండి."
                  : language === "hi"
                  ? "क्विज़ पूरा करें और टॉपर प्रमाणपत्र प्राप्त करें।"
                  : "Earn your Smart Study Topper Certificate & check rankings."}
              </p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
