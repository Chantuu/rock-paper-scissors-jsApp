function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'rock';
        
        case 1:
            return 'paper';

        case 2:
            return 'scissor';

        default:
            console.log('Error');
            return null;
    }
}

function playRound(userChoice, computerChoice) {
    if (userChoice.toLowerCase() == computerChoice) {
        return 'Draw';
    } else if (userChoice.toLowerCase() == 'rock' && computerChoice == 'paper') {
        return 'You lost!';
    } else if (userChoice.toLowerCase() == 'rock' && computerChoice == 'scissor') {
        return 'You won!';
    } else if (userChoice.toLowerCase() == 'paper' && computerChoice == 'rock') {
        return 'You won!';
    } else if (userChoice.toLowerCase() == 'paper' && computerChoice == 'scissor') {
        return 'You lost!';
    } else if (userChoice.toLowerCase() == 'scissor' && computerChoice == 'rock') {
        return 'You lost!';
    } else if (userChoice.toLowerCase() == 'scissor' && computerChoice == 'paper') {
        return 'You won!';
    } else {
        console.log('Error');
        return null;
    }
}

let userChoice = prompt('Please input your choice (\'Rock, Paper, Scissor\')');
let computerChoice = getComputerChoice();
console.log(playRound(userChoice, computerChoice))
