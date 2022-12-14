const matchResultp = document.querySelector(".match-Result");
const playerChoicep = document.querySelector(".Player-Choice-p");
const aiChoicep = document.querySelector(".AI-Choice-p");
const playerScorespan = document.querySelector(".Player-Score-span");
const aiScorespan = document.querySelector(".AI-Score-span");

const playerChoicepMainText = playerChoicep.innerText;
const aiChoiceMainText = aiChoicep.innerText;
let playerScore = 0;
let aiScore = 0;

playerScorespan.innerText = playerScore;
aiScorespan.innerText = aiScore;

const helpButton = document.querySelector('.helpButton');
helpButton.addEventListener('click', function() {
  alert('Rock-Paper-Scissors is a game played to settle disputes between two people. Thought to be a game of chance that depends on random luck similar to flipping coins or drawing straws. However, the game actually can be a game that has an element of skill that requires quick thinking and perceptive reasoning.\n\n Rules:\n  1. Rock wins against scissors\n  2. Paper wins against rock\n  3. Scissors wins against paper\n\n  If both players throw the same hand signal, it is considered a tie, and play resumes until there is a clear winner.');
})

function playRound(userChoice, aiChoice) {
  uc = userChoice;
  ac = aiChoice();

  playerChoicep.innerText = `${playerChoicepMainText} ${uc}`;
  aiChoicep.innerText = `${aiChoiceMainText} ${ac}`;

  if (uc == ac) {
    matchResultp.innerText = "Draw";
  } else if (
    (uc == "Rock" && ac == "Paper") ||
    (uc == "Paper" && ac == "Scissor") ||
    (uc == "Scissor" && ac == "Rock")
  ) {
    matchResultp.innerText = "You lost!";
    aiScore += 1;
    aiScorespan.innerText = aiScore;
  } else if (
    (uc == "Paper" && ac == "Rock") ||
    (uc == "Scissor" && ac == "Paper") ||
    (uc == "Rock" && ac == "Scissor")
  ) {
    matchResultp.innerText = "You Won!";
    playerScore += 1;
    playerScorespan.innerText = playerScore;
  }
}

function AIChoice() {
  choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "Rock";

    case 1:
      return "Paper";

    case 2:
      return "Scissor";

    default:
      console.log("Error");
      return null;
  }
}

const buttons = document.querySelectorAll(".gameButton");
buttons.forEach(function (button) {
  button.addEventListener("click", (e) =>
    playRound(e.target.innerText, AIChoice)
  );
});
