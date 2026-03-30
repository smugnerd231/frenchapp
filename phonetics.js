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

{word:"maison",translation:"дом",transcription:"[mɛzɔ̃]"},
{word:"homme",translation:"мужчина",transcription:"[ɔm]"},
{word:"femme",translation:"женщина",transcription:"[fam]"},
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
    { p: 'ien', s: 'jẽ' }, { p: 'emm', s: 'a' }, { p: 'enn', s: 'a' },
    { p: 'eau', s: 'o' }, { p: 'ueu', s: 'ɥ' }, { p: 'ain', s: 'ɛ̃' },
    { p: 'aim', s: 'ɛ̃' }, { p: 'ein', s: 'ɛ̃' }, { p: 'oin', s: 'w' },
    { p: 'ill', s: 'j' }, { p: 'au', s: 'o' }, { p: 'ai', s: 'ɛ' },
    { p: 'ei', s: 'ɛ' }, { p: 'ui', s: 'ɥ' }, { p: 'ue', s: 'ɥ' },
    { p: 'ua', s: 'ɥ' }, { p: 'ou', s: 'u' }, { p: 'oi', s: 'w' },
    { p: 'in', s: 'ɛ̃' }, { p: 'im', s: 'ɛ̃' }, { p: 'un', s: 'œ̃' },
    { p: 'um', s: 'œ̃' }, { p: 'on', s: 'ɔ̃' }, { p: 'om', s: 'ɔ̃' },
    { p: 'an', s: 'ɑ̃' }, { p: 'am', s: 'ɑ̃' }, { p: 'en', s: 'ɑ̃' },
    { p: 'em', s: 'ɑ̃' }, { p: 'er', s: 'e' }, { p: 'es', s: 'e' },
    { p: 'ez', s: 'e' }, { p: 'é', s: 'e' }, { p: 'è', s: 'ɛ' },
    { p: 'ê', s: 'ɛ' }, { p: 'â', s: 'a' }, { p: 'ô', s: 'o' },
    { p: 'ch', s: 'ʃ' }, { p: 'gn', s: 'ɲ' }, { p: 'ç', s: 's' },
    { p: 'u', s: 'у' },
    // Умные правила (Regex):
    { p: /i(?=[aeiouyâêîôû])/gi, s: 'j' }, // i перед гласной
    { p: /c(?=[eiy])/gi, s: 's' }, // c перед e, i, y
    { p: /g(?=[eiy])/gi, s: 'ʒ' }, // g перед e, i, y
    // Просто выделение:
    { p: 'eu', s: '' }, { p: 'œu', s: '' }, { p: 'œ', s: '' }
];

let current = null;
let isHighlightMode = false;

function toggleModal(show) { document.getElementById('rulesModal').style.display = show ? 'block' : 'none'; }

function toggleHighlightMode() {
    isHighlightMode = !isHighlightMode;
    const btn = document.getElementById('hlBtn');
    btn.innerText = isHighlightMode ? "Подсветка: Вкл" : "Подсветка: Выкл";
    btn.classList.toggle('active', isHighlightMode);
    if (current) renderWord();

  highlightMode = !highlightMode;

    document.getElementById("hlBtn").classList.toggle("active");

    if (highlightMode) {
        showTranscription(); // 🔥 авто-показ
    }
}

function renderWord() {
    const wordEl = document.getElementById("word");
    if (!isHighlightMode) { wordEl.innerText = current.word; return; }

    let tempWord = current.word;
    // Сортируем правила: сначала длинные строки, потом Regex, потом короткие строки
    const sortedRules = [...phoneticRules].sort((a, b) => {
        let lenA = (a.p instanceof RegExp) ? 1.5 : a.p.length;
        let lenB = (b.p instanceof RegExp) ? 1.5 : b.p.length;
        return lenB - lenA;
    });

    // Создаем общую регулярку
    const combinedRegex = new RegExp(sortedRules.map(r => (r.p instanceof RegExp ? r.p.source : r.p)).join('|'), 'gi');

    wordEl.innerHTML = tempWord.replace(combinedRegex, (match, offset) => {
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

function getRandomWord() {
    current = words[Math.floor(Math.random() * words.length)];
    renderWord();
    document.getElementById("translation").innerText = current.translation;
    document.getElementById("transcription").innerText = "";
    document.getElementById("showBtn").style.display = "inline-block";
    document.getElementById("speaker").style.display = "inline-block";
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
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
}

input.classList.add("correct");
