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

const ALL_LESSONS = COURSE_DATA.levels.flatMap((level) =>
  level.lessons.map((lesson) => ({
    ...lesson,
    levelId: level.id,
    levelTitle: level.title,
    levelSubtitle: level.subtitle
  }))
);

let currentLessonId = ALL_LESSONS[0]?.id || null;
let currentFilter = "";

function buildLessonNav() {
  lessonNav.innerHTML = "";

  ALL_LESSONS.forEach((lesson) => {
    const button = document.createElement("button");
    button.className = "lesson-chip";
    button.textContent = lesson.title;
    button.dataset.lessonId = lesson.id;

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
    chip.classList.toggle("active", chip.dataset.lessonId === currentLessonId);
  });
}

function getCurrentLesson() {
  return ALL_LESSONS.find((lesson) => lesson.id === currentLessonId) || ALL_LESSONS[0];
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
  if (!lesson) return;

  const filteredItems = lesson.items.filter((item) =>
    itemMatchesFilter(item, currentFilter)
  );

  contentTitle.textContent = `${lesson.levelTitle} · ${lesson.title}`;
  contentSubtitle.textContent = lesson.subtitle || lesson.levelSubtitle || "";
  lessonTitle.textContent = lesson.title;
  lessonCount.textContent = `${filteredItems.length} ${filteredItems.length === 1 ? "item" : "itens"}`;

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
    badge2.textContent = lesson.levelTitle;

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
  lessonContent.classList.toggle("hidden-global-pinyin", !togglePinyin.checked);
  lessonContent.classList.toggle("hidden-global-characters", !toggleCharacters.checked);
  lessonContent.classList.toggle("hidden-global-translation", !toggleTranslation.checked);
  lessonContent.classList.toggle("hidden-global-notes", !toggleNotes.checked);
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
