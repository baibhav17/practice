let guessNumber = Math.floor(Math.random() * 20) + 1;
let score = 20, highScore = 0;

function myGuess() {
    let guess = document.querySelector("#guess").value;
    console.log('check',document.querySelector("#guess").value);
    // alert(guess)
    if (guess > guessNumber) {
        document.querySelector("#message").innerHTML = 'too high';
        score--;
        document.getElementById("score").innerHTML = score;
    } else if (guess < guessNumber) {
        document.getElementById("message").innerHTML = 'too low';
        score--;
        document.getElementById("score").innerHTML = score;
    } else if (guessNumber == guess) {
        // debugger
        document.getElementById("message").innerHTML = 'Bingo! you got the number';
        highScore = score > highScore ? score : highScore;
        console.log('highscore',highScore)
        document.getElementById("score").innerHTML = score;
        document.getElementById("highscore").innerHTML = highScore;
    }

}


const resetGame = () => {
document.querySelector("#guess").value = ' ';
document.getElementById("score").innerHTML = 20;
}