let currentCardIndex = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const nextButton = document.getElementById("nextBtn");

function loadCard(index) {
  const card = cards[index];
  questionElement.textContent = card.question;
  answerElement.textContent = "";  // Clear the answer initially
}

function showAnswer() {
  const card = cards[currentCardIndex];
  answerElement.textContent = card.answer;
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % cards.length;  // Loop back to the first card
  loadCard(currentCardIndex);
}

nextButton.addEventListener("click", () => {
  if (answerElement.textContent === "") {
    showAnswer();
  } else {
    nextCard();
  }
});

// Load the first card
loadCard(currentCardIndex);
