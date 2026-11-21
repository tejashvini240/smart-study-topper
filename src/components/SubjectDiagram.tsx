import { useState } from "react";
import type { DiagramType, Language } from "../types";
import { VISUAL_ASSETS } from "../data/visualAssets";

interface SubjectDiagramProps {
  diagramType: DiagramType;
  lessonTitle: string;
  language: Language;
  bannerImage: string;
}

function getCorePrincipleImage(diagramType: DiagramType, fallbackBanner: string): string {
  switch (diagramType) {
    case "physics-optics":
    case "chemistry-atom":
      return VISUAL_ASSETS.interMpcBipc;
    case "biology-cell":
    case "biology-heart":
      return VISUAL_ASSETS.neetMedical;
    case "math-graph":
    case "math-geometry":
    case "physics-mechanics":
      return VISUAL_ASSETS.jeeEngineering;
    case "history-timeline":
    case "polity-parliament":
    case "geography-map":
    case "economics-cycle":
      return VISUAL_ASSETS.upscGroups;
    case "telugu-poetry":
      return VISUAL_ASSETS.schoolFoundation;
    default:
      return fallbackBanner || VISUAL_ASSETS.diagramCorePrinciple;
  }
}

export function SubjectDiagram({
  diagramType,
  lessonTitle,
  language,
  bannerImage,
}: SubjectDiagramProps) {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const coreImage = getCorePrincipleImage(diagramType, bannerImage);

  const labels = {
    optics: {
      en: ["Principal Axis (P-C)", "Concave Mirror", "Focus Point (F)", "Center of Curvature (C)"],
      te: ["ప్రధాన అక్షం (P-C)", "పుటాకార దర్పణం", "నాభి బిందువు (F)", "వక్రతా కేంద్రం (C)"],
      hi: ["मुख्य अक्ष (P-C)", "अवतल दर्पण", "फोकस बिंदु (F)", "वक्रता केंद्र (C)"],
    },
    cell: {
      en: ["Nucleus (Control Center)", "Mitochondria (ATP Energy)", "Chloroplast (Photosynthesis)", "Cell Membrane"],
      te: ["కేంద్రకం (నియంత్రణ)", "మైటోకాండ్రియా (ATP శక్తి)", "హరితరేణువు (కిరణజన్య)", "కణ త్వచం"],
      hi: ["केंद्रक", "माइटोकॉन्ड्रिया (ATP)", "हरितलवक", "कोशिका झिल्ली"],
    },
    atom: {
      en: ["Nucleus (+Ze)", "K-Shell (n=1)", "L-Shell (n=2)", "Valence Electron"],
      te: ["కేంద్రకం (+Ze)", "K-కర్పరం (n=1)", "L-కర్పరం (n=2)", "వేలన్సీ ఎలక్ట్రాన్"],
      hi: ["नाभिक (+Ze)", "K-कोश (n=1)", "L-कोश (n=2)", "संयोजी इलेक्ट्रॉन"],
    },
    heart: {
      en: ["Aorta (Oxygenated Blood)", "Left Atrium", "Left Ventricle", "Right Ventricle"],
      te: ["మహాధమని (ఆక్సిజన్ రక్తం)", "ఎడమ కర్ణిక", "ఎడమ జఠరిక", "కుడి జఠరిక"],
      hi: ["महाधमनी", "बायाँ अलिंद", "बायाँ निलय", "दायाँ निलय"],
    },
  };

  const renderLabeledSvg = () => {
    if (diagramType === "physics-optics") {
      const l = labels.optics[language];
      return (
        <svg viewBox="0 0 520 220" className="w-full h-auto bg-slate-50 rounded-xl border border-slate-200">
          <line x1="30" y1="110" x2="490" y2="110" stroke="#64748b" strokeDasharray="5 4" strokeWidth="1.5" />
          <path d="M 410 25 Q 455 110 410 195" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" />
          <line x1="60" y1="60" x2="427" y2="60" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="427" y1="60" x2="290" y2="110" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="60" y1="160" x2="427" y2="160" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="427" y1="160" x2="290" y2="110" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="290" cy="110" r="6" fill="#dc2626" className="cursor-pointer" onClick={() => setSelectedPart(l[2])} />
          <circle cx="170" cy="110" r="6" fill="#1d4ed8" className="cursor-pointer" onClick={() => setSelectedPart(l[3])} />
          <text x="284" y="134" fontSize="12" fontWeight="700" fill="#dc2626">F</text>
          <text x="164" y="134" fontSize="12" fontWeight="700" fill="#1d4ed8">C</text>
          <text x="438" y="115" fontSize="12" fontWeight="700" fill="#1e293b">P</text>
          <text x="45" y="102" fontSize="11" fill="#475569">{l[0]}</text>
          <text x="330" y="24" fontSize="11" fontWeight="600" fill="#1d4ed8">{l[1]}</text>
        </svg>
      );
    }

    if (diagramType === "chemistry-atom") {
      const l = labels.atom[language];
      return (
        <svg viewBox="0 0 520 220" className="w-full h-auto bg-slate-50 rounded-xl border border-slate-200">
          <circle cx="260" cy="110" r="82" fill="none" stroke="#93c5fd" strokeWidth="1.8" strokeDasharray="4 3" />
          <circle cx="260" cy="110" r="48" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="260" cy="110" r="18" fill="#1d4ed8" className="cursor-pointer" onClick={() => setSelectedPart(l[0])} />
          <text x="248" y="115" fontSize="11" fontWeight="700" fill="#ffffff">+Ze</text>
          <circle cx="308" cy="110" r="6" fill="#0284c7" className="cursor-pointer" onClick={() => setSelectedPart(l[1])} />
          <circle cx="212" cy="110" r="6" fill="#0284c7" className="cursor-pointer" onClick={() => setSelectedPart(l[1])} />
          <circle cx="260" cy="28" r="6" fill="#059669" className="cursor-pointer" onClick={() => setSelectedPart(l[3])} />
          <circle cx="260" cy="192" r="6" fill="#059669" className="cursor-pointer" onClick={() => setSelectedPart(l[2])} />
          <text x="22" y="30" fontSize="11" fontWeight="600" fill="#1e293b">{l[0]}</text>
          <text x="335" y="32" fontSize="11" fontWeight="600" fill="#059669">{l[3]}</text>
          <text x="318" y="114" fontSize="11" fill="#1d4ed8">{l[1]}</text>
          <text x="348" y="190" fontSize="11" fill="#475569">{l[2]}</text>
        </svg>
      );
    }

    if (diagramType === "biology-cell" || diagramType === "biology-heart") {
      const l = diagramType === "biology-heart" ? labels.heart[language] : labels.cell[language];
      return (
        <svg viewBox="0 0 520 220" className="w-full h-auto bg-slate-50 rounded-xl border border-slate-200">
          <rect x="75" y="22" width="370" height="176" rx="38" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="3" />
          <rect x="88" y="34" width="344" height="152" rx="28" fill="#ffffff" stroke="#60a5fa" strokeWidth="1.5" />
          <circle cx="260" cy="110" r="36" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5" className="cursor-pointer" onClick={() => setSelectedPart(l[0])} />
          <circle cx="260" cy="110" r="12" fill="#1d4ed8" />
          <ellipse cx="155" cy="82" rx="26" ry="14" fill="#fef3c7" stroke="#d97706" strokeWidth="2" className="cursor-pointer" onClick={() => setSelectedPart(l[1])} />
          <ellipse cx="365" cy="136" rx="28" ry="15" fill="#dcfce7" stroke="#059669" strokeWidth="2" className="cursor-pointer" onClick={() => setSelectedPart(l[2])} />
          <text x="260" y="164" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e3a8a">{l[0]}</text>
          <text x="155" y="60" textAnchor="middle" fontSize="10" fontWeight="600" fill="#b45309">{l[1]}</text>
          <text x="365" y="166" textAnchor="middle" fontSize="10" fontWeight="600" fill="#047857">{l[2]}</text>
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 520 220" className="w-full h-auto bg-slate-50 rounded-xl border border-slate-200">
        {[60, 110, 160, 210, 260, 310, 360, 410, 460].map((x) => (
          <line key={x} x1={x} y1="18" x2={x} y2="202" stroke="#e2e8f0" strokeWidth="1" />
        ))}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="40" y1={y} x2="480" y2={y} stroke="#e2e8f0" strokeWidth="1" />
        ))}
        <line x1="40" y1="156" x2="480" y2="156" stroke="#334155" strokeWidth="2" />
        <line x1="260" y1="18" x2="260" y2="202" stroke="#334155" strokeWidth="2" />
        <path d="M 145 30 Q 260 250 375 30" fill="none" stroke="#1d4ed8" strokeWidth="3" />
        <polygon points="260,156 385,156 385,78" fill="#dbeafe" fillOpacity="0.5" stroke="#0284c7" strokeWidth="2" />
        <circle cx="260" cy="156" r="5" fill="#1d4ed8" className="cursor-pointer" onClick={() => setSelectedPart("Origin (0, 0)")} />
        <circle cx="385" cy="78" r="5" fill="#0284c7" className="cursor-pointer" onClick={() => setSelectedPart("Slope / Vertex Point")} />
        <text x="270" y="32" fontSize="11" fontWeight="700" fill="#1e293b">Y-Axis</text>
        <text x="432" y="174" fontSize="11" fontWeight="700" fill="#1e293b">X-Axis</text>
        <text x="322" y="108" fontSize="10" fontWeight="600" fill="#0369a1">Key Relation</text>
      </svg>
    );
  };

  const cards = [
    {
      id: "core-principle",
      stepLabel: "01",
      title:
        language === "te"
          ? "మూల భావన చిత్రం (Core Principle Diagram)"
          : language === "hi"
          ? "मूल सिद्धांत आरेख (Core Principle Diagram)"
          : "Core Principle Diagram",
      image: coreImage,
      caption:
        language === "te"
          ? `"${lessonTitle}" పాఠంలోని ప్రాథమిక నియమం మరియు దృశ్య రూపం.`
          : language === "hi"
          ? `"${lessonTitle}" का मूल सिद्धांत और प्रमुख भाग।`
          : `Visualizes the foundational textbook rule and core components of "${lessonTitle}".`,
      labels:
        language === "te"
          ? ["ప్రధాన నిర్వచనం", "మూల భాగాలు", "పాఠ్యపుస్తక సూత్రం"]
          : language === "hi"
          ? ["मुख्य परिभाषा", "मूल घटक", "पाठ्यपुस्तक नियम"]
          : ["Primary Definition", "Core Components", "Textbook Principle"],
    },
    {
      id: "analysis",
      stepLabel: "02",
      title:
        language === "te"
          ? "విశ్లేషణ చిత్రం (Analysis Diagram)"
          : language === "hi"
          ? "विश्लेषण आरेख (Analysis Diagram)"
          : "Analysis Diagram",
      image: VISUAL_ASSETS.diagramAnalysisProcess,
      caption:
        language === "te"
          ? `"${lessonTitle}" లోని దశలవారీ ప్రక్రియ, ప్రయోగం మరియు గణన విశ్లేషణ.`
          : language === "hi"
          ? `"${lessonTitle}" की चरणबद्ध प्रक्रिया और प्रयोग विश्लेषण।`
          : `Shows the step-by-step experimental, mathematical, or textual analysis in "${lessonTitle}".`,
      labels:
        language === "te"
          ? ["దశలవారీ ప్రక్రియ", "సూత్రం / సమీకరణం", "ఉదాహరణ పరిశీలన"]
          : language === "hi"
          ? ["चरणबद्ध प्रक्रिया", "सूत्र / समीकरण", "उदाहरण विश्लेषण"]
          : ["Step-by-Step Process", "Formula / Equation", "Worked Observation"],
    },
    {
      id: "exam-output",
      stepLabel: "03",
      title:
        language === "te"
          ? "పరీక్షా సమాధాన చిత్రం (Exam Output Diagram)"
          : language === "hi"
          ? "परीक्षा उत्तर आरेख (Exam Output Diagram)"
          : "Exam Output Diagram",
      image: VISUAL_ASSETS.diagramExamOutput,
      caption:
        language === "te"
          ? `పరీక్షలో పూర్తి మార్కులు సాధించడానికి "${lessonTitle}" చిత్రం & జవాబు విధానం.`
          : language === "hi"
          ? `बोर्ड परीक्षा में पूरे अंक पाने के लिए "${lessonTitle}" का उत्तर प्रारूप।`
          : `Illustrates how to present labeled diagrams, key formulas, and final answers for full board marks in "${lessonTitle}".`,
      labels:
        language === "te"
          ? ["లేబుల్ చేసిన చిత్రం", "ముఖ్య సూత్రం బాక్స్", "10/10 బోర్డు ప్రజెంటేషన్"]
          : language === "hi"
          ? ["नामांकित आरेख", "मुख्य सूत्र बॉक्स", "10/10 बोर्ड प्रस्तुति"]
          : ["Labeled Diagram", "Formula Highlight", "Full-Mark Answer Format"],
    },
  ];

  return (
    <div className="space-y-6">
      {/* 3 Clear Labeled Diagrams with Real Pictures */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[4/3] w-full bg-blue-50 overflow-hidden">
                <img
                  src={card.image}
                  alt={`${card.title} — ${lessonTitle}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-3 pt-8">
                  <p className="text-xs font-mono-tabular font-semibold text-blue-200">
                    {card.stepLabel}. {lessonTitle}
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-2.5">
                <h3 className="text-base font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.caption}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-slate-100 text-xs font-medium text-blue-700 flex flex-wrap items-center gap-1.5">
              {card.labels.map((lbl, idx) => (
                <span key={lbl} className="inline-flex items-center gap-1.5">
                  {idx > 0 && <span className="text-slate-300" aria-hidden="true">·</span>}
                  <span>{lbl}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Labeled Schematic Diagram below the 3 Picture Cards */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            {language === "te"
              ? `ఇంటరాక్టివ్ లేబుల్ స్కెమాటిక్ — ${lessonTitle}`
              : language === "hi"
              ? `इंटरैक्टिव नामांकित आरेख — ${lessonTitle}`
              : `Interactive Labeled Reference Diagram — ${lessonTitle}`}
          </h3>
          <span className="text-xs text-slate-500">
            {language === "te"
              ? "భాగాలపై క్లిక్ చేసి పేరు చూడండి"
              : language === "hi"
              ? "भागों पर क्लिक करके नाम देखें"
              : "Click labeled points to inspect"}
          </span>
        </div>

        {renderLabeledSvg()}

        {selectedPart && (
          <p className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-3.5 py-2">
            {language === "te"
              ? `ఎంచుకున్న భాగం: ${selectedPart}`
              : language === "hi"
              ? `चयनित भाग: ${selectedPart}`
              : `Selected Label: ${selectedPart}`}
          </p>
        )}
      </div>
    </div>
  );
}
