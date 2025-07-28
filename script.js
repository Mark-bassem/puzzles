const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

let timer;
let timeLeft = 15;
const timeDisplay = document.getElementById("time");

function loadPuzzles() {
    puzzles = [
        {
            title: "المرحلة 1",
            question: "ما الشيء الذي كلما أخذت منه كبر؟",
            options: ["الثقب", "الظل", "الهواء", "العقل"],
            answer: "الثقب"
        },
        {
            title: "المرحلة 2",
            question: "شيء له رقبة وليس له رأس، ما هو؟",
            options: ["الزجاجة", "الساعة", "الثوب", "المصباح"],
            answer: "الزجاجة"
        },
        {
            title: "المرحلة 3",
            question: "ما الشيء الذي لا يمشي إلا بالضرب؟",
            options: ["الطبلة", "الساعة", "البندول", "الوتر"],
            answer: "الطبلة"
        },
        {
            title: "المرحلة 4",
            question: "شيء إذا وضعته في الثلاجة لا يبرد، ما هو؟",
            options: ["الفلفل", "الملح", "الفلفل الحار", "الشطة"],
            answer: "الفلفل الحار"
        },
        {
            title: "المرحلة 5",
            question: "ما هو الشيء الذي يوصلك إلى البيت دون أن يتحرك؟",
            options: ["الطريق", "الخريطة", "السيارة", "الشارع"],
            answer: "الطريق"
        },
        {
            title: "المرحلة 6",
            question: "له أوراق وليس نبات، له جلد وليس حيوان، وعلم وليس إنسان، ما هو؟",
            options: ["الكتاب", "الدفتر", "الكمبيوتر", "الخريطة"],
            answer: "الكتاب"
        },
        {
            title: "المرحلة 7",
            question: "إذا كان 2 + 3 = 10، و 7 + 2 = 63، فكم 6 + 5؟",
            options: ["66", "55", "60", "30"],
            answer: "66"
        },
        {
            title: "المرحلة 8",
            question: "أكمل النمط: 1، 4، 9، 16، ؟",
            options: ["25", "20", "23", "18"],
            answer: "25"
        },
        {
            title: "المرحلة 9",
            question: "أنا بداية النهار ونهاية الليل، ولا أُكتب إلا مرة واحدة، فمن أنا؟",
            options: ["حرف النون", "حرف الألف", "حرف الدال", "حرف الهاء"],
            answer: "حرف النون"
        },
        {
            title: "المرحلة 10",
            question: "كم مرة يمكن طرح العدد 1 من الرقم 100؟",
            options: ["مرة واحدة", "100 مرة", "99 مرة", "مرتين"],
            answer: "مرة واحدة"
        },
        {
            title: "المرحلة 11",
            question: "إذا كان بعض التماسيح زواحف، وكل الزواحف تبيض، فهل التماسيح تبيض؟",
            options: ["نعم", "لا", "أحيانًا", "غير مؤكد"],
            answer: "نعم"
        },
        {
            title: "المرحلة 12",
            question: "أيهما أثقل: كيلو حديد أم كيلو قطن؟",
            options: ["القطن", "الحديد", "متساويان", "لا شيء"],
            answer: "متساويان"
        },
        {
            title: "المرحلة 13",
            question: "ما هو الشيء الذي إذا تركته زاد ولم ينقص؟",
            options: ["العمر", "الصدى", "النار", "الوقت"],
            answer: "العمر"
        },
        {
            title: "المرحلة 14",
            question: "ثلاثة رجال عبروا جسراً، الأول رأى الجسر ومشى عليه، الثاني لم يره ولم يمشِ، والثالث رأى الجسر ولم يمشِ. كيف؟",
            options: ["الأول يقود، الثاني طفل يُحمل، الثالث أعمى", "الثلاثة توأم", "لغز خادع", "لا أحد عبر"],
            answer: "الأول يقود، الثاني طفل يُحمل، الثالث أعمى"
        },
        {
            title: "المرحلة 15",
            question: "كلمة من أربع حروف، إذا أزلت أولها أصبحت طائر، وإذا أزلت آخرها أصبحت نوع من الفاكهة، وإذا عكستها أصبحت شيء مخيف؟",
            options: ["برق", "نور", "حرب", "ريح"],
            answer: "حرب"
        },
        {
            title: "المرحلة 16",
            question: "ما هو الشيء الذي إذا أكلته كله تموت، وإذا أكلت نصفه لا بأس؟",
            options: ["سمسم", "سمك", "سم", "سكر"],
            answer: "سم"
        },
        {
            title: "المرحلة 17",
            question: "في أي شهر ينام الناس أقل عدد من الساعات؟",
            options: ["فبراير", "يناير", "أكتوبر", "يوليو"],
            answer: "فبراير"
        },
        {
            title: "المرحلة 18",
            question: "رقم إذا ضربته في نفسه وأضفت له 5 يصبح الناتج 30، ما هو؟",
            options: ["5", "6", "4", "3"],
            answer: "5"
        },
        {
            title: "المرحلة 19",
            question: "إذا كان لديك 5 تفاحات وأخذت 3، كم تفاحة لديك؟",
            options: ["2", "3", "5", "0"],
            answer: "3"
        },
        {
            title: "المرحلة 20",
            question: "أكمل: 2، 4، 8، 16، ؟",
            options: ["20", "30", "32", "24"],
            answer: "32"
        },
        {
            title: "المرحلة 21",
            question: "شيء إذا ضربته كبر، وإذا تركته صغر. ما هو؟",
            options: ["الكرة", "الظل", "الصدى", "النفخ"],
            answer: "الكرة"
        },
        {
            title: "المرحلة 22",
            question: "كم مرة يُمكنك طرح الرقم 10 من الرقم 100؟",
            options: ["10 مرات", "مرة واحدة", "9 مرات", "5 مرات"],
            answer: "مرة واحدة"
        },
        {
            title: "المرحلة 23",
            question: "أنا شيء لا يمكن لمسه، ولا رؤيتي، وإذا قلت اسمي اختفيت. من أنا؟",
            options: ["الصمت", "الظل", "الوهم", "الفكر"],
            answer: "الصمت"
        },
        {
            title: "المرحلة 24",
            question: "رجل لديه أربع بنات، ولكل بنت أخ واحد، كم عدد أولاده؟",
            options: ["4", "5", "6", "8"],
            answer: "5"
        },
        {
            title: "المرحلة 25",
            question: "إذا أمسكت بي، فلن يكون لي وجود. من أنا؟",
            options: ["الوقت", "النور", "الظل", "النَفَس"],
            answer: "النَفَس"
        },
        {
            title: "المرحلة 26",
            question: "شيء إن أضفت له ماء كبر، وإن جف صغر. ما هو؟",
            options: ["الإسفنج", "الرمل", "الخشب", "الورق"],
            answer: "الإسفنج"
        },
        {
            title: "المرحلة 27",
            question: "إذا انقسم ثلاثة رجال على 3 أرغفة بالتساوي، كم رغيف يأخذ كل منهم؟",
            options: ["واحد", "واحد ونصف", "رغيفين", "نصف رغيف"],
            answer: "واحد"
        },
        {
            title: "المرحلة 28",
            question: "شيء يقرصك دون أن تراه أو تلمسه. ما هو؟",
            options: ["الجوع", "البرد", "الوقت", "الندم"],
            answer: "البرد"
        },
        {
            title: "المرحلة 29",
            question: "ما هو الرقم الذي إذا ضربته في نفسه أضفت له 2 يكون الناتج 10؟",
            options: ["2", "3", "4", "5"],
            answer: "3"
        },
        {
            title: "المرحلة 30",
            question: "أي من التالي ليس له علاقة بباقي العناصر: قطار، سيارة، طريق، طائرة؟",
            options: ["قطار", "سيارة", "طريق", "طائرة"],
            answer: "طريق"
        },
        {
            title: "المرحلة 31",
            question: "إذا كانت الشمس تشرق من الشرق وتغرب في الغرب، فأين تشرق إذا نظرت في مرآة؟",
            options: ["الشرق", "الغرب", "الجنوب", "يبدو الغرب"],
            answer: "يبدو الغرب"
        },
        {
            title: "المرحلة 32",
            question: "عدد إذا قسمته على نصفه وزدت عليه 3 يكون الناتج 10، ما هو؟",
            options: ["4", "2", "1", "5"],
            answer: "4"
        },
        {
            title: "المرحلة 33",
            question: "أنا موجود في كل مكان، ولكن لا يمكنك رؤيتي، أتنفسني، فمن أنا؟",
            options: ["الهواء", "الظل", "الريح", "الفراغ"],
            answer: "الهواء"
        },
        {
            title: "المرحلة 34",
            question: "أكمل التسلسل: 100، 50، 25، ؟",
            options: ["10", "12.5", "20", "15"],
            answer: "12.5"
        },
        {
            title: "المرحلة 35",
            question: "كلمة تحتوي على 4 حروف، إذا حذفت الحرف الرابع أصبحت 'دم'، فما هي؟",
            options: ["ندم", "نادم", "نعم", "عدم"],
            answer: "نادم"
        },
        {
            title: "المرحلة 36",
            question: "رجل دخل مطعمًا وطلب كوب ماء. ثم أخرج النادل مسدسًا وصوبه إليه. شكره الرجل وغادر. لماذا؟",
            options: ["كان مصابًا بالحازوقة", "أراد إثارة رعب", "النادل لص", "غلط في الطلب"],
            answer: "كان مصابًا بالحازوقة"
        },
        {
            title: "المرحلة 37",
            question: "أي من الكلمات التالية لا تنتمي للمجموعة؟: سماء، سحاب، مطر، صخرة",
            options: ["مطر", "سحاب", "صخرة", "سماء"],
            answer: "صخرة"
        },
        {
            title: "المرحلة 38",
            question: "كم مربعاً في الشكل التالي: ■ ■\n■ ■؟",
            options: ["4", "5", "6", "9"],
            answer: "5"
        },
        {
            title: "المرحلة 39",
            question: "ما الرقم التالي في السلسلة: 2، 6، 12، 20، ؟",
            options: ["28", "30", "32", "36"],
            answer: "30"
        },
        {
            title: "المرحلة 40",
            question: "رجل لديه 17 خروفًا، مات منهم 9، كم تبقى؟",
            options: ["8", "9", "17", "0"],
            answer: "8"
        },
        {
            title: "المرحلة 41",
            question: "شيء كلما زاد نقص، وكلما أخذت منه كبر. ما هو؟",
            options: ["الثقب", "الوقت", "الحفرة", "الفراغ"],
            answer: "الحفرة"
        },
        {
            title: "المرحلة 42",
            question: "أكمل النمط: A, C, F, J, O, ؟",
            options: ["T", "U", "S", "Q"],
            answer: "U"
        },
        {
            title: "المرحلة 43",
            question: "ما هو الرقم الناقص في السلسلة: 5، 10، 20، ؟، 80",
            options: ["30", "40", "50", "60"],
            answer: "40"
        },
        {
            title: "المرحلة 44",
            question: "شيء لا يمكن كسره، ما هو؟",
            options: ["الوعد", "الحجر", "الهواء", "السر"],
            answer: "الوعد"
        },
        {
            title: "المرحلة 45",
            question: "أنا أملك أسنانًا لكن لا أعض، من أنا؟",
            options: ["المشط", "المنشار", "المفتاح", "الفرشاة"],
            answer: "المشط"
        },
        {
            title: "المرحلة 46",
            question: "إذا كنت في سباق وتجاوزت الشخص الثاني، فأي مركز أنت فيه؟",
            options: ["الثالث", "الأول", "الثاني", "الرابع"],
            answer: "الثاني"
        },
        {
            title: "المرحلة 47",
            question: "ما الشيء الذي لديه رجل واحدة وثلاث عيون؟",
            options: ["إشارة المرور", "الكاميرا", "المروحة", "الميزان"],
            answer: "إشارة المرور"
        },
        {
            title: "المرحلة 48",
            question: "شخص يرى عدوه وصديقه بعين واحدة، من هو؟",
            options: ["الأعور", "الحكم", "السائق", "الحارس"],
            answer: "الأعور"
        },
        {
            title: "المرحلة 49",
            question: "أكمل: 1، 3، 7، 15، ؟",
            options: ["31", "27", "30", "23"],
            answer: "31"
        },
        {
            title: "المرحلة 50",
            question: "إذا اجتمع 3 أطباء وكل واحد له 2 أخ، كم عدد الأشخاص؟",
            options: ["3", "5", "6", "9"],
            answer: "3"
        },
        {
            title: "المرحلة 51",
            question: "شيء لا يمكنه الكلام، لكنه يجيب عندما تحدثه. ما هو؟",
            options: ["الصدى", "المرآة", "الصمت", "الهواء"],
            answer: "الصدى"
        },
        {
            title: "المرحلة 52",
            question: "شخص ينام بحذائه ولا يخلعه أبدًا، من هو؟",
            options: ["الحصان", "رجل الإطفاء", "الجندي", "الشرطي"],
            answer: "الحصان"
        },
        {
            title: "المرحلة 53",
            question: "إذا سقطت طائرة على حدود دولتين، أين يُدفن الناجون؟",
            options: ["في الدولة الأولى", "في الدولة الثانية", "لا يُدفنون", "حسب الجنسية"],
            answer: "لا يُدفنون"
        },
        {
            title: "المرحلة 54",
            question: "يمشي بلا قدمين، ويبكي بلا عينين، ما هو؟",
            options: ["السحاب", "الريح", "النهر", "الصدى"],
            answer: "النهر"
        },
        {
            title: "المرحلة 55",
            question: "ثلاثة أرقام حاصل جمعها يساوي 30: 1، 3، 5، 7، 9، 11، 13. اختر 3 أرقام فقط.",
            options: ["13 + 11 + 5", "13 + 11 + 7", "9 + 11 + 10", "5 + 11 + 13"],
            answer: "13 + 11 + 5"
        },
        {
            title: "المرحلة 56",
            question: "أكمل: 3، 6، 18، 72، ؟",
            options: ["144", "216", "288", "360"],
            answer: "360"
        },
        {
            title: "المرحلة 57",
            question: "إذا كان لديك دلوان، أحدهما ممتلئ والآخر فارغ، كيف تنقل الماء بدون كوب أو أنبوب؟",
            options: ["اقلب الدلو", "استخدم الفم", "استعمل القماش", "غير ممكن"],
            answer: "استعمل القماش"
        },
        {
            title: "المرحلة 58",
            question: "شيء لا يُبتلع لكنه يبتلعك، ما هو؟",
            options: ["البحر", "الظلام", "الزمن", "الصوت"],
            answer: "الظلام"
        },
        {
            title: "المرحلة 59",
            question: "في أي سنة يمكن أن ترى نفس الرقم إذا قلبته؟",
            options: ["1961", "2002", "2112", "1991"],
            answer: "1961"
        },
        {
            title: "المرحلة 60",
            question: "ما هو العدد التالي في السلسلة: 2، 4، 12، 48، ؟",
            options: ["144", "192", "240", "288"],
            answer: "240"
        },
        {
            title: "المرحلة 61",
            question: "شيء يمكنك كسره دون أن تلمسه أو تراه، ما هو؟",
            options: ["الوعد", "الكلمة", "الحلم", "الزجاج"],
            answer: "الوعد"
        },
        {
            title: "المرحلة 62",
            question: "رجل خرج تحت المطر الغزير دون مظلة أو معطف، ولم تبتل شعرة واحدة منه. كيف؟",
            options: ["كان أصلع", "كان داخل سيارة", "كان يحمل كيسًا", "كان يركض بسرعة"],
            answer: "كان أصلع"
        },
        {
            title: "المرحلة 63",
            question: "أكمل: 2، 3، 5، 9، 17، ؟",
            options: ["31", "33", "32", "30"],
            answer: "33"
        },
        {
            title: "المرحلة 64",
            question: "ما هو الشيء الذي لا يُمكن أن يُرى ولكن يُمكن أن يُكسر؟",
            options: ["الصمت", "الفراغ", "الزمن", "المسافة"],
            answer: "الصمت"
        },
        {
            title: "المرحلة 65",
            question: "شيء تراه في الليل ثلاث مرات، وفي النهار مرة واحدة؟",
            options: ["حرف اللام", "حرف النون", "القمر", "حرف الراء"],
            answer: "حرف اللام"
        },
        {
            title: "المرحلة 66",
            question: "ما هو الرقم الذي إذا قسمته على نفسه وأضفت له 1 يصبح الناتج 2؟",
            options: ["1", "2", "0", "10"],
            answer: "1"
        },
        {
            title: "المرحلة 67",
            question: "ترتيب منطقي: 1، 11، 21، 1211، 111221، ؟",
            options: ["312211", "1113213211", "1231", "122333"],
            answer: "312211"
        },
        {
            title: "المرحلة 68",
            question: "كم مرة تستطيع طرح الرقم 5 من الرقم 25؟",
            options: ["1", "5", "3", "لا نهائية"],
            answer: "1"
        },
        {
            title: "المرحلة 69",
            question: "أكمل: 1، 4، 10، 22، ؟",
            options: ["46", "44", "40", "36"],
            answer: "46"
        },
        {
            title: "المرحلة 70",
            question: "شيء يكتب ولا يقرأ؟",
            options: ["القلم", "الحاسوب", "اليد", "العقل"],
            answer: "القلم"
        },
        {
            title: "المرحلة 71",
            question: "ما هو الشيء الذي يكون أخضر في الأرض وأسود في السوق وأحمر في البيت؟",
            options: ["الشاي", "النعناع", "الفلفل", "القهوة"],
            answer: "الشاي"
        },
        {
            title: "المرحلة 72",
            question: "كم مرة تنطبق عقارب الساعة في اليوم؟",
            options: ["22", "24", "12", "44"],
            answer: "22"
        },
        {
            title: "المرحلة 73",
            question: "عدد مكون من رقمين، حاصل ضربهما 12 ومجموعهما 7، ما هو؟",
            options: ["34", "43", "36", "63"],
            answer: "34"
        },
        {
            title: "المرحلة 74",
            question: "شيء يمشي بلا رجلين، ولا يدخل إلا إذا فُتح له الباب، ما هو؟",
            options: ["الضوء", "الماء", "الصوت", "الريح"],
            answer: "الضوء"
        },
        {
            title: "المرحلة 75",
            question: "كم كلمة في هذه الجملة: \"كم كلمة في هذه الجملة؟\"",
            options: ["5", "4", "6", "7"],
            answer: "4"
        },
        {
            title: "المرحلة 76",
            question: "ما هو الشيء الذي نصفه مبلول ونصفه جاف؟",
            options: ["الجزيرة", "السمكة", "الميزان", "اللسان"],
            answer: "السمكة"
        },
        {
            title: "المرحلة 77",
            question: "كم عدد المربعات في رقعة شطرنج 8×8؟",
            options: ["64", "204", "100", "81"],
            answer: "204"
        },
        {
            title: "المرحلة 78",
            question: "ترتيب الكلمات حسب الحجم: بطيخة، تفاحة، فراولة، عنب. أيهم في المنتصف؟",
            options: ["تفاحة", "فراولة", "عنب", "بطيخة"],
            answer: "تفاحة"
        },
        {
            title: "المرحلة 79",
            question: "إذا أعطاك أحدهم نصف تفاحة وقال أنها كاملة، فماذا أعطاك؟",
            options: ["نصف الحقيقة", "حيلة", "كذبة", "نصف تفاحة"],
            answer: "نصف تفاحة"
        },
        {
            title: "المرحلة 80",
            question: "ما هو الشيء الذي كلما لمسته صرخ؟",
            options: ["الجرس", "الكهرباء", "القط", "الصدى"],
            answer: "الجرس"
        },
                {
            title: "المرحلة 81",
            question: "إذا وضعتني في الماء أموت، فمن أكون؟",
            options: ["النار", "السكر", "الملح", "الهواء"],
            answer: "النار"
        },
        {
            title: "المرحلة 82",
            question: "أنا دائمًا أمامك ولكن لا يمكنك رؤيتي. ما أنا؟",
            options: ["المستقبل", "الهواء", "السراب", "الظل"],
            answer: "المستقبل"
        },
        {
            title: "المرحلة 83",
            question: "ما هو الرقم التالي في السلسلة: 2، 6، 12، 20، ؟",
            options: ["30", "28", "24", "26"],
            answer: "30"
        },
        {
            title: "المرحلة 84",
            question: "ما هو الشيء الذي له يد ولا يستطيع التصفيق؟",
            options: ["الساعة", "الكرسي", "المرآة", "الخريطة"],
            answer: "الساعة"
        },
        {
            title: "المرحلة 85",
            question: "شيء إذا استمر وجوده نقص، وإذا نقص زاد؟",
            options: ["الثقب", "الوقت", "المشكلة", "الصبر"],
            answer: "الثقب"
        },
        {
            title: "المرحلة 86",
            question: "ما هو الشيء الذي إذا مشى لا يعود؟",
            options: ["الزمن", "الريح", "الظل", "الحظ"],
            answer: "الزمن"
        },
        {
            title: "المرحلة 87",
            question: "ما هو العدد الذي إذا ضربته بنفسه وأضفت له الناتج يكون 90؟",
            options: ["9", "6", "10", "5"],
            answer: "9"
        },
        {
            title: "المرحلة 88",
            question: "ما هو الشيء الذي لا يمكنك الإمساك به لأكثر من دقائق قليلة؟",
            options: ["أنفاسك", "الريح", "الوقت", "الحرارة"],
            answer: "أنفاسك"
        },
        {
            title: "المرحلة 89",
            question: "رجل وزوجته وأطفاله الثلاثة يريدون عبور النهر. القارب يحمل اثنين فقط، وكل طفل يحتاج شخصًا كبيرًا معه. ما أقل عدد من الرحلات؟",
            options: ["9", "11", "7", "5"],
            answer: "9"
        },
        {
            title: "المرحلة 90",
            question: "ما هو الشيء الذي إذا ضربته لا يؤلمك وإذا كسرتَه لا يُصلَح؟",
            options: ["الثقة", "القلب", "الزجاج", "الوعد"],
            answer: "الثقة"
        },
        {
            title: "المرحلة 91",
            question: "إذا كان الأمس غدًا، فاليوم هو...؟",
            options: ["الخميس", "السبت", "الأحد", "الإثنين"],
            answer: "السبت"
        },
        {
            title: "المرحلة 92",
            question: "إذا قلبت الرقم 9 يصبح؟",
            options: ["6", "P", "q", "ما زال 9"],
            answer: "6"
        },
        {
            title: "المرحلة 93",
            question: "ثلاثة أشخاص عبروا جسرًا، الأول رأى الجسر ومشى عليه، والثاني رآه ولم يمشِ عليه، والثالث لم يره ولم يمشِ عليه. كيف؟",
            options: ["امرأة حامل وطفلها وجنين", "ثلاثة مكفوفين", "رؤية خيالية", "لغز غير منطقي"],
            answer: "امرأة حامل وطفلها وجنين"
        },
        {
            title: "المرحلة 94",
            question: "شيء تشتريه لتأكله لكن لا تأكله؟",
            options: ["الطبق", "الملعقة", "الملح", "المناديل"],
            answer: "الطبق"
        },
        {
            title: "المرحلة 95",
            question: "ما هو الرقم الوحيد الذي لا يتغير عند ضربه بأي رقم؟",
            options: ["0", "1", "-1", "100"],
            answer: "0"
        },
        {
            title: "المرحلة 96",
            question: "شيء إذا أخذت منه كبر؟",
            options: ["الحفرة", "العمر", "الثقب", "الجهل"],
            answer: "الحفرة"
        },
        {
            title: "المرحلة 97",
            question: "كم شهر في السنة يحتوي على 28 يومًا؟",
            options: ["1", "2", "12", "6"],
            answer: "12"
        },
        {
            title: "المرحلة 98",
            question: "أين البحر الذي لا ماء فيه؟",
            options: ["على الخريطة", "في الخيال", "في الحلم", "في القمر"],
            answer: "على الخريطة"
        },
        {
            title: "المرحلة 99",
            question: "رجل في المطر ولم يبتل أي جزء منه، مع أنه بلا مظلة أو قبعة، كيف؟",
            options: ["أصلع", "في الظل", "ليلاً", "في كهف"],
            answer: "أصلع"
        },
        {
            title: "المرحلة 100",
            question: "ما هو الشيء الذي له بداية ولا نهاية؟",
            options: ["الدائرة", "الزمن", "الحلقة", "الفضاء"],
            answer: "الدائرة"
        },
    ];
    showPuzzle();
}

let currentIndex = 0;
let score = 0;
let maxLevel = localStorage.getItem("maxLevel") || 0;

const levelEl = document.getElementById("level");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function startTimer() {
  clearInterval(timer);
  
  // استرجاع الوقت المتبقي من localStorage لو موجود
  const savedTime = localStorage.getItem("timeLeft");
  const savedTimestamp = localStorage.getItem("timestamp");

  if (savedTime && savedTimestamp) {
    const elapsed = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
    timeLeft = parseInt(savedTime) - elapsed;
    if (timeLeft <= 0) {
      handleAnswer(null, "", puzzles[currentIndex].answer, true);
      return;
    }
  } else {
    timeLeft = 15;
  }

  timeDisplay.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    localStorage.setItem("timeLeft", timeLeft);
    localStorage.setItem("timestamp", Date.now());

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleAnswer(null, "", puzzles[currentIndex].answer, true);
    }
  }, 1000);
}

function showPuzzle() {
  const puzzle = puzzles[currentIndex];
  levelEl.innerHTML = `📍 ${puzzle.title} | ⭐ النقاط: ${score} | 🏆 أعلى مرحلة: ${maxLevel}`;
  questionEl.textContent = puzzle.question;
  optionsEl.innerHTML = "";

  puzzle.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.onclick = () => handleAnswer(btn, option, puzzle.answer);
    optionsEl.appendChild(btn);
  });
  startTimer();
}

function handleAnswer(button, selected, correct, isTimeout = false) {
  clearInterval(timer);
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    if (!isTimeout) score += 10;
    if (button) button.classList.add("correct");
  } else {
    if (button) button.classList.add("wrong");
    buttons.forEach(btn => {
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      }
    });

  }
  if (selected === correct && !isTimeout) {
  correctSound.play();
  } else {
  wrongSound.play();
  }

  localStorage.removeItem("timeLeft");
  localStorage.removeItem("timestamp");

  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < puzzles.length) {
    if (currentIndex + 1 > maxLevel) {
      maxLevel = currentIndex + 1;
      localStorage.setItem("maxLevel", maxLevel);
    }
    showPuzzle();
    nextBtn.classList.add("hidden");
  } else {
    document.getElementById("puzzle-box").classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `
      ✅ لقد أنهيت اللعبة!
      <br>⭐ نتيجتك: <strong>${score}</strong> نقطة
      <br>🏆 أعلى مرحلة وصلت لها: <strong>${maxLevel}</strong>
      <br><br><button onclick="restartGame()">🔄 ابدأ من جديد</button>
    `;
  }
};

function restartGame() {
  currentIndex = 0;
  score = 0;
  document.getElementById("puzzle-box").classList.remove("hidden");
  resultEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  showPuzzle();
}

function resetProgress() {
  localStorage.removeItem("maxLevel");
  location.reload();
}

window.onload = loadPuzzles;