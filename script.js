// picks r p or s randomly (surely mathrandom is truly random Clueless)
function cpuPick() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// 1 round; checks if cpu or player win
function playRound(plrSel, cpuSel) {
    if (plrSel === cpuSel) {
        console.log(`Draw: PLR: ${plrSel}; CPU: ${cpuSel}`);
    }
    if (plrSel === 'rock' && cpuSel === 'scissors') {
        plrCount++;
        console.log(`PLR wins: PLR ${plrSel}; CPU: ${cpuSel}`);
    } else if (plrSel === 'paper' && cpuSel === 'rock') {
        plrCount++;
        console.log(`PLR wins: PLR ${plrSel}; CPU: ${cpuSel}`);
    } else if (plrSel === 'scissors' && cpuSel === 'paper') {
        plrCount++;
        console.log(`PLR wins: PLR ${plrSel}; CPU: ${cpuSel}`);
    } else {
        cpuCount++;
        console.log(`CPU wins: PLR ${plrSel}; CPU: ${cpuSel}`);
    }
}

// play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Pick ROCK PAPER OR SCISSORS (lowercase cause i didnt do toLowercase implementation :) )');
        let computerSelection = cpuPick();
        playRound();
    }
    console.log(`Stats after 5 rounds: PLR: ${plrCount} - CPU: ${cpuCount}`);
}

let plrCount = 0;
let cpuCount = 0;

game();