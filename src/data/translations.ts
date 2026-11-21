import type { Language, LocalizedText } from "../types";

export function tText(item: LocalizedText, lang: Language): string {
  return item[lang] || item.en;
}

export const UI_STRINGS = {
  appName: {
    en: "Smart Study Topper",
    te: "స్మార్ట్ స్టడీ టాపర్",
    hi: "स्मार्ट स्टडी टॉपर",
  },
  tagline: {
    en: "TS SCERT & NCERT Complete Learning Platform",
    te: "TS SCERT & NCERT సంపూర్ణ విద్యా వేదిక",
    hi: "TS SCERT और NCERT संपूर्ण शिक्षण मंच",
  },
  selectLanguageTitle: {
    en: "Choose Your Learning Language",
    te: "మీ అభ్యాస భాషను ఎంచుకోండి",
    hi: "अपनी अध्ययन भाषा चुनें",
  },
  selectLanguageDesc: {
    en: "All textbooks, lesson notes, video explanations, quizzes, and the voice assistant adapt immediately to your chosen language.",
    te: "అన్ని పాఠ్యపుస్తకాలు, పాఠం నోట్స్, వీడియో వివరణలు, క్విజ్‌లు మరియు వాయిస్ అసిస్టెంట్ మీరు ఎంచుకున్న భాషలోకి మారతాయి.",
    hi: "सभी पाठ्यपुस्तकें, पाठ नोट्स, वीडियो व्याख्या, क्विज़ और वॉइस असिस्टेंट तुरंत आपकी चुनी हुई भाषा में बदल जाते हैं।",
  },
  continueBtn: {
    en: "Continue",
    te: "కొనసాగండి",
    hi: "आगे बढ़ें",
  },
  splashWelcome: {
    en: "Preparing your Telangana SCERT & NCERT classrooms",
    te: "మీ తెలంగాణ SCERT & NCERT తరగతులు సిద్ధమవుతున్నాయి",
    hi: "आपकी तेलंगाना SCERT और NCERT कक्षाएं तैयार हो रही हैं",
  },
  enterApp: {
    en: "Enter Study Portal",
    te: "స్టడీ పోర్టల్‌లోకి వెళ్ళండి",
    hi: "स्टडी पोर्टल में प्रवेश करें",
  },
  loginTitle: {
    en: "Student Sign In",
    te: "విద్యార్థి లాగిన్",
    hi: "छात्र लॉगिन",
  },
  loginSubtitle: {
    en: "Access Class 6–12 lessons, Singidi Telugu, NEET, JEE, UPSC & Career Roadmaps.",
    te: "6–12 తరగతులు, సింగిడి తెలుగు, NEET, JEE, UPSC & కెరీర్ మార్గదర్శనం పొందండి.",
    hi: "कक्षा 6–12, सिंगिड़ी तेलुगु, NEET, JEE, UPSC और करियर मार्गदर्शन प्राप्त करें।",
  },
  usernameLabel: {
    en: "Student Name / Username",
    te: "విద్యార్థి పేరు / యూజర్ నేమ్",
    hi: "छात्र का नाम / यूज़रनेम",
  },
  passwordLabel: {
    en: "Password",
    te: "పాస్‌వర్డ్",
    hi: "पासवर्ड",
  },
  loginButton: {
    en: "Login to Study",
    te: "లాగిన్ చేయండి",
    hi: "लॉगिन करें",
  },
  guestButton: {
    en: "Continue as Demo Topper",
    te: "డెమో టాపర్‌గా కొనసాగండి",
    hi: "डेमो टॉपर के रूप में जारी रखें",
  },
  navHome: {
    en: "Home",
    te: "హోమ్",
    hi: "होम",
  },
  navCourses: {
    en: "Courses",
    te: "కోర్సులు",
    hi: "कोर्स",
  },
  navQuiz: {
    en: "Quiz",
    te: "క్విజ్",
    hi: "क्विज़",
  },
  navPractice: {
    en: "Practice",
    te: "ప్రాక్టీస్",
    hi: "अभ्यास",
  },
  navCareer: {
    en: "Career",
    te: "కెరీర్",
    hi: "करियर",
  },
  changeLanguage: {
    en: "Language",
    te: "భాష",
    hi: "भाषा",
  },
  searchPlaceholder: {
    en: "Search Class 6-10, Singidi, Inter, NEET, JEE, UPSC, or any Chapter...",
    te: "6-10 తరగతులు, సింగిడి, ఇంటర్, NEET, JEE, UPSC లేదా పాఠం వెతకండి...",
    hi: "कक्षा 6-10, सिंगिड़ी, इंटर, NEET, JEE, UPSC या कोई अध्याय खोजें...",
  },
  homeHeroTitle: {
    en: "Master Every Textbook Chapter with Clarity",
    te: "ప్రతి పాఠ్యపుస్తక పాఠాన్ని సులభంగా నేర్చుకోండి",
    hi: "हर पाठ्यपुस्तक अध्याय को स्पष्टता से सीखें",
  },
  homeHeroDesc: {
    en: "Exact TS SCERT (Singidi) & NCERT chapters with interactive concept videos, labeled diagrams, trilingual notes, 10-minute MCQ tests, and instant voice doubt solving.",
    te: "TS SCERT (సింగిడి) & NCERT అసలు పాఠాలు, వీడియోలు, చిత్రాలు, నోట్స్, 10 నిమిషాల MCQ పరీక్షలు మరియు వాయిస్ సందేహ నివృత్తి.",
    hi: "TS SCERT (सिंगिड़ी) और NCERT के सटीक अध्याय, वीडियो पाठ, चित्र, नोट्स, 10 मिनट के MCQ टेस्ट और वॉइस ट्यूटर।",
  },
  takeQuizNow: {
    en: "Open Quiz Center",
    te: "క్విజ్ సెంటర్ తెరవండి",
    hi: "क्विज़ सेंटर खोलें",
  },
  browseClasses: {
    en: "Select Your Class & Exam Track",
    te: "మీ తరగతి మరియు పరీక్ష విభాగాన్ని ఎంచుకోండి",
    hi: "अपनी कक्षा और परीक्षा ट्रैक चुनें",
  },
  quickSections: {
    en: "Study Tools & Guidance",
    te: "అభ్యాస సాధనాలు & మార్గదర్శనం",
    hi: "अध्ययन उपकरण और मार्गदर्शन",
  },
  subjectsInClass: {
    en: "Subjects & Textbooks",
    te: "సబ్జెక్టులు & పాఠ్యపుస్తకాలు",
    hi: "विषय और पाठ्यपुस्तकें",
  },
  chaptersCountLabel: {
    en: "Textbook Chapters",
    te: "పాఠ్యపుస్తక పాఠాలు",
    hi: "पाठ्यपुस्तक अध्याय",
  },
  openLesson: {
    en: "Open Lesson",
    te: "పాఠం తెరవండి",
    hi: "पाठ खोलें",
  },
  startChapterQuiz: {
    en: "Chapter Quiz",
    te: "పాఠం క్విజ్",
    hi: "अध्याय क्विज़",
  },
  lessonVideoTitle: {
    en: "Lesson Video (YouTube)",
    te: "పాఠం వీడియో (YouTube)",
    hi: "पाठ वीडियो (YouTube)",
  },
  explainByVoice: {
    en: "Explain Lesson by Voice",
    te: "వాయిస్ ద్వారా పాఠం వివరించండి",
    hi: "आवाज़ से पाठ समझाएं",
  },
  picturesDiagramsTitle: {
    en: "Pictures & Labeled Textbook Diagrams",
    te: "చిత్రాలు & లేబుల్ చేసిన పాఠ్యపుస్తక డయాగ్రామ్‌లు",
    hi: "चित्र और नामांकित पाठ्यपुस्तक आरेख",
  },
  notesTitle: {
    en: "Detailed Textbook Notes",
    te: "వివరమైన పాఠ్యపుస్తక నోట్స్",
    hi: "विस्तृत पाठ्यपुस्तक नोट्स",
  },
  formulasTitle: {
    en: "Key Formulas, Rules & Highlights",
    te: "ముఖ్య సూత్రాలు, నియమాలు & ముఖ్యాంశాలు",
    hi: "मुख्य सूत्र, नियम और प्रमुख बिंदु",
  },
  practiceQuestionsTitle: {
    en: "Chapter Practice Questions",
    te: "పాఠం అభ్యాస ప్రశ్నలు",
    hi: "अध्याय अभ्यास प्रश्न",
  },
  showAnswer: {
    en: "Show Model Answer",
    te: "సమాధానం చూడండి",
    hi: "उत्तर देखें",
  },
  hideAnswer: {
    en: "Hide Answer",
    te: "సమాధానం దాచండి",
    hi: "उत्तर छिपाएं",
  },
  takeLessonMcqTest: {
    en: "Take 10-Question Lesson MCQ Test",
    te: "10 ప్రశ్నల పాఠం MCQ పరీక్ష రాయండి",
    hi: "10 प्रश्नों का पाठ MCQ टेस्ट दें",
  },
  coursesTitle: {
    en: "All Academic & Competitive Courses",
    te: "అన్ని అకడమిక్ & పోటీ పరీక్షల కోర్సులు",
    hi: "सभी शैक्षणिक और प्रतियोगी पाठ्यक्रम",
  },
  quizCenterTitle: {
    en: "Textbook Quiz & Mock Test Center",
    te: "పాఠ్యపుస్తక క్విజ్ & మాక్ టెస్ట్ సెంటర్",
    hi: "पाठ्यपुस्तक क्विज़ और मॉक टेस्ट सेंटर",
  },
  quizTabLesson: {
    en: "Lesson Quiz",
    te: "పాఠం క్విజ్",
    hi: "पाठ क्विज़",
  },
  quizTabDaily: {
    en: "Daily Quiz",
    te: "రోజువారీ క్విజ్",
    hi: "दैनिक क्विज़",
  },
  quizTabWeekly: {
    en: "Weekly Mock Test",
    te: "వారపు మాక్ టెస్ట్",
    hi: "साप्ताहिक मॉक टेस्ट",
  },
  quizTabLeaderboard: {
    en: "Leaderboard",
    te: "లీడర్‌బోర్డ్",
    hi: "लीडरबोर्ड",
  },
  quizTabCertificate: {
    en: "Certificate",
    te: "సర్టిఫికెట్",
    hi: "प्रमाणपत्र",
  },
  timeRemaining: {
    en: "Time Left",
    te: "మిగిలిన సమయం",
    hi: "शेष समय",
  },
  previousBtn: {
    en: "Previous",
    te: "మునుపటి",
    hi: "पिछला",
  },
  nextBtn: {
    en: "Next",
    te: "తర్వాత",
    hi: "अगला",
  },
  submitQuizBtn: {
    en: "Submit Test",
    te: "పరీక్ష సబ్మిట్ చేయండి",
    hi: "टेस्ट सबमिट करें",
  },
  scoreLabel: {
    en: "Your Score",
    te: "మీ స్కోర్",
    hi: "आपका स्कोर",
  },
  correctLabel: {
    en: "Correct",
    te: "సరైనవి",
    hi: "सही",
  },
  wrongLabel: {
    en: "Wrong",
    te: "తప్పులు",
    hi: "गलत",
  },
  explanationLabel: {
    en: "Textbook Explanation",
    te: "పాఠ్యపుస్తక వివరణ",
    hi: "पाठ्यपुस्तक व्याख्या",
  },
  practicePageTitle: {
    en: "Practice Questions, Previous Papers & Important Questions",
    te: "అభ్యాస ప్రశ్నలు, పాత ప్రశ్నాపత్రాలు & ముఖ్య ప్రశ్నలు",
    hi: "अभ्यास प्रश्न, पिछले वर्ष के पेपर और महत्वपूर्ण प्रश्न",
  },
  careerPageTitle: {
    en: "Career Guidance, Courses, Salaries & Roadmaps",
    te: "కెరీర్ మార్గదర్శనం, కోర్సులు, జీతాలు & రోడ్‌మ్యాప్స్",
    hi: "करियर मार्गदर्शन, पाठ्यक्रम, वेतन और रोडमैप",
  },
  voiceAssistantTitle: {
    en: "Voice Doubt Assistant",
    te: "వాయిస్ సందేహ సహాయకుడు",
    hi: "वॉइस संदेह सहायक",
  },
  voicePromptHint: {
    en: "Tap the mic and ask any doubt in Telugu, Hindi, or English",
    te: "మైక్ నొక్కి తెలుగు, హిందీ లేదా ఇంగ్లీషులో సందేహం అడగండి",
    hi: "माइक दबाएं और तेलुगु, हिंदी या अंग्रेजी में कोई भी सवाल पूछें",
  },
  listeningLabel: {
    en: "Listening... Speak clearly",
    te: "వింటున్నాను... స్పష్టంగా మాట్లాడండి",
    hi: "सुन रहा हूँ... स्पष्ट बोलें",
  },
  backLabel: {
    en: "Back",
    te: "వెనక్కి",
    hi: "वापस",
  },
};
