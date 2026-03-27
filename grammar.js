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

    document.getElementById("verb").innerText =
        currentVerb.present
            ? `${currentVerb.inf} ⚡`
            : `${currentVerb.inf} (-${currentVerb.group})`;

    const container = document.getElementById("inputs");
    container.innerHTML = "";

    pronouns.forEach(p => {
        container.innerHTML += `
            <div>
                ${p} <input id="${p}">
            </div>
        `;
    });

    document.getElementById("result").innerHTML = "";
    answerVisible = false;
}


// СОЗДАНИЕ ПРАВИЛЬНОЙ ФОРМЫ
function buildForm(verb, group, index, highlight = false) {

    // ⚡ НЕПРАВИЛЬНЫЕ
    if (currentVerb.present) {

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

    if (!answerVisible) {
        // ПОКАЗАТЬ
        pronouns.forEach((p, i) => {
            const input = document.getElementById(p);
            input.value = buildForm(currentVerb.inf, currentVerb.group, i);
            input.style.background = "#e0f7fa";
        });

        answerVisible = true;

    } else {
        // СКРЫТЬ
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


