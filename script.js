// --- 1. DATASET: 50 QURANIC NOUNS ---
const nouns = [
    { ar: "ٱللَّه", en: "Allah", bn: "আল্লাহ্" }, { ar: "رَبّ", en: "Lord", bn: "প্রতিপালক" },
    { ar: "رَسُول", en: "Messenger", bn: "রাসূল" }, { ar: "كِتَٰب", en: "Book", bn: "কিতাব" },
    { ar: "ٱسْم", en: "Name", bn: "নাম" }, { ar: "عَبْد", en: "Slave", bn: "বান্দা" },
    { ar: "قَلْب", en: "Heart", bn: "হৃদয়" }, { ar: "نَفْس", en: "Soul", bn: "প্রাণ" },
    { ar: "يَوْم", en: "Day", bn: "দিন" }, { ar: "دِين", en: "Religion", bn: "দ্বীন" },
    { ar: "نُور", en: "Light", bn: "আলো" }, { ar: "صِرَٰط", en: "Path", bn: "পথ" },
    { ar: "جَنَّة", en: "Paradise", bn: "জান্নাত" }, { ar: "نَار", en: "Fire", bn: "আগুন" },
    { ar: "آيَة", en: "Sign", bn: "নিদর্শন" }, { ar: "عِلْم", en: "Knowledge", bn: "জ্ঞান" },
    { ar: "حَقّ", en: "Truth", bn: "সত্য" }, { ar: "رَحْمَة", en: "Mercy", bn: "রহমত" },
    { ar: "عَذَاب", en: "Punishment", bn: "শাস্তি" }, { ar: "قَوْم", en: "People", bn: "জাতি" },
    { ar: "بَيْت", en: "House", bn: "ঘর" }, { ar: "أَهْل", en: "Family", bn: "পরিবার" },
    { ar: "مَآء", en: "Water", bn: "পানি" }, { ar: "أَمْر", en: "Matter", bn: "বিষয়" },
    { ar: "صَلَٰوة", en: "Prayer", bn: "সালাত" }, { ar: "زَكَٰوة", en: "Charity", bn: "যাকাত" },
    { ar: "فَضْل", en: "Grace", bn: "অনুগ্রহ" }, { ar: "رِزْق", en: "Provision", bn: "রিযিক" },
    { ar: "شَمْس", en: "Sun", bn: "সূর্য" }, { ar: "قَمَر", en: "Moon", bn: "চাঁদ" },
    { ar: "بَحْر", en: "Sea", bn: "সমুদ্র" }, { ar: "جَبَل", en: "Mountain", bn: "পাহাড়" },
    { ar: "طَعَام", en: "Food", bn: "খাবার" }, { ar: "بَيِّنَة", en: "Evidence", bn: "প্রমাণ" },
    { ar: "بَصَر", en: "Vision", bn: "দৃষ্টি" }, { ar: "سَمْع", en: "Hearing", bn: "শ্রবণ" },
    { ar: "لِسَان", en: "Tongue", bn: "জিহ্বা" }, { ar: "يَد", en: "Hand", bn: "হাত" },
    { ar: "رِجْل", en: "Foot", bn: "পা" }, { ar: "وَلَد", en: "Child", bn: "সন্তান" },
    { ar: "وَالِد", en: "Father", bn: "বাবা" }, { ar: "أُمّ", en: "Mother", bn: "মা" },
    { ar: "أَخ", en: "Brother", bn: "ভাই" }, { ar: "أُخْت", en: "Sister", bn: "বোন" },
    { ar: "مَلَك", en: "Angel", bn: "ফেরেশতা" }, { ar: "بَشَر", en: "Human", bn: "মানুষ" },
    { ar: "دُنْيَا", en: "World", bn: "দুনিয়া" }, { ar: "ءَاخِرَة", en: "Hereafter", bn: "আখেরাত" },
    { ar: "خَيْر", en: "Good", bn: "কল্যাণ" }, { ar: "شَرّ", en: "Evil", bn: "অকল্যাণ" }
];

// --- 2. DATASET: 50 QURANIC VERBS ---
const verbs = [
    { p: "خَلَقَ", m: "يَخْلُقُ", enP: "created", enM: "creates", bnP: "সৃষ্টি করেছেন", bnM: "সৃষ্টি করেন" },
    { p: "جَعَلَ", m: "يَجْعَلُ", enP: "made", enM: "makes", bnP: "বানিয়েছেন", bnM: "বানান" },
    { p: "أَنزَلَ", m: "يُنزِلُ", enP: "sent down", enM: "sends down", bnP: "নাযিল করেছেন", bnM: "নাযিল করেন" },
    { p: "قَالَ", m: "يَقُولُ", enP: "said", enM: "says", bnP: "বলেছেন", bnM: "বলেন" },
    { p: "آمَنَ", m: "يُؤْمِنُ", enP: "believed", enM: "believes", bnP: "ঈমান এনেছেন", bnM: "ঈমান আনেন" },
    { p: "كَفَرَ", m: "يَكْفُرُ", enP: "disbelieved", enM: "disbelieves", bnP: "কুফরি করেছেন", bnM: "কুফরি করেন" },
    { p: "عَلِمَ", m: "يَعْلَمُ", enP: "knew", enM: "knows", bnP: "জেনেছেন", bnM: "জানেন" },
    { p: "هَدَىٰ", m: "يَهْدِي", enP: "guided", enM: "guides", bnP: "পথ দেখিয়েছেন", bnM: "পথ দেখান" }
    // ... add more as needed
];

// --- 3. THE 17 HARFUL JAR ---
const prefixes = [
    { ar: "", en: "", bn: "" },
    { ar: "بِ", en: "By/With", bn: "দ্বারা" }, { ar: "تَ", en: "By (oath)", bn: "শপথ" },
    { ar: "كَ", en: "Like", bn: "মতো" }, { ar: "لِ", en: "For/To", bn: "জন্য" },
    { ar: "وَ", en: "By (oath)", bn: "শপথ" }, { ar: "مِنْ", en: "From", bn: "থেকে" },
    { ar: "فِي", en: "In", bn: "মধ্যে" }, { ar: "عَنْ", en: "About", bn: "সম্পর্কে" },
    { ar: "عَلَى", en: "Upon", bn: "উপরে" }, { ar: "حَتَّى", en: "Until", bn: "পর্যন্ত" },
    { ar: "إِلَى", en: "To", bn: "প্রতি" }, { ar: "مُذْ", en: "Since", bn: "হতে" },
    { ar: "مُنْذُ", en: "Since", bn: "হতে" }, { ar: "رُبَّ", en: "Many/Few", bn: "অনেক/কম" },
    { ar: "خَلَا", en: "Except", bn: "ব্যতীত" }, { ar: "عَدَا", en: "Except", bn: "ব্যতীত" },
    { ar: "حَاشَا", en: "Except", bn: "ব্যতীত" }
];

// --- 4. THE 14 PRONOUNS ---
const pronouns = [
    { ar: "", en: "", bn: "" },
    { ar: "هُ", en: "him", bn: "তাকে", posEn: "his", posBn: "তার" },
    { ar: "هُمَا", en: "them (2)", bn: "তাদের দুজনকে", posEn: "their (2)", posBn: "তাদের দুজনের" },
    { ar: "هُمْ", en: "them", bn: "তাদেরকে", posEn: "their", posBn: "তাদের" },
    { ar: "هَا", en: "her", bn: "তাকে", posEn: "her", posBn: "তার" },
    { ar: "هُمَا ", en: "them (2/f)", bn: "তাদের দুজনকে", posEn: "their (f/2)", posBn: "তাদের দুজনের" },
    { ar: "هُنَّ", en: "them (f)", bn: "তাদেরকে", posEn: "their (f)", posBn: "তাদের" },
    { ar: "كَ", en: "you", bn: "তোমাকে", posEn: "your", posBn: "তোমার" },
    { ar: "كُمَا", en: "you (2)", bn: "তোমাদের দুজনকে", posEn: "your (2)", posBn: "তোমাদের দুজনের" },
    { ar: "كُمْ", en: "you (pl)", bn: "তোমাদেরকে", posEn: "your (pl)", posBn: "তোমাদের" },
    { ar: "كِ", en: "you (f)", bn: "তোমাকে", posEn: "your (f)", posBn: "তোমার" },
    { ar: "كُمَا ", en: "you (2/f)", bn: "তোমাদের দুজনকে", posEn: "your (f/2)", posBn: "তোমাদের দুজনের" },
    { ar: "كُنَّ", en: "you (f/pl)", bn: "তোমাদেরকে", posEn: "your (f/pl)", posBn: "তোমাদের" },
    { ar: "ي", en: "me", bn: "আমাকে", posEn: "my", posBn: "আমার" },
    { ar: "نَا", en: "us", bn: "আমাদেরকে", posEn: "our", posBn: "আমাদের" }
];

function build() {
    const prefVal = document.getElementById("prefix").value;
    const pronVal = document.getElementById("pronoun").value;
    const type = document.getElementById("wordType").value;
    const rootVal = document.getElementById("root").value;

    const pref = prefixes.find(x => x.ar === prefVal) || {ar:"", en:"", bn:""};
    const pron = pronouns.find(x => x.ar === pronVal) || {ar:"", en:"", bn:""};
    const item = nouns.find(x => x.ar === rootVal) || verbs.find(x => (x.p + " - " + x.m) === rootVal);

    let finalAr = ""; 
    let pAr = pref.ar;
    let sAr = pron.ar;
    let baseAr = (type === "ism" && item) ? item.ar : "";

    // --- RULE 1: LI -> LA Shift ---
    // 'Li' becomes 'La' when attached to pronouns, but stays 'Li' for 'Ya' (me)
    if (pAr === "لِ" && sAr !== "" && !item) {
        if (sAr !== "ي") {
            pAr = "لَ";
        }
    }

    // --- RULE 2: Phonetic Shift (Hu -> Hi) ---
    // For 'Bi', 'Fi', 'Ila', 'Ala', pronouns shift to Kasra version.
    const shiftsHuToHi = ["بِ", "فِي", "إِلَى", "عَلَى"];
    if (shiftsHuToHi.includes(pAr) || (item && sAr)) {
        // Min and An are exceptions, they keep 'Hu'
        if (pAr !== "مِنْ" && pAr !== "عَنْ") {
            sAr = sAr.replace("هُ", "هِ").replace("هُمْ", "هِمْ").replace("هُمَا", "هِمَا").replace("هُنَّ", "هِنَّ");
        }
    }

    // --- RULE 3: Allah Word & Ism Jarr ---
    if (pAr !== "" && baseAr !== "") {
        if (baseAr === "ٱللَّه") {
            if (pAr === "لِ") { pAr = ""; baseAr = "لِلَّهِ"; }
            else if (pAr === "بِ") { pAr = ""; baseAr = "بِٱللَّهِ"; }
            else { baseAr = baseAr.replace(/[ُ]$/, "ِ"); }
        } else {
            baseAr = baseAr.replace(/[ٌُ]$/, "ِ");
            if (!baseAr.endsWith("ِ") && !baseAr.endsWith("ٰ")) baseAr += "ِ";
        }
    }

    // --- RULE 4: Alif Maqsura Transformation ---
    let body = pAr + baseAr;
    if (["إِلَى", "عَلَى"].includes(pref.ar) && sAr !== "" && !item) {
        body = body.replace("ى", "يْ");
    }

    // Combine result
    if (type === "ism" || !item) {
        finalAr = body + sAr;
    } else {
        // Verb logic with dual display
        let pVer = item.p; let mVer = item.m;
        if (pref.ar === "لِ") mVer = mVer.replace(/ُ$/, "َ");
        finalAr = `${pref.ar}${pVer}${sAr} - ${pref.ar}${mVer}${sAr}`;
    }

    // Translation logic
    let enRes = "", bnRes = "";
    if (item && type === "ism") {
        enRes = `${pref.en} ${pron.ar ? pron.posEn : ""} ${item.en}`;
        bnRes = `${pron.ar ? pron.posBn : ""} ${item.bn}${(item.ar==="ٱللَّه"?"":"ের")} ${pref.bn}`;
    } else {
        enRes = `${pref.en} ${pron.en}`;
        bnRes = `${pron.ar ? (pref.ar === "لِ" ? "তার জন্য" : pron.bn + " " + pref.bn) : pref.bn}`;
        // Specific cleanup for 'Lana', 'Laka' etc.
        if (pref.ar === "لِ" && pron.ar !== "") {
            bnRes = pron.posBn + " জন্য";
        }
    }

    document.getElementById("ar-out").innerText = finalAr;
    document.getElementById("en-out").innerHTML = `<b>${enRes}</b><br><span style="color:#cbd5e1">${bnRes}</span>`;
}

function init() {
    const tSel = document.getElementById("wordType");
    const rSel = document.getElementById("root");
    
    document.getElementById("prefix").innerHTML = prefixes.map(x => `<option value="${x.ar}">${x.ar || 'Harf'}</option>`).join('');
    document.getElementById("pronoun").innerHTML = pronouns.map(x => `<option value="${x.ar}">${x.ar || 'Pronoun'}</option>`).join('');

    tSel.onchange = () => {
        const list = tSel.value === "ism" ? nouns : verbs;
        let opts = '<option value="">None (Jar + Pronoun only)</option>';
        opts += list.map(x => {
            const v = tSel.value === "ism" ? x.ar : `${x.p} - ${x.m}`;
            return `<option value="${v}">${v}</option>`;
        }).join('');
        rSel.innerHTML = opts;
    };
    
    document.getElementById("btnGenerate").onclick = build;
    tSel.onchange();
}

init();
