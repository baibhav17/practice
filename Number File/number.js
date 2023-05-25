let gameNumber, checkValue;
gameNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0, score=20;
function myGuess() {
     checkValue = document.getElementById("guess").value;
    if(checkValue >= 0 && checkValue < 21 && checkValue != '') {
        if(checkValue == gameNumber) {
            score > highScore ? (highScore = score) : (highScore = highScore);
            document.getElementById("message").innerHTML = "Bingo! you got the number"
            document.getElementById("highscore").innerHTML = highScore;
            document.getElementById("number").innerHTML = gameNumber;
        } else {
            if(score > 0 ){
                score = score - 1;
                document.getElementById("score").innerHTML = score;
                checkValue > gameNumber ? document.getElementById("message").innerHTML = "Too high" : document.getElementById("message").innerHTML = "Too low"
            } else {
                document.getElementById("message").innerHTML = "oops! try again."
                document.getElementById("check").disabled=true;
            }
        }
    } 
    else {
        alert("please enter value between 1 to 20 Only")
    }
}

  function resetGame() {
     score = 20;
     document.getElementById("score").innerHTML = score;
     document.getElementById("guess").value = '';
     gameNumber = Math.floor(Math.random() * 20) + 1;
     document.getElementById("message").innerHTML = "Start guessing..."
     document.getElementById("number").innerHTML = "?";

  }