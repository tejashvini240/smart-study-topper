export type Language = "te" | "hi" | "en";

export interface LocalizedText {
  en: string;
  te: string;
  hi: string;
}

export type DiagramType =
  | "telugu-poetry"
  | "physics-optics"
  | "physics-mechanics"
  | "chemistry-atom"
  | "biology-cell"
  | "biology-heart"
  | "math-graph"
  | "math-geometry"
  | "history-timeline"
  | "polity-parliament"
  | "geography-map"
  | "economics-cycle";

export interface PracticeQA {
  id: string;
  marks: string;
  question: LocalizedText;
  answer: LocalizedText;
  isImportant?: boolean;
  yearTag?: string;
}

export interface QuizQuestion {
  id: string;
  question: LocalizedText;
  options: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  correctIndex: number;
  explanation: LocalizedText;
}

export interface LessonItem {
  id: string;
  chapterNumber: number;
  title: LocalizedText;
  textbookRef: string;
  durationMin: number;
  diagramType: DiagramType;
  videoKeyPoints: LocalizedText[];
  notes: LocalizedText;
  detailedExplanation: {
    en: string[];
    te: string[];
    hi: string[];
  };
  workedExamples: {
    en: string[];
    te: string[];
    hi: string[];
  };
  formulasOrRules: LocalizedText[];
  practiceQuestions: PracticeQA[];
  quizPool?: QuizQuestion[];
}

export interface SubjectItem {
  id: string;
  title: LocalizedText;
  categoryGroup?: LocalizedText;
  textbookName: LocalizedText;
  lessons: LessonItem[];
}

export interface ClassTrack {
  id: string;
  title: LocalizedText;
  shortLabel: LocalizedText;
  board: LocalizedText;
  description: LocalizedText;
  bannerImage: string;
  subjects: SubjectItem[];
}

export interface CourseCardItem {
  id: string;
  targetClassId: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  syllabusNote: LocalizedText;
  image: string;
  lessonCount: number;
  quizCount: number;
}

export type PageRoute =
  | { page: "language" }
  | { page: "splash" }
  | { page: "login" }
  | { page: "home" }
  | { page: "class"; classId: string; subjectId?: string }
  | { page: "lesson"; classId: string; subjectId: string; lessonId: string }
  | { page: "courses" }
  | { page: "quiz"; classId?: string; subjectId?: string; lessonId?: string; tab?: "lesson" | "daily" | "weekly" | "leaderboard" | "certificate" }
  | { page: "practice"; classId?: string; subjectId?: string }
  | { page: "career" };
