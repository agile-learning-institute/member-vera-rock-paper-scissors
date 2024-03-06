console.log("game"); //to see if it is working//

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    console.log("computer-game"); //to see if it is working//

    const theChoice = options[Math.floor(Math.random() * 3)];
    return theChoice;
}

function playRound(playerSelection, computerSelection) {

}
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "TIE";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) { return "Player WINS!"
    }
}
console.log(getComputerChoice());