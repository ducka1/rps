// picks random number 0-2 and translates to rock paper or scissors
// surely math.random is truly random Clueless
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

// plays a round of rps and increments the winning side's counter
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a draw! Both picked ${playerSelection}.`);
        return 0;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerWinCount++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerWinCount++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerWinCount++;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return computerWinCount++;
    }
}

// plays a 5 round game and prints the winner
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose rock, paper or scissors.').toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`Current score: ${playerWinCount} - ${computerWinCount}`);
    }
    if (playerWinCount === computerWinCount) {
        console.log("GAME OVER: It's a draw!")
    } else if (playerWinCount > computerWinCount) {
        console.log('GAME OVER: Player wins!')
    } else {
        console.log('GAME OVER: Computer wins!')
    }
}

let playerWinCount = 0;
let computerWinCount = 0;

game();