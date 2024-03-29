let playerScore = 0;
let computerScore = 0;
const winningScore = 5

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win!' + playerSelection + 'beats' + computerSelection;
    } else {
        computerScore++;
        return 'You lose!' + computerSelection + 'beats' + playerSelection;
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}

function play(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
}

function checkWinner() {
    if (playerScore === winningScore) {
        displayResult('Congratulations! You win the game!');
        resetGame();
    } else if (computerScore === winningScore) {
        displayResult('Game over! Computer wins the game!');
        resetGame();
    }
 }

 function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
}