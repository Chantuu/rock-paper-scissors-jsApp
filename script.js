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

let userChoice = prompt('Please input your choice (\'Rock, Paper, Scissor\')');
let computerChoice = getComputerChoice();
