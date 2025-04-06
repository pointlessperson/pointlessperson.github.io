let currentIndex = 0;
let showingAnswer = false;
let randomize = false;
let autoplayInterval;
let questionDuration = 10000;
let answerDuration = 5000;
let isAutoplayPlaying = false;
let lastInteractionTime;
let playlist = []; // Shuffled playlist indices
let originalIndices = []; // Original indices for display

const card = document.getElementById('card');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const randomToggle = document.getElementById('randomToggle');
const progress = document.getElementById('progress');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const questionTimeInput = document.getElementById('questionTime');
const answerTimeInput = document.getElementById('answerTime');

function renderCard() {
  if (!cards.length) {
    cardFront.textContent = "No cards loaded.";
    cardBack.textContent = "";
    progress.textContent = "0 / 0";
    return;
  }

  const currentCard = cards[playlist[currentIndex]];
  cardFront.textContent = currentCard.question;
  cardBack.textContent = currentCard.answer;

  if (!showingAnswer) {
    card.classList.remove('flipped');
  } else {
    card.classList.add('flipped');
  }

  progress.textContent = `${originalIndices[currentIndex] + 1} / ${cards.length}`; // use original indices
}

function flipCard() {
  showingAnswer = !showingAnswer;
  renderCard();
  lastInteractionTime = Date.now();
}

function nextCard() {
  if (playlist.length > 0 && currentIndex < playlist.length - 1) {
    currentIndex++;
  }
  showingAnswer = false;

  card.classList.add('transitioning');

  setTimeout(() => {
    renderCard();
    card.classList.remove('transitioning');
  }, 200);
  lastInteractionTime = Date.now();
}

function prevCard() {
  if (playlist.length > 0 && currentIndex > 0) {
    currentIndex--;
  }
  showingAnswer = false;

  card.classList.add('transitioning');

  setTimeout(() => {
    renderCard();
    card.classList.remove('transitioning');
  }, 200);
  lastInteractionTime = Date.now();
}

function toggleRandom() {
  randomize = randomToggle.checked;
  if (randomize) {
    playlist = shuffleArray(cards.map((_, index) => index));
    originalIndices = playlist.map(index => index); // Initialize original indices
  } else {
    playlist = cards.map((_, index) => index);
    originalIndices = cards.map((_, index) => index); // Initialize original indices
  }
  currentIndex = 0;
  renderCard();
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function startAutoplay() {
  if (isAutoplayPlaying) return;
  isAutoplayPlaying = true;
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline-flex';
  lastInteractionTime = Date.now();

  autoplayInterval = setInterval(() => {
    const elapsedTime = Date.now() - lastInteractionTime;

    if (showingAnswer && elapsedTime >= answerDuration) {
      nextCard();
    } else if (!showingAnswer && elapsedTime >= questionDuration) {
      flipCard();
    }
  }, 100);
}

function pauseAutoplay() {
  clearInterval(autoplayInterval);
  isAutoplayPlaying = false;
  playButton.style.display = 'inline-flex';
  pauseButton.style.display = 'none';
}

function updateQuestionTime() {
  questionDuration = parseInt(questionTimeInput.value, 10) * 1000;
}

function updateAnswerTime() {
  answerDuration = parseInt(answerTimeInput.value, 10) * 1000;
}

card.addEventListener('click', flipCard);

document.addEventListener('keydown', (e) => {
  if (!cards.length) return;

  if (e.code === 'Space') {
    e.preventDefault();
    flipCard();
  } else if (e.code === 'ArrowRight') {
    nextCard();
  } else if (e.code === 'ArrowLeft') {
    prevCard();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (randomToggle.checked) {
    playlist = shuffleArray(cards.map((_, index) => index));
  } else {
    playlist = cards.map((_, index) => index);
  }
  originalIndices = cards.map((_, index) => index); // Initialize original indices
  renderCard();
  questionTimeInput.value = questionDuration / 1000;
  answerTimeInput.value = answerDuration / 1000;
});