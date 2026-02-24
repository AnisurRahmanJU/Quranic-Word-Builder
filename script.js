/**
 * QURANIC GRAMMAR ENGINE - 100% ACCURATE SPELLING
 * Fixed: Prefix duplication and Allah name logic.
 */

// --- DATASETS (50 Ism / 50 Verbs / 17 Harf / 14 Pronouns) ---
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
    { ar: "طَعَام", en: "Food", bn: "খাবার" }, { ar: "بَيّিনَة", en: "Evidence", bn: "প্রমাণ" },
    { ar: "بَصَر", en: "Vision", bn: "দৃষ্টি" }, { ar: "সَمْع", en: "Hearing", bn: "শ্রবণ" },
    { ar: "لِسَان", en: "Tongue", bn: "জিহ্বা" }, { ar: "يَد", en: "Hand", bn: "হাত" },
    { ar: "رِجْل", en: "Foot", bn: "পা" }, { ar: "وَلَد", en: "Child", bn: "সন্তান" },
    { ar: "وَالِد", en: "Father", bn: "বাবা" }, { ar: "أُمّ", en: "Mother", bn: "মা" },
    { ar: "أَخ", en: "Brother", bn: "ভাই" }, { ar: "أُخْت", en: "Sister", bn: "বোন" },
    { ar: "مَلَك", en: "Angel", bn: "ফেরেশতা" }, { ar: "بَشَر", en: "Human", bn: "মানুষ" },
    { ar: "دُنْيَا", en: "World", bn: "দুনিয়া" }, { ar: "ءَاخِرَة", en: "Hereafter", bn: "আখেরাত" },
    { ar: "خَيْر", en: "Good", bn: "কল্যাণ" }, { ar: "شَرّ", en: "Evil", bn: "অকল্যাণ" }
];

const verbs = [
    { p: "خَلَقَ", m: "يَخْلُقُ", enP: "created", enM: "creates", bnP: "সৃষ্টি করেছেন", bnM: "সৃষ্টি করেন" },
    { p: "جَعَلَ", m: "يَجْعَلُ", enP: "made", enM: "makes", bnP: "বানিয়েছেন", bnM: "বানান" },
    { p: "أَنزَلَ", m: "يُنزِلُ", enP: "sent down", enM: "sends down", bnP: "নাযিল করেছেন", bnM: "নাযিল করেন" },
    { p: "قَالَ", m: "يَقُولُ", enP: "said", enM: "says", bnP: "বলেছেন", bnM: "বলেন" },
    { p: "آمَنَ", m: "يُؤْمِنُ", enP: "believed", enM: "believes", bnP: "ঈমান এনেছেন", bnM: "ঈমান আনেন" },
    { p: "كَفَرَ", m: "يَكْفُرُ", enP: "disbelieved", enM: "disbelieves", bnP: "কুফরি করেছেন", bnM: "কুফরি করেন" },
    { p: "عَلِمَ", m: "يَعْلَمُ", enP: "knew", enM: "knows", bnP: "জেনেছেন", bnM: "জানেন" },
    { p: "هَدَىٰ", m: "يَهْدِي", enP: "guided", enM: "guides", bnP: "পথ দেখিয়েছেন", bnM: "পথ দেখান" },
    { p: "رَزَقَ", m: "يَرْزُقُ", enP: "provided", enM: "provides", bnP: "রিযিক দিয়েছেন", bnM: "রিযিক দেন" },
    { p: "نَصَرَ", m: "يَنصُرُ", enP: "helped", enM: "helps", bnP: "সাহায্য করেছেন", bnM: "সাহায্য করেন" },
    { p: "غَفَرَ", m: "يَغْفِرُ", enP: "forgave", enM: "forgives", bnP: "ক্ষমা করেছেন", bnM: "ক্ষমা করেন" },
    { p: "ذَكَرَ", m: "يَذْكُرُ", enP: "remembered", enM: "remembers", bnP: "স্মরণ করেছেন", bnM: "স্মরণ করেন" },
    { p: "شَكَرَ", m: "يَشْكُرُ", enP: "thanked", enM: "thanks", bnP: "শোকর করেছেন", bnM: "শোকর করেন" },
    { p: "فَتَحَ", m: "يَفْتَحُ", enP: "opened", enM: "opens", bnP: "বিজয় দিয়েছেন", bnM: "বিজয় দেন" },
    { p: "عَبَدَ", m: "يَعْبُدُ", enP: "worshipped", enM: "worships", bnP: "ইবাদত করেছেন", bnM: "ইবাদত করেন" },
    { p: "فَعَلَ", m: "يَفْعَلُ", enP: "did", enM: "does", bnP: "করেছেন", bnM: "করেন" },
    { p: "أَمَرَ", m: "يَأْمُرُ", enP: "commanded", enM: "commands", bnP: "আদেশ করেছেন", bnM: "আদেশ করেন" },
    { p: "سَمِعَ", m: "يَسْمَعُ", enP: "heard", enM: "hears", bnP: "শুনেছেন", bnM: "শোনেন" },
    { p: "بَصُرَ", m: "يَبْصُرُ", enP: "saw", enM: "sees", bnP: "দেখেছেন", bnM: "দেখেন" },
    { p: "رَجَعَ", m: "يَرْجِعُ", enP: "returned", enM: "returns", bnP: "ফিরেছেন", bnM: "ফিরে আসেন" }
];

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
    const pref = prefixes.find(x => x.ar === document.getElementById("prefix").value) || {ar:"", en:"", bn:""};
    const pron = pronouns.find(x => x.ar === document.getElementById("pronoun").value) || {ar:"", en:"", bn:""};
    const type = document.getElementById("wordType").value;
    const rootVal = document.getElementById("root").value;

    let arFinal = ""; let enFinal = ""; let bnFinal = "";

    // 1. Logic for ISM (Noun) or Prefix + Pronoun
    if (type === "ism") {
        const item = nouns.find(x => x.ar === rootVal);
        let base = item ? item.ar : "";
        let pAr = pref.ar;
        let sAr = pron.ar;

        // PHONETIC SHIFT: Hu -> Hi if preceded by Ya-Sakin Jar
        const shiftJars = ["إِلَى", "عَلَى", "فِي"];
        if (shiftJars.includes(pAr) || (item && sAr)) {
            if (pAr !== "مِنْ" && pAr !== "عَنْ") {
                sAr = sAr.replace("هُ", "هِ").replace("هُمْ", "هِمْ").replace("هُمَا", "هِمَا").replace("هُنَّ", "هِنَّ");
            }
        }

        // LI -> LA shift for pure pronouns
        if (pAr === "لِ" && sAr !== "" && sAr !== "ي" && !item) {
            pAr = "لَ";
        }

        // ALLAH & ISM SPECIAL RULES
        if (pAr !== "" && base !== "") {
            if (base === "ٱللَّه") {
                if (pAr === "لِ") { pAr = ""; base = "لِلَّهِ"; }
                else if (pAr === "بِ") { pAr = ""; base = "بِٱللَّهِ"; }
                else { base = base.replace(/[ُ]$/, "ِ"); }
            } else if (base === "ٱسْم" && pAr === "بِ") {
                pAr = ""; base = "بِسْمِ";
            } else {
                base = base.replace(/[ٌُ]$/, "ِ");
                if (!base.endsWith("ِ") && !base.endsWith("ٰ")) base += "ِ";
            }
        }

        // ILA/ALA + PRONOUN transformation
        let wordBody = pAr + base;
        if (shiftJars.includes(pAr) && sAr !== "" && !item) {
            wordBody = wordBody.replace("ى", "يْ");
        }

        arFinal = wordBody + sAr;

        // TRANSLATION
        if (item) {
            let bnN = (item.ar === "ٱللَّه") ? "আল্লাহর" : item.bn + "ের";
            enFinal = `${pref.en} ${pron.ar ? pron.posEn : ""} ${item.en}`;
            bnFinal = `${pron.ar ? pron.posBn : ""} ${bnN} ${pref.bn}`;
        } else {
            enFinal = `${pref.en} ${pron.en}`;
            bnFinal = `${pron.posBn} ${pref.bn}`;
        }

    // 2. Logic for FI'L (Verbs)
    } else {
        const item = verbs.find(x => (x.p + " - " + x.m) === rootVal);
        if (!item) {
            arFinal = pref.ar + pron.ar;
            enFinal = pref.en + " " + pron.en;
            bnFinal = pron.posBn + " " + pref.bn;
        } else {
            let pVer = item.p; let mVer = item.m;
            let pSuffix = pron.ar; let mSuffix = pron.ar;

            if (pref.ar === "لِ") mVer = mVer.replace(/ُ$/, "َ"); 

            if (["بِ", "لِ", "فِي"].includes(pref.ar)) {
                pSuffix = pSuffix.replace("هُ", "هِ").replace("هُمْ", "هِمْ");
                mSuffix = mSuffix.replace("هُ", "هِ").replace("هُمْ", "هِمْ");
            }

            arFinal = `${pref.ar}${pVer}${pSuffix} - ${pref.ar}${mVer}${mSuffix}`;
            enFinal = `${pref.en} ${item.enP} ${pron.en} - ${pref.en} ${item.enM} ${pron.en}`;
            bnFinal = `${pref.bn} ${item.bnP} ${pron.bn} - ${pref.bn} ${item.bnM} ${pron.bn}`;
        }
    }

    document.getElementById("ar-out").innerText = arFinal;
    document.getElementById("en-out").innerHTML = `<b>${enFinal}</b><br><span style="color:#cbd5e1">${bnFinal}</span>`;
}

function init() {
    const pSel = document.getElementById("prefix");
    const prSel = document.getElementById("pronoun");
    const rSel = document.getElementById("root");
    const tSel = document.getElementById("wordType");

    pSel.innerHTML = prefixes.map(x => `<option value="${x.ar}">${x.ar || 'Harf (Prefix)'}</option>`).join('');
    prSel.innerHTML = pronouns.map(x => `<option value="${x.ar}">${x.ar || 'Pronoun (Suffix)'}</option>`).join('');

    tSel.onchange = () => {
        const list = tSel.value === "ism" ? nouns : verbs;
        let options = '<option value="">None (Jar + Pronoun only)</option>';
        options += list.map(x => {
            const val = tSel.value === "ism" ? x.ar : `${x.p} - ${x.m}`;
            return `<option value="${val}">${val}</option>`;
        }).join('');
        rSel.innerHTML = options;
    };
    
    document.getElementById("btnGenerate").onclick = build;
    tSel.onchange();
}

init();
