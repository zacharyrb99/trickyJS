function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100);
    let gameOver = false;
    let guessCount = 0;

    const guess = (num) => {
        if (gameOver) return "The game is over, you already won!";
        guessCount++;

        if (num === randomNum) {
            gameOver = true;
            return `You win! You found ${num} in ${guessCount} ${guessCount === 1 ? "guess" : "guesses"}.`;
        }

        if (num < randomNum) return `${num} is too low!`;
        if (num > randomNum) return `${num} is too high!`;
    }

    return guess;
}

module.exports = { guessingGame };
