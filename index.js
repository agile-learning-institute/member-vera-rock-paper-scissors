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
    ) {
        return "Player WINS!";
    }
    return "Computer WINS!";
}
console.log(checkWinner("rock", "rock"));
console.log(checkWinner("rock", "paper"));
console.log(checkWinner("rock", "scissors"));
console.log(checkWinner("paper", "rock"));
console.log(checkWinner("paper", "paper"));
console.log(checkWinner("paper", "scissors"));
console.log(checkWinner("scissors", "rock"));
console.log(checkWinner("scissors", "paper"));
console.log(checkWinner("scissors", "scissors"));
console.log(getComputerChoice());