function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissor";

    default:
      console.log("Error");
      return null;
  }
}

function playRound(userChoice, computerChoice) {
  if (userChoice.toLowerCase() == computerChoice) {
    return "Draw";
  } else if (userChoice.toLowerCase() == "rock" && computerChoice == "paper") {
    return "You lost!";
  } else if (
    userChoice.toLowerCase() == "rock" &&
    computerChoice == "scissor"
  ) {
    return "You won!";
  } else if (userChoice.toLowerCase() == "paper" && computerChoice == "rock") {
    return "You won!";
  } else if (
    userChoice.toLowerCase() == "paper" &&
    computerChoice == "scissor"
  ) {
    return "You lost!";
  } else if (
    userChoice.toLowerCase() == "scissor" &&
    computerChoice == "rock"
  ) {
    return "You lost!";
  } else if (
    userChoice.toLowerCase() == "scissor" &&
    computerChoice == "paper"
  ) {
    return "You won!";
  } else {
    console.log("Error");
    return null;
  }
}

function game() {
  for (let round = 1; round <= roundCount; round++) {
    let userChoice = prompt("Please input your choice ('Rock, Paper, Scissor')");
    
    if (checkUserChoice(userChoice) == true) {
      let computerChoice = getComputerChoice();
      alert(playRound(userChoice, computerChoice));
    } else {
      alert('Incorrect input. Please enter again')
    }
  }
}

function checkUserChoice(userChoice) {
  if (userChoice.toLowerCase() == 'rock' || userChoice.toLowerCase() == 'paper' || userChoice.toLowerCase() == 'scissor') {
    return true;
  } else {
    return false;
  }
}

let roundCount = +prompt("How many rounds do you want to play:");
game();
