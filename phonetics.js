const words = [
 {word: "bonjour", translation: "здравствуйте", transcription: "[bɔ̃ʒuʁ]"},
    {word: "fromage", translation: "сыр", transcription: "[fʁɔmaʒ]"},
    {word: "beaucoup", translation: "много", transcription: "[boku]"},
    {word: "fille", translation: "девочка", transcription: "[fij]"},
    {word:"salaire",translation:"зарплата",transcription:"[salɛʁ]"},
{word:"aider",translation:"помогать",transcription:"[ede]"},
{word:"frapper",translation:"ударять",transcription:"[fʁape]"},
{word:"espérer",translation:"надеяться",transcription:"[ɛspeʁe]"},
{word:"système",translation:"система",transcription:"[sistɛm]"},
{word:"triste",translation:"грустный",transcription:"[tʁist]"},
{word:"rire",translation:"смеяться",transcription:"[ʁiʁ]"},
{word:"ville",translation:"город",transcription:"[vil]"},
{word:"ciel",translation:"небо",transcription:"[sjɛl]"},
{word:"rivière",translation:"река",transcription:"[ʁivjɛʁ]"},
{word:"hier",translation:"вчера",transcription:"[jɛʁ]"},
{word:"radin",translation:"очень скупой",transcription:"[ʁadɛ̃]"},
{word:"joyeux",translation:"весёлый",transcription:"[ʒwajø]"},
{word:"gare",translation:"вокзал",transcription:"[ɡaʁ]"},
{word:"pomme",translation:"яблоко",transcription:"[pɔm]"},
{word:"octobre",translation:"октябрь",transcription:"[ɔktɔbʁ]"},
{word:"porter",translation:"носить",transcription:"[pɔʁte]"},
{word:"beurre",translation:"масло",transcription:"[bœʁ]"},
{word:"sœur",translation:"сестра",transcription:"[sœʁ]"},
{word:"peur",translation:"страх",transcription:"[pœʁ]"},
{word:"détail",translation:"деталь",transcription:"[detaj]"},
{word:"premier",translation:"первый",transcription:"[pʁəmje]"},
{word:"fenêtre",translation:"окно",transcription:"[fənɛtʁ]"},
{word:"cacher",translation:"прятать",transcription:"[kaʃe]"},
{word:"jeter",translation:"бросать",transcription:"[ʒəte]"},
{word:"geste",translation:"жест",transcription:"[ʒɛst]"},
{word:"feu",translation:"огонь",transcription:"[fø]"},
{word:"jeu",translation:"игра",transcription:"[ʒø]"},
{word:"bleu",translation:"голубой",transcription:"[blø]"},
{word:"nerveux",translation:"нервный",transcription:"[nɛʁvø]"},
{word:"horrible",translation:"ужасный",transcription:"[ɔʁibl]"},
{word:"manuel",translation:"учебник",transcription:"[manɥɛl]"},
{word:"pluie",translation:"дождь",transcription:"[plɥi]"},
{word:"écrivain",translation:"писатель",transcription:"[ekʁivɛ̃]"},
{word:"demain",translation:"завтра",transcription:"[dəmɛ̃]"},
{word:"train",translation:"поезд",transcription:"[tʁɛ̃]"},
{word:"pain",translation:"хлеб",transcription:"[pɛ̃]"},
{word:"parfum",translation:"духи",transcription:"[paʁfœ̃]"},
{word:"marron",translation:"коричневый",transcription:"[maʁɔ̃]"},
{word:"trop",translation:"слишком",transcription:"[tʁo]"},
{word:"dos",translation:"спина",transcription:"[do]"},
{word:"eau",translation:"вода",transcription:"[o]"},
{word:"montrer",translation:"показывать",transcription:"[mɔ̃tʁe]"},
{word:"raconter",translation:"рассказывать",transcription:"[ʁakɔ̃te]"},
{word:"douze",translation:"двенадцать",transcription:"[duz]"},
{word:"dimanche",translation:"воскресенье",transcription:"[dimɑ̃ʃ]"},
{word:"lampe",translation:"лампа",transcription:"[lɑ̃p]"},
{word:"sans",translation:"без",transcription:"[sɑ̃]"},
{word:"village",translation:"деревня",transcription:"[vilaʒ]"},
{word:"ligne",translation:"линия",transcription:"[liɲ]"},

// ДОПОЛНИТЕЛЬНЫЕ

{word:"maison",translation:"дом",transcription:"[mɛzɔ̃]", gender: "f"},
{word:"homme",translation:"мужчина",transcription:"[ɔm]"},
{word:"femme",translation:"женщина",transcription:"[fam]", phonemes: [
    { text: "fe", sound: "f" }, { text: "mme", sound: "am" } ], exception: true},
{word:"enfant",translation:"ребёнок",transcription:"[ɑ̃fɑ̃]"},
{word:"temps",translation:"время",transcription:"[tɑ̃]"},
{word:"jour",translation:"день",transcription:"[ʒuʁ]"},
{word:"nuit",translation:"ночь",transcription:"[nɥi]"},
{word:"soleil",translation:"солнце",transcription:"[sɔlɛj]"},
{word:"ami",translation:"друг",transcription:"[ami]"},
{word:"travail",translation:"работа",transcription:"[tʁavaj]"},
{word:"argent",translation:"деньги",transcription:"[aʁʒɑ̃]"},
{word:"parler",translation:"говорить",transcription:"[paʁle]"},
{word:"voir",translation:"видеть",transcription:"[vwaʁ]"},
{word:"venir",translation:"приходить",transcription:"[vəniʁ]"},
{word:"prendre",translation:"брать",transcription:"[pʁɑ̃dʁ]"},
{word:"donner",translation:"давать",transcription:"[dɔne]"},
{word:"grand",translation:"большой",transcription:"[ɡʁɑ̃]"},
{word:"petit",translation:"маленький",transcription:"[pəti]"},
{word:"bon",translation:"хороший",transcription:"[bɔ̃]"},
{word:"mauvais",translation:"плохой",transcription:"[movɛ]"},
{word:"nouveau",translation:"новый",transcription:"[nuvo]"},
{word:"vieux",translation:"старый",transcription:"[vjø]"},
{word:"beau",translation:"красивый",transcription:"[bo]"},
{word:"dire",translation:"сказать",transcription:"[diʁ]"},
{word:"mettre",translation:"класть",transcription:"[mɛtʁ]"},
{word:"tenir",translation:"держать",transcription:"[təniʁ]"},
{word:"ouvrir",translation:"открывать",transcription:"[uvʁiʁ]"},
{word:"fermer",translation:"закрывать",transcription:"[fɛʁme]"},
{word:"entrer",translation:"входить",transcription:"[ɑ̃tʁe]"},
{word:"sortir",translation:"выходить",transcription:"[sɔʁtiʁ]"},
{word:"toujours",translation:"всегда",transcription:"[tuʒuʁ]"},
{word:"souvent",translation:"часто",transcription:"[suvɑ̃]"},
{word:"jamais",translation:"никогда",transcription:"[ʒamɛ]"},
{word:"ici",translation:"здесь",transcription:"[isi]"},
{word:"là",translation:"там",transcription:"[la]"},
{word:"pourquoi",translation:"почему",transcription:"[puʁkwa]"},
{word:"comment",translation:"как",transcription:"[kɔmɑ̃]"},
{word:"très",translation:"очень",transcription:"[tʁɛ]"},
{word:"parce que",translation:"потому что",transcription:"[paʁs kə]"},
{word:"chaussure",translation:"ботинок",transcription:"[ʃosyʁ]"},
{word:"écrire",translation:"писать",transcription:"[ekʁiʁ]"},
{word:"tambour",translation:"барабаны",transcription:"[tɑ̃buʁ]"},
{word:"toujours",translation:"постоянно",transcription:"[tuʒuʁ]"},
{word:"préféré",translation:"любимый",transcription:"[pʁefeʁe]"},
{word:"écouter",translation:"слушать",transcription:"[ekute]"},
{word:"habituellement",translation:"обычно",transcription:"[abitɥɛlmɑ̃]"},
{word:"maillot de bain",translation:"купальник",transcription:"[majo də bɛ̃]"},
{word:"faire",translation:"заниматься",transcription:"[fɛʁ]"},
{word:"mois",translation:"месяц",transcription:"[mwa]"},
{word:"à pied",translation:"пешком",transcription:"[a pje]"},
{word:"salle de sport",translation:"спортзал",transcription:"[sal də spɔʁ]"},
{word:"détendu",translation:"расслабленный",transcription:"[detɑ̃dy]"},
{word:"près de",translation:"рядом с",transcription:"[pʁɛ də]"},
{word:"danse",translation:"танец",transcription:"[dɑ̃s]"},
{word:"natation",translation:"плавание",transcription:"[natasjɔ̃]"},
{word:"une fois",translation:"один раз",transcription:"[yn fwa]"},
{word:"encore",translation:"ещё",transcription:"[ɑ̃kɔʁ]"},
{word:"matin",translation:"утром",transcription:"[matɛ̃]"},
{word:"confiture",translation:"варенье",transcription:"[kɔ̃fityʁ]"},
{word:"aujourd’hui",translation:"сегодня",transcription:"[oʒuʁdɥi]"},
{word:"poisson",translation:"рыба",transcription:"[pwasɔ̃]"},
{word:"différent",translation:"отличается",transcription:"[difeʁɑ̃]"},
{word:"printemps",translation:"весна",transcription:"[pʁɛ̃tɑ̃]"},
{word:"blanc",translation:"белый",transcription:"[blɑ̃]"},
{word:"fleur",translation:"цветок",transcription:"[flœʁ]"},
{word:"été",translation:"лето",transcription:"[ete]"},
{word:"gentil",translation:"добрый",transcription:"[ʒɑ̃ti]"},
{word:"mignon",translation:"милый",transcription:"[miɲɔ̃]"},
{word:"dommage",translation:"жаль",transcription:"[dɔmaʒ]"},
{word:"écharpe",translation:"шарф",transcription:"[eʃaʁp]"},
{word:"minuit",translation:"полночь",transcription:"[minɥi]"},
{word:"soir",translation:"вечер",transcription:"[swaʁ]"},
{word:"dormir",translation:"сплю",transcription:"[dɔʁmiʁ]"},
{word:"jusqu’à",translation:"до",transcription:"[ʒyska]"},
{word:"partir",translation:"уходить",transcription:"[paʁtiʁ]"},
{word:"arriver",translation:"приходить",transcription:"[aʁive]"},
{word:"tard",translation:"поздно",transcription:"[taʁ]"},
{word:"revenir",translation:"вернуться",transcription:"[ʁəvəniʁ]"},
{word:"église",translation:"церковь",transcription:"[eɡliz]"},
{word:"en fait",translation:"на самом деле",transcription:"[ɑ̃ fɛ]"},
{word:"à gauche de",translation:"слева от",transcription:"[a ɡoʃ də]"},
{word:"à droite de",translation:"справа от",transcription:"[a dʁwat də]"},
{word:"gratuit",translation:"бесплатный",transcription:"[ɡʁatɥi]"},
{word:"coûter",translation:"стоить",transcription:"[kute]"},
{word:"choix",translation:"выбор",transcription:"[ʃwa]"},
{word:"laid",translation:"уродливый",transcription:"[lɛ]"},
{word:"chaussures",translation:"обувь",transcription:"[ʃosyʁ]"},
{word:"gris",translation:"серый",transcription:"[ɡʁi]"},
{word:"essayer",translation:"примерить",transcription:"[eseje]"},
{word:"long",translation:"длинный",transcription:"[lɔ̃]"}
];

// Правила: 'p' - паттерн, 's' - звук
const phoneticRules = [
    // НОСОВЫЕ (самые приоритетные)
    { p: 'oin', s: 'wɛ̃' },
    { p: 'ien', s: 'jɛ̃' },
    { p: 'ain', s: 'ɛ̃' },
    { p: 'aim', s: 'ɛ̃' },
    { p: 'ein', s: 'ɛ̃' },
    { p: 'in', s: 'ɛ̃' },
    { p: 'im', s: 'ɛ̃' },
    { p: 'un', s: 'œ̃' },
    { p: 'on', s: 'ɔ̃' },
    { p: 'an', s: 'ɑ̃' },
    { p: 'en', s: 'ɑ̃' },

    // ДИФТОНГИ
    { p: 'eau', s: 'o' },
    { p: 'au', s: 'o' },
    { p: 'ai', s: 'ɛ' },
    { p: 'ei', s: 'ɛ' },
    { p: 'oi', s: 'wa' }, // ✔️ исправлено

    // СПЕЦ
    { p: 'ill', s: 'j' },
    { p: 'gn', s: 'ɲ' },
    { p: 'ch', s: 'ʃ' },

    // ОКОНЧАНИЯ (ВАЖНО)
    { p: /er\b/gi, s: 'e' },
    { p: /ez\b/gi, s: 'e' },
    { p: /ent\b/gi, s: '' },

    // БУКВЫ
    { p: 'é', s: 'e' },
    { p: 'è', s: 'ɛ' },
    { p: 'ê', s: 'ɛ' },

    // КОНТЕКСТ
    { p: /c(?=[eiy])/gi, s: 's' },
    { p: /g(?=[eiy])/gi, s: 'ʒ' },
    { p: /i(?=[aeiouy])/gi, s: 'j' }
];


const sentences = [
    {
        word: "bonjour, comment ça va",
        translation: "здравствуйте, как дела",
        transcription: "[bɔ̃ʒuʁ kɔmɑ̃ sa va]"
    },
    {
        word: "je suis étudiant",
        translation: "я студент",
        transcription: "[ʒə sɥi etydjɑ̃]"
    }
];

let settings = {
    showTranslation: true,
    autoTranscription: false,
    autoHighlight: false,
    filterSound: null,
    useProgress: true,
    wordMode: "all",
    ankiMode: false
};


let mode = 'words'; // words | sentences

let current = null;
let isHighlightMode = false;

let progress = {
  learned: [],
  difficult: []
};

let seenWords = {};

function toggleModal(show) { document.getElementById('rulesModal').style.display = show ? 'block' : 'none'; }

function toggleLearningMode() {
    isHighlightMode = !isHighlightMode;

    const btn = document.getElementById("hlBtn");

    if (isHighlightMode) {
        btn.innerText = "Скрыть";
        document.getElementById("transcription").innerText = current.transcription;
    } else {
        btn.innerText = "Транскрипция";
        document.getElementById("transcription").innerText = "";
    }

    renderWord();
}


function getRandomWord() {
    let source = mode === 'words' ? words : sentences;

if (mode === 'words' && settings.useProgress) {

    if (settings.wordMode === "learned") {
        source = source.filter(w => progress.learned.includes(w.word));
    }

    if (settings.wordMode === "new") {
        source = source.filter(w => !progress.learned.includes(w.word));
    }
}

    // фильтр
    if (settings.filterSound) {
        source = source.filter(item =>
            item.transcription && item.transcription.includes(settings.filterSound)
        );
    }


    // если ничего не найдено
    if (source.length === 0) {
    document.getElementById("word").innerText = "⚠️ Нет совпадений";
    document.getElementById("translation").innerText = "";
    document.getElementById("transcription").innerText = "";
    return;
}

    current = source[Math.floor(Math.random() * source.length)];

    renderWord();

    const translationEl = document.getElementById("translation");
if (settings.ankiMode) {
    translationEl.innerText = "";
} else {
    translationEl.innerText = current.translation;
    translationEl.style.display = settings.showTranslation ? "block" : "none";
}

    const transcriptionEl = document.getElementById("transcription");

    if (settings.autoTranscription) {
        transcriptionEl.innerText = current.transcription;
    } else {
        transcriptionEl.innerText = "";
    }


    document.getElementById("speaker").style.display = "inline-block";

if (!seenWords[current.word]) {
    seenWords[current.word] = 0;
}
seenWords[current.word]++;

if (seenWords[current.word] === 3) {
    setTimeout(() => {
        let answer = prompt("Перевод слова: " + current.word);

        if (answer && answer.toLowerCase() === current.translation.toLowerCase()) {
            markLearned();
            alert("✅ Верно! Слово выучено");
        } else {
            alert("❌ Ошибка");
        }
    }, 300);
}
}

    function renderWord() {
    const wordEl = document.getElementById("word");
    if (!current) return;

    // 🔥 1. если есть phonemes → используем их
    if (current.phonemes) {
        wordEl.innerHTML = current.phonemes.map(p =>
            `<span class="hl" data-sound="${p.sound}">${p.text}</span>`
        ).join('');
    }

    // 🔥 2. иначе обычная логика
    else if (isHighlightMode) {
        let tempWord = current.word;

        const sortedRules = [...phoneticRules].sort((a, b) => {
            let lenA = (a.p instanceof RegExp) ? 1.5 : a.p.length;
            let lenB = (b.p instanceof RegExp) ? 1.5 : b.p.length;
            return lenB - lenA;
        });

        const combinedRegex = new RegExp(
            sortedRules.map(r =>
                r.p instanceof RegExp ? r.p.source : r.p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            ).join('|'),
            'gi'
        );

        let used = Array(tempWord.length).fill(false);

        wordEl.innerHTML = tempWord.replace(combinedRegex, (match, offset) => {

            for (let i = 0; i < match.length; i++) {
                if (used[offset + i]) return match;
            }

            for (let i = 0; i < match.length; i++) {
                used[offset + i] = true;
            }

            const rule = sortedRules.find(r => {
                if (r.p instanceof RegExp) {
                    const test = new RegExp('^' + r.p.source, 'i');
                    return test.test(tempWord.substring(offset));
                }
                return r.p.toLowerCase() === match.toLowerCase();
            });

            return `<span class="hl" data-sound="${rule ? rule.s : ''}">${match}</span>`;
        });
    }

    // 🔥 3. без подсветки
    else {
        wordEl.innerText = current.word;
    }

    // 🔥 4. добавляем значки
   let badges = "";

if (current.gender === "f") {
    badges += `<span class="badge f"></span>`;
}
if (current.gender === "m") {
    badges += `<span class="badge m"></span>`;
}
if (current.exception) {
    badges += `<span class="badge ex">!</span>`;
}

wordEl.innerHTML = `<div class="word-wrapper">${badges}${wordEl.innerHTML}</div>`;
}

function showTranscription() { if (current) document.getElementById("transcription").innerText = current.transcription; }

function speakWord() {
    if (current) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(current.word);
        utterance.lang = "fr-FR";
        speechSynthesis.speak(utterance);
    }
}

window.onclick = function(e) {
    if (e.target.id === 'rulesModal') toggleModal(false);
    if (e.target.id === 'settingsModal') toggleSettings(false);
    if (e.target.id === 'grammarRulesModal') toggleGrammarRules(false);
}


function toggleMode() {
    mode = mode === 'words' ? 'sentences' : 'words';

    const label = document.getElementById("modeLabel");

    if (mode === 'words') {
        label.innerText = "🇫🇷 Слова";
    } else {
        label.innerText = "🇫🇷 Предложения";
    }

    getRandomWord();
}

function openSettings() {
    toggleSettings(true);
}

function toggleSettings(show) {
    document.getElementById('settingsModal').style.display = show ? 'block' : 'none';
}

function applySettings() {
    settings.showTranslation = document.getElementById("toggleTranslation").checked;
    settings.autoTranscription = document.getElementById("toggleTranscription").checked;
    settings.autoHighlight = document.getElementById("toggleHighlight").checked;
    settings.filterSound = document.getElementById("soundFilter").value || null;
settings.useProgress = document.getElementById("useProgress").checked;
settings.wordMode = document.getElementById("wordMode").value;
settings.ankiMode = document.getElementById("ankiMode").checked;

    isHighlightMode = settings.autoHighlight;

    const hlBtn = document.getElementById("hlBtn");
    hlBtn.classList.toggle("active", isHighlightMode);

    if (current) renderWord();
saveSettings();
getRandomWord();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleTranslation").onchange = applySettings;
    document.getElementById("toggleTranscription").onchange = applySettings;
    document.getElementById("toggleHighlight").onchange = applySettings;
document.getElementById("useProgress").onchange = applySettings;
document.getElementById("wordMode").onchange = applySettings;
document.getElementById("ankiMode").onchange = applySettings;
    loadSettings();
});

function saveSettings() {
    localStorage.setItem("frSettings", JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem("frSettings");

    if (saved) {
        settings = JSON.parse(saved);
    }

    // применяем в UI
    document.getElementById("toggleTranslation").checked = settings.showTranslation;
    document.getElementById("toggleTranscription").checked = settings.autoTranscription;
    document.getElementById("toggleHighlight").checked = settings.autoHighlight;
    document.getElementById("soundFilter").value = settings.filterSound || "";
document.getElementById("useProgress").checked = settings.useProgress ?? true;
document.getElementById("wordMode").value = settings.wordMode || "all";
document.getElementById("ankiMode").checked = settings.ankiMode ?? false;

    isHighlightMode = settings.autoHighlight;
}


function parsePhonemes(str) {
    if (!str) return null;

    return str.split(',').map(p => {
        const [text, sound] = p.split(':');
        return { text, sound };
    });
}

function saveProgress() {
    localStorage.setItem("frProgress", JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem("frProgress");
    if (saved) progress = JSON.parse(saved);
}

function markLearned() {
    if (!progress.learned.includes(current.word)) {
        progress.learned.push(current.word);
        saveProgress();
    }
}

function showLearned() {
    alert(progress.learned.join("\n"));
}


document.getElementById("fileInput").addEventListener("change", handleFile);

function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(evt) {
        const text = evt.target.result;

        // простой CSV вариант
        const rows = text.split("\n");

        words = rows.map(r => {
            const [word, translation, transcription] = r.split(",");

            return {
                word,
                translation,
                transcription
            };
        });

        alert("Файл загружен!");
    };

    reader.readAsText(file);
}

function showLearned() {
    const el = document.getElementById("progressList");

    if (progress.learned.length === 0) {
        el.innerHTML = "Пока ничего не выучено";
        return;
    }

    el.innerHTML = progress.learned
        .map(w => `<div>${w}</div>`)
        .join('');
}

function resetProgress() {
    if (!confirm("Удалить весь прогресс?")) return;

    progress = { learned: [], difficult: [] };
    localStorage.removeItem("frProgress");

    alert("Прогресс сброшен");
}

function revealAnswer() {
    if (!current) return;

    document.getElementById("translation").innerText = current.translation;
}