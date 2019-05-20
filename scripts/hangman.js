class Hangman {
  constructor(word, guesses, guessedLetters) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = guesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  get puzzle() {
    let puzzle = "";
    this.word.forEach(letter => {
      if (
        this.guessedLetters.includes(letter.toLowerCase()) ||
        letter === " "
      ) {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  calculateStatus = function() {
    const finished = this.word.every(
      letter => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  };
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses Left: ${this.remainingGuesses}`;
    } else if (this.status === "finished") {
      return `Great work! You guessed the word`;
    } else {
      return `Nice try! The word was ${this.word.join("")}`;
    }
  }
  makeGuesses = function(guess) {
    const isUnique = !this.guessedLetters.includes(guess.toLowerCase());
    const isBadGuess = !this.word.includes(guess);
    if (this.status === "playing") {
      if (isUnique) {
        this.guessedLetters.push(guess.toLowerCase());
      }
      if (isUnique && isBadGuess) {
        this.remainingGuesses--;
      }
      newHangman.calculateStatus();
    }
  };
}
