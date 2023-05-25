let guessNumber = Math.floor(Math.random() * 20) + 1;
let score = 20, highScore = 0;
let gameMessage = document.querySelector("#message");
let gameScore = document.querySelector("#score");
let guessButton = document.getElementById("check");
let guess = document.getElementById("guess");

const handleInputChange = () => {
    guessButton.disabled = guess.value.length === 0;
}

const myGuess = () => {
    if (guess.value >= 1 && guess.value <= 20) {
        if (guessNumber == guess.value) {
            gameMessage.innerHTML = 'Bingo! you got the number';
            highScore = score > highScore ? score : highScore;
            gameScore.innerHTML = score;
            document.querySelector("#highscore").innerHTML = highScore;
            guessButton.disabled=true;
        } else {
            if (score > 0) {
                score--;
                guess.value > guessNumber ? gameMessage.innerHTML = 'too high' : gameMessage.innerHTML = 'too low';
                gameScore.innerHTML = score;
            } else {
                gameMessage.innerHTML = "oops! try again."
                guessButton.disabled=true;
            }
        }
    } else {
        alert('enter number between 1-20')
    }
}

const resetGame = () => {
    score = 20;
    guessNumber = Math.floor(Math.random() * 20) + 1;
    guessButton.disabled=false;
    document.querySelector("#guess").value = ' ';
    gameScore.innerHTML = score;
    gameMessage.innerHTML = "Start guessing..."
}