import { Briefcase, CheckCircle2, IndianRupee } from "lucide-react";
import { useState } from "react";
import type { Language } from "../types";
import { CAREER_PATHS, PROFESSION_ROADMAPS } from "../data/quizAndCareer";
import { tText, UI_STRINGS } from "../data/translations";
import { LessonVideoPlayer } from "../components/LessonVideoPlayer";
import { VISUAL_ASSETS } from "../data/visualAssets";

interface CareerPageProps {
  language: Language;
}

export function CareerPage({ language }: CareerPageProps) {
  const [stageFilter, setStageFilter] = useState<"all" | "after-10th" | "after-inter">("all");
  const [selectedRoadmapId, setSelectedRoadmapId] = useState(PROFESSION_ROADMAPS[0].id);

  const filteredPaths = CAREER_PATHS.filter((p) =>
    stageFilter === "all" ? true : p.stage === stageFilter
  );

  const activeRoadmap =
    PROFESSION_ROADMAPS.find((r) => r.id === selectedRoadmapId) ??
    PROFESSION_ROADMAPS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center gap-3">
            <p className="text-xs font-semibold text-blue-700">
              10th · Intermediate · Graduation
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {tText(UI_STRINGS.careerPageTitle, language)}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === "te"
                ? "10వ తరగతి తర్వాత ఇంటర్, పాలిటెక్నిక్, ITI మరియు ఇంటర్ తర్వాత ఇంజనీరింగ్, మెడికల్, డిగ్రీ, CA, UPSC, డిఫెన్స్ ఉద్యోగాలు, జీతాల వివరాలు."
                : language === "hi"
                ? "10वीं के बाद इंटर, पॉलिटेक्निक, ITI तथा 12वीं के बाद इंजीनियरिंग, मेडिकल, डिग्री, CA, UPSC, डिफेंस और वेतन विवरण।"
                : "Explore pathways After 10th and After Inter, entrance exams, expected Indian salaries, and step-by-step roadmaps to become a Doctor, Engineer, IAS, Police, or Teacher."}
            </p>
          </div>
          <div className="lg:col-span-5 bg-blue-50 min-h-[200px]">
            <img
              src={VISUAL_ASSETS.careerRoadmap}
              alt="Career Guidance Roadmap"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Career Guidance Video */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === "te"
            ? "కెరీర్ మార్గదర్శన వీడియో"
            : language === "hi"
            ? "करियर मार्गदर्शन वीडियो"
            : "Career Guidance Video & Audio Brief"}
        </h2>
        <LessonVideoPlayer
          title={
            language === "te"
              ? "10వ తరగతి & ఇంటర్ తర్వాత సరైన కెరీర్ ఎంపిక"
              : language === "hi"
              ? "10वीं और इंटर के बाद सही करियर चुनाव"
              : "Choosing Your Career After 10th & Intermediate"
          }
          subtitle={tText(UI_STRINGS.appName, language)}
          diagramType="economics-cycle"
          language={language}
          durationMin={14}
          keyPoints={[
            {
              en: "After 10th: Choose Intermediate (MPC/BiPC/CEC), TS POLYCET Polytechnic Diploma, or job-ready ITI trades.",
              te: "10వ తరగతి తర్వాత ఇంటర్ (MPC/BiPC/CEC), పాలిటెక్నిక్ (POLYCET) లేదా ITI ఎంచుకోవచ్చు.",
              hi: "10वीं के बाद इंटर (MPC/BiPC/CEC), पॉलिटेक्निक या ITI में से सही विकल्प चुनें।",
            },
            {
              en: "After Inter: Qualify NEET for MBBS, JEE/EAPCET for B.Tech, NDA for Defence, or Degree + UPSC/CA.",
              te: "ఇంటర్ తర్వాత NEET (మెడికల్), JEE/EAPCET (ఇంజనీరింగ్), NDA, డిగ్రీ, CA లేదా UPSC వైపు వెళ్ళవచ్చు.",
              hi: "इंटर के बाद NEET, JEE, NDA, डिग्री, CA या UPSC की दिशा चुनें।",
            },
            {
              en: "Plan early with textbook mastery, daily MCQs, and clear entrance exam milestones.",
              te: "పాఠ్యపుస్తకాలపై పట్టు, రోజువారీ MCQ సాధనతో మీ లక్ష్యాన్ని చేరుకోండి.",
              hi: "पाठ्यपुस्तकों की मजबूत नींव और नियमित अभ्यास से अपना लक्ष्य प्राप्त करें।",
            },
          ]}
          notesText={
            language === "te"
              ? "10వ తరగతి తర్వాత ఇంటర్మీడియట్, పాలిటెక్నిక్ లేదా ఐటీఐ కోర్సులు ఉంటాయి. ఇంటర్ తర్వాత ఇంజనీరింగ్, మెడికల్, డిగ్రీ, సీఏ, యూపీఎస్సీ మరియు డిఫెన్స్ రంగాలలో అద్భుతమైన ఉద్యోగ అవకాశాలు ఉన్నాయి."
              : language === "hi"
              ? "10वीं के बाद इंटरमीडिएट, पॉलिटेक्निक या आईटीआई चुन सकते हैं। इंटर के बाद इंजीनियरिंग, मेडिकल, डिग्री, सीए, यूपीएससी और डिफेंस में शानदार करियर अवसर हैं।"
              : "After Class 10, students can choose Intermediate (MPC, BiPC, CEC, MEC), Polytechnic Diploma via POLYCET, or ITI trades. After Intermediate, top pathways include Engineering via JEE/EAPCET, Medicine via NEET, Chartered Accountancy, Degree, Defence via NDA, and Civil Services."
          }
        />
      </section>

      {/* After 10th & After Inter Courses + Salary Cards */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900">
            {language === "te"
              ? "కోర్సులు & జీతాల వివరాలు (10వ తరగతి & ఇంటర్ తర్వాత)"
              : language === "hi"
              ? "कोर्स और वेतन विवरण (10वीं और इंटर के बाद)"
              : "Courses After 10th & After Inter + Salary Details"}
          </h2>

          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
            {[
              { id: "all" as const, en: "All", te: "అన్నీ", hi: "सभी" },
              { id: "after-10th" as const, en: "After 10th", te: "10వ తర్వాత", hi: "10वीं के बाद" },
              { id: "after-inter" as const, en: "After Inter", te: "ఇంటర్ తర్వాత", hi: "इंटर के बाद" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setStageFilter(f.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  stageFilter === f.id
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {f[language]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPaths.map((cp) => (
            <div
              key={cp.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-700">
                    {cp.stage === "after-10th"
                      ? language === "te"
                        ? "10వ తరగతి తర్వాత"
                        : language === "hi"
                        ? "10वीं के बाद"
                        : "After 10th"
                      : language === "te"
                      ? "ఇంటర్ తర్వాత"
                      : language === "hi"
                      ? "इंटर के बाद"
                      : "After Inter"}
                  </span>
                  <span className="font-mono-tabular">{tText(cp.duration, language)}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {tText(cp.title, language)}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tText(cp.summary, language)}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-800">Entrance: </span>
                  {tText(cp.entranceExam, language)}
                </p>
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-800">Roles: </span>
                  {tText(cp.topCollegesOrRoles, language)}
                </p>
                <p className="inline-flex items-center gap-1 font-mono-tabular font-bold text-emerald-700 pt-1">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>{cp.salaryRange}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Become: Doctor, Engineer, IAS, Police, Teacher */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-bold text-slate-900">
            {language === "te"
              ? "డాక్టర్, ఇంజనీర్, IAS, పోలీస్, టీచర్ కావడం ఎలా?"
              : language === "hi"
              ? "डॉक्टर, इंजीनियर, IAS, पुलिस और शिक्षक कैसे बनें?"
              : "How to Become: Doctor, Engineer, IAS, Police & Teacher"}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {PROFESSION_ROADMAPS.map((rm) => (
            <button
              key={rm.id}
              type="button"
              onClick={() => setSelectedRoadmapId(rm.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeRoadmap.id === rm.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tText(rm.role, language)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
          <div className="lg:col-span-8 space-y-3">
            {activeRoadmap.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono-tabular font-bold text-blue-700">
                    Step 0{i + 1}
                  </span>
                  <p className="text-sm text-slate-800 mt-0.5 leading-relaxed">
                    {tText(step, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 bg-blue-50 border border-blue-200 rounded-xl p-5 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {language === "te"
                ? "జీతాల వివరాలు"
                : language === "hi"
                ? "वेतन विवरण"
                : "Salary Overview"}
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3.5 border border-blue-100">
                <p className="text-xs text-slate-500">
                  {language === "te"
                    ? "ప్రారంభ జీతం (Entry Level)"
                    : language === "hi"
                    ? "प्रारंभिक वेतन (Entry)"
                    : "Entry Level Package"}
                </p>
                <p className="text-lg font-extrabold text-blue-700 font-mono-tabular mt-0.5">
                  {activeRoadmap.entrySalary}
                </p>
              </div>
              <div className="bg-white rounded-lg p-3.5 border border-blue-100">
                <p className="text-xs text-slate-500">
                  {language === "te"
                    ? "సీనియర్ స్థాయి (Senior / Specialist)"
                    : language === "hi"
                    ? "वरिष्ठ स्तर (Senior)"
                    : "Senior / Specialist Package"}
                </p>
                <p className="text-lg font-extrabold text-emerald-700 font-mono-tabular mt-0.5">
                  {activeRoadmap.seniorSalary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
