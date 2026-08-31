const options = ["Rock", "Paper", "Scissors"]; // three main options

//randomize the computer options
function getRandomComputerResult() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// checks if the player wins at all
function hasPlayerWonTheRound(playerChoice, computerChoice) {
    return (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    );
}

//keeps the score
let playerScore = 0;
let computerScore = 0;

// finds the results for each round using hasPlayerWonTheRound()
// if false computer wins
//if true player wins
// if both chose the same its tie
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

//HTML elements called
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

//result from the getRoundResults() is displayed
// sets the computer and player scores into the HTML
// first to reach the score of 3 wins
//if there is a winner the options are hid and reset button is provided
function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;

        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
};

//resets the game
function resetGame()
{
    computerScore = 0;
    playerScore = 0;
    playerScoreSpanElement.innerText = 0;
    computerScoreSpanElement.innerText = 0;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerHTML = "";
};

//buttons of the options
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//event listeners for the button
resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});

paperBtn.addEventListener("click", function () {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});