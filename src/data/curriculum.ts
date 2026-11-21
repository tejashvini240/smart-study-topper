import type { ClassTrack, CourseCardItem, LessonItem, SubjectItem } from "../types";
import { SCHOOL_CLASS_TRACKS } from "./schoolCurriculum";
import { HIGHER_CLASS_TRACKS } from "./higherCurriculum";
import { VISUAL_ASSETS } from "./visualAssets";

export const CLASS_TRACKS: ClassTrack[] = [
  ...SCHOOL_CLASS_TRACKS,
  ...HIGHER_CLASS_TRACKS,
];

export const COURSE_CARDS: CourseCardItem[] = [
  {
    id: "course-school-foundation",
    targetClassId: "class-10",
    title: {
      en: "TS SCERT Class 6–10 & Singidi Telugu",
      te: "TS SCERT 6–10 తరగతులు & సింగిడి తెలుగు",
      hi: "TS SCERT कक्षा 6–10 और सिंगिड़ी तेलुगु",
    },
    subtitle: {
      en: "Complete State & NCERT School Foundation",
      te: "సంపూర్ణ పాఠశాల పాఠ్యపుస్తక కోర్సు",
      hi: "संपूर्ण स्कूल पाठ्यपुस्तक पाठ्यक्रम",
    },
    syllabusNote: {
      en: "Singidi 1–5, Hindi, English, Maths, Physics, Chemistry, Biology, History, Geography, Civics & Economics.",
      te: "సింగిడి 1–5, హిందీ, ఇంగ్లీష్, గణితం, భౌతిక-రసాయన-జీవ మరియు సాంఘిక శాస్త్ర పాఠాలు.",
      hi: "सिंगिड़ी 1–5, हिन्दी, अंग्रेज़ी, गणित, विज्ञान और सामाजिक विज्ञान के सभी अध्याय।",
    },
    image: VISUAL_ASSETS.schoolFoundation,
    lessonCount: SCHOOL_CLASS_TRACKS.reduce(
      (acc, c) => acc + c.subjects.reduce((s, sub) => s + sub.lessons.length, 0),
      0
    ),
    quizCount: 55,
  },
  {
    id: "course-inter-mpc-bipc",
    targetClassId: "inter-1",
    title: {
      en: "Intermediate 1st & 2nd Year (MPC & BiPC)",
      te: "ఇంటర్మీడియట్ 1వ & 2వ సంవత్సరం (MPC & BiPC)",
      hi: "इंटरमीडिएट प्रथम एवं द्वितीय वर्ष (MPC & BiPC)",
    },
    subtitle: {
      en: "TSBIE Board + NCERT Core Mastery",
      te: "TSBIE బోర్డు + NCERT పూర్తి సిలబస్",
      hi: "TSBIE बोर्ड और NCERT संपूर्ण पाठ्यक्रम",
    },
    syllabusNote: {
      en: "Maths IA, IB, IIA, IIB, Physics, Chemistry, Botany, Zoology, English & Sahithi Sravanthi Telugu.",
      te: "గణితం IA, IB, IIA, IIB, భౌతిక, రసాయన, వృక్ష, జంతు శాస్త్రాలు, ఇంగ్లీష్ & తెలుగు.",
      hi: "गणित IA, IB, IIA, IIB, भौतिकी, रसायन, वनस्पति, जंतु विज्ञान, अंग्रेज़ी और तेलुगु।",
    },
    image: VISUAL_ASSETS.interMpcBipc,
    lessonCount: HIGHER_CLASS_TRACKS.slice(0, 2).reduce(
      (acc, c) => acc + c.subjects.reduce((s, sub) => s + sub.lessons.length, 0),
      0
    ),
    quizCount: 28,
  },
  {
    id: "course-neet-medical",
    targetClassId: "neet",
    title: {
      en: "NEET UG Medical Ranker Track",
      te: "NEET UG మెడికల్ ర్యాంకర్ కోర్సు",
      hi: "NEET UG मेडिकल रैंकर कोर्स",
    },
    subtitle: {
      en: "NCERT Line-by-Line Physics, Chemistry & Biology",
      te: "NCERT భౌతిక, రసాయన, జీవశాస్త్రం",
      hi: "NCERT भौतिकी, रसायन और जीव विज्ञान",
    },
    syllabusNote: {
      en: "High-yield NCERT Biology diagrams, Organic mechanisms, and numerical Physics drills.",
      te: "NCERT జీవశాస్త్ర డయాగ్రామ్‌లు, ఆర్గానిక్ కెమిస్ట్రీ మరియు ఫిజిక్స్ న్యూమరికల్స్.",
      hi: "NCERT जीव विज्ञान आरेख, कार्बनिक रसायन और भौतिकी संख्यात्मक अभ्यास।",
    },
    image: VISUAL_ASSETS.neetMedical,
    lessonCount: 27,
    quizCount: 27,
  },
  {
    id: "course-jee-engineering",
    targetClassId: "jee",
    title: {
      en: "JEE Main & Advanced Engineering",
      te: "JEE మెయిన్ & అడ్వాన్స్‌డ్ ఇంజనీరింగ్",
      hi: "JEE मेन और एडवांस्ड इंजीनियरिंग",
    },
    subtitle: {
      en: "IIT, NIT & EAPCET Concept & Problem Sprint",
      te: "IIT, NIT & EAPCET పూర్తి ప్రిపరేషన్",
      hi: "IIT, NIT और इंजीनियरिंग प्रवेश तैयारी",
    },
    syllabusNote: {
      en: "Calculus, Coordinate Geometry, Mechanics, Electrodynamics, Physical & Organic Chemistry.",
      te: "కాలిక్యులస్, మెకానిక్స్, ఎలక్ట్రోడైనమిక్స్ మరియు ఆర్గానిక్ కెమిస్ట్రీ.",
      hi: "कलन, निर्देशांक ज्यामिति, यांत्रिकी, विद्युतगतिकी और रसायन विज्ञान।",
    },
    image: VISUAL_ASSETS.jeeEngineering,
    lessonCount: 26,
    quizCount: 26,
  },
  {
    id: "course-upsc-groups",
    targetClassId: "upsc-groups",
    title: {
      en: "UPSC Civil Services & TSPSC Groups",
      te: "UPSC సివిల్స్ & TSPSC గ్రూప్స్",
      hi: "UPSC सिविल सेवा और राज्य ग्रुप परीक्षा",
    },
    subtitle: {
      en: "IAS, IPS, Group-1, Group-2, Group-3 & Group-4",
      te: "IAS, IPS, గ్రూప్-1, 2, 3 & 4 సమగ్ర కోర్సు",
      hi: "IAS, IPS, ग्रुप-1, 2, 3 और 4 संपूर्ण तैयारी",
    },
    syllabusNote: {
      en: "History, Telangana Movement, Geography, Polity, Economy, Science & Tech, Current Affairs & Aptitude.",
      te: "చరిత్ర, తెలంగాణ ఉద్యమం, భూగోళం, పాలిటీ, ఎకానమీ, సైన్స్, కరెంట్ అఫైర్స్ & ఆప్టిట్యూడ్.",
      hi: "इतिहास, भूगोल, राजव्यवस्था, अर्थव्यवस्था, विज्ञान, करंट अफेयर्स और अभिक्षमता।",
    },
    image: VISUAL_ASSETS.upscGroups,
    lessonCount: 20,
    quizCount: 20,
  },
  {
    id: "course-career-roadmap",
    targetClassId: "career",
    title: {
      en: "Career Guidance & Topper Roadmaps",
      te: "కెరీర్ మార్గదర్శనం & టాపర్ రోడ్‌మ్యాప్స్",
      hi: "करियर मार्गदर्शन और टॉपर रोडमैप",
    },
    subtitle: {
      en: "After 10th & Inter Pathways + Salaries",
      te: "10వ తరగతి & ఇంటర్ తర్వాత మార్గాలు",
      hi: "10वीं और इंटर के बाद करियर विकल्प और वेतन",
    },
    syllabusNote: {
      en: "Doctor, Engineer, IAS, Police, Teacher, CA, Polytechnic, ITI & Defence guidance.",
      te: "డాక్టర్, ఇంజనీర్, IAS, పోలీస్, టీచర్, CA, పాలిటెక్నిక్, ITI & డిఫెన్స్ వివరాలు.",
      hi: "डॉक्टर, इंजीनियर, IAS, पुलिस, शिक्षक, CA, पॉलिटेक्निक, ITI और डिफेंस मार्गदर्शन।",
    },
    image: VISUAL_ASSETS.careerRoadmap,
    lessonCount: 12,
    quizCount: 10,
  },
];

export function findClassTrack(classId?: string): ClassTrack {
  return CLASS_TRACKS.find((c) => c.id === classId) ?? CLASS_TRACKS[0];
}

export function findSubject(classId: string, subjectId?: string): SubjectItem {
  const cls = findClassTrack(classId);
  return cls.subjects.find((s) => s.id === subjectId) ?? cls.subjects[0];
}

export function findLesson(
  classId: string,
  subjectId: string,
  lessonId?: string
): { cls: ClassTrack; subject: SubjectItem; lesson: LessonItem } {
  const cls = findClassTrack(classId);
  const subject = findSubject(classId, subjectId);
  const lesson = subject.lessons.find((l) => l.id === lessonId) ?? subject.lessons[0];
  return { cls, subject, lesson };
}
