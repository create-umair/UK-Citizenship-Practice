// Original IELTS preparation content. Written for this site — not copied from
// Cambridge, British Council, IDP or any published IELTS paper. Test format
// details are summarised from publicly documented specifications; always
// confirm current arrangements with the official test provider.

/* ========================================================================
   1. TEST FORMAT REFERENCE
   ======================================================================== */
const IELTS_FORMAT = [
  {
    id: "listening",
    name: "Listening",
    time: "About 30 minutes + transfer time",
    items: "40 questions, 4 parts",
    same: "Identical for Academic and General Training",
    detail: [
      "Part 1 — a conversation between two speakers in an everyday social context (booking, enquiry, registration).",
      "Part 2 — a monologue in an everyday social context (a tour, a local facility, an announcement).",
      "Part 3 — a discussion between up to four people in an educational or training context.",
      "Part 4 — an academic-style monologue, such as a lecture extract."
    ],
    types: [
      "Form, note, table, flow-chart and summary completion",
      "Multiple choice (one answer or several)",
      "Matching",
      "Plan, map and diagram labelling",
      "Sentence completion and short-answer questions"
    ],
    tips: [
      "The recording is played once only. Read ahead during the pauses.",
      "Spelling and grammar are marked. A right idea spelled wrong scores zero.",
      "Obey the word limit exactly — 'NO MORE THAN TWO WORDS' means two words maximum.",
      "Numbers written as figures count as one word. Hyphenated words usually count as one.",
      "Speakers often correct themselves. The final version they give is the answer."
    ]
  },
  {
    id: "reading",
    name: "Reading",
    time: "60 minutes, no extra transfer time",
    items: "40 questions, 3 sections",
    same: "Different texts for Academic and General Training",
    detail: [
      "Academic — three long passages from books, journals, magazines and newspapers, written for a non-specialist audience.",
      "General Training Section 1 — short everyday texts: notices, advertisements, timetables.",
      "General Training Section 2 — work-related texts: contracts, staff handbooks, training material.",
      "General Training Section 3 — one longer text of general interest."
    ],
    types: [
      "True / False / Not Given (facts) and Yes / No / Not Given (writer's views)",
      "Matching headings to paragraphs",
      "Matching information, features or sentence endings",
      "Multiple choice",
      "Sentence, summary, note, table and flow-chart completion",
      "Diagram labelling and short-answer questions"
    ],
    tips: [
      "There is no extra time to copy answers across. Write them on the answer sheet as you go.",
      "Not Given means the text does not say — not that you think it is unlikely.",
      "Matching-headings questions usually have more headings than paragraphs. Some are never used.",
      "Answers to most question types appear in the same order as the text.",
      "Roughly 20 minutes per section, but the last section is usually hardest — bank time early."
    ]
  },
  {
    id: "writing",
    name: "Writing",
    time: "60 minutes total",
    items: "2 tasks — Task 2 is worth twice Task 1",
    same: "Task 1 differs between Academic and General Training",
    detail: [
      "Academic Task 1 (20 min, 150+ words) — describe a graph, chart, table, map or process in your own words.",
      "General Training Task 1 (20 min, 150+ words) — write a letter: formal, semi-formal or personal.",
      "Task 2 (40 min, 250+ words) — write an essay responding to an argument or problem. Same style for both versions, though Academic prompts are usually more abstract."
    ],
    types: [
      "Assessed on four equally weighted criteria",
      "Task Achievement (Task 1) / Task Response (Task 2)",
      "Coherence and Cohesion",
      "Lexical Resource",
      "Grammatical Range and Accuracy"
    ],
    tips: [
      "Under-length answers are penalised. Over-length answers are not, but they cost you time and accuracy.",
      "Task 2 carries twice the marks. If you are running out of time, protect Task 2.",
      "Academic Task 1 has no opinions in it — you report what the data shows, including an overview of the main trends.",
      "Answer every part of the Task 2 question. A brilliant essay that answers half the prompt is capped.",
      "Memorised sentences are recognised by examiners and do not raise your score."
    ]
  },
  {
    id: "speaking",
    name: "Speaking",
    time: "11–14 minutes",
    items: "3 parts, face to face with an examiner",
    same: "Identical for Academic and General Training",
    detail: [
      "Part 1 (4–5 min) — introduction and familiar topics: your home, work, studies, hobbies.",
      "Part 2 (3–4 min) — the long turn. You get a cue card, one minute to prepare, then speak for one to two minutes, followed by a short follow-up question.",
      "Part 3 (4–5 min) — a two-way discussion of more abstract ideas connected to the Part 2 topic."
    ],
    types: [
      "Assessed on four equally weighted criteria",
      "Fluency and Coherence",
      "Lexical Resource",
      "Grammatical Range and Accuracy",
      "Pronunciation"
    ],
    tips: [
      "There are no right opinions. You are marked on the English, not the content.",
      "One-word answers cost you marks in Part 1. Give a reason or an example every time.",
      "In Part 2, use the preparation minute to write key words, not full sentences.",
      "If you run dry in Part 2, talk about the opposite, the past, or someone else's experience.",
      "Accent is not penalised. Being hard to understand is."
    ]
  }
];

/* ========================================================================
   2. ACADEMIC vs GENERAL TRAINING vs LIFE SKILLS
   ======================================================================== */
const IELTS_VERSIONS = [
  {
    name: "IELTS Academic",
    who: "University study, and professional registration in some fields.",
    points: [
      "Reading and Writing use academic-style material",
      "Listening and Speaking are the same as General Training",
      "Scored in bands from 0 to 9"
    ]
  },
  {
    name: "IELTS General Training",
    who: "Work, training, and many migration routes.",
    points: [
      "Reading uses workplace and everyday texts",
      "Writing Task 1 is a letter rather than a data description",
      "Scored in bands from 0 to 9"
    ]
  },
  {
    name: "IELTS Life Skills",
    who: "Some UK visa routes where only speaking and listening must be proved.",
    points: [
      "Available at CEFR levels A1, A2 and B1",
      "Tests speaking and listening only — no reading or writing",
      "Reported as pass or fail, not as a band score",
      "The B1 level is one route people use for settlement and citizenship applications"
    ]
  }
];

/* ========================================================================
   3. BAND SCALE — paraphrased summaries, not the official descriptors
   ======================================================================== */
const IELTS_BANDS = [
  { band: "9", label: "Expert",            desc: "Full operational command. Accurate, fluent and complete understanding." },
  { band: "8", label: "Very good",         desc: "Fully operational with only occasional unsystematic inaccuracies. Handles complex argument well." },
  { band: "7", label: "Good",              desc: "Operational command with occasional inaccuracies and misunderstandings. Handles complex language reasonably well." },
  { band: "6", label: "Competent",         desc: "Generally effective command despite some inaccuracies. Can use and understand fairly complex language in familiar situations." },
  { band: "5", label: "Modest",            desc: "Partial command, coping with overall meaning in most situations, though errors are frequent." },
  { band: "4", label: "Limited",           desc: "Basic competence limited to familiar situations. Frequent problems with understanding and expression." },
  { band: "3", label: "Extremely limited", desc: "Conveys and understands only general meaning in very familiar situations." },
  { band: "2", label: "Intermittent",      desc: "No real communication except basic information in familiar situations." },
  { band: "1", label: "Non-user",          desc: "No ability to use the language beyond a few isolated words." },
  { band: "0", label: "Did not attempt",   desc: "No assessable information provided." }
];

// Approximate raw score to band conversions. These vary from paper to paper —
// treat them as a rough guide to progress, never as a prediction.
const IELTS_RAW_BANDS = {
  listening: [
    ["39–40", "9"], ["37–38", "8.5"], ["35–36", "8"], ["32–34", "7.5"], ["30–31", "7"],
    ["26–29", "6.5"], ["23–25", "6"], ["18–22", "5.5"], ["16–17", "5"], ["13–15", "4.5"], ["10–12", "4"]
  ],
  readingAcademic: [
    ["39–40", "9"], ["37–38", "8.5"], ["35–36", "8"], ["33–34", "7.5"], ["30–32", "7"],
    ["27–29", "6.5"], ["23–26", "6"], ["19–22", "5.5"], ["15–18", "5"], ["13–14", "4.5"], ["10–12", "4"]
  ],
  readingGeneral: [
    ["40", "9"], ["39", "8.5"], ["37–38", "8"], ["36", "7.5"], ["34–35", "7"],
    ["32–33", "6.5"], ["30–31", "6"], ["27–29", "5.5"], ["23–26", "5"], ["19–22", "4.5"], ["15–18", "4"]
  ]
};

/* ========================================================================
   4. PRACTICE QUESTIONS
   ======================================================================== */
const IELTS_GROUPS = [
  { id: 1, title: "Reading — True / False / Not Given" },
  { id: 2, title: "Reading — comprehension & detail" },
  { id: 3, title: "Listening — transcript practice" },
  { id: 4, title: "Grammar for IELTS" },
  { id: 5, title: "Academic vocabulary & collocation" },
  { id: 6, title: "Exam strategy & task rules" }
];

const P_URBAN = "<b>Reading passage — Urban green space</b><br>When cities were first industrialised, parks were built largely as ornament: places for respectable citizens to be seen walking on a Sunday. That justification has not survived. Research over the past three decades has shifted the argument onto public health, and the evidence is now difficult to dismiss. Residents living within a short walk of a well-maintained park report lower levels of stress, and studies in several northern European cities have found measurable reductions in the use of prescribed medication for anxiety among those populations. The mechanism is still debated. Some researchers argue the benefit comes from physical activity, since people near parks simply walk more. Others point to attention restoration — the idea that natural environments allow a tired mind to recover in a way that built environments do not. What is not seriously contested is that the benefit exists, and that it is unevenly distributed. In most British cities, the poorest wards have the least green space per resident, and what they do have is more likely to be poorly lit, poorly drained and infrequently maintained.";

const P_SLEEP = "<b>Reading passage — The eight-hour myth</b><br>The belief that human beings require an unbroken block of eight hours' sleep is surprisingly recent. Historical records from pre-industrial Europe describe a pattern of segmented sleep: a first sleep beginning shortly after dusk, a waking period of an hour or two in the middle of the night used for prayer, conversation or quiet work, and then a second sleep until dawn. The historian Roger Ekirch assembled hundreds of such references from diaries, court records and medical texts. The pattern appears to have faded during the nineteenth century, and artificial lighting is usually blamed, though the evidence for a single cause is thin. Modern sleep laboratories have shown that volunteers deprived of artificial light for several weeks often drift back towards a segmented pattern, which suggests the habit is not purely cultural. None of this means that waking in the night is harmless for a modern worker whose alarm is set for six. The distress caused by lying awake may owe as much to the expectation of unbroken sleep as to the waking itself.";

const P_REMOTE = "<b>Listening transcript — Part 3 style</b><br><i>Tutor:</i> So, you've both read the case study on the remote-working trial. Priya, what stood out?<br><i>Priya:</i> The productivity figures, mainly. Output per employee actually rose by about four per cent in the first six months — which I wasn't expecting.<br><i>Tutor:</i> And after six months?<br><i>Priya:</i> It levelled off. It didn't fall back, but the gain stopped.<br><i>Marcus:</i> I thought the more interesting finding was the split by role. For the software team the effect was strongly positive, but the sales team struggled — their figures dropped by nearly seven per cent.<br><i>Tutor:</i> Did the report explain that?<br><i>Marcus:</i> It suggested informal contact matters more in sales. You overhear a colleague handling an objection, and you learn from it. That disappears at home.<br><i>Priya:</i> Although the company's own recommendation wasn't to end the trial — it was to make office attendance optional but structured, so teams choose two fixed days together.";

const P_NOTICE = "<b>Listening transcript — Part 1 style</b><br><i>Clerk:</i> Riverside Leisure Centre, good morning.<br><i>Caller:</i> Hello, I'd like to ask about the swimming membership.<br><i>Clerk:</i> Of course. The standard adult membership is thirty-two pounds fifty a month, or there's an off-peak option at twenty-four pounds.<br><i>Caller:</i> What counts as off-peak?<br><i>Clerk:</i> Weekdays before four in the afternoon, and all day Sunday. Saturdays aren't included, I'm afraid.<br><i>Caller:</i> And is there a joining fee?<br><i>Clerk:</i> There normally is, but it's waived until the end of the month. Can I take your surname?<br><i>Caller:</i> It's Halloran — H-A-double L-O-R-A-N.<br><i>Clerk:</i> Thank you. And the best number to reach you on?<br><i>Caller:</i> Oh seven nine double four, one two three, five six one.";

const IELTS_QUESTIONS = [
/* ---------- Group 1: True / False / Not Given ---------- */
{group:1,passage:P_URBAN,q:"<b>TRUE, FALSE or NOT GIVEN:</b> Victorian parks were originally justified mainly on health grounds.",opts:["True","False","Not Given"],correct:1,ex:"FALSE. The passage says early parks were built largely as ornament, and that the health argument came later. The text states the opposite of the claim, so it is False rather than Not Given."},
{group:1,passage:P_URBAN,q:"<b>TRUE, FALSE or NOT GIVEN:</b> Researchers agree on why green space improves wellbeing.",opts:["True","False","Not Given"],correct:1,ex:"FALSE. The passage explicitly says the mechanism is still debated, and gives two competing explanations — physical activity and attention restoration."},
{group:1,passage:P_URBAN,q:"<b>TRUE, FALSE or NOT GIVEN:</b> Parks in wealthier British wards receive more maintenance funding per hectare.",opts:["True","False","Not Given"],correct:2,ex:"NOT GIVEN. The passage says poorer wards have less green space and that it is more likely to be poorly maintained, but it never gives figures for funding per hectare in wealthier wards. A reasonable inference is still Not Given."},
{group:1,passage:P_URBAN,q:"<b>TRUE, FALSE or NOT GIVEN:</b> Some studies have linked living near parks to lower use of anxiety medication.",opts:["True","False","Not Given"],correct:0,ex:"TRUE. The passage reports measurable reductions in prescribed anxiety medication in studies from several northern European cities."},
{group:1,passage:P_SLEEP,q:"<b>TRUE, FALSE or NOT GIVEN:</b> Segmented sleep was documented in pre-industrial European sources.",opts:["True","False","Not Given"],correct:0,ex:"TRUE. The passage describes diaries, court records and medical texts assembled by Roger Ekirch as evidence of the pattern."},
{group:1,passage:P_SLEEP,q:"<b>TRUE, FALSE or NOT GIVEN:</b> Artificial lighting has been proved to be the cause of the change in sleep patterns.",opts:["True","False","Not Given"],correct:1,ex:"FALSE. The passage says lighting is usually blamed but that the evidence for a single cause is thin. Watch for words like 'proved' — they often turn a True into a False."},
{group:1,passage:P_SLEEP,q:"<b>YES, NO or NOT GIVEN:</b> The writer suggests that anxiety about night waking can be worse than the waking itself.",opts:["Yes","No","Not Given"],correct:0,ex:"YES. The final sentence attributes distress as much to the expectation of unbroken sleep as to the waking. Yes/No/Not Given questions ask about the writer's view, not about external facts."},
{group:1,passage:P_SLEEP,q:"<b>TRUE, FALSE or NOT GIVEN:</b> Roger Ekirch conducted laboratory experiments on segmented sleep.",opts:["True","False","Not Given"],correct:2,ex:"NOT GIVEN. Ekirch is credited with assembling historical records. Laboratory work is mentioned separately, with no link to him. Two true facts in a passage do not make a connection between them true."},

/* ---------- Group 2: Reading comprehension & detail ---------- */
{group:2,passage:P_URBAN,q:"Which best summarises the writer's overall argument?",opts:["Parks are a Victorian relic with little modern purpose","The health benefits of green space are well evidenced but inequitably shared","Physical activity is the only proven benefit of urban parks","British cities have more green space than northern European ones"],correct:1,ex:"The passage establishes the evidence base, then closes on unequal distribution across wards. Main-idea questions reward the option that covers the whole passage, not one paragraph of it."},
{group:2,passage:P_URBAN,q:"What does 'attention restoration' refer to in the passage?",opts:["Improved concentration caused by taking more exercise","The recovery of a tired mind in natural surroundings","A method of maintaining public parks efficiently","A policy of restoring neglected Victorian gardens"],correct:1,ex:"The passage defines it directly as the idea that natural environments let a tired mind recover in a way built environments do not. Vocabulary-in-context questions are almost always answerable from the sentence itself."},
{group:2,passage:P_SLEEP,q:"Complete the sentence with NO MORE THAN TWO WORDS from the passage: In pre-industrial Europe, the gap between sleeps was used for prayer, conversation or ___.",opts:["quiet work","night labour","domestic chores","evening study"],correct:0,ex:"The passage gives the exact phrase 'quiet work'. Completion answers must be copied exactly from the text — a synonym scores zero, even if it means the same thing."},
{group:2,passage:P_REMOTE,q:"According to the discussion, what happened to productivity after six months?",opts:["It continued to rise","It fell back to the original level","It stopped rising but did not fall","It was not measured"],correct:2,ex:"Priya says it levelled off — it didn't fall back, but the gain stopped. Distractors often take one half of a two-part statement."},
{group:2,passage:P_REMOTE,q:"What did the company itself recommend?",opts:["Ending the remote-working trial","Requiring all staff to return full time","Making office attendance optional but structured","Applying different rules to each department"],correct:2,ex:"The final line states the recommendation: optional but structured attendance with two fixed shared days. Note the trap — Marcus discusses departmental differences, but that was his observation, not the recommendation."},

/* ---------- Group 3: Listening — transcript practice ---------- */
{group:3,passage:P_NOTICE,q:"Complete the form: Off-peak membership costs £___ per month.",opts:["24.00","32.50","28.50","24.50"],correct:0,ex:"The clerk gives twenty-four pounds for off-peak and thirty-two pounds fifty for standard. In the real test you would write the figure — always check whether the question wants the price with or without the pound sign."},
{group:3,passage:P_NOTICE,q:"When does off-peak access NOT apply?",opts:["Weekday mornings","All day Sunday","Saturdays","Weekdays before 4pm"],correct:2,ex:"The clerk lists weekdays before four and all day Sunday, then adds that Saturdays aren't included. Listening tests frequently place the exception right after the list — don't stop listening once you think you have the answer."},
{group:3,passage:P_NOTICE,q:"How is the caller's surname spelled?",opts:["Halloran","Haloran","Hallorann","Halorann"],correct:0,ex:"H-A-double L-O-R-A-N gives Halloran. 'Double L' means two Ls. Spelling out names and postcodes is a standard Part 1 task, and misspelling scores zero."},
{group:3,passage:P_NOTICE,q:"What is the caller's phone number?",opts:["07944 123 561","07944 123 651","07494 123 561","07944 132 561"],correct:0,ex:"Oh seven nine double four, one two three, five six one. Speakers group digits deliberately — write them in the same groups you hear rather than trying to reorder as you go."},
{group:3,passage:P_REMOTE,q:"By approximately how much did sales team figures fall?",opts:["Four per cent","Six per cent","Seven per cent","Ten per cent"],correct:2,ex:"Marcus says nearly seven per cent for sales. The four per cent figure belongs to the overall productivity rise — a classic distractor using a number that genuinely appears in the recording."},
{group:3,passage:P_REMOTE,q:"Why does Marcus think sales staff were affected differently?",opts:["They had worse home internet connections","They learn from overhearing colleagues","They were given fewer working hours","They received less management support"],correct:1,ex:"He explains that overhearing a colleague handle an objection is a form of learning that disappears at home. Listen for the reason signposted by 'It suggested…' or 'because'."},

/* ---------- Group 4: Grammar for IELTS ---------- */
{group:4,q:"Choose the best sentence for Academic Writing Task 1.",opts:["The number of visitors went up a lot in 2019.","The number of visitors rose sharply in 2019.","Visitors were going up very much in 2019.","There was a big going up of visitors in 2019."],correct:1,ex:"'Rose sharply' is the precise verb-plus-adverb pairing examiners expect. 'A lot' and 'very much' are informal and vague, which limits your Lexical Resource score."},
{group:4,q:"Which sentence uses a complex structure accurately?",opts:["Although the policy was expensive, but it reduced congestion.","Although the policy was expensive, it reduced congestion.","Despite the policy was expensive, it reduced congestion.","Although the policy expensive, it reduced congestion."],correct:1,ex:"'Although' already signals contrast, so adding 'but' is a double conjunction. 'Despite' must be followed by a noun or -ing form, not a clause: despite the expense / despite being expensive."},
{group:4,q:"Complete: If governments ___ in public transport, congestion would fall.",opts:["will invest","invest","invested","have invested"],correct:2,ex:"This is a second conditional — a hypothetical situation. The pattern is: if + past simple, would + infinitive. Mixing 'will' into the if-clause is one of the most common errors at band 5–6."},
{group:4,q:"Which is the most accurate way to express a cautious claim?",opts:["Social media definitely causes anxiety in all teenagers.","Social media may contribute to anxiety among some teenagers.","Social media is the reason for teenage anxiety.","All teenagers get anxiety from social media."],correct:1,ex:"Hedging with 'may', 'tends to' or 'a significant proportion' shows control of academic register. Absolute claims are easy to attack and often overstate the evidence."},
{group:4,q:"Choose the correct article use: ___ unemployment rate fell to ___ record low.",opts:["The / a","A / the","The / the","— / a"],correct:0,ex:"'The unemployment rate' is a specific, identified rate; 'a record low' introduces a new, non-specific value. Article errors are heavily represented in Grammatical Range and Accuracy marking."},
{group:4,q:"Which sentence correctly reports data?",opts:["The graph shows the percentage of households who owning a car.","The graph shows the percentage of households owning a car.","The graph showing the percentage of households own a car.","The graph shows the percentage of households which own car."],correct:1,ex:"A reduced relative clause — 'households owning a car' — is both correct and concise. The full form 'households that own a car' is equally acceptable."},

/* ---------- Group 5: Academic vocabulary & collocation ---------- */
{group:5,q:"Which verb best collocates with 'a solution'?",opts:["make","do","implement","perform"],correct:2,ex:"We implement, propose, offer or find a solution. Collocation — which words naturally go together — is a large part of what separates band 6 from band 7 in Lexical Resource."},
{group:5,q:"In an essay, which phrase best introduces a counter-argument?",opts:["In addition to this,","It is often argued that,","Conversely, opponents maintain that","For example,"],correct:2,ex:"'Conversely' signals contrast. 'In addition' adds, and 'for example' illustrates — using the wrong signposting word damages Coherence and Cohesion even when the idea is sound."},
{group:5,q:"Choose the most precise word: The figures showed a ___ decline between 2010 and 2015.",opts:["big","gradual","very","much"],correct:1,ex:"'Gradual' describes the nature of the change. Task 1 rewards a range of precise trend language: sharp, steady, marginal, dramatic, gradual."},
{group:5,q:"Which is the best academic replacement for 'a lot of people think'?",opts:["Loads of people reckon","It is widely believed","Everybody knows","People are thinking"],correct:1,ex:"'It is widely believed' is impersonal and appropriately hedged. Informal items such as 'loads' and 'reckon' pull Lexical Resource down even when the grammar is faultless."},
{group:5,q:"'Mitigate' most nearly means:",opts:["To make worse","To make less severe","To prove","To postpone"],correct:1,ex:"To mitigate is to reduce the severity of something — mitigate the effects of flooding. It is often confused with 'militate', which means to be a powerful factor against something."},
{group:5,q:"Which sentence avoids repeating 'important' effectively?",opts:["This important issue is important for important reasons.","This pressing issue matters for several compelling reasons.","This important issue is very important to many important groups.","This issue is important, and its importance is important."],correct:1,ex:"Paraphrasing across a sentence — pressing, matters, compelling — demonstrates range. Repeating a single adjective is one of the clearest markers of a limited lexicon."},

/* ---------- Group 6: Exam strategy & task rules ---------- */
{group:6,q:"How long should you spend on Writing Task 1?",opts:["Around 20 minutes","Around 30 minutes","Around 40 minutes","There is no recommendation"],correct:0,ex:"The recommended split is 20 minutes for Task 1 and 40 for Task 2, because Task 2 carries twice the marks."},
{group:6,q:"What is the minimum word count for Writing Task 2?",opts:["150 words","200 words","250 words","300 words"],correct:2,ex:"Task 2 requires at least 250 words; Task 1 requires at least 150. Writing fewer is penalised directly under Task Response."},
{group:6,q:"In the Listening test, how many times is the recording played?",opts:["Once","Twice","Twice for Part 4 only","As many times as requested"],correct:0,ex:"The recording plays once only. This is why reading the questions ahead during the pauses matters so much."},
{group:6,q:"If a Reading answer requires 'NO MORE THAN TWO WORDS AND/OR A NUMBER', which answer is acceptable?",opts:["a modern concrete bridge","modern bridge 1964","two hundred and fifty","the bridge was modern"],correct:1,ex:"'Modern bridge 1964' is two words plus a number. 'Two hundred and fifty' is four words — write 250 instead. Exceeding the limit scores zero however correct the content is."},
{group:6,q:"How is the overall IELTS band score calculated?",opts:["The highest of the four skill scores","The mean of the four skill scores, rounded to the nearest half band","Reading and Writing only","A weighted score favouring Speaking"],correct:1,ex:"The four skill bands are averaged and rounded to the nearest whole or half band. A mean ending in .25 rounds up to the next half band; .75 rounds up to the next whole band."},
{group:6,q:"In Speaking Part 2, how long do you have to prepare?",opts:["30 seconds","1 minute","2 minutes","No preparation time"],correct:1,ex:"You get one minute with paper and pencil, then speak for one to two minutes. Use the minute for key words and a rough order, not full sentences."},
{group:6,q:"Which is true of IELTS Life Skills B1?",opts:["It tests all four skills","It tests speaking and listening only","It gives a band score from 0 to 9","It replaces the Life in the UK test"],correct:1,ex:"Life Skills tests speaking and listening only and is reported as a pass or fail. It does not replace the Life in the UK test, which is a separate civic knowledge requirement."},
{group:6,q:"In Academic Writing Task 1, what should you avoid?",opts:["An overview of the main trends","Specific data to support your description","Your own opinion about the data","Comparisons between categories"],correct:2,ex:"Task 1 is a report, not an argument. Opinions and explanations of causes are outside the task and cost you marks under Task Achievement."},
{group:6,q:"What happens if you misspell an otherwise correct Listening answer?",opts:["It is marked correct","It scores zero","Half a mark is deducted","It depends on the examiner"],correct:1,ex:"Spelling is marked in Listening and Reading. Both British and American spellings are accepted, but a genuine misspelling scores zero."}
];

/* ========================================================================
   5. WRITING TASK BANK
   ======================================================================== */
const IELTS_WRITING = [
  {
    id: "a1-line",
    version: "Academic",
    task: "Task 1",
    minutes: 20,
    words: 150,
    prompt: "The line graph below shows the number of passengers travelling by rail, bus and bicycle in a European city between 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    data: "Rail: 12m (2005) → 18m (2015) → 31m (2025). Bus: 24m (2005) → 21m (2015) → 14m (2025). Bicycle: 3m (2005) → 5m (2015) → 16m (2025).",
    structure: [
      "Paraphrase the prompt in one sentence — do not copy it.",
      "Write an overview paragraph giving the two or three biggest patterns. No numbers needed here.",
      "Body paragraph 1: the categories that rose, with supporting figures.",
      "Body paragraph 2: the categories that fell or stayed flat, with supporting figures.",
      "No conclusion, no opinion, no speculation about causes."
    ],
    language: ["rose steadily", "climbed sharply", "declined gradually", "levelled off", "more than doubled", "overtook", "by contrast", "over the same period"]
  },
  {
    id: "a1-process",
    version: "Academic",
    task: "Task 1",
    minutes: 20,
    words: 150,
    prompt: "The diagram below shows the process by which household glass is collected, sorted and recycled into new containers. Summarise the information by selecting and reporting the main features.",
    data: "Stages: kerbside collection → transport to sorting facility → colour separation → crushing into cullet → removal of metal and paper contaminants → melting at approximately 1,500°C → moulding into new containers → distribution to bottling plants.",
    structure: [
      "Paraphrase the prompt and say how many stages the process has.",
      "Overview: where the process starts and ends, and whether it is linear or cyclical.",
      "Body 1: the first half of the stages in sequence.",
      "Body 2: the remaining stages through to the finished product.",
      "Use the passive voice heavily — the agent is usually irrelevant."
    ],
    language: ["is collected", "is then transported", "following this", "at this stage", "subsequently", "once the glass has been crushed", "finally", "the cycle then repeats"]
  },
  {
    id: "g1-formal",
    version: "General Training",
    task: "Task 1",
    minutes: 20,
    words: 150,
    prompt: "You recently stayed in a hotel and were unhappy with the service you received. Write a letter to the hotel manager. In your letter: explain why you were staying at the hotel, describe the problems you experienced, and say what action you would like the manager to take.",
    data: "Register: formal. Begin 'Dear Sir or Madam' if you do not know the name; end 'Yours faithfully'. If you use a name, end 'Yours sincerely'.",
    structure: [
      "Open with your purpose in one sentence.",
      "Cover all three bullet points — one short paragraph each.",
      "Keep the tone firm but courteous. Anger costs marks.",
      "Close with a clear request and a sign-off that matches your greeting."
    ],
    language: ["I am writing to express my dissatisfaction with", "On arrival, I found that", "This was particularly inconvenient because", "I would therefore be grateful if you could", "I look forward to your response"]
  },
  {
    id: "g1-personal",
    version: "General Training",
    task: "Task 1",
    minutes: 20,
    words: 150,
    prompt: "A friend has been offered a job in the city where you live and has asked for your advice. Write a letter to your friend. In your letter: say how you feel about the news, describe what living in your city is like, and give advice about finding somewhere to live.",
    data: "Register: informal. Begin 'Dear [name]' or 'Hi [name]'; end 'Best wishes', 'All the best' or 'Take care'.",
    structure: [
      "Open warmly and react to their news.",
      "Cover all three bullets, one paragraph each.",
      "Contractions are fine here — don't, I'd, you'll.",
      "Avoid slang so heavy it obscures meaning."
    ],
    language: ["I was so pleased to hear", "You'll love it here, although", "One thing to watch out for is", "If I were you, I'd", "Let me know when you've decided"]
  },
  {
    id: "t2-opinion",
    version: "Both",
    task: "Task 2 — Opinion",
    minutes: 40,
    words: 250,
    prompt: "Some people believe that university education should be free for all students, while others argue that students should pay the full cost of their courses. Discuss both views and give your own opinion.",
    data: "Question type: discuss both views + opinion. You must do all three things — both views AND a clear position of your own.",
    structure: [
      "Introduction: paraphrase the topic, then state your position clearly. Do not save your opinion for the conclusion.",
      "Body 1: the view you disagree with, presented fairly, with its strongest argument.",
      "Body 2: the view you support, with a developed example.",
      "Body 3 (optional): a concession or limit on your position.",
      "Conclusion: restate your position in different words. Add nothing new."
    ],
    language: ["Those who favour X argue that", "There is some force in this view, since", "However, this overlooks", "In my view, the stronger argument is that", "On balance, I would contend that"]
  },
  {
    id: "t2-problem",
    version: "Both",
    task: "Task 2 — Problem & solution",
    minutes: 40,
    words: 250,
    prompt: "In many cities, traffic congestion is becoming increasingly severe. What are the causes of this problem, and what measures could be taken to address it?",
    data: "Question type: causes + solutions. Two-part questions must be answered in two parts, with roughly equal weight.",
    structure: [
      "Introduction: paraphrase, then state that you will examine causes and remedies.",
      "Body 1: two or three causes, each developed rather than merely listed.",
      "Body 2: solutions that match the causes you named. Unmatched solutions look unplanned.",
      "Conclusion: summarise the link between cause and remedy."
    ],
    language: ["A primary cause of this is", "This is compounded by", "One effective remedy would be to", "A more ambitious approach involves", "Unless these measures are combined"]
  },
  {
    id: "t2-advdis",
    version: "Both",
    task: "Task 2 — Advantages & disadvantages",
    minutes: 40,
    words: 250,
    prompt: "An increasing number of people work remotely rather than commuting to an office. Do the advantages of this development outweigh the disadvantages?",
    data: "Question type: do advantages outweigh disadvantages. Note the word 'outweigh' — you must reach a verdict, not simply list both sides.",
    structure: [
      "Introduction: paraphrase, then answer the question directly — yes, no, or a qualified verdict.",
      "Body 1: the advantages, with a concrete example.",
      "Body 2: the disadvantages, honestly stated.",
      "Conclusion: weigh them explicitly and justify the verdict you gave in the introduction."
    ],
    language: ["The most significant benefit is that", "Set against this", "Critics point to", "While these drawbacks are real, they are outweighed by", "the net effect is"]
  }
];

// Self-assessment rubric — a plain-language checklist, not the official descriptors.
const IELTS_WRITING_RUBRIC = [
  {
    crit: "Task Achievement / Response",
    checks: [
      "Every part of the prompt is answered",
      "Task 1 includes a clear overview paragraph",
      "Task 2 states a position and holds it consistently",
      "Ideas are developed with reasons or examples, not just listed",
      "The answer meets the minimum word count"
    ]
  },
  {
    crit: "Coherence and Cohesion",
    checks: [
      "One central idea per paragraph",
      "Paragraphs are in a logical order",
      "Linking words are varied and used accurately",
      "Referencing (this, these, such) is unambiguous",
      "The reader never has to re-read a sentence to follow it"
    ]
  },
  {
    crit: "Lexical Resource",
    checks: [
      "The prompt is paraphrased, not copied",
      "Topic vocabulary is precise, not generic",
      "Collocations are natural",
      "Word forms are correct (economy / economic / economically)",
      "No informal items or memorised filler phrases"
    ]
  },
  {
    crit: "Grammatical Range and Accuracy",
    checks: [
      "A mix of simple, compound and complex sentences",
      "Correct tense throughout, especially with data and dates",
      "Articles and prepositions are controlled",
      "Subject–verb agreement is consistent",
      "Punctuation marks clause boundaries correctly"
    ]
  }
];

/* ========================================================================
   6. SPEAKING BANK
   ======================================================================== */
const IELTS_SPEAKING_P1 = [
  { topic: "Home", qs: ["Do you live in a house or a flat?", "What is your favourite room, and why?", "Would you like to move somewhere else in future?", "What would you change about your home if you could?"] },
  { topic: "Work & study", qs: ["Do you work or are you a student?", "What made you choose that field?", "What is the most difficult part of what you do?", "Would you like to do the same work in ten years?"] },
  { topic: "Free time", qs: ["What do you usually do at weekends?", "Have your hobbies changed since childhood?", "Do you prefer spending free time alone or with others?", "Is it easy to find free time where you live?"] },
  { topic: "Food", qs: ["What kind of food do you enjoy most?", "Do you prefer eating at home or in restaurants?", "Have eating habits changed in your country?", "Do you ever cook for other people?"] },
  { topic: "Travel", qs: ["How do you usually get around your city?", "Do you enjoy long journeys?", "What is the most interesting place you have visited?", "Would you rather travel alone or in a group?"] },
  { topic: "Technology", qs: ["How often do you use a smartphone?", "Has technology changed how you keep in touch with people?", "Is there any technology you would rather do without?", "Do you think older people find new technology difficult?"] },
  { topic: "Weather", qs: ["What is the weather like where you live?", "Which season do you prefer?", "Does the weather affect your mood?", "Has the climate changed since you were a child?"] },
  { topic: "Reading", qs: ["Do you read much in your free time?", "Did you enjoy reading as a child?", "Do you prefer printed books or screens?", "What kind of books would you like to read more of?"] }
];

const IELTS_SPEAKING_P2 = [
  {
    card: "Describe a skill you would like to learn.",
    bullets: ["what the skill is", "how you would learn it", "how long you think it would take", "and explain why you want to learn it"],
    followUp: "Do many people in your country learn this skill?",
    ideas: ["Name it precisely — not 'music' but 'the double bass'", "Say what prompted the interest", "Describe an obstacle: time, cost, confidence", "Finish with what it would change for you"]
  },
  {
    card: "Describe a place you go to relax.",
    bullets: ["where it is", "how often you go there", "what you do there", "and explain why it helps you relax"],
    followUp: "Is it easy to find quiet places in your city?",
    ideas: ["Use sensory detail — sound, light, temperature", "Contrast it with somewhere stressful", "Mention a specific occasion you went there", "Say whether you go alone or with someone"]
  },
  {
    card: "Describe a decision you took that changed your life.",
    bullets: ["what the decision was", "when you made it", "what alternatives you considered", "and explain how it changed things"],
    followUp: "Do you think people make better decisions when they take longer?",
    ideas: ["Set the scene in one sentence, then move on", "Name the alternative you rejected — it adds range", "Use past perfect: I had been working there for two years when", "Close on the consequence, not the decision"]
  },
  {
    card: "Describe a person who has influenced you.",
    bullets: ["who the person is", "how you know them", "what they are like", "and explain how they influenced you"],
    followUp: "Are role models less important than they used to be?",
    ideas: ["Character adjectives: measured, generous, exacting, unflappable", "Give one anecdote rather than a list of traits", "Say what you took from them specifically", "Avoid celebrities unless you can be concrete"]
  },
  {
    card: "Describe something you own that is important to you.",
    bullets: ["what it is", "how long you have had it", "where you got it", "and explain why it matters to you"],
    followUp: "Do people in your country place too much value on possessions?",
    ideas: ["Physical description first, meaning second", "Sentimental value beats monetary value for this card", "Use it to tell a short story about a person", "Mention what you would do if you lost it"]
  },
  {
    card: "Describe a time you helped someone.",
    bullets: ["who you helped", "what the situation was", "what you did", "and explain how you felt afterwards"],
    followUp: "Should schools teach children to volunteer?",
    ideas: ["Keep the narrative in past tenses throughout", "Include one complication — it makes the story real", "Describe their reaction as well as your own", "Small, ordinary help is easier to describe well than dramatic help"]
  },
  {
    card: "Describe a change you would like to see in your local area.",
    bullets: ["what the change is", "who it would affect", "how difficult it would be", "and explain why you think it is needed"],
    followUp: "Who should be responsible for improving local areas?",
    ideas: ["Conditional language: it would mean that, this could reduce", "Name a specific street or building", "Acknowledge a cost or objection", "Link it to a wider point for Part 3 momentum"]
  },
  {
    card: "Describe an occasion when you had to wait for something.",
    bullets: ["what you were waiting for", "how long you waited", "what you did while waiting", "and explain how you felt about it"],
    followUp: "Are people less patient than they used to be?",
    ideas: ["Time expressions: for what felt like hours, eventually, in the end", "Describe the setting to fill time naturally", "Contrast expectation with reality", "End with whether it was worth it"]
  }
];

const IELTS_SPEAKING_P3 = [
  { theme: "Learning & skills", qs: ["Why do some people find it harder to learn new skills as adults?", "Should schools focus more on practical skills than academic subjects?", "How has the internet changed the way people learn?", "Is it better to learn alone or in a group?"] },
  { theme: "Cities & environment", qs: ["What problems do rapidly growing cities face?", "How can governments encourage people to use public transport?", "Do you think city life is becoming more or less pleasant?", "Whose responsibility is it to protect green space?"] },
  { theme: "Work", qs: ["How has the nature of work changed in the last twenty years?", "Should employers be responsible for their employees' wellbeing?", "Will automation create more jobs than it destroys?", "Is job security more important than job satisfaction?"] },
  { theme: "Society & change", qs: ["Do people feel less connected to their communities than in the past?", "How do attitudes towards family life differ between generations?", "Should governments intervene more in people's lifestyle choices?", "What makes a society successful?"] },
  { theme: "Media & information", qs: ["How can people tell reliable information from unreliable information?", "Has social media improved or damaged public debate?", "Should there be more regulation of news reporting?", "Do people read less carefully than they used to?"] }
];

const IELTS_SPEAKING_LANGUAGE = [
  { fn: "Buying thinking time", phrases: ["That's an interesting question, actually —", "I haven't thought about that before, but I'd say", "Let me think for a second."] },
  { fn: "Giving an opinion", phrases: ["Personally, I'd say that", "I'm fairly convinced that", "It seems to me that", "I'd be inclined to argue that"] },
  { fn: "Adding an example", phrases: ["Take my own city, for instance", "A good case in point is", "I'm thinking particularly of"] },
  { fn: "Conceding a point", phrases: ["There's certainly something in that", "I can see why people say that, although", "That's true up to a point"] },
  { fn: "Speculating", phrases: ["I imagine it would", "There's a good chance that", "It might well be that", "I wouldn't be surprised if"] },
  { fn: "Correcting yourself", phrases: ["Sorry, what I meant was", "Or rather,", "Let me rephrase that"] }
];
