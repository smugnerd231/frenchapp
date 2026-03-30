// ГЛАГОЛЫ С ГРУППАМИ

let currentGroup = "all";

function setGroup(group, el) {
    currentGroup = group;

    document.querySelectorAll("#grammarSection .tab")
        .forEach(btn => btn.classList.remove("active"));

    el.classList.add("active");

    getVerb(); 
}

// ✅ РЕГУЛЯРНЫЕ
const regularVerbs = [
    "parler",
    "aimer",
    "finir",
    "choisir"
];

// ⚡ НЕПРАВИЛЬНЫЕ

const irregularVerbs = [
    {
        inf: "être",
        present: ["suis", "es", "est", "sommes", "êtes", "sont"],
        future: ["serai", "seras", "sera", "serons", "serez", "seront"],
        past: ["ai été", "as été", "a été", "avons été", "avez été", "ont été"]
    },
    {
        inf: "avoir",
        present: ["ai", "as", "a", "avons", "avez", "ont"],
        future: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
        past: ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"]
    },
    {
        inf: "aller",
        present: ["vais", "vas", "va", "allons", "allez", "vont"],
        future: ["irai", "iras", "ira", "irons", "irez", "iront"],
        past: ["suis allé", "es allé", "est allé", "sommes allés", "êtes allés", "sont allés"]
    },
{
    inf: "faire",
    present: ["fais", "fais", "fait", "faisons", "faites", "font"],
    future: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
    past: ["ai fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait"]
},
{
    inf: "venir",
    present: ["viens", "viens", "vient", "venons", "venez", "viennent"],
    future: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
    past: ["suis venu", "es venu", "est venu", "sommes venus", "êtes venus", "sont venus"]
}
];

const translations = {
    parler: "говорить",
    aimer: "любить",
    finir: "заканчивать",
    choisir: "выбирать",
    être: "быть",
    avoir: "иметь",
    aller: "идти",
    faire: "делать",
    venir: "приходить"
};

let currentVerb = null;

let currentTense = "present";

function setTense(tense, el) {
    currentTense = tense;

    document.querySelectorAll("#grammarSection .tabs:nth-of-type(2) .tab")
        .forEach(btn => btn.classList.remove("active"));

    el.classList.add("active");
}

let answerVisible = false;


//infinitive + окончания

const futureEndings = ["ai", "as", "a", "ons", "ez", "ont"];

//avoir + participe passé

const avoir = ["ai", "as", "a", "avons", "avez", "ont"];

function pastParticiple(verb, group) {
    let base = verb.slice(0, -2);

    if (group === "er") return base + "é";
    if (group === "ir") return base + "i";
    if (group === "re") return base + "u";

    return "???"; // неправильные
}

let mode = "input"; // input | view

function toggleMode() {
   mode = mode === "input" ? "view" : "input";

    document.getElementById("showBtnGrammar").style.display =
        mode === "input" ? "block" : "none";

    getVerb();
}

// ОКОНЧАНИЯ
const endings = {
    er: ["e", "es", "e", "ons", "ez", "ent"],
    ir: ["is", "is", "it", "issons", "issez", "issent"],
    re: ["s", "s", "", "ons", "ez", "ent"]
};

//авто-определение
function detectGroup(verb) {
    if (verb.endsWith("er")) return "er";
    if (verb.endsWith("ir")) return "ir";
    if (verb.endsWith("re")) return "re";
    return "irr";
}

const pronouns = ["je", "tu", "il", "nous", "vous", "ils"];

function getVerb() {

    let pool = [];

    // 🟢 регулярные → превращаем в объекты
    let regularPool = regularVerbs.map(v => ({
        inf: v,
        group: detectGroup(v)
    }));

    // ⚡ объединяем ВСЁ
    if (currentGroup === "all") {
        pool = [...regularPool, ...irregularVerbs];
    }
    else if (currentGroup === "irr") {
        pool = irregularVerbs;
    }
    else {
        pool = regularPool.filter(v => v.group === currentGroup);
    }

    if (pool.length === 0) {
        alert("Нет глаголов 😄");
        return;
    }

   currentVerb = pool[Math.floor(Math.random() * pool.length)];
currentVerb.group = currentVerb.group || detectGroup(currentVerb.inf);

const tr = translations[currentVerb.inf] || "";

document.getElementById("verb").innerHTML = `
    <div style="font-size:24px">${currentVerb.inf}</div>
    <div style="font-size:14px; color:#777">${tr}</div>
`;
document.getElementById("verbSpeaker").style.display = "block";

 const container = document.getElementById("inputs");

container.innerHTML = `
    <div class="columns">
        <div class="col" id="col-left"></div>
        <div class="col" id="col-right"></div>
    </div>
`;

 pronouns.forEach((p, i) => {
    const target = i < 3 ? "col-left" : "col-right";

    const html = mode === "input"
        ? `${p} <input id="${p}">`
        : `${p} <span class="answer">${buildForm(currentVerb.inf, currentVerb.group, i, true)}</span>`;

    document.getElementById(target).innerHTML += `<div>${html}</div>`;
});
}

function switchTab(tab, el) {
    document.getElementById("phoneticsSection").style.display =
        tab === 'phonetics' ? 'block' : 'none';

    document.getElementById("grammarSection").style.display =
        tab === 'grammar' ? 'block' : 'none';

    // ❗ только верхние табы
document.querySelectorAll(".card > .tabs .tab")
    .forEach(btn => btn.classList.remove("active"));

    el.classList.add("active");

    if (tab === "grammar") {

        currentGroup = "all";
        currentTense = "present";

        // группы
        document.querySelectorAll("#grammarSection .tabs")[0]
            .querySelectorAll(".tab")
            .forEach(btn => btn.classList.remove("active"));

        document.querySelectorAll("#grammarSection .tabs")[0]
            .children[0].classList.add("active");

        // времена
        document.querySelectorAll("#grammarSection .tabs")[1]
            .querySelectorAll(".tab")
            .forEach(btn => btn.classList.remove("active"));

        document.querySelectorAll("#grammarSection .tabs")[1]
            .children[0].classList.add("active");

        getVerb();
    }
}

// СОЗДАНИЕ ПРАВИЛЬНОЙ ФОРМЫ
function buildForm(verb, group, index, highlight = false) {

    // ⚡ НЕПРАВИЛЬНЫЕ
    if (currentVerb.present !== undefined) {

    let form;

    if (currentTense === "present") form = currentVerb.present[index];
    if (currentTense === "future") form = currentVerb.future[index];
    if (currentTense === "past") form = currentVerb.past[index];

    if (!highlight) return form;

    // 🔥 пробуем выделить "окончание"
    let base = currentVerb.inf.slice(0, 2); // примитивно, но работает визуально

    if (form.startsWith(base)) {
        let ending = form.slice(base.length);
        return base + `<span style="color:#ff5e62">${ending}</span>`;
    }

    return `<span style="color:#ff5e62">${form}</span>`;
}

    // 🟢 РЕГУЛЯРНЫЕ

    if (currentTense === "present") {
        let base = verb.slice(0, -2);
        let ending = endings[group][index];

        return highlight
            ? base + `<span style="color:#ff5e62">${ending}</span>`
            : base + ending;
    }

    if (currentTense === "future") {
        let ending = futureEndings[index];

        return highlight
            ? verb + `<span style="color:#ff5e62">${ending}</span>`
            : verb + ending;
    }

    if (currentTense === "past") {
        let aux = avoir[index];
        let pp = pastParticiple(verb, group);

        return `${aux} ${pp}`;
    }
}

// ПРОВЕРКА
function checkVerb() {
    if (mode === "view") return; // ⛔ блокируем
    let correctCount = 0;

    pronouns.forEach((p, i) => {
        const input = document.getElementById(p);
        const user = input.value.trim().toLowerCase();
        const correct = buildForm(currentVerb.inf, currentVerb.group, i);

        if (user === correct) {
            input.style.background = "#b8f5b8";
            input.value = correct;
            correctCount++;
        } else {
            input.style.background = "#f5b8b8";
            input.value = correct; // 🔥 сразу показываем правильный ответ
        }
    });

    document.getElementById("result").innerText =
        `Правильно: ${correctCount}/6`;
}


// ПОКАЗАТЬ ОТВЕТ
function showAnswer() {

    if (mode !== "input") return;

    if (!answerVisible) {

        pronouns.forEach((p, i) => {
            const input = document.getElementById(p);
            const user = input.value.trim().toLowerCase();
            const correct = buildForm(currentVerb.inf, currentVerb.group, i);

            if (user === "") {
                input.value = correct;
                input.style.background = "";
            }
            else if (user === correct) {
                input.value = correct;
                input.style.background = "#b8f5b8";
            }
            else {
                input.value = correct;
                input.style.background = "#f5b8b8";
            }
        });

        answerVisible = true;

    } else {
        // 🔁 вернуть обратно

        pronouns.forEach((p) => {
            const input = document.getElementById(p);
            input.value = "";
            input.style.background = "";
        });

        answerVisible = false;
    }
}

function toggleGrammarRules(show) {
    document.getElementById('grammarRulesModal').style.display = show ? 'block' : 'none';
}

function speakVerb() {
    const utterance = new SpeechSynthesisUtterance(currentVerb.inf);
    utterance.lang = "fr-FR";
    speechSynthesis.speak(utterance);
}
