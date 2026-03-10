const courseScreen = document.getElementById("courseScreen");
const lessonScreen = document.getElementById("lessonScreen");
const courseAccordion = document.getElementById("courseAccordion");

const backBtn = document.getElementById("backBtn");
const lessonTitleEl = document.getElementById("lessonTitle");
const sentenceProgressEl = document.getElementById("sentenceProgress");
const sentenceCounterEl = document.getElementById("sentenceCounter");

const pinyinLine = document.getElementById("pinyinLine");
const charactersLine = document.getElementById("charactersLine");
const translationLine = document.getElementById("translationLine");

const newWordBadge = document.getElementById("newWordBadge");
const vocabStrip = document.getElementById("vocabStrip");

const repeatBtn = document.getElementById("repeatBtn");
const speedBtn = document.getElementById("speedBtn");
const playBtn = document.getElementById("playBtn");
const listBtn = document.getElementById("listBtn");
const notesBtn = document.getElementById("notesBtn");
const prevSentenceBtn = document.getElementById("prevSentenceBtn");
const nextSentenceBtn = document.getElementById("nextSentenceBtn");

const overlayPanel = document.getElementById("overlayPanel");
const overlayTitle = document.getElementById("overlayTitle");
const overlayContent = document.getElementById("overlayContent");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

let selectedLessonId = "lesson-18";
let currentSentenceIndex = 0;
let repeatMode = false;
let speedMode = "B";

function getAllLessons() {
  return APP_DATA.levels.flatMap(level =>
    level.lessons.map(lesson => ({
      ...lesson,
      levelId: level.id,
      levelTitle: level.title
    }))
  );
}

function getLessonById(id) {
  return getAllLessons().find(lesson => lesson.id === id);
}

function renderCourseAccordion() {
  courseAccordion.innerHTML = "";

  APP_DATA.levels.forEach(level => {
    const block = document.createElement("section");
    block.className = "level-block";
    if (level.expanded) block.classList.add("expanded");

    const header = document.createElement("button");
    header.className = "level-header";

    const left = document.createElement("div");
    left.className = "level-header-left";

    const title = document.createElement("div");
    title.className = "level-title";
    title.textContent = level.title;

    const subtitle = document.createElement("div");
    subtitle.className = "level-subtitle";
    subtitle.textContent = level.subtitle || "";

    left.appendChild(title);
    if (level.subtitle) left.appendChild(subtitle);

    const chev = document.createElement("div");
    chev.className = "level-chevron";
    chev.textContent = block.classList.contains("expanded") ? "▾" : "▸";

    header.appendChild(left);
    header.appendChild(chev);

    header.addEventListener("click", () => {
      block.classList.toggle("expanded");
      chev.textContent = block.classList.contains("expanded") ? "▾" : "▸";
    });

    const lessonList = document.createElement("div");
    lessonList.className = "lesson-list";

    level.lessons.forEach(lesson => {
      const row = document.createElement("div");
      row.className = "lesson-row";
      if (lesson.id === selectedLessonId) row.classList.add("selected");

      const bar = document.createElement("div");
      bar.className = "lesson-row-bar";

      const content = document.createElement("div");
      content.className = "lesson-row-content";

      const rowTitle = document.createElement("div");
      rowTitle.className = "lesson-row-title";
      rowTitle.textContent = lesson.title;

      const meta = document.createElement("div");
      meta.className = "lesson-row-meta";
      meta.textContent = lesson.meta || "";

      content.appendChild(rowTitle);
      if (lesson.meta) content.appendChild(meta);

      row.appendChild(bar);
      row.appendChild(content);

      row.addEventListener("click", () => {
        selectedLessonId = lesson.id;
        currentSentenceIndex = 0;
        renderCourseAccordion();
        openLesson();
      });

      lessonList.appendChild(row);
    });

    block.appendChild(header);
    block.appendChild(lessonList);
    courseAccordion.appendChild(block);
  });
}

function openLesson() {
  const lesson = getLessonById(selectedLessonId);
  if (!lesson) return;

  courseScreen.classList.remove("active");
  lessonScreen.classList.add("active");
  renderLessonSentence();
}

function closeLesson() {
  lessonScreen.classList.remove("active");
  courseScreen.classList.add("active");
  hideOverlay();
}

function getCurrentSentence() {
  const lesson = getLessonById(selectedLessonId);
  if (!lesson || !lesson.sentences.length) return null;
  return lesson.sentences[currentSentenceIndex];
}

function renderProgress(total, current) {
  sentenceProgressEl.innerHTML = "";

  const max = Math.max(total, 25);
  for (let i = 0; i < max; i += 1) {
    const cell = document.createElement("div");
    cell.className = "progress-cell";

    if (i < current) cell.classList.add("done");
    if (i === current) cell.classList.add("active");

    sentenceProgressEl.appendChild(cell);
  }
}

function resetRevealState() {
  charactersLine.dataset.revealed = "false";
  translationLine.dataset.revealed = "false";

  charactersLine.className = "sentence-line reveal-line hidden-placeholder";
  translationLine.className = "sentence-line reveal-line hidden-placeholder translation-placeholder";

  charactersLine.textContent = "Show characters";
  translationLine.textContent = "Show translation";
}

function renderVocab(sentence) {
  vocabStrip.innerHTML = "";

  const vocab = sentence.vocab || [];
  vocab.forEach(item => {
    const cell1 = document.createElement("div");
    cell1.className = "vocab-cell";
    cell1.textContent = item.pinyin;

    const cell2 = document.createElement("div");
    cell2.className = "vocab-cell";
    cell2.textContent = item.characters;

    const cell3 = document.createElement("div");
    cell3.className = "vocab-cell";
    cell3.textContent = item.translation;

    vocabStrip.appendChild(cell1);
    vocabStrip.appendChild(cell2);
    vocabStrip.appendChild(cell3);
  });
}

function renderLessonSentence() {
  const lesson = getLessonById(selectedLessonId);
  const sentence = getCurrentSentence();

  if (!lesson || !sentence) {
    lessonTitleEl.textContent = "Lesson";
    pinyinLine.textContent = "";
    charactersLine.textContent = "Show characters";
    translationLine.textContent = "Show translation";
    sentenceCounterEl.textContent = "0/0";
    sentenceProgressEl.innerHTML = "";
    vocabStrip.innerHTML = "";
    return;
  }

  lessonTitleEl.textContent = lesson.title;
  sentenceCounterEl.textContent = `${currentSentenceIndex + 1}/${lesson.sentences.length}`;
  pinyinLine.textContent = sentence.pinyin;

  resetRevealState();
  renderProgress(lesson.sentences.length, currentSentenceIndex);
  renderVocab(sentence);

  newWordBadge.style.display = sentence.newWord ? "inline-flex" : "none";

  if (!overlayPanel.classList.contains("hidden")) {
    if (overlayTitle.textContent === "Lista") renderSentenceListOverlay();
    if (overlayTitle.textContent === "Notas") renderNotesOverlay();
  }
}

function revealCharacters() {
  const sentence = getCurrentSentence();
  if (!sentence) return;

  charactersLine.dataset.revealed = "true";
  charactersLine.className = "sentence-line reveal-line characters-visible";
  charactersLine.textContent = sentence.characters;
}

function revealTranslation() {
  const sentence = getCurrentSentence();
  if (!sentence) return;

  translationLine.dataset.revealed = "true";
  translationLine.className = "sentence-line reveal-line translation-visible";
  translationLine.textContent = sentence.translation;
}

function nextSentence() {
  const lesson = getLessonById(selectedLessonId);
  if (!lesson || !lesson.sentences.length) return;

  currentSentenceIndex += 1;
  if (currentSentenceIndex >= lesson.sentences.length) {
    currentSentenceIndex = repeatMode ? 0 : lesson.sentences.length - 1;
  }

  renderLessonSentence();
}

function prevSentence() {
  const lesson = getLessonById(selectedLessonId);
  if (!lesson || !lesson.sentences.length) return;

  currentSentenceIndex -= 1;
  if (currentSentenceIndex < 0) {
    currentSentenceIndex = repeatMode ? lesson.sentences.length - 1 : 0;
  }

  renderLessonSentence();
}

function showOverlay(title) {
  overlayTitle.textContent = title;
  overlayPanel.classList.remove("hidden");
}

function hideOverlay() {
  overlayPanel.classList.add("hidden");
}

function renderSentenceListOverlay() {
  const lesson = getLessonById(selectedLessonId);
  if (!lesson) return;

  overlayContent.innerHTML = "";
  const list = document.createElement("div");
  list.className = "overlay-list";

  lesson.sentences.forEach((sentence, index) => {
    const row = document.createElement("div");
    row.className = "overlay-row";
    if (index === currentSentenceIndex) row.classList.add("active");

    const idx = document.createElement("div");
    idx.className = "overlay-index";
    idx.textContent = String(index + 1);

    const main = document.createElement("div");
    main.className = "overlay-main";

    const top = document.createElement("div");
    top.className = "overlay-main-top";
    top.textContent = sentence.pinyin;

    const bottom = document.createElement("div");
    bottom.className = "overlay-main-bottom";
    bottom.textContent = sentence.translation;

    main.appendChild(top);
    main.appendChild(bottom);

    row.appendChild(idx);
    row.appendChild(main);

    row.addEventListener("click", () => {
      currentSentenceIndex = index;
      renderLessonSentence();
    });

    list.appendChild(row);
  });

  overlayContent.appendChild(list);
}

function renderNotesOverlay() {
  const sentence = getCurrentSentence();
  overlayContent.innerHTML = "";

  const block = document.createElement("div");
  block.className = "note-block";

  (sentence?.notes || ["Sem notas para esta frase."]).forEach(noteText => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.textContent = noteText;
    block.appendChild(card);
  });

  overlayContent.appendChild(block);
}

charactersLine.addEventListener("click", () => {
  if (charactersLine.dataset.revealed !== "true") revealCharacters();
});

translationLine.addEventListener("click", () => {
  if (translationLine.dataset.revealed !== "true") revealTranslation();
});

playBtn.addEventListener("click", nextSentence);
nextSentenceBtn.addEventListener("click", nextSentence);
prevSentenceBtn.addEventListener("click", prevSentence);

repeatBtn.addEventListener("click", () => {
  repeatMode = !repeatMode;
  repeatBtn.style.opacity = repeatMode ? "1" : "0.55";
});

speedBtn.addEventListener("click", () => {
  const cycle = ["A", "B", "C"];
  const next = cycle[(cycle.indexOf(speedMode) + 1) % cycle.length];
  speedMode = next;
  speedBtn.textContent = speedMode;
});

listBtn.addEventListener("click", () => {
  showOverlay("Lista");
  renderSentenceListOverlay();
});

notesBtn.addEventListener("click", () => {
  showOverlay("Notas");
  renderNotesOverlay();
});

closeOverlayBtn.addEventListener("click", hideOverlay);
backBtn.addEventListener("click", closeLesson);

document.addEventListener("keydown", (event) => {
  if (!lessonScreen.classList.contains("active")) return;

  if (event.key === "ArrowRight") nextSentence();
  if (event.key === "ArrowLeft") prevSentence();
  if (event.key === "c") revealCharacters();
  if (event.key === "t") revealTranslation();
  if (event.key === "Escape") hideOverlay();
});

renderCourseAccordion();
