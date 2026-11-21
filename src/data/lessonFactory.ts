import type {
  DiagramType,
  LessonItem,
  LocalizedText,
  PracticeQA,
  QuizQuestion,
} from "../types";
import { getDeepChapterNotes } from "./detailedNotes";

export interface RawChapterSpec {
  id: string;
  num: number;
  en: string;
  te: string;
  hi: string;
  ref: string;
  diagram: DiagramType;
  summaryEn: string;
  summaryTe: string;
  summaryHi: string;
  points?: LocalizedText[];
  formulas?: LocalizedText[];
  practice?: PracticeQA[];
  quizPool?: QuizQuestion[];
}

export function buildLesson(spec: RawChapterSpec): LessonItem {
  const deep = getDeepChapterNotes(spec);

  const defaultPoints: LocalizedText[] = spec.points ?? [
    {
      en: deep.en[0] ?? spec.summaryEn,
      te: deep.te[0] ?? spec.summaryTe,
      hi: deep.hi[0] ?? spec.summaryHi,
    },
    {
      en: deep.en[1] ?? `Key textbook concepts and examples from ${spec.ref}.`,
      te: deep.te[1] ?? `${spec.ref} లోని ముఖ్య అంశాలు మరియు ఉదాహరణలు.`,
      hi: deep.hi[1] ?? `${spec.ref} की मुख्य अवधारणाएँ और उदाहरण।`,
    },
    {
      en: deep.examplesEn[0] ?? `Solved example and exam-ready points from "${spec.en}".`,
      te: deep.examplesTe[0] ?? `"${spec.te}" లోని ఉదాహరణ మరియు పరీక్షా అంశాలు.`,
      hi: deep.examplesHi[0] ?? `"${spec.hi}" से हल किया गया उदाहरण।`,
    },
  ];

  const defaultFormulas: LocalizedText[] = spec.formulas ?? [
    {
      en: deep.examplesEn[0] ?? `Chapter Focus: ${spec.en} — Memorize exact definitions from ${spec.ref}.`,
      te: deep.examplesTe[0] ?? `పాఠం ముఖ్యాంశం: ${spec.te} — ${spec.ref} లోని నిర్వచనాలు చదవండి.`,
      hi: deep.examplesHi[0] ?? `अध्याय मुख्य बिंदु: ${spec.hi} — ${spec.ref} की परिभाषाएँ याद रखें।`,
    },
    {
      en: deep.examplesEn[1] ?? `Exam Tip: Write answers with clear examples and labeled diagrams.`,
      te: deep.examplesTe[1] ?? `పరీక్ష సూచన: ఉదాహరణలు మరియు చిత్రాలతో సమాధానాలు రాయండి.`,
      hi: `परीक्षा सुझाव: स्पष्ट उदाहरणों और नामांकित आरेखों के साथ उत्तर लिखें।`,
    },
  ];

  const defaultPractice: PracticeQA[] = spec.practice ?? [
    {
      id: `${spec.id}-pq1`,
      marks: "2 Marks",
      isImportant: true,
      question: {
        en: `Explain the central theme and key textbook definition in "${spec.en}".`,
        te: `"${spec.te}" పాఠంలోని ప్రధాన భావం మరియు ముఖ్య నిర్వచనాన్ని రాయండి.`,
        hi: `"${spec.hi}" अध्याय का केंद्रीय विषय और मुख्य परिभाषा लिखिए।`,
      },
      answer: {
        en: `${deep.en[0]} ${deep.examplesEn[0] ?? ""}`.trim(),
        te: `${deep.te[0]} ${deep.examplesTe[0] ?? ""}`.trim(),
        hi: `${deep.hi[0]} ${deep.examplesHi[0] ?? ""}`.trim(),
      },
    },
    {
      id: `${spec.id}-pq2`,
      marks: "4 Marks",
      isImportant: true,
      yearTag: "Board Model",
      question: {
        en: `Describe the concepts and worked examples covered in "${spec.en}".`,
        te: `"${spec.te}" పాఠంలో వివరించిన అంశాలు మరియు ఉదాహరణలను వివరించండి.`,
        hi: `"${spec.hi}" में वर्णित अवधारणाओं और उदाहरणों का वर्णन कीजिए।`,
      },
      answer: {
        en: `${deep.en[1] ?? spec.summaryEn} ${deep.examplesEn[1] ?? ""}`.trim(),
        te: `${deep.te[1] ?? spec.summaryTe} ${deep.examplesTe[1] ?? ""}`.trim(),
        hi: `${deep.hi[1] ?? spec.summaryHi} ${deep.examplesHi[0] ?? ""}`.trim(),
      },
    },
  ];

  return {
    id: spec.id,
    chapterNumber: spec.num,
    title: { en: spec.en, te: spec.te, hi: spec.hi },
    textbookRef: spec.ref,
    durationMin: 12 + (spec.num % 7) * 2,
    diagramType: spec.diagram,
    videoKeyPoints: defaultPoints,
    notes: {
      en: deep.en.join(" "),
      te: deep.te.join(" "),
      hi: deep.hi.join(" "),
    },
    detailedExplanation: {
      en: deep.en,
      te: deep.te,
      hi: deep.hi,
    },
    workedExamples: {
      en: deep.examplesEn,
      te: deep.examplesTe,
      hi: deep.examplesHi,
    },
    formulasOrRules: defaultFormulas,
    practiceQuestions: defaultPractice,
    quizPool: spec.quizPool,
  };
}
