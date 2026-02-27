// --- 1. DATASET: 50 QURANIC NOUNS ---
const nouns = [
    { ar: "ٱللَّه", en: "Allah", bn: "আল্লাহ" }, { ar: "رَبّ", en: "Lord", bn: "প্রতিপালক" },
    { ar: "رَسُول", en: "Messenger", bn: "রাসূল" }, { ar: "كِتَٰب", en: "Book", bn: "কিতাব" },
    { ar: "ٱاسْم", en: "Name", bn: "নাম" }, { ar: "عَبْد", en: "Slave", bn: "বান্দা" },
    { ar: "قَلْب", en: "Heart", bn: "হৃদয়" }, { ar: "نَفْس", en: "Soul", bn: "প্রাণ" },
    { ar: "يَوْم", en: "Day", bn: "দিন" }, { ar: "دِين", en: "Religion", bn: "দ্বীন" },
    { ar: "نُور", en: "Light", bn: "আলো" }, { ar: "صِرَٰط", en: "Path", bn: "পথ" },
    { ar: "جَنَّة", en: "Paradise", bn: "জান্নাত" }, { ar: "نَار", en: "Fire", bn: "আগুন" },
    { ar: "آيَة", en: "Sign", bn: "নিদর্শন" }, { ar: "عِلْم", en: "Knowledge", bn: "জ্ঞান" },
    { ar: "حَقّ", en: "Truth", bn: "সত্য" }, { ar: "رَحْمَة", en: "Mercy", bn: "রহমত" },
    { ar: "عَذَاب", en: "Punishment", bn: "শাস্তি" }, { ar: "قَوْم", en: "People", bn: "জাতি" },
    { ar: "بَيْت", en: "House", bn: "ঘর" }, { ar: "أَهْل", en: "Family", bn: "পরিবার" },
    { ar: "مَآء", en: "Water", bn: "পানি" }, { ar: "أَمْر", en: "Matter", bn: "বিষয়" },
    { ar: "صَلَٰوة", en: "Prayer", bn: "সালাত" }, { ar: "زَكَٰوة", en: "Charity", bn: "যাকাত" },
    { ar: "فَضْل", en: "Grace", bn: "অনুগ্রহ" }, { ar: "رِزْق", en: "Provision", bn: "রিযিক" },
    { ar: "شَمْس", en: "Sun", bn: "সূর্য" }, { ar: "قَمَر", en: "Moon", bn: "চাঁদ" },
    { ar: "بَحْر", en: "Sea", bn: "সমুদ্র" }, { ar: "جَبَل", en: "Mountain", bn: "পাহাড়" },
    { ar: "طَعَام", en: "Food", bn: "খাবার" }, { ar: "بَيِّনَة", en: "Evidence", bn: "প্রমাণ" },
    { ar: "بَصَر", en: "Vision", bn: "দৃষ্টি" }, { ar: "سَمْع", en: "Hearing", bn: "শ্রবণ" },
    { ar: "لِسَان", en: "Tongue", bn: "জিহ্বা" }, { ar: "يَد", en: "Hand", bn: "হাত" },
    { ar: "رِجْل", en: "Foot", bn: "পা" }, { ar: "وَلَد", en: "Child", bn: "সন্তান" },
    { ar: "وَالِد", en: "Father", bn: "বাবা" }, { ar: "أُمّ", en: "Mother", bn: "মা" },
    { ar: "أَخ", en: "Brother", bn: "ভাই" }, { ar: "أُخْت", en: "Sister", bn: "বোন" },
    { ar: "مَلَك", en: "Angel", bn: "ফেরেশতা" }, { ar: "بَشَر", en: "Human", bn: "মানুষ" },
    { ar: "دُنْيَا", en: "World", bn: "দুনিয়া" }, { ar: "ءَاخِرَة", en: "Hereafter", bn: "আখেরাত" },
    { ar: "خَيْر", en: "Good", bn: "কল্যাণ" }, { ar: "شَرّ", en: "Evil", bn: "অকল্যাণ" }
];

// --- 2. DATASET: 20 QURANIC VERBS ---
const verbs = [
    { p: "خَلَقَ", m: "يَخْلُقُ", enP: "created", enM: "creates", bnP: "সৃষ্টি করেছেন", bnM: "সৃষ্টি করেন" },
    { p: "جَعَلَ", m: "يَجْعَلُ", enP: "made", enM: "makes", bnP: "বানিয়েছেন", bnM: "বানান" },
    { p: "أَنزَلَ", m: "يُنزِلُ", enP: "sent down", enM: "sends down", bnP: "নাযিল করেছেন", bnM: "নাযিল করেন" },
    { p: "قَالَ", m: "يَقُولُ", enP: "said", enM: "says", bnP: "বলেছেন", bnM: "বলেন" },
    { p: "آمَنَ", m: "يُؤْمِنُ", enP: "believed", enM: "believes", bnP: "ঈমান এনেছেন", bnM: "ঈমান আনেন" },
    { p: "كَفَرَ", m: "يَكْفُرُ", enP: "disbelieved", enM: "disbelieves", bnP: "অস্বীকার করেছেন", bnM: "অস্বীকার করেন" },
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

// --- 3. THE 17 HARFUL JAR ---
const prefixes = [
    { ar: "", en: "", bn: "" },
    { ar: "بِ", en: "By/With", bn: "দ্বারা/নিকট" }, { ar: "تَ", en: "By (oath)", bn: "শপথ" },
    { ar: "كَ", en: "Like", bn: "মতো" }, { ar: "لِ", en: "For/To", bn: "জন্য/তরে" },
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
    { ar: "", en: "", bn: "", verb_bn: "" },
    { ar: "هُ", en: "him", bn: "সে/তার", posEn: "his", posBn: "তার", verb_bn: "তাকে" },
    { ar: "هُمَا", en: "them (2)", bn: "তাদের (২ জন)", posEn: "their (2)", posBn: "তাদের (২ জন)", verb_bn: "তাদের (২ জন)কে" },
    { ar: "هُمْ", en: "them", bn: "তারা/তাদের", posEn: "their", posBn: "তাদের", verb_bn: "তাদেরকে" },
    { ar: "هَا", en: "her", bn: "সে/তার (নারী)", posEn: "her", posBn: "তার (নারী)", verb_bn: "তাকে (নারী)" },
    { ar: "هُمَا ", en: "them (2/f)", bn: "তাদের (২ জন নারী)", posEn: "their (f/2)", posBn: "তাদের (২ জন নারী)", verb_bn: "তাদের (২ জন নারী)কে" },
    { ar: "هُنَّ", en: "them (f)", bn: "তারা (নারী)", posEn: "their (f)", posBn: "তাদের (নারী)", verb_bn: "তাদেরকে (নারী)" },
    { ar: "كَ", en: "you", bn: "তুমি/তোমার", posEn: "your", posBn: "তোমার", verb_bn: "তোমাকে" },
    { ar: "كُمَا", en: "you (2)", bn: "তোমরা (২ জন)", posEn: "your (2)", posBn: "তোমাদের (২ জন)", verb_bn: "তোমাদের (২ জন)কে" },
    { ar: "كُمْ", en: "you (pl)", bn: "তোমরা/তোমাদের", posEn: "your (pl)", posBn: "তোমাদের", verb_bn: "তোমাদেরকে" },
    { ar: "كِ", en: "you (f)", bn: "তুমি (নারী)", posEn: "your (f)", posBn: "তোমার (নারী)", verb_bn: "তোমাকে (নারী)" },
    { ar: "كُمَا ", en: "you (2/f)", bn: "তোমরা (২ জন নারী)", posEn: "your (f/2)", posBn: "তোমাদের (২ জন নারী)", verb_bn: "তোমাদের (২ জন নারী)কে" },
    { ar: "كُنَّ", en: "you (f/pl)", bn: "তোমরা (নারী)", posEn: "your (f/pl)", posBn: "তোমাদের (নারী)", verb_bn: "তোমাদেরকে (নারী)" },
    { ar: "ي", en: "me", bn: "আমি/আমার", posEn: "my", posBn: "আমার", verb_bn: "আমাকে" },
    { ar: "نَا", en: "us", bn: "আমরা/আমাদের", posEn: "our", posBn: "আমাদের", verb_bn: "আমাদেরকে" }
];

function build() {
    const prefVal = document.getElementById("prefix").value;
    const pronVal = document.getElementById("pronoun").value;
    const type = document.getElementById("wordType").value;
    const rootVal = document.getElementById("root").value;

    const pref = prefixes.find(x => x.ar === prefVal) || {ar:"", en:"", bn:""};
    const pron = pronouns.find(x => x.ar === pronVal) || {ar:"", en:"", bn:"", verb_bn:""};
    
    let item;
    if (type === "ism") {
        item = nouns.find(x => x.ar === rootVal);
    } else {
        item = verbs.find(x => (x.p + " - " + x.m) === rootVal);
    }

    let finalAr = ""; 
    let pAr = pref.ar;
    let sAr = pron.ar;

    const shiftsHuToHi = ["بِ", "فِي", "إِلَى", "عَلَى"];
    if (type !== "verb" && shiftsHuToHi.includes(pAr)) {
        sAr = sAr.replace("هُ", "هِ").replace("هُمْ", "هِمْ").replace("هُمَا", "هِمَا").replace("هُنَّ", "هِنَّ");
    }

    if(pAr === "لِ" && sAr !== "" && !item){
        const liMap = {
            "ي": "لِيَ", "هُ": "لَهُ", "هُمَا": "لَهُمَا", "هُمْ": "لَهُمْ",
            "هَا": "لَهَا", "هُمَا ": "لَهُمَا", "هُنَّ": "لَهُنَّ", "كَ": "لَكَ",
            "كُمَا": "لَكُمَا", "كُمْ": "لَكُمْ", "كِ": "لَكِ", "كُمَا ": "لَكُمَا",
            "كُنَّ": "لَكُنَّ", "نَا": "لَنَا"
        };
        sAr = liMap[sAr] || sAr;
        pAr = ""; 
    }

    if (type === "ism" && item) {
        let baseAr = item.ar;
        if (sAr === "ي") {
            baseAr = baseAr.replace(/[ٌُِ]$/, "");
            baseAr += "ِ";
        } else if (pAr === "") {
            baseAr = baseAr.replace(/[ِ]$/, "ُ"); 
            if (!baseAr.endsWith("ُ") && !baseAr.endsWith("ٰ") && baseAr !== "ٱللَّه") baseAr += "ُ";
        } else {
            if (baseAr === "ٱللَّه") {
                if (pAr === "لِ") { pAr = ""; baseAr = "لِلَّهِ"; }
                else if (pAr === "بِ") { pAr = ""; baseAr = "بِٱللَّهِ"; }
                else { baseAr = baseAr.replace(/[ُ]$/, "ِ"); }
            } else if (baseAr === "ٱاسْم" && pAr === "بِ") {
                pAr = ""; baseAr = "بِسْمِ";
            } else {
                baseAr = baseAr.replace(/[ٌُ]$/, "ِ");
                if (!baseAr.endsWith("ِ") && !baseAr.endsWith("ٰ")) baseAr += "ِ";
            }
        }
        const attachedHars = ["بِ", "لِ", "تَ", "كَ", "وَ"];
        const connector = (attachedHars.includes(pAr) || pAr === "") ? "" : " ";
        finalAr = pAr + connector + baseAr + sAr;

    } else if (item) {
        finalAr = `${item.p}${sAr} — ${item.m}${sAr}`;
    } else {
        let body = pAr;
        if (["إِلَى", "عَلَى"].includes(pAr) && sAr !== "") { body = body.replace("ى", "يْ"); }
        finalAr = body + sAr;
    }

    let enRes = "", bnRes = "";
    if (item && type === "ism") {
        enRes = `${pref.en} ${pron.ar ? pron.posEn : ""} ${item.en}`;
        let bnNoun = item.bn;
        let suffix = (bnNoun === "আল্লাহ" || bnNoun.endsWith("া") || bnNoun.endsWith("ি") || bnNoun.endsWith("ী")) ? "র" : "ের";
        bnRes = (pAr === "" && prefVal === "") ? `${pron.ar ? pron.posBn : ""} ${bnNoun}` : `${pron.ar ? pron.posBn : ""} ${bnNoun}${suffix} ${pref.bn}`;
    } else if (item) {
        enRes = `${item.enP} ${pron.en} — ${item.enM} ${pron.en}`;
        bnRes = `তিনি ${pron.verb_bn || ""} ${item.bnP} — তিনি ${pron.verb_bn || ""} ${item.bnM}`;
    } else {
        enRes = `${pref.en} ${pron.en}`;
        bnRes = (pref.ar === "لِ") ? (pron.posBn || "কারো") + " জন্য" : (pron.bn || "") + " " + (pref.bn || "");
    }

    document.getElementById("ar-out").innerText = finalAr;
    document.getElementById("en-out").innerHTML = `<b>${enRes}</b><br><span style="color:#cbd5e1">${bnRes.trim()}</span>`;
}

function init() {
    const tSel = document.getElementById("wordType");
    const rSel = document.getElementById("root");
    const pSel = document.getElementById("prefix");
    
    pSel.innerHTML = prefixes.map(x => `<option value="${x.ar}">${x.ar || 'Harf'}</option>`).join('');
    document.getElementById("pronoun").innerHTML = pronouns.map(x => `<option value="${x.ar}">${x.ar || 'Pronoun'}</option>`).join('');

    tSel.onchange = () => {
        if (tSel.value === "verb") {
            pSel.value = ""; pSel.disabled = true; pSel.style.opacity = "0.5";
        } else {
            pSel.disabled = false; pSel.style.opacity = "1";
        }
        const list = (tSel.value === "ism") ? nouns : verbs;
        let opts = '<option value="">None</option>';
        opts += list.map(x => {
            const v = (tSel.value === "ism") ? x.ar : `${x.p} - ${x.m}`;
            return `<option value="${v}">${v}</option>`;
        }).join('');
        rSel.innerHTML = opts;
    };
    document.getElementById("btnGenerate").onclick = build;
    tSel.onchange();
}

init();

// ===============================
// FORCE FIX: Verb + ي → نِيْ
// ===============================


document.getElementById("btnGenerate").addEventListener("click", function(){

    const type = document.getElementById("wordType").value;
    const pron = document.getElementById("pronoun").value;

  if(type ==="ism" && sAr === "ي") {sAr = "ي";}
    
    else if(type ==="verb" && sAr === "ي") sAr = "نِيْ";
    {

        const arOut = document.getElementById("ar-out");

        if(arOut && arOut.innerText){

            // Replace ONLY ending ي with نِيْ
            arOut.innerText = arOut.innerText.replace(/ي(?=\s|$|—)/g, "نِيْ");
        }
    }

});
