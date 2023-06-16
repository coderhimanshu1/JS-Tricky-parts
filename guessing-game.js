function guessingGame() {
  //   generate a secret number
  let secretNum = Math.floor(Math.random() * 100);

  // Initialize guess count
  guesses = 0;

  //   set win status and initialize to false
  hasWon = false;

  return function guess(number) {
    guesses++;

    if (hasWon) {
      return "The game is over, you already won!";
    }

    // if number = secretNum return secretNum and guesses
    if (number === secretNum) {
      hasWon = true;
      return `You win! You found ${secretNum} in ${guesses} guesses.`;
    }

    // if number < secretNum return too low
    if (number < secretNum) return `${number} is too low!`;

    // if number > secretNum return too high
    if (number > secretNum) return `${number} is too high!`;
  };
}

module.exports = { guessingGame };
