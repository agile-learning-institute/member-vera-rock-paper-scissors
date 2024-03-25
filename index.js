const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const theChoice = options[Math.floor(Math.random() * 3)];
    return theChoice;
}

function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = prompt("Enter Your Selection").toLocaleLowerCase();
    const theWinner = checkWinner(computerSelection, humanSelection);
    console.log("Computer Selected", computerSelection, "Human Selection", humanSelection, "The winner is", theWinner);
     
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

playGame();