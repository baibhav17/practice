//get initial values

let score0El = document.querySelector("#score--0");
let score1El = document.querySelector("#score--1");
let diceEl = document.querySelector(".dice");
let currentScore0 = document.querySelector("#current--0");
let currentScore1 = document.querySelector("#current--1");

//setting initial conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hideDice')
currentScore0.textContent = 0;

let currentScore = 0;
let activePlayer = 0;

let scores =[0,0]

// Roll the dice
const handleRollDice = () => {
    let randomDiceNum = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hideDice');
    diceEl.src = `dice-${randomDiceNum}.png`

    if(randomDiceNum != 1) {
        currentScore = currentScore + randomDiceNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        // switch the player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        activePlayer = activePlayer == 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    }
}

// Hold score of current player and then switch the player, also check if current player wins the game or not
const handleHold = () => {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =  scores[activePlayer]
    if(scores[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`#name--${activePlayer}`).classList.add('player--winner','name')
        alert(`Player ${activePlayer+1} wins`)
    }
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    activePlayer = activePlayer == 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
}

// Reset the game and reset all initial values
const resetTheGame = () => {
    activePlayer = activePlayer == 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    document.querySelector(`#name--${activePlayer}`).classList.remove('player--winner','name')
    activePlayer = 0;
    currentScore = 0;
    scores =[0,0]
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    diceEl.classList.add('hideDice')
}