const getComputerChoice = () => {
    x = Math.floor(Math.random() * 3)
    switch(x) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return "You must've screwed up somewhere if you're seeing this";

    }
}

const playRound = (playerSelection, computerSelection) => {
    switch(playerSelection) {
        case 'rock':
            switch(computerSelection) {
                case 'rock':
                    return "tie";
                    break;
                case 'paper':
                    return "you lose!";
                    break;
                case 'scissors':
                    return "you win!";
                    break;
            }
            break;
        case 'paper':
            switch(computerSelection) {
                case 'rock':
                    return "you win!";
                    break;
                case 'paper':
                    return "tie";
                    break;
                case 'scissors':
                    return "you lose!";
                    break;
            }
            break;
        case 'scissors':
            switch(computerSelection) {
                case 'rock':
                    return "you lose!";
                    break;
                case 'paper':
                    return "you win!";
                    break;
                case 'scissors':
                    return "tie";
                    break;
            }
            break;
    }
}

let playerScoreValue = 0;
const playerScore = document.querySelector('#player-score-value');

let computerScoreValue = 0;
const computerScore = document.querySelector('#computer-score-value');

const playerChoiceRock = document.querySelector('#rock');
const playerChoicePaper = document.querySelector('#paper');
const playerChoiceScissors = document.querySelector('#scissors')

playerChoiceRock.addEventListener('click', () => {
    let roundResult = playRound("rock", getComputerChoice());
    if( roundResult === 'you win!') {
        playerScoreValue += 1;
        playerScore.textContent = playerScoreValue;
    } else if (roundResult === 'you lose!') {
        computerScoreValue += 1;
        computerScore.textContent = computerScoreValue;
    } else {
        console.log('tie');
    }
})

playerChoicePaper.addEventListener('click', () => {
    let roundResult = playRound("paper", getComputerChoice());
    if( roundResult === 'you win!') {
        playerScoreValue += 1;
        playerScore.textContent = playerScoreValue;
    } else if (roundResult === 'you lose!') {
        computerScoreValue += 1;
        computerScore.textContent = computerScoreValue;
    } else {
        console.log('tie');
    }
})

playerChoiceScissors.addEventListener('click', () => {
    let roundResult = playRound("scissors", getComputerChoice());
    if( roundResult === 'you win!') {
        playerScoreValue += 1;
        playerScore.textContent = playerScoreValue;
    } else if (roundResult === 'you lose!') {
        computerScoreValue += 1;
        computerScore.textContent = computerScoreValue;
    } else {
        console.log('tie');
    }
})