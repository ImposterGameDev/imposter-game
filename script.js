const startScreen = document.getElementById("start-screen");
const revealScreen = document.getElementById("reveal-screen");
const discussionScreen = document.getElementById("discussion-screen");
const resultScreen = document.getElementById("result-screen");

const playerCountInput = document.getElementById("player-count");
const startButton = document.getElementById("start-button");

const playerTurnText = document.getElementById("player-turn-text");
const categoryText = document.getElementById("category-text");
const discussionCategoryText = document.getElementById("discussion-category-text");
const wordBox = document.getElementById("word-box");
const revealButton = document.getElementById("reveal-button");
const hideButton = document.getElementById("hide-button");
const nextButton = document.getElementById("next-button");

const showResultButton = document.getElementById("show-result-button");
const playAgainButton = document.getElementById("play-again-button");

const resultText = document.getElementById("result-text");
const resultCategoryText = document.getElementById("result-category-text");
const realWordText = document.getElementById("real-word-text");
const imposterWordText = document.getElementById("imposter-word-text");

let totalPlayers = 4;
let currentPlayer = 1;
let imposterPlayer = 1;
let selectedQuestionSet = null;
let wordIsShowing = false;

function showScreen(screenToShow) {
  const allScreens = [startScreen, revealScreen, discussionScreen, resultScreen];

  allScreens.forEach(function (screen) {
    screen.classList.remove("active");
  });

  screenToShow.classList.add("active");
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomQuestionSet() {
  const randomIndex = Math.floor(Math.random() * questionSets.length);
  return questionSets[randomIndex];
}

function resetWordBox() {
  wordBox.textContent = "Tap reveal to see your prompt";
  wordBox.classList.add("hidden-word");
  wordIsShowing = false;
}

function updatePlayerTurnText() {
  playerTurnText.textContent = `Player ${currentPlayer}'s Turn`;
}

function updateCategoryText() {
  const categoryLabel = `Category: ${selectedQuestionSet.category}`;
  categoryText.textContent = categoryLabel;
  discussionCategoryText.textContent = categoryLabel;
}

function getPromptForCurrentPlayer() {
  if (selectedQuestionSet.type === "word") {
    if (currentPlayer === imposterPlayer) {
      return "IMPOSTER";
    }
    return selectedQuestionSet.real;
  }

  if (selectedQuestionSet.type === "range") {
    if (currentPlayer === imposterPlayer) {
      return selectedQuestionSet.imposterPrompt;
    }
    return selectedQuestionSet.prompt;
  }

  return "";
}

function startGame() {
  totalPlayers = Number(playerCountInput.value);

  if (totalPlayers < 3 || totalPlayers > 12) {
    alert("Please enter a number of players between 3 and 12.");
    return;
  }

  currentPlayer = 1;
  imposterPlayer = getRandomNumber(1, totalPlayers);
  selectedQuestionSet = getRandomQuestionSet();

  updatePlayerTurnText();
  updateCategoryText();
  resetWordBox();
  showScreen(revealScreen);
}

function revealWord() {
  if (wordIsShowing) {
    return;
  }

  const currentPrompt = getPromptForCurrentPlayer();
  wordBox.textContent = currentPrompt;
  wordBox.classList.remove("hidden-word");
  wordIsShowing = true;
}

function hideWord() {
  resetWordBox();
}

function goToNextPlayer() {
  if (wordIsShowing) {
    alert("Hide the prompt before passing to the next player.");
    return;
  }

  if (currentPlayer < totalPlayers) {
    currentPlayer += 1;
    updatePlayerTurnText();
    resetWordBox();
  } else {
    showScreen(discussionScreen);
  }
}

function showResult() {
  resultText.textContent = `The imposter was Player ${imposterPlayer}.`;
  resultCategoryText.textContent = selectedQuestionSet.category;

  if (selectedQuestionSet.type === "word") {
    realWordText.textContent = selectedQuestionSet.real;
    imposterWordText.textContent = "IMPOSTER";
  } else {
    realWordText.textContent = selectedQuestionSet.prompt;
    imposterWordText.textContent = selectedQuestionSet.imposterPrompt;
  }

  showScreen(resultScreen);
}

function playAgain() {
  playerCountInput.value = totalPlayers;
  showScreen(startScreen);
}

startButton.addEventListener("click", startGame);
revealButton.addEventListener("click", revealWord);
hideButton.addEventListener("click", hideWord);
nextButton.addEventListener("click", goToNextPlayer);
showResultButton.addEventListener("click", showResult);
playAgainButton.addEventListener("click", playAgain);