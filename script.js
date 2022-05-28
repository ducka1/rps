function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    picked.textContent = `PLR picked ${playerSelection} | CPU picked ${computerSelection}`;
    if (playerSelection === computerSelection) {
        result.textContent = `It's a draw! Both picked ${playerSelection}.`;
        return 0;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return playerWinCount++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return playerWinCount++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return playerWinCount++;
    } else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return computerWinCount++;
    }
}

let playerWinCount = 0;
let computerWinCount = 0;

const display = document.querySelector('.display');
const final = document.querySelector('#final')
const result = document.createElement('p');
const picked = document.createElement('p');
const score = document.createElement('p');

display.appendChild(picked);
display.appendChild(result);
display.appendChild(score);

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        playerSelection = event.target.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        score.textContent = `PLR ${playerWinCount} - ${computerWinCount} CPU`;
        if (playerWinCount === 5) {
            final.textContent = 'Player wins';
        }
        if (computerWinCount === 5) {
            final.textContent = 'Computer wins';
        }
    });
});