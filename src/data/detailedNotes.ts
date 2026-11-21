import type { DiagramType } from "../types";

export interface DeepNoteContent {
  en: string[];
  te: string[];
  hi: string[];
  examplesEn: string[];
  examplesTe: string[];
  examplesHi: string[];
}

/**
 * Hand-crafted detailed multi-paragraph notes & concrete worked examples
 * for flagship TS SCERT (Singidi), NCERT, Inter, NEET, JEE & UPSC chapters.
 */
const SPECIALIZED_CHAPTER_NOTES: Record<string, DeepNoteContent> = {
  "c10-tel-1": {
    en: [
      "The chapter 'Danasheelamu' (దానశీలము) is taken from the Ashtama Skandham of Sri Maha Bhagavatam, written by the great Telangana poet Sahajakavi Bammera Pothana. In simple words, the lesson teaches us that keeping our word and helping others without expecting anything in return is the noblest quality a human being can have.",
      "In this story, Lord Vishnu comes in the form of a young boy named Vamana and asks King Bali for just three steps of land. Even though King Bali's guru Shukracharya warns him that this boy is Vishnu in disguise and that he will lose his entire kingdom, King Bali refuses to take back his promise. He explains to his guru that wealth, youth, and even life itself are temporary, whereas truth and generosity stay forever.",
      "Pothana uses simple, musical Telugu words and powerful comparisons to show King Bali's courage. When Bali pours water into Vamana's hands to seal the charity, he says that even if he loses his throne or faces danger, a righteous person never goes back on a spoken promise.",
    ],
    te: [
      "'దానశీలము' పాఠం సహజకవి బమ్మెర పోతన రచించిన శ్రీమహాభాగవతం అష్టమ స్కంధం నుండి తీసుకోబడింది. ఈ పాఠం మనకు చాలా సరళంగా ఒక గొప్ప నీతిని చెబుతుంది: మనం ఒకరికి మాట ఇస్తే, ఎటువంటి కష్టం వచ్చినా ఆ మాటను నిలబెట్టుకోవాలి మరియు స్వార్థం లేకుండా దానం చేయాలి.",
      "ఈ కథలో శ్రీమహావిష్ణువు వామనుడి రూపంలో బలిచక్రవర్తి దగ్గరకు వచ్చి కేవలం మూడు అడుగుల నేల దానంగా అడుగుతాడు. వచ్చినవాడు విష్ణువని, దానం చేస్తే రాజ్యం మొత్తం పోతుందని గురువు శుక్రాచార్యుడు బలిని హెచ్చరిస్తాడు. కానీ బలిచక్రవర్తి వెనక్కి తగ్గడు. సంపద, రాజ్యం, శరీరం అన్నీ శాశ్వతం కావని, కానీ సత్యం మరియు కీర్తి ఎప్పటికీ నిలిచి ఉంటాయని గురువుకు వినయంగా చెబుతాడు.",
      "పోతన గారు ఈ పద్యాలలో ఎంతో మధురమైన తెలుగు పదాలను వాడారు. 'సిరి తా వచ్చును...' మరియు 'నిరయంబైన నిబంధమైన...' అనే పద్యాల ద్వారా ఇచ్చిన మాట తప్పకపోవడం ఎంత గొప్పదో విద్యార్థులకు అర్థమయ్యేలా వివరించారు.",
    ],
    hi: [
      "'दानशीलम' पाठ तेलुगु के महान कवि बम्मेरा पोतना द्वारा रचित श्रीमहाभागवतम से लिया गया है। यह पाठ सरल शब्दों में सिखाता है कि दिए गए वचन का पालन करना और निस्वार्थ दान देना सबसे बड़ा धर्म है।",
      "कथा में भगवान विष्णु वामन के रूप में राजा बलि से तीन पग भूमि मांगते हैं। गुरु शुक्राचार्य के मना करने पर भी राजा बलि अपने वचन से पीछे नहीं हटते और सत्य को संपत्ति से ऊपर मानते हैं।",
    ],
    examplesEn: [
      "Example 1 (Verse Meaning): 'Siri taa vacchunu...' — Just as a king's wealth comes and goes like waves, truth never fades. Example in daily life: If you promise a friend to return their textbook tomorrow, returning it on time even if it rains shows Danasheelamu.",
      "Example 2 (Grammar - Sandhi): నారాయణ + అస్త్రము = నారాయణాస్త్రము (Savarna Deergha Sandhi); మహా + అద్భుతము = మహద్భుతము (Guna/Savarna rule practice in textbook).",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (పద్య భావం): 'సిరి తా వచ్చును...' — సంపద నీటి బుడగ లాంటిది, వచ్చి పోతుంది; కానీ చేసిన దానం, నిజాయితీ ఎప్పటికీ ఉంటాయి. నిత్యజీవితంలో మన స్నేహితుడికి సహాయం చేస్తానని మాట ఇస్తే, కష్టం వచ్చినా ఆ మాట నిలబెట్టుకోవడం ఈ పాఠం నేర్పే గుణం.",
      "ఉదాహరణ 2 (వ్యాకరణం - సంధి): నారాయణ + అస్త్రము = నారాయణాస్త్రము (సవర్ణదీర్ఘ సంధి). ఇక్కడ 'అ' + 'అ' కలిసి దీర్ఘం 'ఆ' గా మారింది.",
    ],
    examplesHi: [
      "उदाहरण: वचन पालन का अर्थ है कि यदि आपने किसी मित्र की मदद का वादा किया है, तो कठिनाई आने पर भी उसे पूरा करें।",
    ],
  },
  "c10-tel-2": {
    en: [
      "'Evari Bhasha Vallaku Vinasompu' is a warm essay written by Dr. Samala Sadasiva. In simple words, it explains that every regional dialect and mother tongue sounds sweet and natural to its speakers, and we should respect all spoken forms of Telugu rather than looking down on any dialect.",
      "The author shares charming real-life experiences from Telangana, Andhra, and Rayalaseema, as well as Urdu and Marathi influences in Telangana speech. He points out how ordinary villagers, farmers, and poets use vivid proverbs (జాతీయాలు and సామెతలు) that carry deep wisdom in just two or three words.",
      "Through this chapter, students learn that textbook language and spoken home language complement each other. Understanding local idioms enriches our vocabulary and keeps Telangana's living culture alive.",
    ],
    te: [
      "'ఎవరి భాష వాళ్ళకు వినసొంపు' అనే వ్యాసాన్ని డా. సామల సదాశివ గారు రచించారు. ప్రతి ప్రాంతపు మాండలికం (యాస) ఆ ప్రాంత ప్రజలకు ఎంతో తీయగా, సహజంగా ఉంటుందని, ఏ యాసను తక్కువ చేసి చూడకూడదని ఈ పాఠం చాలా సులభమైన మాటల్లో చెబుతుంది.",
      "రచయిత తెలంగాణ పల్లెలలో ప్రజలు మాట్లాడే సహజమైన తెలుగు పదాలను, సామెతలను, జాతీయాలను ఎన్నో అందమైన ఉదాహరణలతో వివరించారు. ఉదాహరణకు పుస్తకాలలో ఉండే గ్రాంథిక భాష కంటే, అమ్మ ఒడిలో నేర్చుకున్న మాటలు మనసుకు త్వరగా హత్తుకుంటాయని చెప్పారు.",
      "మన చుట్టూ ఉండే వ్యక్తులు మాట్లాడే భాషను ప్రేమించడమే కాకుండా, వివిధ ప్రాంతాల పదాల అర్థాలను తెలుసుకోవడం వల్ల మన భాషా జ్ఞానం పెరుగుతుందని విద్యార్థులు ఈ పాఠం ద్వారా నేర్చుకుంటారు.",
    ],
    hi: [
      "'एवरि भाषा वाल्लकु विनसोंपु' डॉ. सामल सदाशिव का प्रसिद्ध निबंध है। यह बताता है कि हर क्षेत्र की बोली और मातृभाषा अपने बोलने वालों को मधुर लगती है और सभी बोलियों का सम्मान करना चाहिए।",
    ],
    examplesEn: [
      "Example 1 (Telangana Idiom): 'పొద్దుగాల' means early morning; 'ఎవుసం' means agriculture (వ్యవసాయం); 'పైలం' means careful/safe.",
      "Example 2 (Proverb / సామెత): 'చెట్టు పేరు చెప్పి కాయలు అమ్మడం' — Taking credit using a famous person's name without doing real work.",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (తెలంగాణ పదాలు): 'పైలం' అంటే జాగ్రత్త అని, 'పొద్దుగాల' అంటే ఉదయం అని, 'ఎవుసం' అంటే వ్యవసాయం అని అర్థం.",
      "ఉదాహరణ 2 (జాతీయం): 'గుండె చెరువగు' అంటే చాలా బాధపడటం. ఉదాహరణ వాక్యం: పంట ఎండిపోవడం చూసి రైతు గుండె చెరువైంది.",
    ],
    examplesHi: [
      "उदाहरण: तेलंगाना बोली में 'पैलम' का अर्थ सावधान और 'पोद् दुगाला' का अर्थ सुबह होता है।",
    ],
  },
  "c10-tel-3": {
    en: [
      "'Veera Telangana' is an inspiring poem by Dasarathi Krishnamacharya (known as Abhyudaya Kavi). Written during the Telangana people's struggle against Nizam autocracy, the poem praises the courage of common farmers, mothers, and youth who stood up for freedom and dignity.",
      "Dasarathi compares Telangana to a 'Veena with ten million jewels' ('నా తెలంగాణ కోటి రతనాల వీణ') and says its soil has been nourished by rivers like Godavari and Krishna as well as the sacrifices of brave heroes. The poem fills students with pride in Telangana's history, language, and unity.",
    ],
    te: [
      "'వీర తెలంగాణ' పాఠాన్ని ప్రముఖ కవి దాశరథి కృష్ణమాచార్యులు రచించారు. నిజాం నిరంకుశ పాలనకు వ్యతిరేకంగా తెలంగాణ ప్రజలు చేసిన వీరోచిత పోరాటాన్ని, ప్రజల ధైర్యసాహసాలను ఈ కవితలో అద్భుతంగా వర్ణించారు.",
      "దాశరథి గారు మన తెలంగాణ గడ్డను 'నా తెలంగాణ కోటి రతనాల వీణ' అని పిలిచారు. గోదావరి, కృష్ణా నదులు ప్రవహించే ఈ నేల ఎందరో వీరులకు, కవులకు, శ్రమజీవులకు జన్మనిచ్చిందని చెప్పారు. కష్టాలు ఎదురైనా తలవంచని ధైర్యం తెలంగాణ ప్రజల సొంతమని ఈ పాఠం సులభంగా వివరిస్తుంది.",
    ],
    hi: [
      "'वीर तेलंगाना' कवि दाशरथी कृष्णमाचार्य की ओजस्वी कविता है, जिसमें उन्होंने तेलंगाना की धरती, नदियों और स्वतंत्रता सेनानियों के साहस का गौरवगान किया है।",
    ],
    examplesEn: [
      "Example 1 (Famous Line): 'Naa Telangana Koti Ratanala Veena' — Telangana is like a musical instrument studded with crores of gems (its people, culture, and heritage).",
      "Example 2 (Alankaram): Repeating 'త' or 'ర' sounds creates Anuprasa Alankaram (Alliteration), giving the poem a marching drumbeat rhythm.",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (ప్రసిద్ధ పంక్తి): 'నా తెలంగాణ కోటి రతనాల వీణ' — అంటే తెలంగాణలో కోట్లాది మంది ప్రతిభావంతులు, వీరులు, కళాకారులు రత్నాల వలె ప్రకాశిస్తున్నారని భావం.",
      "ఉదాహరణ 2 (రుద్రమదేవి, సమ్మక్క-సారక్క వంటి వీరుల స్ఫూర్తి): ఆపద సమయంలో భయపడకుండా ఐక్యంగా పోరాడటమే నిజమైన వీరత్వం అని కవి వివరించారు.",
    ],
    examplesHi: [
      "उदाहरण: 'ना तेलंगाना कोटि रतनाला वीणा' का अर्थ है कि तेलंगाना की भूमि करोड़ों रत्नों (वीरों और कलाकारों) से सजी वीणा के समान है।",
    ],
  },
  "c10-physics-1": {
    en: [
      "This chapter explains how light bounces (reflects) off curved mirrors—specifically Concave Mirrors (curved inward like a spoon's inside) and Convex Mirrors (curved outward like the back of a spoon). Every curved mirror has a Pole (P) at its center, a Center of Curvature (C), and a Focus (F) exactly halfway between P and C, so the focal length f = R / 2.",
      "When parallel light rays hit a concave mirror, they reflect and meet at one single point called the Focus (F). Because of this, concave mirrors can produce enlarged virtual images when an object is placed very close, or bright concentrated beams when a bulb is placed at the focus. Convex mirrors always spread light outward and form smaller, upright virtual images showing a wider area behind a vehicle.",
      "We also learn the Mirror Formula: 1/f = 1/v + 1/u, and Magnification m = -v/u = hi/ho, along with the Sign Convention (distances measured against incident light from Pole P are negative, and along incident light are positive).",
    ],
    te: [
      "ఈ పాఠంలో వక్రతలాల వద్ద (ముఖ్యంగా గోళాకార దర్పణాల వద్ద) కాంతి ఎలా పరావర్తనం చెందుతుందో చాలా సులభంగా నేర్చుకుంటాము. గోళాకార దర్పణాలు రెండు రకాలు: 1) పుటాకార దర్పణం (లోపలికి వంగి ఉంటుంది, ఉదా: స్పూన్ లోపలి భాగం), 2) కుంభాకార దర్పణం (బయటకు ఉబ్బి ఉంటుంది, ఉదా: స్పూన్ వెనుక భాగం).",
      "ప్రతి దర్పణానికి మధ్య బిందువును ధ్రువం (P), వక్రతా కేంద్రాన్ని (C), మరియు నాభిని (F) అంటారు. నాభ్యంతరం ఎల్లప్పుడూ వక్రతా వ్యాసార్థంలో సగం ఉంటుంది (f = R / 2). పుటాకార దర్పణంపై సమాంతర కాంతి కిరణాలు పడినప్పుడు అవన్నీ నాభి (F) వద్ద కేంద్రీకృతమవుతాయి. అందుకే సూర్యకిరణాలతో కాగితాన్ని కాల్చడానికి లేదా సోలార్ కుక్కర్లలో దీనిని వాడతారు.",
      "కుంభాకార దర్పణం ఎప్పుడూ చిన్నదైన, నిటారైన ప్రతిబింబాన్ని పెద్ద విస్తీర్ణంలో చూపిస్తుంది కాబట్టి వాహనాల సైడ్ మిర్రర్‌లుగా వాడతారు. దర్పణ సూత్రం: 1/f = 1/v + 1/u మరియు ఆవర్ధనం m = -v/u.",
    ],
    hi: [
      "इस अध्याय में हम अवतल और उत्तल दर्पणों से प्रकाश के परावर्तन को समझते हैं। फोकस दूरी वक्रता त्रिज्या की आधी होती है (f = R/2)।",
      "दर्पण सूत्र 1/f = 1/v + 1/u का उपयोग कर प्रतिबिंब की स्थिति और आकार ज्ञात किया जाता है।",
    ],
    examplesEn: [
      "Example 1 (Focal Length): If the radius of curvature R of a concave mirror is 24 cm, what is its focal length? Solution: f = R / 2 = 24 / 2 = 12 cm.",
      "Example 2 (Mirror Formula): An object is placed 30 cm in front of a concave mirror of focal length 15 cm (u = -30 cm, f = -15 cm). Using 1/v = 1/f - 1/u = -1/15 - (-1/30) = -1/30, we get v = -30 cm (real, inverted, same-size image at C).",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (నాభ్యంతరం లెక్క): ఒక పుటాకార దర్పణం వక్రతా వ్యాసార్థం R = 24 సెం.మీ. అయితే నాభ్యంతరం f ఎంత? సాధన: f = R / 2 = 24 / 2 = 12 సెం.మీ.",
      "ఉదాహరణ 2 (నిత్యజీవిత ఉపయోగం): దంతవైద్యులు (Dentists) పళ్ళను పెద్దదిగా చూడటానికి పుటాకార దర్పణాన్ని వాడతారు. కారు, బైకులలో వెనుక ట్రాఫిక్‌ను ఎక్కువ విస్తీర్ణంలో చూడటానికి కుంభాకార దర్పణాన్ని వాడతారు.",
    ],
    examplesHi: [
      "उदाहरण: यदि किसी अवतल दर्पण की वक्रता त्रिज्या R = 24 सेमी है, तो फोकस दूरी f = 24 / 2 = 12 सेमी होगी।",
    ],
  },
  "c10-chem-2": {
    en: [
      "Acids, Bases and Salts are three everyday classes of chemicals we taste and use at home. Acids (like lemon juice containing citric acid and vinegar containing acetic acid) taste sour and turn blue litmus paper red. Bases (like baking soda and soap) feel slippery, taste bitter, and turn red litmus paper blue.",
      "To measure how strong an acid or base is, scientists use the pH scale from 0 to 14. A pH of 7 is completely neutral (like pure drinking water). Values below 7 are acidic (stomach HCl is ~1.5, lemon juice is ~2.2), and values above 7 are basic (baking soda is ~8.5). Even our tooth enamel starts decaying if mouth pH drops below 5.5!",
      "When an acid reacts with a base, they cancel each other out to form a Salt and Water—this is called a Neutralisation reaction. For example, taking milk of magnesia (a mild base) neutralises excess stomach acid during acidity.",
    ],
    te: [
      "ఆమ్లాలు (Acids), క్షారాలు (Bases) మరియు లవణాలు (Salts) మన నిత్యజీవితంలో ప్రతిరోజూ కనిపించే పదార్థాలు. ఆమ్లాలు పుల్లగా ఉంటాయి మరియు నీలి లిట్మస్ కాగితాన్ని ఎరుపు రంగులోకి మారుస్తాయి (ఉదా: నిమ్మరసం, చింతపండు, పెరుగు). క్షారాలు చేదుగా, సబ్బులా జారుడుగా ఉంటాయి మరియు ఎరుపు లిట్మస్‌ను నీలి రంగులోకి మారుస్తాయి (ఉదా: వంట సోడా, సబ్బు).",
      "ఒక పదార్థం ఎంత బలమైన ఆమ్లమో లేదా క్షారమో తెలుసుకోవడానికి pH స్కేలు (0 నుండి 14 వరకు) ఉపయోగిస్తారు. శుద్ధమైన నీటి pH విలువ 7 (తటస్థం). pH విలువ 7 కంటే తక్కువ ఉంటే ఆమ్లం (నిమ్మరసం pH ≈ 2.2), 7 కంటే ఎక్కువ ఉంటే క్షారం (వంట సోడా pH ≈ 8.5). మన నోటి pH 5.5 కంటే తగ్గితే దంతక్షయం (పళ్ళు పుచ్చిపోవడం) మొదలవుతుంది.",
      "ఒక ఆమ్లం మరియు క్షారం కలిసినప్పుడు అవి ఒకదాని ప్రభావాన్ని ఒకటి తగ్గించుకొని లవణం మరియు నీటిని ఏర్పరుస్తాయి. దీనిని 'తటస్థీకరణ చర్య' (Neutralisation) అంటారు. కడుపులో ఎసిడిటీ వచ్చినప్పుడు 'యాంటాసిడ్' (బలహీన క్షారం) తీసుకోవడం దీనికి చక్కని ఉదాహరణ.",
    ],
    hi: [
      "अम्ल स्वाद में खट्टे होते हैं और नीले लिटमस को लाल करते हैं (जैसे नींबू)। क्षार स्वाद में कड़वे और स्पर्श में साबुन जैसे होते हैं तथा लाल लिटमस को नीला करते हैं।",
      "pH स्केल 0 से 14 तक होता है: 7 उदासीन (शुद्ध जल), 7 से कम अम्लीय और 7 से अधिक क्षारीय होता है। अम्ल और क्षार मिलकर लवण व जल बनाते हैं।",
    ],
    examplesEn: [
      "Example 1 (Neutralisation Equation): HCl (Acid) + NaOH (Base) → NaCl (Common Salt) + H₂O (Water).",
      "Example 2 (Everyday Chemistry): Bee sting injects methanoic acid causing pain; rubbing mild baking soda (a base) neutralises the acid and gives relief.",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (రసాయన సమీకరణం): HCl (హైడ్రోక్లోరిక్ ఆమ్లం) + NaOH (సోడియం హైడ్రాక్సైడ్ క్షారం) → NaCl (వంట ఉప్పు) + H₂O (నీరు).",
      "ఉదాహరణ 2 (నిత్యజీవిత ఉపయోగం): తేనెటీగ కుట్టినప్పుడు మన చర్మంలోకి ఫార్మిక్ ఆమ్లం వెళ్తుంది. ఆ చోట కొద్దిగా వంట సోడా (క్షారం) రాస్తే ఆమ్లం తటస్థీకరించబడి నొప్పి తగ్గుతుంది.",
    ],
    examplesHi: [
      "उदाहरण: HCl + NaOH → NaCl + H₂O (उदासीनीकरण अभिक्रिया)।",
    ],
  },
  "c10-bio-1": {
    en: [
      "Nutrition is the process by which living organisms take in food and convert it into energy for growth, repair, and daily activities. Green plants are Autotrophs—they make their own food using sunlight, carbon dioxide (CO₂), water (H₂O), and green chlorophyll inside chloroplasts through Photosynthesis.",
      "Photosynthesis happens in two stages: the Light Reaction (in thylakoid membranes, splitting water to release Oxygen and creating ATP/NADPH) and the Dark Reaction / Calvin Cycle (in stroma, fixing CO₂ into glucose C₆H₁₂O₆). Humans and animals are Heterotrophs and depend on plants directly or indirectly.",
      "In human beings, food passes through the alimentary canal: mouth (salivary amylase breaks down starch), stomach (HCl kills germs and pepsin digests proteins), small intestine (complete digestion via bile, pancreatic juice, and absorption through finger-like Villi), and large intestine (water absorption).",
    ],
    te: [
      "పోషణ అంటే జీవులు ఆహారాన్ని తీసుకొని శక్తిగా మార్చుకునే విధానం. ఆకుపచ్చని మొక్కలు స్వయంపోషకాలు (Autotrophs)—అవి సూర్యరశ్మి, కార్బన్ డై ఆక్సైడ్ (CO₂), నీరు మరియు ఆకులలోని పత్రహరితం (Chlorophyll) సహాయంతో 'కిరణజన్య సంయోగక్రియ' (Photosynthesis) ద్వారా తమ ఆహారాన్ని తామే తయారు చేసుకుంటాయి.",
      "కిరణజన్య సంయోగక్రియలో రెండు దశలు ఉంటాయి: 1) కాంతి చర్య (ఇక్కడ నీరు విడిపోయి మనం పీల్చే ఆక్సిజన్ వాయువు విడుదల అవుతుంది), 2) నిష్కాంతి చర్య (ఇక్కడ CO₂ గ్లూకోజ్/పిండిపదార్థంగా మారుతుంది). మనుషులు, జంతువులు పరపోషకాలు—అవి ఆహారం కోసం మొక్కలపై ఆధారపడతాయి.",
      "మానవ జీర్ణవ్యవస్థలో ఆహారం నోటి నుండి ప్రారంభమవుతుంది. నోటిలోని లాలాజల అమైలేజ్ పిండిపదార్థాలను చక్కెరగా మారుస్తుంది. జీర్ణాశయంలో HCl బ్యాక్టీరియాను చంపుతుంది మరియు పెప్సిన్ ప్రోటీన్లను జీర్ణం చేస్తుంది. చివరగా చిన్న ప్రేగులోని సూక్ష్మచూషకాలు (Villi) జీర్ణమైన పోషకాలను రక్తంలోకి శోషిస్తాయి.",
    ],
    hi: [
      "हरे पौधे स्वपोषी हैं जो सूर्य के प्रकाश, CO₂, जल और क्लोरोफिल की मदद से प्रकाश संश्लेषण द्वारा भोजन बनाते हैं।",
      "मानव पाचन तंत्र में लार एमाइलेज स्टार्च को पचाता है, आमाशय में पेप्सिन प्रोटीन को और छोटी आंत में विली (Villi) पोषक तत्वों को अवशोषित करते हैं।",
    ],
    examplesEn: [
      "Example 1 (Photosynthesis Equation): 6CO₂ + 12H₂O —(Sunlight / Chlorophyll)→ C₆H₁₂O₆ (Glucose) + 6O₂↑ + 6H₂O.",
      "Example 2 (Iodine Starch Test): Boil a leaf in alcohol, add Iodine drops—the green parts containing starch turn Blue-Black, proving photosynthesis occurred there.",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (కిరణజన్య సంయోగక్రియ సమీకరణం): 6CO₂ + 12H₂O —(సూర్యరశ్మి / పత్రహరితం)→ C₆H₁₂O₆ (గ్లూకోజ్) + 6O₂↑ + 6H₂O.",
      "ఉదాహరణ 2 (అయోడిన్ పరీక్ష): ఒక ఆకును ఆల్కహాల్‌లో ఉడికించి దానిపై అయోడిన్ చుక్కలు వేస్తే, పిండిపదార్థం ఉన్న భాగం నీలం-నలుపు రంగులోకి మారుతుంది.",
    ],
    examplesHi: [
      "उदाहरण: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O (प्रकाश संश्लेषण समीकरण)।",
    ],
  },
  "c10-math-5": {
    en: [
      "A Quadratic Equation is any polynomial equation of degree 2 written in the standard form ax² + bx + c = 0, where a ≠ 0. For example, x² - 5x + 6 = 0 is a quadratic equation because the highest power of x is 2. We use quadratic equations whenever we calculate areas of rectangles, projectile paths, or speed-time word problems.",
      "There are three simple methods to find the roots (solutions) of a quadratic equation: 1) Factorisation (splitting the middle term bx), 2) Completing the Square, and 3) The Quadratic Formula: x = [-b ± √(b² - 4ac)] / 2a.",
      "The expression inside the square root, Δ = b² - 4ac, is called the Discriminant. If Δ > 0, the equation has two distinct real roots; if Δ = 0, it has two equal real roots; and if Δ < 0, it has no real roots.",
    ],
    te: [
      "ఒక బహుపది సమీకరణంలో చరరాశి (x) యొక్క గరిష్ఠ ఘాతం 2 గా ఉండి, దానిని ax² + bx + c = 0 (ఇక్కడ a ≠ 0) రూపంలో రాయగలిగితే దానిని 'వర్గ సమీకరణం' (Quadratic Equation) అంటారు. ఉదాహరణకు: x² - 5x + 6 = 0. దీర్ఘచతురస్ర వైశాల్యం, వేగం-కాలం వంటి నిత్యజీవిత సమస్యలను సాధించడానికి వీటిని వాడతారు.",
      "వర్గ సమీకరణ మూలాలను (x విలువలను) కనుగొనడానికి మూడు సులభమైన పద్ధతులు ఉన్నాయి: 1) కారణాంక విభజన పద్ధతి (మధ్య పదాన్ని విడదీయడం), 2) వర్గాన్ని పూర్తి చేసే పద్ధతి, 3) వర్గ సూత్రం: x = [-b ± √(b² - 4ac)] / 2a.",
      "వర్గమూలం లోపల ఉన్న Δ = b² - 4ac ను 'విచక్షణి' (Discriminant) అంటారు. Δ > 0 అయితే రెండు వేర్వేరు వాస్తవ మూలాలు, Δ = 0 అయితే రెండు సమాన వాస్తవ మూలాలు, Δ < 0 అయితే వాస్తవ మూలాలు ఉండవు.",
    ],
    hi: [
      "ax² + bx + c = 0 (a ≠ 0) के रूप के समीकरण को द्विघात समीकरण कहते हैं। इसके मूल गुणनखंड विधि या द्विघात सूत्र x = [-b ± √(b² - 4ac)] / 2a से निकाले जाते हैं।",
    ],
    examplesEn: [
      "Example 1 (Factorisation): Solve x² - 5x + 6 = 0. Split -5x into -2x and -3x because (-2)×(-3) = +6. So (x - 2)(x - 3) = 0, giving roots x = 2 and x = 3.",
      "Example 2 (Discriminant Check): For 2x² - 4x + 2 = 0, a = 2, b = -4, c = 2. Δ = (-4)² - 4(2)(2) = 16 - 16 = 0, so it has two equal real roots (x = 1, 1).",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (కారణాంక విభజన): x² - 5x + 6 = 0 ను సాధించండి. (-2) × (-3) = +6 మరియు (-2) + (-3) = -5 కాబట్టి, x² - 2x - 3x + 6 = 0 ⇒ (x - 2)(x - 3) = 0 ⇒ x = 2 లేదా x = 3.",
      "ఉదాహరణ 2 (విచక్షణి లెక్క): 2x² - 4x + 2 = 0 లో Δ = (-4)² - 4(2)(2) = 16 - 16 = 0. కాబట్టి దీనికి రెండు సమాన వాస్తవ మూలాలు (x = 1, 1) ఉంటాయి.",
    ],
    examplesHi: [
      "उदाहरण: x² - 5x + 6 = 0 को हल करने पर (x - 2)(x - 3) = 0 प्राप्त होता है, अतः मूल x = 2 और x = 3 हैं।",
    ],
  },
  "c10-hist-6": {
    en: [
      "This chapter traces the historic people's movement for the formation of Telangana State. After the merger of Hyderabad State with Andhra State in 1956 (despite the Gentlemen's Agreement promising safeguards for Telangana's jobs, funds, and irrigation), people felt Telangana's resources and employment opportunities were unfairly neglected.",
      "In 1969, students of Osmania University led a massive peaceful agitation demanding a separate Telangana state, during which over 360 youth sacrificed their lives. Later, between 2001 and 2014, the movement grew into a peaceful mass peoples' movement involving students, teachers, employees (Sakala Janula Samme), farmers, artists (Dhoom Dhaam), and women across all ten districts.",
      "Recognizing the democratic aspiration of the people of Telangana, the Parliament of India passed the Andhra Pradesh Reorganisation Act in February 2014, and Telangana officially became India's 29th state on June 2, 2014.",
    ],
    te: [
      "ఈ పాఠం తెలంగాణ రాష్ట్ర ఆవిర్భావ ఉద్యమ చరిత్రను చాలా స్పష్టంగా వివరిస్తుంది. 1956లో 'పెద్ద మనుషుల ఒప్పందం' (Gentlemen's Agreement) ప్రకారం ఆంధ్ర, తెలంగాణ ప్రాంతాలు కలిసి ఆంధ్రప్రదేశ్‌గా ఏర్పడ్డాయి. అయితే నీరు, నిధులు, నియామకాల విషయంలో తెలంగాణకు అన్యాయం జరిగిందని ప్రజలు, విద్యార్థులు భావించారు.",
      "1969లో ఉస్మానియా విశ్వవిద్యాలయ విద్యార్థుల ఆధ్వర్యంలో తొలి దశ ప్రత్యేక తెలంగాణ ఉద్యమం తీవ్రంగా జరిగింది. ఆ తర్వాత 2001 నుండి 2014 వరకు 'సకల జనుల సమ్మె', 'మిలియన్ మార్చ్', 'ధూం ధాం' వంటి శాంతియుత ప్రజా కార్యక్రమాల ద్వారా విద్యార్థులు, ఉద్యోగులు, రైతులు, కళాకారులు ఒక్కటై పోరాడారు.",
      "తెలంగాణ ప్రజల ఆకాంక్షను గౌరవిస్తూ భారత పార్లమెంట్ ఫిబ్రవరి 2014లో ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ బిల్లును ఆమోదించింది. జూన్ 2, 2014న తెలంగాణ భారతదేశంలో 29వ రాష్ట్రంగా అధికారికంగా అవతరించింది.",
    ],
    hi: [
      "यह अध्याय 1956 के जेंटलमैन समझौते, 1969 के छात्र आंदोलन और 2001-2014 के जन आंदोलन के माध्यम से 2 जून 2014 को तेलंगाना राज्य के गठन की ऐतिहासिक यात्रा को समझाता है।",
    ],
    examplesEn: [
      "Example 1 (Key Milestones): 1956 (Gentlemen's Agreement) → 1969 (First Student Agitation) → 2011 (Sakala Janula Samme - 42-day general strike) → 2 June 2014 (Telangana Formation Day).",
      "Example 2 (Three Core Slogans): 'Neellu, Nidhulu, Niyamakalu' (Water, Funds, and Jobs) summarized the core economic and administrative demands of the movement.",
    ],
    examplesTe: [
      "ఉదాహరణ 1 (ముఖ్య తేదీలు): 1956 (పెద్ద మనుషుల ఒప్పందం) → 1969 (తొలి దశ ఉద్యమం) → 2011 (సకల జనుల సమ్మె) → 2 జూన్ 2014 (తెలంగాణ ఆవిర్భావ దినోత్సవం).",
      "ఉదాహరణ 2 (ప్రధాన నినాదం): 'నీళ్ళు, నిధులు, నియామకాలు' — ఈ మూడు అంశాలే తెలంగాణ ఉద్యమానికి ప్రధాన ప్రాతిపదికలుగా నిలిచాయి.",
    ],
    examplesHi: [
      "उदाहरण: 'नील्लू, निधुलु, नियमकालु' (जल, निधि और रोज़गार) तेलंगाना आंदोलन के तीन प्रमुख स्तंभ थे।",
    ],
  },
};

function detectTopicFlavor(id: string, enTitle: string, diagram: DiagramType): string {
  const lower = enTitle.toLowerCase();
  if (id.includes("-tel-") || lower.includes("telugu") || lower.includes("sataka") || lower.includes("shathaka")) {
    return "telugu-lit";
  }
  if (id.includes("-hin-") || lower.includes("hindi")) {
    return "hindi-lit";
  }
  if (id.includes("-eng-") || lower.includes("english") || lower.includes("grammar")) {
    return "english-lit";
  }
  if (diagram === "math-graph" || diagram === "math-geometry") {
    return "mathematics";
  }
  if (diagram === "physics-optics") return "physics-optics";
  if (diagram === "physics-mechanics") return "physics-mechanics";
  if (diagram === "chemistry-atom") return "chemistry";
  if (diagram === "biology-cell") return "biology-botany";
  if (diagram === "biology-heart") return "biology-zoology";
  if (diagram === "history-timeline") return "history";
  if (diagram === "geography-map") return "geography";
  if (diagram === "polity-parliament") return "polity";
  if (diagram === "economics-cycle") return "economics";
  return "general";
}

export function getDeepChapterNotes(params: {
  id: string;
  en: string;
  te: string;
  hi: string;
  ref: string;
  diagram: DiagramType;
  summaryEn: string;
  summaryTe: string;
  summaryHi: string;
}): DeepNoteContent {
  if (SPECIALIZED_CHAPTER_NOTES[params.id]) {
    return SPECIALIZED_CHAPTER_NOTES[params.id];
  }

  const flavor = detectTopicFlavor(params.id, params.en, params.diagram);

  switch (flavor) {
    case "telugu-lit":
      return {
        en: [
          `The lesson "${params.en}" (${params.te}) from ${params.ref} presents timeless cultural, moral, and human values in clear Telugu prose or poetry. ${params.summaryEn}`,
          `When studying a Telugu Singidi / Sahithi lesson, begin by reading the Poet or Author Introduction (కవి / రచయిత పరిచయం) to understand the historical period and message. Next, read each stanza or paragraph slowly, breaking long compound words (సంధులు and సమాసాలు) into simple root words so the meaning becomes crystal clear.`,
          `In board and annual exams, answers are rewarded when you write the core moral (నీతి), quote one meaningful line from the textbook, and explain its relevance to everyday student life such as honesty, respect for parents and farmers, and unity.`,
        ],
        te: [
          `ఈ "${params.te}" పాఠం (${params.ref}) విద్యార్థులలో మంచి విలువలు, సృజనాత్మకత మరియు భాషా నైపుణ్యాలను పెంపొందించడానికి రూపొందించబడింది. ${params.summaryTe}`,
          `పాఠాన్ని సులభంగా అర్థం చేసుకోవడానికి ముందుగా కవి లేదా రచయిత పరిచయాన్ని చదవండి. తర్వాత ప్రతి పద్యం లేదా గద్య భాగంలోని కఠిన పదాలను (సంధులు, సమాసాల ద్వారా) విడదీసి వాటి సరళమైన అర్థాన్ని తెలుసుకోండి. ప్రతి పద్యంలో కవి ఏ నీతిని లేదా సందేశాన్ని ఇస్తున్నారో మన నిత్యజీవితంతో పోల్చి చూసుకోవాలి.`,
          `పరీక్షలలో పూర్తి మార్కులు సాధించడానికి పాఠం సారాంశాన్ని సొంత మాటల్లో స్పష్టంగా రాయాలి. అలాగే పాఠం వెనుక ఇచ్చిన పర్యాయపదాలు, నానార్థాలు, ప్రకృతి-వికృతులు మరియు వ్యాకరణ అభ్యాసాలను క్రమం తప్పకుండా సాధన చేయాలి.`,
        ],
        hi: [
          `"${params.hi}" (${params.te}) पाठ ${params.ref} से लिया गया है, जो विद्यार्थियों को नैतिक मूल्य, करुणा और भाषा की सुंदरता सिखाता है। ${params.summaryHi}`,
          `इस अध्याय को समझने के लिए कवि परिचय, शब्दार्थ और संधि-समास का अभ्यास अवश्य करें।`,
        ],
        examplesEn: [
          `Example 1 (Word Breakdown): Always split compound words into two simple meaningful words. For instance, విద్యా + అర్థి = విద్యార్థి (Savarna Deergha Sandhi) and సత్ + ఆచారం = సదాచారం (Jastva Sandhi).`,
          `Example 2 (How to Write 4-Mark Summary): Start with the lesson name & poet's name, state the main theme of "${params.en}" in 3 simple sentences, and finish with the moral for students.`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (పద విభజన & వ్యాకరణం): పరీక్షలో కఠిన పదాలు ఎదురైతే వాటిని విడదీసి చూడండి. ఉదాహరణకు: విద్యా + అర్థి = విద్యార్థి (సవర్ణదీర్ఘ సంధి), మహా + ఉన్నత = మహోన్నత (గుణ సంధి).`,
          `ఉదాహరణ 2 (సమాధానం రాసే పద్ధతి): "${params.te}" పాఠంపై 4 మార్కుల ప్రశ్న వస్తే — మొదట కవి పేరు, తర్వాత పాఠం ముఖ్య ఉద్దేశం, చివరగా విద్యార్థులు నేర్చుకోవాల్సిన నీతిని 4 సరళమైన వాక్యాలలో రాయాలి.`,
        ],
        examplesHi: [
          `उदाहरण: संधि-विच्छेद करके शब्दों का सरल अर्थ समझें, जैसे विद्या + अर्थी = विद्यार्थी।`,
        ],
      };

    case "hindi-lit":
      return {
        en: [
          `The chapter "${params.en}" (${params.hi}) from ${params.ref} builds reading comprehension, vocabulary, and moral awareness in Hindi. ${params.summaryEn}`,
          `To master this chapter easily, focus on the central message of the poem or story, memorize 8–10 key word meanings (शब्दार्थ), and practice converting sentences across singular/plural (वचन) and opposite words (विलोम शब्द).`,
          `In exams, writing clear, grammatically accurate short sentences and connecting the lesson's moral to daily habits helps you score top marks.`,
        ],
        te: [
          `"${params.te}" (${params.hi}) అనే ఈ హిందీ పాఠం (${params.ref}) విద్యార్థులలో హిందీ భాషా పరిజ్ఞానాన్ని, సద్గుణాలను పెంచుతుంది. ${params.summaryTe}`,
          `ఈ పాఠాన్ని సులభంగా నేర్చుకోవడానికి ముందుగా కఠినమైన హిందీ పదాల అర్థాలను (శబ్దార్థ్) తెలుగులో తెలుసుకోండి. ఆ తర్వాత పాఠం యొక్క సారాంశాన్ని, వ్యాకరణంలోని వచనాలు (ఏకవచనం-బహువచనం), లింగ భేదాలు మరియు విలోమ పదాలను సాధన చేయండి.`,
          `పరీక్షలో సారాంశం రాసేటప్పుడు చిన్న చిన్న తప్పులు లేని సరళమైన హిందీ వాక్యాలను ఉపయోగించడం ద్వారా పూర్తి మార్కులు పొందవచ్చు.`,
        ],
        hi: [
          `"${params.hi}" (${params.ref}) एक सरल और रोचक हिंदी पाठ है। ${params.summaryHi}`,
          `इस अध्याय को पूरी तरह समझने के लिए पाठ का मूल भाव, मुख्य शब्दार्थ, मुहावरे तथा व्याकरण (विलोम, पर्यायवाची, संधि और कारक) का अभ्यास करें।`,
        ],
        examplesEn: [
          `Example 1 (Grammar Practice): Opposite words (विलोम) like सच × झूठ (Truth × Lie), मित्र × शत्रु (Friend × Enemy), and नया × पुराना (New × Old).`,
          `Example 2 (Sentence Structure): Always check gender agreement (पुल्लिंग / स्त्रीलिंग) with the verb, e.g., "लड़का पढ़ता है" vs "लड़की पढ़ती है".`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (విలోమ శబ్దాలు / వ్యతిరేక పదాలు): सच (నిజం) × झूठ (అబద్ధం), मित्र (స్నేహితుడు) × शत्रु (శత్రువు), अच्छा (మంచి) × बुरा (చెడు).`,
          `ఉదాహరణ 2 (వాక్య నిర్మాణం): హిందీలో లింగాన్ని బట్టి క్రియ మారుతుంది — "లడ్కా పఢ్తా హై" (అబ్బాయి చదువుతున్నాడు), "లడ్కీ పఢ్తీ హై" (అమ్మాయి చదువుతోంది).`,
        ],
        examplesHi: [
          `उदाहरण: विलोम शब्द — सच × झूठ, मित्र × शत्रु; तथा लिंग के अनुसार क्रिया — लड़का पढ़ता है / लड़की पढ़ती है।`,
        ],
      };

    case "english-lit":
      return {
        en: [
          `Unit "${params.en}" from ${params.ref} strengthens reading comprehension, vocabulary, grammar, and real-world communication skills. ${params.summaryEn}`,
          `When studying this unit, identify the main character's challenge and how determination or empathy resolves it. Pay attention to contextual vocabulary (synonyms, antonyms, phrasal verbs) and sentence grammar such as Tenses, Active-Passive Voice, and Reported Speech.`,
          `For Creative Writing / Discourses (Diary entry, Formal Letter, Biographical Sketch, or Speech), always include a proper salutation, date/subject where needed, and 2–3 well-connected paragraphs.`,
        ],
        te: [
          `${params.ref} లోని "${params.te}" యూనిట్ విద్యార్థులలో ఇంగ్లీష్ చదవడం, అర్థం చేసుకోవడం, గ్రామర్ మరియు సృజనాత్మక రచనా నైపుణ్యాలను అభివృద్ధి చేస్తుంది. ${params.summaryTe}`,
          `ఈ పాఠాన్ని చదివేటప్పుడు కథలోని ప్రధాన పాత్ర ఎదుర్కొన్న సమస్య ఏమిటి, దానిని వారు ధైర్యంతో లేదా మంచితనంతో ఎలా పరిష్కరించారో గమనించండి. గ్రామర్ భాగంలో Tenses, Active-Passive Voice, Direct-Indirect Speech నియమాలను ఉదాహరణలతో నేర్చుకోవాలి.`,
          `పరీక్షలో Letter, Diary లేదా Speech వంటివి రాసేటప్పుడు సరైన ఫార్మాట్ (తేదీ, సంబోధన, ముగింపు) పాటిస్తే సులభంగా పూర్తి మార్కులు వస్తాయి.`,
        ],
        hi: [
          `${params.ref} की इकाई "${params.hi}" अंग्रेज़ी पठन, शब्दावली, व्याकरण और लेखन कौशल को मजबूत बनाती है। ${params.summaryHi}`,
          `Tenses, Voice और Letter/Diary लेखन के सही प्रारूप का अभ्यास करें।`,
        ],
        examplesEn: [
          `Example 1 (Active to Passive Voice): Active: "The student wrote the answer." → Passive: "The answer was written by the student."`,
          `Example 2 (Diary Entry Tip): Write Date & Time at top left, begin with "Dear Diary,", express honest feelings about the event in "${params.en}" in Past Tense, and sign off.`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (Active - Passive Voice): Active: "Ramu reads a book." → Passive: "A book is read by Ramu." ఇక్కడ Object ముందుగా వచ్చి, Verb 3వ రూపంలో (read) ఉంటుంది.`,
          `ఉదాహరణ 2 (Diary రాయడం): ఎడమవైపు పైన తేదీ, సమయం వేసి "Dear Diary," తో ప్రారంభించి, జరిగిన సంఘటనపై మీ భావాలను Past Tense లో 2 పేరాలుగా రాయాలి.`,
        ],
        examplesHi: [
          `उदाहरण: Active: "She wrote a letter." → Passive: "A letter was written by her."`,
        ],
      };

    case "mathematics":
      return {
        en: [
          `The chapter "${params.en}" (${params.ref}) builds logical problem-solving skills step by step. ${params.summaryEn}`,
          `In mathematics, never try to memorize full solutions by heart. Instead, understand what is 'Given' in the question, identify which formula or theorem connects the given values to what needs to be found, and write every algebraic or geometric step clearly on a new line.`,
          `Always verify your final answer by substituting it back into the original equation or checking units (cm, cm², cm³, or degrees). Practicing 5 varied problems daily from this chapter turns tough exam questions into easy marks.`,
        ],
        te: [
          `${params.ref} లోని "${params.te}" పాఠం గణితంలో తార్కిక ఆలోచనను మరియు సమస్యలను సులభంగా సాధించే నైపుణ్యాన్ని పెంచుతుంది. ${params.summaryTe}`,
          `గణితంలో లెక్కలను ఎప్పుడూ బట్టీ పట్టకూడదు. ముందుగా ప్రశ్నలో ఏమి ఇచ్చారు (Given), మనం ఏమి కనుక్కోవాలి (To Find) అనేది స్పష్టంగా రాసుకోవాలి. తర్వాత ఈ రెండింటిని కలిపే సరైన సూత్రాన్ని (Formula) ఎంచుకుని, ప్రతి స్టెప్‌ను విడివిడిగా వరుస క్రమంలో సాధించాలి.`,
          `సమాధానం వచ్చిన తర్వాత యూనిట్లు (సెం.మీ., చ.సెం.మీ., ఘ.సెం.మీ. లేదా డిగ్రీలు) రాయడం మర్చిపోవద్దు. అలాగే సమాధానాన్ని తిరిగి అసలు సమీకరణంలో వేసి సరిచూసుకోవడం (Verification) ద్వారా తప్పులు లేకుండా 100% మార్కులు సాధించవచ్చు.`,
        ],
        hi: [
          `"${params.hi}" (${params.ref}) अध्याय तार्किक गणितीय कौशल को चरणबद्ध तरीके से विकसित करता है। ${params.summaryHi}`,
          `प्रत्येक प्रश्न में पहले 'दिया गया है' लिखें, फिर उपयुक्त सूत्र का चयन कर चरण-दर-चरण हल करें और अंत में सही मात्रक (इकाई) अवश्य लिखें।`,
        ],
        examplesEn: [
          `Example 1 (Structured Problem Solving): Step 1: Write Given data clearly. Step 2: State the exact textbook formula/theorem for "${params.en}". Step 3: Substitute numbers carefully and simplify step-by-step.`,
          `Example 2 (Common Mistake Check): Watch negative signs when moving terms across '=' (e.g., x - 7 = 12 becomes x = 12 + 7 = 19) and never drop square/cube units in area or volume.`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (లెక్క చేసే సులభ పద్ధతి): 1) దత్తాంశం రాయండి, 2) "${params.te}" లోని సూత్రం రాయండి, 3) విలువలను ప్రతిక్షేపించి దశలవారీగా సూక్ష్మీకరించండి.`,
          `ఉదాహరణ 2 (జాగ్రత్త): సమీకరణంలో '=' కు అవతలి వైపు సంఖ్యను పంపినప్పుడు గుర్తు (+ నుండి -, - నుండి +) మారుతుందని గుర్తుంచుకోండి. ఉదా: x - 7 = 12 ⇒ x = 12 + 7 = 19.`,
        ],
        examplesHi: [
          `उदाहरण: समीकरण हल करते समय '=' के दूसरी ओर ले जाने पर चिह्न बदलता है, जैसे x - 7 = 12 ⇒ x = 12 + 7 = 19।`,
        ],
      };

    case "physics-optics":
    case "physics-mechanics":
      return {
        en: [
          `In "${params.en}" (${params.ref}), we study how physical laws govern light, motion, energy, electricity, or natural forces around us. ${params.summaryEn}`,
          `Every physics principle becomes crystal clear when you visualize what is physically happening—whether it is a light ray bending at a boundary, a force accelerating a mass, or electric charges flowing through a resistor. First learn the physical definition in simple words, then connect it to its mathematical formula and SI unit.`,
          `During exams, drawing a neat, pencil-labeled ray diagram or force/circuit diagram alongside your numerical calculation helps examiners follow your logic and ensures maximum marks.`,
        ],
        te: [
          `"${params.te}" (${params.ref}) పాఠం మన చుట్టూ ప్రకృతిలో జరిగే భౌతిక నియమాలను—కాంతి, చలనం, బలం, విద్యుత్ లేదా శక్తిని—ప్రయోగాత్మకంగా వివరిస్తుంది. ${params.summaryTe}`,
          `భౌతిక శాస్త్రాన్ని సులభంగా అర్థం చేసుకోవాలంటే ముందుగా ఆ దృగ్విషయాన్ని మన కళ్ళ ముందు ఊహించుకోవాలి (ఉదాహరణకు నీటిలో పెన్సిల్ వంగినట్లు కనిపించడం, లేదా స్విచ్ వేయగానే బల్బు వెలగడం). ఆ తర్వాత ఆ నియమాన్ని ఒక చిన్న సూత్రంతో మరియు దాని SI ప్రమాణంతో జతచేసి గుర్తుంచుకోవాలి.`,
          `పరీక్షలలో జవాబులు రాసేటప్పుడు సంబంధిత కిరణ చిత్రం (Ray Diagram) లేదా వలయ చిత్రం (Circuit Diagram) పెన్సిల్‌తో చక్కగా గీసి భాగాలను గుర్తించండి. లెక్కలలో SI ప్రమాణాలు (మీటర్లు, సెకన్లు, న్యూటన్లు, వోల్ట్లు) ఖచ్చితంగా రాయాలి.`,
        ],
        hi: [
          `"${params.hi}" (${params.ref}) में हम प्रकाश, गति, बल, ऊर्जा या विद्युत से जुड़े प्राकृतिक नियमों को समझते हैं। ${params.summaryHi}`,
          `परिभाषा के साथ सूत्र, SI मात्रक और स्वच्छ नामांकित आरेख (किरण या परिपथ आरेख) बनाने से परीक्षा में पूरे अंक मिलते हैं।`,
        ],
        examplesEn: [
          `Example 1 (Formula-Unit Link): Always match units before calculating—convert cm to meters (÷100) and minutes to seconds (×60) so SI formulas give accurate answers.`,
          `Example 2 (Real-Life Observation): Observe how everyday tools (vehicle mirrors, spectacles, ceiling fans, electric fuses) directly apply the laws taught in "${params.en}".`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (ప్రమాణాల మార్పు): ఫిజిక్స్ లెక్కలు చేసేటప్పుడు అన్ని కొలతలు SI ప్రమాణాలలో ఉన్నాయో లేదో చూడండి. ఉదాహరణకు 50 సెం.మీ. ను మీటర్లలోకి మార్చాలంటే 50 / 100 = 0.5 మీ. అని రాయాలి.`,
          `ఉదాహరణ 2 (నిత్యజీవిత పరిశీలన): "${params.te}" లోని సూత్రాలను మనం రోజూ చూసే కళ్ళద్దాలు, వాహన అద్దాలు, ఫ్యాన్లు, స్విచ్‌బోర్డులలో గమనించవచ్చు.`,
        ],
        examplesHi: [
          `उदाहरण: गणना से पहले सभी मानों को SI मात्रकों में बदलें, जैसे 50 सेमी = 0.5 मीटर।`,
        ],
      };

    case "chemistry":
      return {
        en: [
          `The chapter "${params.en}" (${params.ref}) reveals how atoms, ions, and molecules interact to create new substances with different properties. ${params.summaryEn}`,
          `To make chemistry easy, focus on two things: understanding why atoms combine (to reach a stable outer electron shell like noble gases) and keeping equations balanced (the Law of Conservation of Mass requires equal numbers of each atom on both left and right sides).`,
          `Notice how chemical properties explain everyday life—from why iron rusts in moist air, why soaps remove grease, to how medicines and fertilizers are made.`,
        ],
        te: [
          `${params.ref} లోని "${params.te}" పాఠం పదార్థాలలోని పరమాణువులు, అణువులు ఎలా కలిసి కొత్త పదార్థాలను ఏర్పరుస్తాయో వివరిస్తుంది. ${params.summaryTe}`,
          `రసాయన శాస్త్రాన్ని సులభంగా నేర్చుకోవడానికి రెండు ముఖ్యమైన విషయాలు గుర్తుంచుకోవాలి: 1) పరమాణువులు ఎల్లప్పుడూ స్థిరమైన ఎలక్ట్రాన్ విన్యాసం (అష్టక నియమం) పొందడానికి బంధాలను ఏర్పరుస్తాయి, 2) ప్రతి రసాయన సమీకరణంలో క్రియాజనకాలు (ఎడమవైపు) మరియు క్రియాజన్యాలు (కుడివైపు) పరమాణువుల సంఖ్య సమానంగా ఉండేలా తుల్యం చేయాలి.`,
          `ఇనుము తుప్పు పట్టడం, పాలు పెరుగుగా మారడం, వంట సోడాతో కేక్ పొంగడం వంటి నిత్యజీవిత ఉదాహరణలతో ఈ పాఠాన్ని చదివితే చాలా ఆసక్తికరంగా ఉంటుంది.`,
        ],
        hi: [
          `"${params.hi}" (${params.ref}) अध्याय बताता है कि परमाणु और अणु किस प्रकार अभिक्रिया करके नए पदार्थ बनाते हैं। ${params.summaryHi}`,
          `रासायनिक समीकरण के दोनों ओर परमाणुओं की संख्या संतुलित रखना और इलेक्ट्रॉनिक विन्यास समझना इस पाठ की कुंजी है।`,
        ],
        examplesEn: [
          `Example 1 (Balancing Check): Unbalanced: H₂ + O₂ → H₂O. Balanced: 2H₂ + O₂ → 2H₂O (4 Hydrogen and 2 Oxygen atoms on each side).`,
          `Example 2 (Symbol & Valency): Knowing common valencies (Na⁺ = +1, Mg²⁺ = +2, Cl⁻ = -1, O²⁻ = -2) lets you write formulas instantly, like MgCl₂ or Na₂O.`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (సమీకరణం తుల్యం చేయడం): H₂ + O₂ → H₂O అనేది తుల్యం కాని సమీకరణం. దీనిని 2H₂ + O₂ → 2H₂O గా రాస్తే రెండు వైపులా 4 హైడ్రోజన్, 2 ఆక్సిజన్ పరమాణువులు సమానంగా ఉంటాయి.`,
          `ఉదాహరణ 2 (ఫార్ములా రాయడం): మెగ్నీషియం వేలన్సీ +2, క్లోరిన్ వేలన్సీ -1 కాబట్టి వాటి సమ్మేళనం ఫార్ములా MgCl₂ అవుతుంది.`,
        ],
        examplesHi: [
          `उदाहरण: संतुलित समीकरण 2H₂ + O₂ → 2H₂O में दोनों ओर 4 हाइड्रोजन और 2 ऑक्सीजन परमाणु होते हैं।`,
        ],
      };

    case "biology-botany":
    case "biology-zoology":
      return {
        en: [
          `The biology chapter "${params.en}" (${params.ref}) explores how living cells, tissues, organs, and ecosystems perform vital life processes. ${params.summaryEn}`,
          `Every biological system follows a logical chain: Structure supports Function. For example, thin-walled alveoli in lungs allow fast gas exchange, green chloroplasts capture sunlight in leaves, and red blood cells carry hemoglobin to deliver oxygen to every cell.`,
          `Draw neat, labeled textbook diagrams and practice writing processes in clear numbered steps (Input → Process → Output) to score high in school boards as well as NEET.`,
        ],
        te: [
          `${params.ref} లోని "${params.te}" జీవశాస్త్ర పాఠం మొక్కలు, జంతువులు మరియు మానవ శరీరంలోని జీవక్రియలు ఎలా జరుగుతాయో వివరిస్తుంది. ${params.summaryTe}`,
          `జీవశాస్త్రంలో ఏ అంశాన్నైనా సులభంగా గుర్తుంచుకోవడానికి 'నిర్మాణం – విధి' (Structure & Function) మధ్య సంబంధాన్ని చూడాలి. ఉదాహరణకు ఆకులలో ఉండే పత్రరంధ్రాలు (Stomata) వాయు మార్పిడికి, రక్తంలోని ఎర్ర రక్తకణాలు ఆక్సిజన్ రవాణాకు సహాయపడతాయి.`,
          `పరీక్షలలో పాఠ్యపుస్తకంలోని బొమ్మలను (Diagrams) పెన్సిల్‌తో చక్కగా గీసి, భాగాలను స్పష్టంగా గుర్తించాలి. జీవక్రియలను 1, 2, 3 క్రమ సంఖ్యలతో దశలవారీగా రాస్తే బోర్డు పరీక్షలలోనూ, NEET లోనూ మంచి మార్కులు వస్తాయి.`,
        ],
        hi: [
          `"${params.hi}" (${params.ref}) जीव विज्ञान अध्याय सजीवों में होने वाली महत्वपूर्ण जैविक प्रक्रियाओं को समझाता है। ${params.summaryHi}`,
          `अच्छे अंकों के लिए नामांकित चित्र बनाएं और प्रत्येक जैविक क्रिया को क्रमबद्ध चरणों में लिखें।`,
        ],
        examplesEn: [
          `Example 1 (Structure-to-Function): Plant Xylem tubes have thick hollow walls to transport water upward from roots to leaves, while Phloem transports prepared sugar food to all parts.`,
          `Example 2 (Flow Chart): Break cycles into clear arrows—for example, Nose → Trachea → Bronchi → Alveoli → Blood Capillary.`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (నిర్మాణం & విధి): మొక్కలలో దారువు (Xylem) వేర్ల నుండి నీటిని పైకి పంపుతుంది, పోషక కణజాలం (Phloem) ఆకులు తయారు చేసిన ఆహారాన్ని అన్ని భాగాలకు అందిస్తుంది.`,
          `ఉదాహరణ 2 (ఫ్లో చార్ట్): శ్వాసక్రియ మార్గాన్ని చిన్న ఫ్లోచార్ట్‌గా గుర్తుంచుకోండి: నాసికారంధ్రాలు → గ్రసని → వాయునాళం → శ్వాసనాళాలు → వాయుగోణులు (Alveoli).`,
        ],
        examplesHi: [
          `उदाहरण: पौधों में जाइलम जल का तथा फ्लोएम भोजन का परिवहन करता है।`,
        ],
      };

    default:
      return {
        en: [
          `The chapter "${params.en}" (${params.ref}) presents essential knowledge about society, governance, geography, or economic life in clear language. ${params.summaryEn}`,
          `When studying Social Studies, UPSC, or Groups chapters, always ask three simple questions: What happened? Why did it happen (cause)? And how did it impact people (effect)? Connecting events on a timeline or locating places on a map makes facts unforgettable.`,
          `In answers, organize your response into 4–5 crisp bullet points with key dates, constitutional articles, or real Telangana/Indian examples from your textbook.`,
        ],
        te: [
          `${params.ref} లోని "${params.te}" పాఠం సమాజం, చరిత్ర, భూగోళం, రాజ్యాంగం లేదా ఆర్థిక వ్యవస్థకు సంబంధించిన కీలక అంశాలను సులభమైన భాషలో వివరిస్తుంది. ${params.summaryTe}`,
          `సాంఘిక శాస్త్రం లేదా పోటీ పరీక్షల పాఠాలను చదివేటప్పుడు మూడు ప్రశ్నలు వేసుకోవాలి: ఏమి జరిగింది? ఎందుకు జరిగింది (కారణాలు)? దానివల్ల ప్రజలకు కలిగిన ఫలితం ఏమిటి? ముఖ్యమైన సంవత్సరాలను, ప్రాంతాలను భారతదేశ లేదా తెలంగాణ పటంతో (Map) కలిపి చదివితే త్వరగా గుర్తుంటాయి.`,
          `పరీక్షలలో జవాబులు రాసేటప్పుడు పొడవైన పేరాలకు బదులుగా 4 లేదా 5 స్పష్టమైన పాయింట్లుగా, ముఖ్య తేదీలు మరియు ఉదాహరణలతో రాయడం వల్ల పూర్తి మార్కులు వస్తాయి.`,
        ],
        hi: [
          `"${params.hi}" (${params.ref}) अध्याय समाज, इतिहास, भूगोल, संविधान या अर्थव्यवस्था की महत्वपूर्ण अवधारणाओं को सरल भाषा में प्रस्तुत करता है। ${params.summaryHi}`,
          `घटनाओं के कारण और परिणाम को समयरेखा तथा मानचित्र से जोड़कर पढ़ें और उत्तर बिंदुवार लिखें।`,
        ],
        examplesEn: [
          `Example 1 (Cause & Effect): Identify one trigger cause and one citizen impact from "${params.en}" to frame any 4-mark or 8-mark answer cleanly.`,
          `Example 2 (Map & Timeline Link): Always pair historical or geographic facts with a specific state, river, or year from the textbook.`,
        ],
        examplesTe: [
          `ఉదాహరణ 1 (కారణం – ఫలితం): "${params.te}" పాఠంలోని ఏ అంశాన్నైనా 'ఎందుకు జరిగింది → ప్రజలపై ప్రభావం ఏమిటి' అనే క్రమంలో 4 పాయింట్లుగా రాస్తే పూర్తి మార్కులు వస్తాయి.`,
          `ఉదాహరణ 2 (మ్యాప్ & తేదీ): చారిత్రక లేదా భౌగోళిక అంశాలను సంబంధిత నది, రాష్ట్రం లేదా సంవత్సరంతో కలిపి గుర్తుంచుకోండి.`,
        ],
        examplesHi: [
          `उदाहरण: किसी भी विषय को कारण और प्रभाव के 4 स्पष्ट बिंदुओं में लिखें और संबंधित वर्ष या स्थान अवश्य जोड़ें।`,
        ],
      };
  }
}
