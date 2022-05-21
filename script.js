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

function playRound(plrSel, cpuSel) {
    if (plrSel === cpuSel) {
        return `Draw: PLR: ${plrSel}; CPU: ${cpuSel}`;
    }
    if (plrSel === 'rock' && cpuSel === 'scissors') {
        return `PLR wins: PLR ${plrSel}; CPU: ${cpuSel}`;
    } else if (plrSel === 'paper' && cpuSel === 'rock') {
        return `PLR wins: PLR ${plrSel}; CPU: ${cpuSel}`;
    } else if (plrSel === 'scissors' && cpuSel === 'paper') {
        return `PLR wins: PLR ${plrSel}; CPU: ${cpuSel}`;
    } else {
        return `CPU wins: PLR ${plrSel}; CPU: ${cpuSel}`;
    }
}

const playerSelection = 'paper';
const computerSelection = cpuPick();
console.log(playRound(playerSelection, computerSelection));