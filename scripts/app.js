const puzzleEl = document.querySelector(".puzzle");
const statusMessage = document.querySelector(".status");
const resetButton = document.querySelector(".button");
let newHangman;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  newHangman.makeGuesses(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  statusMessage.textContent = newHangman.statusMessage;

  //Created a span for individual letters for styling
  newHangman.puzzle.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

//Set the request's reponse string as the puzzle text
const startGame = async () => {
  const puzzle = await getPuzzle(2);
  newHangman = new Hangman(puzzle, 5);
  render();
};

resetButton.addEventListener("click", startGame);

startGame();