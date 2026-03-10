const lessons = [
  {
    id: 1,
    title: "Lição 1",
    subtitle: "Fundamentos iniciais",
    items: [
      {
        pinyin: "wǒ",
        characters: "我",
        translation: "Eu, mim",
        note: "Primeiro pronome pessoal singular."
      },
      {
        pinyin: "péngyou",
        characters: "朋友",
        translation: "Amigo",
        note: "Substantivo muito frequente em diálogos básicos."
      },
      {
        pinyin: "wǒ de péngyou",
        characters: "我的朋友",
        translation: "Meu amigo",
        note: "de (的) marca posse."
      },
      {
        pinyin: "nǐ",
        characters: "你",
        translation: "Você",
        note: "Pronome de segunda pessoa."
      },
      {
        pinyin: "nǐ de péngyou",
        characters: "你的朋友",
        translation: "Seu amigo",
        note: "Estrutura paralela à anterior."
      },
      {
        pinyin: "nǐ shì wǒ de péngyou",
        characters: "你是我的朋友",
        translation: "Você é meu amigo",
        note: "shì (是) funciona como verbo 'ser'."
      },
      {
        pinyin: "wǒ shì nǐ de péngyou",
        characters: "我是你的朋友",
        translation: "Eu sou seu amigo",
        note: "Mesma estrutura com ordem trocada."
      },
      {
        pinyin: "zhè shì wǒ de péngyou",
        characters: "这是我的朋友",
        translation: "Este é meu amigo",
        note: "zhè (这) significa 'este/isto'."
      },
      {
        pinyin: "bù",
        characters: "不",
        translation: "Não",
        note: "Usado para negação."
      },
      {
        pinyin: "nǐ bú shì wǒ de péngyou",
        characters: "你不是我的朋友",
        translation: "Você não é meu amigo",
        note: "bù muda para bú antes de sílaba de quarto tom."
      },
      {
        pinyin: "nà shì wǒ de",
        characters: "那是我的",
        translation: "Aquilo é meu",
        note: "nà (那) significa 'aquilo/aquele'."
      },
      {
        pinyin: "zhè shì wǒ de, nà shì nǐ de",
        characters: "这是我的，那是你的",
        translation: "Isto é meu, aquilo é seu",
        note: "Boa frase para contraste entre zhè e nà."
      }
    ]
  },
  {
    id: 2,
    title: "Lição 2",
    subtitle: "Perguntas simples e demonstrativos",
    items: [
      {
        pinyin: "ma",
        characters: "吗",
        translation: "Partícula de pergunta",
        note: "Transforma uma frase afirmativa em interrogativa."
      },
      {
        pinyin: "zhège",
        characters: "这个",
        translation: "Este, isto",
        note: "Forma completa com classificador demonstrativo."
      },
      {
        pinyin: "nàge",
        characters: "那个",
        translation: "Aquele, aquilo",
        note: "Contraste direto com zhège."
      },
      {
        pinyin: "shéi",
        characters: "谁",
        translation: "Quem",
        note: "Pronome interrogativo."
      },
      {
        pinyin: "tā",
        characters: "他 / 她",
        translation: "Ele / ela",
        note: "Mesmo pinyin para masculino e feminino."
      },
      {
        pinyin: "zhège shì shéi",
        characters: "这个是谁",
        translation: "Quem é este?",
        note: "Estrutura interrogativa básica."
      },
      {
        pinyin: "tā shì wǒ de péngyou ma",
        characters: "他是我的朋友吗",
        translation: "Ele é meu amigo?",
        note: "Pergunta com ma no fim."
      }
    ]
  },
  {
    id: 3,
    title: "Lição 3",
    subtitle: "Existência e posse",
    items: [
      {
        pinyin: "yǒu",
        characters: "有",
        translation: "Ter, existir",
        note: "Verbo muito frequente."
      },
      {
        pinyin: "méiyǒu",
        characters: "没有",
        translation: "Não ter",
        note: "Negação comum de yǒu."
      },
      {
        pinyin: "shǒujī",
        characters: "手机",
        translation: "Celular",
        note: "Vocabulário cotidiano."
      },
      {
        pinyin: "píngguǒ",
        characters: "苹果",
        translation: "Maçã",
        note: "Substantivo concreto e comum em lições iniciais."
      },
      {
        pinyin: "wǒ yǒu yí gè shǒujī",
        characters: "我有一个手机",
        translation: "Eu tenho um celular",
        note: "gè (个) é classificador geral."
      },
      {
        pinyin: "nǐ yǒu ma",
        characters: "你有吗",
        translation: "Você tem?",
        note: "Pergunta curta e natural."
      },
      {
        pinyin: "wǒ méiyǒu",
        characters: "我没有",
        translation: "Eu não tenho",
        note: "Resposta negativa direta."
      }
    ]
  }
];

const lessonNav = document.getElementById("lessonNav");
const lessonContent = document.getElementById("lessonContent");
const contentTitle = document.getElementById("contentTitle");
const contentSubtitle = document.getElementById("contentSubtitle");
const lessonTitle = document.getElementById("lessonTitle");
const lessonCount = document.getElementById("lessonCount");
const progressFill = document.getElementById("progressFill");

const togglePinyin = document.getElementById("togglePinyin");
const toggleCharacters = document.getElementById("toggleCharacters");
const toggleTranslation = document.getElementById("toggleTranslation");
const toggleNotes = document.getElementById("toggleNotes");
const searchInput = document.getElementById("searchInput");
const expandAllBtn = document.getElementById("expandAllBtn");
const collapseAllBtn = document.getElementById("collapseAllBtn");

let currentLessonId = 1;
let currentFilter = "";

function buildLessonNav() {
  lessonNav.innerHTML = "";

  lessons.forEach((lesson) => {
    const button = document.createElement("button");
    button.className = "lesson-chip";
    button.textContent = lesson.title;
    button.dataset.lessonId = String(lesson.id);

    if (lesson.id === currentLessonId) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentLessonId = lesson.id;
      syncActiveLessonChip();
      renderLesson();
    });

    lessonNav.appendChild(button);
  });
}

function syncActiveLessonChip() {
  const chips = lessonNav.querySelectorAll(".lesson-chip");
  chips.forEach((chip) => {
    chip.classList.toggle(
      "active",
      Number(chip.dataset.lessonId) === currentLessonId
    );
  });
}

function getCurrentLesson() {
  return lessons.find((lesson) => lesson.id === currentLessonId) || lessons[0];
}

function normalize(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function itemMatchesFilter(item, filter) {
  if (!filter) return true;

  const haystack = normalize(
    `${item.pinyin} ${item.characters} ${item.translation} ${item.note || ""}`
  );

  return haystack.includes(normalize(filter));
}

function createLine(className, text, masked = false) {
  const p = document.createElement("p");
  p.className = `line ${className}${masked ? " masked" : ""}`;
  p.textContent = text;

  p.addEventListener("click", () => {
    p.classList.toggle("masked");
  });

  return p;
}

function renderLesson() {
  const lesson = getCurrentLesson();
  const filteredItems = lesson.items.filter((item) =>
    itemMatchesFilter(item, currentFilter)
  );

  contentTitle.textContent = lesson.title;
  contentSubtitle.textContent = lesson.subtitle;
  lessonTitle.textContent = lesson.title;
  lessonCount.textContent = `${filteredItems.length} ${
    filteredItems.length === 1 ? "item" : "itens"
  }`;

  const progress = lesson.items.length
    ? Math.round((filteredItems.length / lesson.items.length) * 100)
    : 0;

  progressFill.style.width = `${progress}%`;

  lessonContent.innerHTML = "";

  applyGlobalVisibility();

  if (!filteredItems.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Nenhum resultado encontrado para esta busca.";
    lessonContent.appendChild(empty);
    return;
  }

  filteredItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const cardTop = document.createElement("div");
    cardTop.className = "card-top";

    const cardIndex = document.createElement("div");
    cardIndex.className = "card-index";
    cardIndex.textContent = String(index + 1);

    const cardMain = document.createElement("div");
    cardMain.className = "card-main";

    const pinyin = createLine("pinyin", item.pinyin, false);
    const characters = createLine("characters", item.characters, false);
    const translation = createLine("translation", item.translation, false);

    cardMain.appendChild(pinyin);
    cardMain.appendChild(characters);
    cardMain.appendChild(translation);

    const metaRow = document.createElement("div");
    metaRow.className = "meta-row";

    const badge1 = document.createElement("span");
    badge1.className = "badge";
    badge1.textContent = "Toque numa linha para ocultar/revelar";

    const badge2 = document.createElement("span");
    badge2.className = "badge";
    badge2.textContent = lesson.title;

    metaRow.appendChild(badge1);
    metaRow.appendChild(badge2);
    cardMain.appendChild(metaRow);

    cardTop.appendChild(cardIndex);
    cardTop.appendChild(cardMain);

    const cardBottom = document.createElement("div");
    cardBottom.className = "card-bottom";

    const note = document.createElement("p");
    note.className = "note";
    note.textContent = item.note || "Sem nota.";
    cardBottom.appendChild(note);

    card.appendChild(cardTop);
    card.appendChild(cardBottom);
    lessonContent.appendChild(card);
  });
}

function applyGlobalVisibility() {
  lessonContent.classList.toggle(
    "hidden-global-pinyin",
    !togglePinyin.checked
  );
  lessonContent.classList.toggle(
    "hidden-global-characters",
    !toggleCharacters.checked
  );
  lessonContent.classList.toggle(
    "hidden-global-translation",
    !toggleTranslation.checked
  );
  lessonContent.classList.toggle(
    "hidden-global-notes",
    !toggleNotes.checked
  );
}

function revealAll() {
  lessonContent.querySelectorAll(".masked").forEach((el) => {
    el.classList.remove("masked");
  });

  togglePinyin.checked = true;
  toggleCharacters.checked = true;
  toggleTranslation.checked = true;
  toggleNotes.checked = true;
  applyGlobalVisibility();
}

function hideTranslationsOnly() {
  toggleTranslation.checked = false;
  applyGlobalVisibility();
}

togglePinyin.addEventListener("change", applyGlobalVisibility);
toggleCharacters.addEventListener("change", applyGlobalVisibility);
toggleTranslation.addEventListener("change", applyGlobalVisibility);
toggleNotes.addEventListener("change", applyGlobalVisibility);

searchInput.addEventListener("input", (event) => {
  currentFilter = event.target.value;
  renderLesson();
});

expandAllBtn.addEventListener("click", revealAll);
collapseAllBtn.addEventListener("click", hideTranslationsOnly);

buildLessonNav();
renderLesson();
