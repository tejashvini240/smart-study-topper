import type { LocalizedText, QuizQuestion } from "../types";

export const DAILY_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "dq-1",
    question: {
      en: "Who is the poet of the Class 10 Singidi-5 opening lesson 'Danasheelamu'?",
      te: "10వ తరగతి సింగిడి-5 మొదటి పాఠం 'దానశీలము' కవి ఎవరు?",
      hi: "कक्षा 10 सिंगिड़ी-5 के पहले पाठ 'दानशीलम' के कवि कौन हैं?",
    },
    options: [
      { en: "Bammera Pothana", te: "బమ్మెర పోతన", hi: "बम्मेरा पोतना" },
      { en: "Nannaya Bhattaraka", te: "నన్నయ భట్టారకుడు", hi: "नन्नया भट्टारक" },
      { en: "Tikkana Somayaji", te: "తిక్కన సోమయాజి", hi: "तिक्कना सोमयाजी" },
      { en: "Srinatha", te: "శ్రీనాథుడు", hi: "श्रीनाथ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Danasheelamu is extracted from Sri Maha Bhagavatam (Ashtama Skandham) composed by Sahajakavi Bammera Pothana.",
      te: "'దానశీలము' పాఠం సహజకవి బమ్మెర పోతన రచించిన శ్రీమహాభాగవతం అష్టమ స్కంధం నుండి తీసుకోబడింది.",
      hi: "'दानशीलम' पाठ सहजकवि बम्मेरा पोतना द्वारा रचित श्रीमहाभागवतम से लिया गया है।",
    },
  },
  {
    id: "dq-2",
    question: {
      en: "What is the focal length of a concave mirror whose radius of curvature is 20 cm?",
      te: "వక్రతా వ్యాసార్థం 20 సెం.మీ. ఉన్న పుటాకార దర్పణం యొక్క నాభ్యంతరం ఎంత?",
      hi: "20 सेमी वक्रता त्रिज्या वाले अवतल दर्पण की फोकस दूरी कितनी होगी?",
    },
    options: [
      { en: "10 cm", te: "10 సెం.మీ.", hi: "10 सेमी" },
      { en: "20 cm", te: "20 సెం.మీ.", hi: "20 सेमी" },
      { en: "40 cm", te: "40 సెం.మీ.", hi: "40 सेमी" },
      { en: "5 cm", te: "5 సెం.మీ.", hi: "5 सेमी" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Focal length f = R / 2 = 20 / 2 = 10 cm (TS SCERT Class 10 Physics Ch.1).",
      te: "నాభ్యంతరం f = R / 2 = 20 / 2 = 10 సెం.మీ. (10వ తరగతి భౌతిక శాస్త్రం పాఠం-1).",
      hi: "फोकस दूरी f = R / 2 = 20 / 2 = 10 सेमी होती है।",
    },
  },
  {
    id: "dq-3",
    question: {
      en: "Which gas is released during photosynthesis in green plants?",
      te: "ఆకుపచ్చని మొక్కలలో కిరణజన్య సంయోగక్రియ సమయంలో విడుదలయ్యే వాయువు ఏది?",
      hi: "हरे पौधों में प्रकाश संश्लेषण के दौरान कौन-सी गैस निकलती है?",
    },
    options: [
      { en: "Nitrogen", te: "నత్రజని", hi: "नाइट्रोजन" },
      { en: "Oxygen", te: "ఆక్సిజన్", hi: "ऑक्सीजन" },
      { en: "Carbon monoxide", te: "కార్బన్ మోనాక్సైడ్", hi: "कार्बन मोनोऑक्साइड" },
      { en: "Argon", te: "ఆర్గాన్", hi: "आर्गन" },
    ],
    correctIndex: 1,
    explanation: {
      en: "During light reaction (photolysis of water), plants release Oxygen (O2) as a by-product.",
      te: "కాంతి చర్యలో నీటి విచ్ఛిత్తి ద్వారా మొక్కలు ఆక్సిజన్ (O2) వాయువును విడుదల చేస్తాయి.",
      hi: "प्रकाश अभिक्रिया में जल के अपघटन से ऑक्सीजन (O2) गैस मुक्त होती है।",
    },
  },
  {
    id: "dq-4",
    question: {
      en: "What is the pH value of pure neutral water at 25°C?",
      te: "25°C వద్ద శుద్ధమైన తటస్థ నీటి pH విలువ ఎంత?",
      hi: "25°C पर शुद्ध उदासीन जल का pH मान कितना होता है?",
    },
    options: [
      { en: "0", te: "0", hi: "0" },
      { en: "5.5", te: "5.5", hi: "5.5" },
      { en: "7", te: "7", hi: "7" },
      { en: "14", te: "14", hi: "14" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Neutral solutions have pH = 7. Acids have pH < 7 and bases have pH > 7.",
      te: "తటస్థ ద్రావణాల pH విలువ 7. ఆమ్లాలకు 7 కంటే తక్కువ, క్షారాలకు 7 కంటే ఎక్కువ ఉంటుంది.",
      hi: "उदासीन विलयन का pH मान 7 होता है। अम्ल का pH < 7 और क्षार का pH > 7 होता है।",
    },
  },
  {
    id: "dq-5",
    question: {
      en: "If sin θ = 1/2 (for acute angle θ), what is the value of θ?",
      te: "అల్పకోణం θ కు sin θ = 1/2 అయితే, θ విలువ ఎంత?",
      hi: "यदि न्यूनकोण θ के लिए sin θ = 1/2 है, तो θ का मान क्या होगा?",
    },
    options: [
      { en: "30°", te: "30°", hi: "30°" },
      { en: "45°", te: "45°", hi: "45°" },
      { en: "60°", te: "60°", hi: "60°" },
      { en: "90°", te: "90°", hi: "90°" },
    ],
    correctIndex: 0,
    explanation: {
      en: "From standard trigonometric ratios, sin 30° = 1/2.",
      te: "త్రికోణమితి విలువల పట్టిక ప్రకారం sin 30° = 1/2.",
      hi: "मानक त्रिकोणमितीय सारणी के अनुसार sin 30° = 1/2 होता है।",
    },
  },
  {
    id: "dq-6",
    question: {
      en: "When was Telangana officially formed as the 29th state of India?",
      te: "భారతదేశంలో తెలంగాణ రాష్ట్రం అధికారికంగా ఎప్పుడు ఏర్పడింది?",
      hi: "तेलंगाना राज्य का आधिकारिक गठन कब हुआ था?",
    },
    options: [
      { en: "2 June 2014", te: "2 జూన్ 2014", hi: "2 जून 2014" },
      { en: "15 August 2014", te: "15 ఆగస్టు 2014", hi: "15 अगस्त 2014" },
      { en: "26 January 2014", te: "26 జనవరి 2014", hi: "26 जनवरी 2014" },
      { en: "1 November 2013", te: "1 నవంబర్ 2013", hi: "1 नवंबर 2013" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Telangana was officially formed on 2 June 2014 (TS SCERT Class 10 Social Ch.21).",
      te: "2 జూన్ 2014న తెలంగాణ రాష్ట్రం అధికారికంగా ఏర్పడింది.",
      hi: "2 जून 2014 को तेलंगाना राज्य का आधिकारिक गठन हुआ।",
    },
  },
  {
    id: "dq-7",
    question: {
      en: "Which organelle is known as the 'Powerhouse of the Cell'?",
      te: "కణశక్త్యాగారం (Powerhouse of the Cell) అని దేనిని పిలుస్తారు?",
      hi: "कोशिका का 'पावरहाउस' (ऊर्जा घर) किसे कहा जाता है?",
    },
    options: [
      { en: "Golgi apparatus", te: "గాల్జీ సంక్లిష్టం", hi: "गॉल्जीकाय" },
      { en: "Mitochondria", te: "మైటోకాండ్రియా", hi: "माइटोकॉन्ड्रिया" },
      { en: "Ribosome", te: "రైబోసోమ్", hi: "राइबोसोम" },
      { en: "Lysosome", te: "లైసోసోమ్", hi: "लाइसोसोम" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Mitochondria generate ATP through cellular respiration, supplying energy to the cell.",
      te: "మైటోకాండ్రియా కణ శ్వాసక్రియ ద్వారా ATP శక్తిని ఉత్పత్తి చేస్తుంది కాబట్టి దానిని కణశక్త్యాగారం అంటారు.",
      hi: "माइटोकॉन्ड्रिया कोशिकीय श्वसन द्वारा ATP के रूप में ऊर्जा उत्पन्न करता है।",
    },
  },
  {
    id: "dq-8",
    question: {
      en: "What is the SI unit of Electric Current?",
      te: "విద్యుత్ ప్రవాహం యొక్క SI ప్రమాణం ఏమిటి?",
      hi: "विद्युत धारा का SI मात्रक क्या है?",
    },
    options: [
      { en: "Volt", te: "వోల్ట్", hi: "वोल्ट" },
      { en: "Ohm", te: "ఓమ్", hi: "ओम" },
      { en: "Ampere", te: "ఆంపియర్", hi: "ऐम्पियर" },
      { en: "Watt", te: "వాట్", hi: "वाट" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Electric current I = Q / t is measured in Amperes (A).",
      te: "విద్యుత్ ప్రవాహం I = Q / t ను ఆంపియర్లలో (A) కొలుస్తారు.",
      hi: "विद्युत धारा I = Q / t को ऐम्पियर (A) में मापा जाता है।",
    },
  },
  {
    id: "dq-9",
    question: {
      en: "Which Article of the Indian Constitution guarantees Right to Equality?",
      te: "భారత రాజ్యాంగంలో సమానత్వపు హక్కును ఏ అధికరణలు కల్పిస్తాయి?",
      hi: "भारतीय संविधान के किस अनुच्छेद समूह में समानता का अधिकार निहित है?",
    },
    options: [
      { en: "Articles 14 to 18", te: "అధికరణలు 14 నుండి 18", hi: "अनुच्छेद 14 से 18" },
      { en: "Articles 19 to 22", te: "అధికరణలు 19 నుండి 22", hi: "अनुच्छेद 19 से 22" },
      { en: "Articles 25 to 28", te: "అధికరణలు 25 నుండి 28", hi: "अनुच्छेद 25 से 28" },
      { en: "Articles 32 to 35", te: "అధికరణలు 32 నుండి 35", hi: "अनुच्छेद 32 से 35" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Fundamental Rights under Articles 14–18 establish equality before law and prohibit discrimination.",
      te: "ప్రాథమిక హక్కులలోని అధికరణలు 14–18 చట్టం ముందు సమానత్వాన్ని కల్పిస్తాయి.",
      hi: "मौलिक अधिकारों के अंतर्गत अनुच्छेद 14 से 18 समानता का अधिकार प्रदान करते हैं।",
    },
  },
  {
    id: "dq-10",
    question: {
      en: "What is the discriminant (Δ) of the quadratic equation ax² + bx + c = 0?",
      te: "వర్గ సమీకరణం ax² + bx + c = 0 యొక్క విచక్షణి (Δ) సూత్రం ఏమిటి?",
      hi: "द्विघात समीकरण ax² + bx + c = 0 का विविक्तकर (Δ) क्या होता है?",
    },
    options: [
      { en: "b² + 4ac", te: "b² + 4ac", hi: "b² + 4ac" },
      { en: "b² - 4ac", te: "b² - 4ac", hi: "b² - 4ac" },
      { en: "4ac - b²", te: "4ac - b²", hi: "4ac - b²" },
      { en: "-b / 2a", te: "-b / 2a", hi: "-b / 2a" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Discriminant Δ = b² - 4ac determines whether roots are real & distinct (Δ > 0), equal (Δ = 0), or non-real (Δ < 0).",
      te: "విచక్షణి Δ = b² - 4ac ద్వారా మూలాల స్వభావాన్ని తెలుసుకోవచ్చు.",
      hi: "विविक्तकर Δ = b² - 4ac मूलों की प्रकृति (वास्तविक, समान या काल्पनिक) निर्धारित करता है।",
    },
  },
];

export const WEEKLY_MOCK_QUESTIONS: QuizQuestion[] = [
  ...DAILY_QUIZ_QUESTIONS.slice(0, 6),
  {
    id: "wm-7",
    question: {
      en: "Which famous poet wrote 'Veera Telangana' in Class 10 Singidi-5?",
      te: "10వ తరగతి సింగిడి-5 లోని 'వీర తెలంగాణ' కవితను రాసిన ప్రముఖ కవి ఎవరు?",
      hi: "कक्षा 10 सिंगिड़ी-5 की कविता 'वीर तेलंगाना' किस प्रसिद्ध कवि ने लिखी?",
    },
    options: [
      { en: "Dasarathi Krishnamacharya", te: "దాశరథి క Krishnamacharya (దాశరథి కృష్ణమాచార్య)", hi: "दाशरथी कृष्णमाचार्य" },
      { en: "Kaloji Narayana Rao", te: "కాళోజీ నారాయణరావు", hi: "कालोजी नारायण राव" },
      { en: "C. Narayana Reddy", te: "సి. నారాయణరెడ్డి", hi: "सी. नारायण रेड्डी" },
      { en: "Suravaram Pratapa Reddy", te: "సురవరం ప్రతాపరెడ్డి", hi: "सुरवरम प्रताप रेड्डी" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Dasarathi Krishnamacharya wrote 'Veera Telangana', famously proclaiming 'Naa Telangana koti ratanala veena'.",
      te: "'నా తెలంగాణ కోటి రతనాల వీణ' అని చాటిన దాశరథి కృష్ణమాచార్య 'వీర తెలంగాణ' పాఠాన్ని రచించారు.",
      hi: "दाशरथी कृष्णमाचार्य ने 'वीर तेलंगाना' की रचना की।",
    },
  },
  {
    id: "wm-8",
    question: {
      en: "In human heart circulation, which chamber receives oxygenated blood from the lungs?",
      te: "మానవ హృదయంలో ఊపిరితిత్తుల నుండి ఆక్సిజన్ సహిత రక్తాన్ని స్వీకరించే గది ఏది?",
      hi: "मानव हृदय में फेफड़ों से ऑक्सीजन युक्त रक्त किस कक्ष में आता है?",
    },
    options: [
      { en: "Right Atrium", te: "కుడి కర్ణిక", hi: "दायाँ अलिंद" },
      { en: "Left Atrium", te: "ఎడమ కర్ణిక", hi: "बायाँ अलिंद" },
      { en: "Right Ventricle", te: "కుడి జఠరిక", hi: "दायाँ निलय" },
      { en: "Left Ventricle", te: "ఎడమ జఠరిక", hi: "बायाँ निलय" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Pulmonary veins bring oxygenated blood from the lungs into the Left Atrium.",
      te: "పుపుస సిరలు ఊపిరితిత్తుల నుండి ఆక్సిజన్ గల రక్తాన్ని ఎడమ కర్ణికలోకి తీసుకువస్తాయి.",
      hi: "फुफ्फुस शिराएँ फेफड़ों से शुद्ध रक्त को बाएँ अलिंद में लाती हैं।",
    },
  },
  {
    id: "wm-9",
    question: {
      en: "What is the derivative of sin(x) with respect to x?",
      te: "x దృష్ట్యా sin(x) యొక్క అవకలజం (Derivative) ఏమిటి?",
      hi: "x के सापेक्ष sin(x) का अवकलज क्या होता है?",
    },
    options: [
      { en: "-cos(x)", te: "-cos(x)", hi: "-cos(x)" },
      { en: "cos(x)", te: "cos(x)", hi: "cos(x)" },
      { en: "tan(x)", te: "tan(x)", hi: "tan(x)" },
      { en: "sec²(x)", te: "sec²(x)", hi: "sec²(x)" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Standard differentiation rule: d/dx [sin(x)] = cos(x).",
      te: "అవకలన సూత్రం ప్రకారం d/dx [sin(x)] = cos(x).",
      hi: "मानक अवकलन नियम: d/dx [sin(x)] = cos(x)।",
    },
  },
  {
    id: "wm-10",
    question: {
      en: "Which mountain pass connects Srinagar to Leh in the Himalayas?",
      te: "హిమాలయాలలో శ్రీనగర్‌ను లేహ్‌తో కలిపే కనుమ ఏది?",
      hi: "हिमालय में श्रीनगर को लेह से जोड़ने वाला दर्रा कौन-सा है?",
    },
    options: [
      { en: "Nathu La", te: "నాథూ లా", hi: "नाथू ला" },
      { en: "Zoji La", te: "జోజి లా", hi: "जोज़िला" },
      { en: "Palghat", te: "పాల్‌ఘాట్", hi: "पालघाट" },
      { en: "Bomdi La", te: "బొమ్డి లా", hi: "बोमडिला" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Zoji La pass in Ladakh/J&K links Srinagar with Kargil and Leh.",
      te: "జోజి లా కనుమ శ్రీనగర్ మరియు లేహ్ నగరాలను కలుపుతుంది.",
      hi: "जोज़िला दर्रा श्रीनगर को कारगिल और लेह से जोड़ता है।",
    },
  },
];

// Generates 10 textbook-tailored fallback MCQs instantly for any selected chapter
export function buildChapterFallbackQuiz(
  classTitle: string,
  subjectTitle: string,
  lessonTitle: string,
  textbookRef: string
): QuizQuestion[] {
  const templates: QuizQuestion[] = [
    {
      id: "fb-1",
      question: {
        en: `Which textbook serves as the primary syllabus source for "${lessonTitle}" in ${classTitle}?`,
        te: `${classTitle} లోని "${lessonTitle}" పాఠానికి ప్రధాన పాఠ్యపుస్తక ఆధారం ఏది?`,
        hi: `${classTitle} के अध्याय "${lessonTitle}" के लिए मुख्य पाठ्यपुस्तक स्रोत कौन-सा है?`,
      },
      options: [
        { en: textbookRef, te: textbookRef, hi: textbookRef },
        { en: "Private Guide Only", te: "ప్రైవేట్ గైడ్ మాత్రమే", hi: "केवल निजी गाइड" },
        { en: "Unrelated Foreign Manual", te: "సంబంధం లేని విదేశీ పుస్తకం", hi: "असंबंधित विदेशी पुस्तिका" },
        { en: "Magazine Digest", te: "మ్యాగజైన్ సంగ్రహం", hi: "पत्रिका सार" },
      ],
      correctIndex: 0,
      explanation: {
        en: `"${lessonTitle}" is prescribed directly in ${textbookRef}.`,
        te: `"${lessonTitle}" పాఠం ${textbookRef} నుండి నేరుగా ఇవ్వబడింది.`,
        hi: `"${lessonTitle}" अध्याय सीधे ${textbookRef} से निर्धारित है।`,
      },
    },
    {
      id: "fb-2",
      question: {
        en: `In ${subjectTitle}, what is the most effective method to score full marks on "${lessonTitle}"?`,
        te: `${subjectTitle} లోని "${lessonTitle}" పాఠంలో పూర్తి మార్కులు పొందడానికి ఉత్తమ పద్ధతి ఏది?`,
        hi: `${subjectTitle} के "${lessonTitle}" अध्याय में पूर्ण अंक पाने का सबसे प्रभावी तरीका क्या है?`,
      },
      options: [
        { en: "Memorizing without understanding", te: "అర్థం చేసుకోకుండా బట్టీ పట్టడం", hi: "बिना समझे रटना" },
        { en: "Mastering textbook concepts, diagrams & solved exercises", te: "పాఠ్యపుస్తక భావనలు, చిత్రాలు & అభ్యాసాలను సాధన చేయడం", hi: "पाठ्यपुस्तक अवधारणाएँ, आरेख और अभ्यास हल करना" },
        { en: "Skipping chapter definitions", te: "నిర్వచనాలను వదిలేయడం", hi: "परिभाषाएँ छोड़ देना" },
        { en: "Ignoring previous exam questions", te: "పాత ప్రశ్నలను చూడకపోవడం", hi: "पिछले प्रश्न न देखना" },
      ],
      correctIndex: 1,
      explanation: {
        en: "TS SCERT and NCERT exams directly test textbook concepts, accurate definitions, and labeled diagrams.",
        te: "TS SCERT మరియు NCERT పరీక్షలలో పాఠ్యపుస్తక భావనలు, నిర్వచనాలు మరియు చిత్రాల నుండి నేరుగా ప్రశ్నలు వస్తాయి.",
        hi: "TS SCERT और NCERT परीक्षाओं में सीधे पाठ्यपुस्तक की अवधारणाएँ और आरेख पूछे जाते हैं।",
      },
    },
  ];

  // Fill remaining 8 slots by cycling curated textbook questions relevant to board & competitive preparation
  const pool = [...DAILY_QUIZ_QUESTIONS, ...WEEKLY_MOCK_QUESTIONS];
  const combined: QuizQuestion[] = [...templates];
  for (let i = 0; combined.length < 10; i++) {
    const q = pool[i % pool.length];
    combined.push({
      ...q,
      id: `ch-q-${combined.length + 1}`,
    });
  }
  return combined.slice(0, 10);
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  city: string;
  track: string;
  score: number;
  accuracy: string;
}

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, name: "Karthikeya Reddy", city: "Hyderabad", track: "Class 10 · SSC", score: 980, accuracy: "98%" },
  { rank: 2, name: "Srivalli Sharma", city: "Warangal", track: "NEET UG", score: 955, accuracy: "96%" },
  { rank: 3, name: "Aarav Verma", city: "Nizamabad", track: "JEE Main", score: 940, accuracy: "94%" },
  { rank: 4, name: "Harshitha Goud", city: "Karimnagar", track: "Inter 2nd Year", score: 915, accuracy: "92%" },
  { rank: 5, name: "Pranav Kulkarni", city: "Khammam", track: "TSPSC Groups", score: 890, accuracy: "90%" },
];

export interface PreviousPaperItem {
  id: string;
  classId: string;
  examTitle: LocalizedText;
  year: string;
  subject: LocalizedText;
  questions: Array<{
    q: LocalizedText;
    marks: string;
    ans: LocalizedText;
  }>;
}

export const PREVIOUS_PAPERS: PreviousPaperItem[] = [
  {
    id: "pp-ssc-tel",
    classId: "class-10",
    examTitle: {
      en: "TS SSC Board Model Paper — Telugu (Singidi-5)",
      te: "TS SSC బోర్డు ప్రశ్నాపత్రం — తెలుగు (సింగిడి-5)",
      hi: "TS SSC बोर्ड मॉडल पेपर — तेलुगु (सिंगिड़ी-5)",
    },
    year: "2024",
    subject: { en: "Telugu Singidi-5", te: "తెలుగు సింగిడి-5", hi: "तेलुगु सिंगिड़ी-5" },
    questions: [
      {
        q: {
          en: "Why did King Bali refuse Shukracharya's advice in 'Danasheelamu'?",
          te: "'దానశీలము' పాఠంలో శుక్రాచార్యుని మాటను బలిచక్రవర్తి ఎందుకు కాదన్నాడు?",
          hi: "'दानशीलम' पाठ में राजा बलि ने शुक्राचार्य की सलाह क्यों नहीं मानी?",
        },
        marks: "4 Marks",
        ans: {
          en: "King Bali valued truth and keeping one's promise above everything else. Having pledged three feet of land to Vamana, he declared that breaking a promise is worse than losing wealth or kingdom.",
          te: "బలిచక్రవర్తి ప్రాణం పోయినా ఇచ్చిన మాట తప్పకూడదని నమ్మాడు. 'నిరయంబైన నిబంధమైన...' అంటూ సత్యవాక్య పాలనకు కట్టుబడ్డాడు.",
          hi: "राजा बलि ने धन और राज्य से अधिक सत्य और दिए गए वचन के पालन को महत्व दिया।",
        },
      },
      {
        q: {
          en: "Write the central message of Dasarathi's 'Veera Telangana'.",
          te: "దాశరథి రచించిన 'వీర తెలంగాణ' పాఠం యొక్క ప్రధాన సందేశం రాయండి.",
          hi: "दाशरथी की कविता 'वीर तेलंगाना' का मुख्य संदेश लिखिए।",
        },
        marks: "8 Marks",
        ans: {
          en: "Dasarathi celebrates the indomitable courage of Telangana people against tyranny, praising the soil as 'Koti Ratanala Veena' and inspiring unity, freedom, and cultural pride.",
          te: "తెలంగాణ ప్రజల పోరాట స్ఫూర్తిని, త్యాగనిరతిని దాశరథి 'నా తెలంగాణ కోటి రతనాల వీణ' అంటూ అద్భుతంగా వర్ణించారు.",
          hi: "दाशरथी ने तेलंगाना की जनता के अदम्य साहस, स्वतंत्रता की भावना और सांस्कृतिक गौरव का वर्णन किया है।",
        },
      },
    ],
  },
  {
    id: "pp-ssc-sci",
    classId: "class-10",
    examTitle: {
      en: "TS SSC Physical & Biological Science Previous Paper",
      te: "TS SSC భౌతిక & జీవ శాస్త్రం పాత ప్రశ్నాపత్రం",
      hi: "TS SSC भौतिक एवं जीव विज्ञान पिछला प्रश्नपत्र",
    },
    year: "2024",
    subject: { en: "Science", te: "విజ్ఞాన శాస్త్రం", hi: "विज्ञान" },
    questions: [
      {
        q: {
          en: "State Ohm's Law and draw the V-I graph for an Ohmic conductor.",
          te: "ఓమ్ నియమాన్ని తెలిపి, ఓమీయ వాహకం యొక్క V-I గ్రాఫ్‌ను గీయండి.",
          hi: "ओम का नियम लिखिए और ओमीय चालक के लिए V-I ग्राफ बनाइए।",
        },
        marks: "4 Marks",
        ans: {
          en: "At constant temperature, the potential difference (V) across a conductor is directly proportional to current (I): V = IR. The V-I graph is a straight line passing through the origin.",
          te: "స్థిర ఉష్ణోగ్రత వద్ద వాహకం రెండు చివరల మధ్య పొటెన్షియల్ తేడా (V), విద్యుత్ ప్రవాహం (I) కు అనులోమానుపాతంలో ఉంటుంది (V = IR).",
          hi: "नियत ताप पर चालक के सिरों का विभवांतर (V) प्रवाहित धारा (I) के समानुपाती होता है (V = IR)।",
        },
      },
      {
        q: {
          en: "Differentiate between Aerobic and Anaerobic Respiration.",
          te: "వాయుసహిత మరియు అవాయు శ్వాసక్రియల మధ్య భేదాలను రాయండి.",
          hi: "वायवीय और अवायवीय श्वसन में अंतर स्पष्ट कीजिए।",
        },
        marks: "4 Marks",
        ans: {
          en: "Aerobic respiration occurs in presence of O2, yields 38 ATP, and ends in CO2 + H2O. Anaerobic respiration occurs without O2, yields 2 ATP, and produces Lactic acid or Ethanol + CO2.",
          te: "వాయుసహిత శ్వాసక్రియ ఆక్సిజన్ సమక్షంలో జరిగి 38 ATP శక్తిని ఇస్తుంది. అవాయు శ్వాసక్రియ ఆక్సిజన్ లేకుండా జరిగి 2 ATP శక్తిని మాత్రమే ఇస్తుంది.",
          hi: "वायवीय श्वसन ऑक्सीजन की उपस्थिति में 38 ATP देता है, जबकि अवायवीय श्वसन ऑक्सीजन के बिना 2 ATP देता है।",
        },
      },
    ],
  },
  {
    id: "pp-neet-jee",
    classId: "neet",
    examTitle: {
      en: "NEET & JEE Important NCERT Archive Questions",
      te: "NEET & JEE ముఖ్యమైన NCERT పాత ప్రశ్నలు",
      hi: "NEET और JEE महत्वपूर्ण NCERT पिछले प्रश्न",
    },
    year: "2023–24",
    subject: { en: "Physics, Chemistry & Biology", te: "ఫిజిక్స్, కెమిస్ట్రీ & బయాలజీ", hi: "भौतिकी, रसायन एवं जीव विज्ञान" },
    questions: [
      {
        q: {
          en: "Why does the first ionization enthalpy of Nitrogen exceed that of Oxygen?",
          te: "ఆక్సిజన్ కంటే నైట్రోజన్ మొదటి అయనీకరణ ఎంథాల్పీ ఎందుకు ఎక్కువగా ఉంటుంది?",
          hi: "ऑक्सीजन की तुलना में नाइट्रोजन की प्रथम आयनन एन्थैल्पी अधिक क्यों होती है?",
        },
        marks: "4 Marks (NEET/JEE)",
        ans: {
          en: "Nitrogen (1s² 2s² 2p³) has an exactly half-filled 2p³ subshell, which imparts extra exchange-energy stability compared to Oxygen's 2p⁴.",
          te: "నైట్రోజన్ (2p³) సగం నిండిన స్థిరమైన ఆర్బిటాల్ విన్యాసం కలిగి ఉండటం వల్ల ఎలక్ట్రాన్‌ను తీసివేయడానికి ఎక్కువ శక్తి అవసరం.",
          hi: "नाइट्रोजन में अर्ध-पूरित 2p³ कक्षक होने के कारण यह अधिक स्थायी होता है।",
        },
      },
    ],
  },
];

export interface CareerPathItem {
  id: string;
  stage: "after-10th" | "after-inter";
  title: LocalizedText;
  duration: LocalizedText;
  entranceExam: LocalizedText;
  salaryRange: string;
  summary: LocalizedText;
  topCollegesOrRoles: LocalizedText;
}

export const CAREER_PATHS: CareerPathItem[] = [
  {
    id: "cp-inter",
    stage: "after-10th",
    title: { en: "Intermediate (MPC / BiPC / CEC / MEC)", te: "ఇంటర్మీడియట్ (MPC / BiPC / CEC / MEC)", hi: "इंटरमीडिएट (MPC / BiPC / CEC / MEC)" },
    duration: { en: "2 Years", te: "2 సంవత్సరాలు", hi: "2 वर्ष" },
    entranceExam: { en: "TS SSC 10th Board Merit", te: "10వ తరగతి మెరిట్", hi: "10वीं बोर्ड मेरिट" },
    salaryRange: "₹4L – ₹25L+ (Post Graduation)",
    summary: {
      en: "Standard academic bridge after Class 10 leading to Engineering (MPC), Medicine (BiPC), Chartered Accountancy, Degree, or Civil Services.",
      te: "10వ తరగతి తర్వాత ఇంజనీరింగ్ (MPC), మెడికల్ (BiPC), CA, డిగ్రీ లేదా సివిల్స్ వైపు వెళ్ళడానికి ప్రధాన మార్గం.",
      hi: "10वीं के बाद इंजीनियरिंग (MPC), मेडिकल (BiPC), CA, स्नातक या सिविल सेवा का मुख्य मार्ग।",
    },
    topCollegesOrRoles: { en: "TSBIE Junior Colleges, IIT/NEET Foundation", te: "TSBIE జూనియర్ కాలేజీలు", hi: "जूनियर कॉलेज और IIT/NEET फाउंडेशन" },
  },
  {
    id: "cp-polytechnic",
    stage: "after-10th",
    title: { en: "Diploma in Engineering (Polytechnic)", te: "పాలిటెక్నిక్ డిప్లొమా (Engineering)", hi: "पॉलिटेक्निक डिप्लोमा" },
    duration: { en: "3 Years", te: "3 సంవత్సరాలు", hi: "3 वर्ष" },
    entranceExam: { en: "TS POLYCET", te: "TS POLYCET పరీక్ష", hi: "POLYCET प्रवेश परीक्षा" },
    salaryRange: "₹3.0L – ₹8.5L / yr",
    summary: {
      en: "Hands-on technical diploma in CSE, ECE, Mechanical, Civil, or Electrical with direct lateral entry (ECET) into 2nd year B.Tech.",
      te: "CSE, ECE, సివిల్, మెకానికల్ విభాగాలలో ప్రాక్టికల్ డిప్లొమా. ECET ద్వారా నేరుగా B.Tech 2వ సంవత్సరంలో చేరవచ్చు.",
      hi: "CSE, ECE, सिविल या मैकेनिकल में तकनीकी डिप्लोमा; ECET से सीधे B.Tech द्वितीय वर्ष में प्रवेश।",
    },
    topCollegesOrRoles: { en: "Govt Polytechnic Masab Tank, Junior Engineer (JE)", te: "ప్రభుత్వ పాలిటెక్నిక్ కళాశాలలు, JE ఉద్యోగాలు", hi: "सरकारी पॉलिटेक्निक एवं जूनियर इंजीनियर" },
  },
  {
    id: "cp-iti",
    stage: "after-10th",
    title: { en: "ITI (Industrial Training Institute)", te: "ITI (వొకేషనల్ ట్రేడ్స్)", hi: "ITI (औद्योगिक प्रशिक्षण)" },
    duration: { en: "1 – 2 Years", te: "1 – 2 సంవత్సరాలు", hi: "1 – 2 वर्ष" },
    entranceExam: { en: "TS ITI Merit Counseling", te: "ITI మెరిట్ కౌన్సెలింగ్", hi: "ITI मेरिट काउंसलिंग" },
    salaryRange: "₹2.4L – ₹6.5L / yr",
    summary: {
      en: "Job-ready skill trades like Electrician, Fitter, Welder, COPA, and Diesel Mechanic for Railways (RRB ALP), BHEL, Singareni & PSU jobs.",
      te: "ఎలక్ట్రీషియన్, ఫిట్టర్, వెల్డర్, COPA ట్రేడ్లతో రైల్వే, సింగరేణి, BHEL వంటి ప్రభుత్వ ఉద్యోగాలకు త్వరగా అర్హత.",
      hi: "इलेक्ट्रीशियन, फिटर, वेल्डर आदि ट्रेड से रेलवे, BHEL और PSU नौकरियों के शीघ्र अवसर।",
    },
    topCollegesOrRoles: { en: "Railways ALP/Technician, PSU Technician", te: "రైల్వే టెక్నీషియన్, PSU ఉద్యోగాలు", hi: "रेलवे तकनीशियन और PSU पद" },
  },
  {
    id: "cp-eng",
    stage: "after-inter",
    title: { en: "Engineering (B.Tech / B.E.)", te: "ఇంజనీరింగ్ (B.Tech / B.E.)", hi: "इंजीनियरिंग (B.Tech / B.E.)" },
    duration: { en: "4 Years", te: "4 సంవత్సరాలు", hi: "4 वर्ष" },
    entranceExam: { en: "JEE Main, JEE Advanced, TG EAPCET", te: "JEE మెయిన్, అడ్వాన్స్‌డ్, TG EAPCET", hi: "JEE मेन, एडवांस्ड, EAPCET" },
    salaryRange: "₹6L – ₹45L+ / yr",
    summary: {
      en: "Computer Science, AI/ML, ECE, Mechanical & Civil at IITs, NITs, IIIT Hyderabad, JNTU & OU leading to global tech and PSU careers.",
      te: "IIT, NIT, IIIT హైదరాబాద్, JNTU, OU లలో B.Tech చేసి సాఫ్ట్‌వేర్, AI/ML మరియు PSU ఉద్యోగాలు పొందవచ్చు.",
      hi: "IIT, NIT, IIIT और शीर्ष कॉलेजों से B.Tech कर सॉफ्टवेयर, AI और PSU में उच्च वेतन वाले करियर।",
    },
    topCollegesOrRoles: { en: "Software Engineer, AI Architect, IES Officer", te: "సాఫ్ట్‌వేర్ ఇంజనీర్, AI నిపుణులు, IES", hi: "सॉफ्टवेयर इंजीनियर, AI विशेषज्ञ, IES" },
  },
  {
    id: "cp-med",
    stage: "after-inter",
    title: { en: "Medical (MBBS / BDS / AYUSH)", te: "మెడికల్ (MBBS / BDS / ఆయుష్)", hi: "मेडिकल (MBBS / BDS / आयुष)" },
    duration: { en: "5.5 Years", te: "5.5 సంవత్సరాలు", hi: "5.5 वर्ष" },
    entranceExam: { en: "NEET UG", te: "NEET UG పరీక్ష", hi: "NEET UG परीक्षा" },
    salaryRange: "₹8L – ₹36L+ / yr",
    summary: {
      en: "Become a Doctor via AIIMS, Osmania, Gandhi, or Kaloji Narayana Rao Health University medical colleges followed by MD/MS specialization.",
      te: "NEET UG ద్వారా AIIMS, ఉస్మానియా, గాంధీ మెడికల్ కాలేజీలలో MBBS చేసి డాక్టర్ కావచ్చు.",
      hi: "NEET UG के माध्यम से AIIMS और सरकारी मेडिकल कॉलेजों से MBBS व MD/MS विशेषज्ञता।",
    },
    topCollegesOrRoles: { en: "Surgeon, Physician, Medical Officer", te: "డాక్టర్, సర్జన్, మెడికల్ ఆఫీసర్", hi: "डॉक्टर, सर्जन, चिकित्सा अधिकारी" },
  },
  {
    id: "cp-degree-ca",
    stage: "after-inter",
    title: { en: "Degree (B.Sc / B.Com / BA) & CA", te: "డిగ్రీ (B.Sc / B.Com / BA) & CA", hi: "स्नातक डिग्री और CA" },
    duration: { en: "3 – 4.5 Years", te: "3 – 4.5 సంవత్సరాలు", hi: "3 – 4.5 वर्ष" },
    entranceExam: { en: "DOST / CUET / ICAI CA Foundation", te: "DOST / CUET / CA ఫౌండేషన్", hi: "CUET / ICAI CA फाउंडेशन" },
    salaryRange: "₹4L – ₹28L / yr",
    summary: {
      en: "Flexible undergraduate degrees or Chartered Accountancy (ICAI) for careers in Finance, Auditing, Banking, Data Science & Teaching.",
      te: "బ్యాంకింగ్, ఫైనాన్స్, చార్టర్డ్ అకౌంటెంట్ (CA), డేటా సైన్స్ మరియు బోధనా రంగాలలో అత్యుత్తమ అవకాశాలు.",
      hi: "फाइनेंस, ऑडिटिंग, बैंकिंग, डेटा साइंस और शिक्षण में मजबूत करियर मार्ग।",
    },
    topCollegesOrRoles: { en: "Chartered Accountant, Bank PO, Data Analyst", te: "చార్టర్డ్ అకౌంటెంట్, బ్యాంక్ PO", hi: "चार्टर्ड अकाउंटेंट, बैंक PO" },
  },
  {
    id: "cp-upsc-def",
    stage: "after-inter",
    title: { en: "UPSC / TSPSC Groups & Defence (NDA/CDS)", te: "UPSC / TSPSC గ్రూప్స్ & డిఫెన్స్ (NDA)", hi: "UPSC / राज्य सेवाएं एवं डिफेंस (NDA)" },
    duration: { en: "3 – 4 Years + Exam", te: "డిగ్రీ / NDA శిక్షణ", hi: "NDA प्रशिक्षण / स्नातक" },
    entranceExam: { en: "NDA (After 12th), UPSC CSE, TSPSC Groups", te: "NDA (ఇంటర్ తర్వాత), UPSC, TSPSC", hi: "NDA (12वीं के बाद), UPSC, राज्य परीक्षा" },
    salaryRange: "₹7L – ₹24L+ / yr + Govt Perks",
    summary: {
      en: "Join the Indian Army/Navy/Air Force right after Inter via NDA, or serve as IAS, IPS, DSP, or Group-1 Officer after graduation.",
      te: "ఇంటర్ తర్వాత NDA ద్వారా రక్షణ దళాలలో, లేదా డిగ్రీ తర్వాత IAS, IPS, గ్రూప్-1 అధికారిగా దేశ సేవ చేయండి.",
      hi: "12वीं के बाद NDA से सेना अधिकारी बनें या स्नातक के बाद IAS, IPS व ग्रुप-1 अधिकारी बनें।",
    },
    topCollegesOrRoles: { en: "IAS, IPS, DSP, Army Lieutenant, SSC CGL", te: "IAS, IPS, DSP, ఆర్మీ ఆఫీసర్", hi: "IAS, IPS, DSP, सैन्य अधिकारी" },
  },
];

export interface ProfessionRoadmap {
  id: string;
  role: LocalizedText;
  entrySalary: string;
  seniorSalary: string;
  steps: LocalizedText[];
}

export const PROFESSION_ROADMAPS: ProfessionRoadmap[] = [
  {
    id: "rm-doctor",
    role: { en: "How to Become a Doctor (MBBS)", te: "డాక్టర్ (MBBS) కావడం ఎలా?", hi: "डॉक्टर (MBBS) कैसे बनें?" },
    entrySalary: "₹8 – 12 LPA",
    seniorSalary: "₹24 – 60+ LPA",
    steps: [
      { en: "Choose BiPC (Biology, Physics, Chemistry) in Class 11–12 / Intermediate.", te: "ఇంటర్మీడియట్‌లో BiPC గ్రూప్ ఎంచుకోండి.", hi: "11वीं-12वीं में BiPC (जीव विज्ञान, भौतिकी, रसायन) चुनें।" },
      { en: "Master NCERT Biology, Physics & Chemistry line by line and qualify NEET UG with a top rank.", te: "NCERT పుస్తకాలను బాగా చదివి NEET UG లో మంచి ర్యాంకు సాధించండి.", hi: "NCERT का गहन अध्ययन कर NEET UG में उच्च रैंक प्राप्त करें।" },
      { en: "Complete 4.5 years of MBBS coursework + 1 year compulsory rotating medical internship.", te: "4.5 సంవత్సరాల MBBS + 1 సంవత్సరం ఇంటర్న్‌షిప్ పూర్తి చేయండి.", hi: "4.5 वर्ष MBBS अध्ययन और 1 वर्ष की इंटर्नशिप पूरी करें।" },
      { en: "Clear NEET PG for MD/MS specialization (Cardiology, Surgery, Pediatrics) or join Govt Medical Service.", te: "స్పెషలైజేషన్ కోసం NEET PG రాయండి లేదా ప్రభుత్వ వైద్యునిగా సేవలు అందించండి.", hi: "विशेषज्ञता के लिए NEET PG पास करें या सरकारी चिकित्सा सेवा ज्वाइन करें।" },
    ],
  },
  {
    id: "rm-engineer",
    role: { en: "How to Become an Engineer (IIT / NIT / Tech)", te: "ఇంజనీర్ కావడం ఎలా?", hi: "इंजीनियर कैसे बनें?" },
    entrySalary: "₹6 – 18 LPA",
    seniorSalary: "₹25 – 75+ LPA",
    steps: [
      { en: "Choose MPC (Mathematics, Physics, Chemistry) after Class 10 (or Polytechnic Diploma via POLYCET).", te: "10వ తరగతి తర్వాత MPC లేదా పాలిటెక్నిక్ ఎంచుకోండి.", hi: "10वीं के बाद MPC या पॉलिटेक्निक चुनें।" },
      { en: "Qualify JEE Main, JEE Advanced, or State EAPCET for admission into IITs, NITs, or top Engineering Colleges.", te: "JEE మెయిన్, అడ్వాన్స్‌డ్ లేదా EAPCET ద్వారా IIT/NIT/టాప్ కాలేజీలలో సీటు పొందండి.", hi: "JEE मेन, एडवांस्ड या राज्य प्रवेश परीक्षा पास कर IIT/NIT में प्रवेश लें।" },
      { en: "Complete 4-year B.Tech with coding, core projects, and internships.", te: "4 సంవత్సరాల B.Tech లో ప్రాజెక్టులు, కోడింగ్ & ఇంటర్న్‌షిప్ పూర్తి చేయండి.", hi: "कोडिंग, प्रोजेक्ट और इंटर्नशिप के साथ 4 वर्षीय B.Tech पूरा करें।" },
      { en: "Join leading software/core companies, clear GATE for M.Tech/PSUs, or launch a tech startup.", te: "ప్రముఖ టెక్/కోర్ కంపెనీలలో చేరండి లేదా GATE ద్వారా PSU/M.Tech చేయండి.", hi: "शीर्ष टेक कंपनियों में नौकरी पाएं या GATE से PSU/M.Tech करें।" },
    ],
  },
  {
    id: "rm-ias",
    role: { en: "How to Become an IAS / Group-1 Officer", te: "IAS / గ్రూప్-1 అధికారి కావడం ఎలా?", hi: "IAS / राज्य प्रशासनिक अधिकारी कैसे बनें?" },
    entrySalary: "₹9 – 14 LPA + Perks",
    seniorSalary: "₹25 – 32+ LPA (Apex Scale)",
    steps: [
      { en: "Build a rock-solid foundation in Class 6–12 NCERT History, Geography, Polity, Economy & Science.", te: "6–12వ తరగతి NCERT చరిత్ర, భూగోళం, పాలిటీ, ఎకానమీలపై పట్టు సాధించండి.", hi: "कक्षा 6–12 NCERT इतिहास, भूगोल, राजव्यवस्था और अर्थव्यवस्था मजबूत करें।" },
      { en: "Complete any Bachelor's Degree (BA, B.Sc, B.Tech, B.Com) from a recognized university.", te: "గుర్తింపు పొందిన విశ్వవిద్యాలయం నుండి ఏదైనా డిగ్రీ పూర్తి చేయండి.", hi: "मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री पूरी करें।" },
      { en: "Clear the 3-stage UPSC Civil Services Exam (or TSPSC Group-1): Prelims, Mains, and Personality Interview.", te: "UPSC సివిల్స్ (లేదా TSPSC గ్రూప్-1) ప్రిలిమ్స్, మెయిన్స్ మరియు ఇంటర్వ్యూలో ఉత్తీర్ణులవ్వండి.", hi: "UPSC सिविल सेवा (प्रीलिम्स, मेन्स और साक्षात्कार) उत्तीर्ण करें।" },
      { en: "Undergo officer training at LBSNAA (Mussoorie) and serve as Sub-Collector / District Collector.", te: "LBSNAA లో శిక్షణ పొంది జిల్లా కలెక్టర్ / ఉన్నత అధికారిగా సేవ చేయండి.", hi: "LBSNAA में प्रशिक्षण प्राप्त कर जिलाधिकारी के रूप में देश की सेवा करें।" },
    ],
  },
  {
    id: "rm-police",
    role: { en: "How to Become Police (SI / DSP / IPS)", te: "పోలీస్ (SI / DSP / IPS) కావడం ఎలా?", hi: "पुलिस अधिकारी (SI / DSP / IPS) कैसे बनें?" },
    entrySalary: "₹5.5 – 12 LPA",
    seniorSalary: "₹20 – 30+ LPA",
    steps: [
      { en: "Complete Intermediate (for Constable) or Bachelor's Degree (for Sub-Inspector, DSP, and IPS).", te: "కానిస్టేబుల్‌కు ఇంటర్, SI/DSP/IPS కు డిగ్రీ పూర్తి చేయండి.", hi: "कांस्टेबल के लिए 12वीं तथा SI/DSP/IPS के लिए स्नातक डिग्री पूरी करें।" },
      { en: "Prepare Arithmetic, Reasoning, General Studies & Telangana/Indian History.", te: "అంకగణితం, రీజనింగ్, జనరల్ స్టడీస్ బాగా సాధన చేయండి.", hi: "अंकगणित, तर्कशक्ति और सामान्य अध्ययन की मजबूत तैयारी करें।" },
      { en: "Pass Written Exams + Physical Efficiency Tests (Running, Long Jump, Height/Chest standards).", te: "రాత పరీక్షలతో పాటు శారీరక దారుఢ్య పరీక్షలలో (PET/PMT) ఉత్తీర్ణులవ్వండి.", hi: "लिखित परीक्षा के साथ शारीरिक दक्षता परीक्षा (PET/PMT) उत्तीर्ण करें।" },
      { en: "Complete training at Police Academy (RBVRR / SVP NPA Hyderabad) and uphold law & order.", te: "పోలీస్ అకాడమీలో శిక్షణ పూర్తి చేసి శాంతిభద్రతలను కాపాడండి.", hi: "पुलिस अकादमी में प्रशिक्षण लेकर कानून-व्यवस्था की सेवा करें।" },
    ],
  },
  {
    id: "rm-teacher",
    role: { en: "How to Become a Government Teacher (TET / DSC / JL)", te: "ప్రభుత్వ టీచర్ / లెక్చరర్ కావడం ఎలా?", hi: "सरकारी शिक्षक / लेक्चरर कैसे बनें?" },
    entrySalary: "₹4.8 – 9 LPA",
    seniorSalary: "₹12 – 18 LPA",
    steps: [
      { en: "For Primary/School Teacher: Complete Inter + D.Ed (SGT) or Graduation + B.Ed (School Assistant).", te: "SGT కోసం ఇంటర్ + D.Ed, స్కూల్ అసిస్టెంట్ కోసం డిగ్రీ + B.Ed చేయండి.", hi: "PRT के लिए 12वीं+D.Ed या TGT/PGT के लिए स्नातक/स्नातकोत्तर+B.Ed करें।" },
      { en: "Qualify CTET or State TET (TG TET) with high score in Child Development & Subject Pedagogy.", te: "TG TET లేదా CTET లో ఉత్తీర్ణత సాధించండి.", hi: "CTET या राज्य TET परीक्षा अच्छे अंकों से पास करें।" },
      { en: "Clear State DSC / TRT (or PG + SET/NET for Junior/Degree Lecturer).", te: "DSC/TRT (లేదా లెక్చరర్ కోసం PG + NET/SET) పరీక్షలో ర్యాంక్ సాధించండి.", hi: "DSC / शिक्षक भर्ती परीक्षा (या लेक्चरर के लिए PG + NET) पास करें।" },
      { en: "Inspire generations of students in TS SCERT, Gurukulam, KGBV, or Central Govt (KVS/NVS) schools.", te: "ప్రభుత్వ పాఠశాలలు, గురుకులాలు లేదా KVS లో విద్యార్థుల భవిష్యత్తును తీర్చిదిద్దండి.", hi: "सरकारी स्कूलों, गुरुकुल या KVS/NVS में विद्यार्थियों का भविष्य संवारें।" },
    ],
  },
];
