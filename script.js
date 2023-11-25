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

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));