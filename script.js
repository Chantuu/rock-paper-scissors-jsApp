const matchResultp = document.querySelector(".match-Result");
const playerChoicep = document.querySelector(".Player-Choice-p");
const aiChoicep = document.querySelector(".AI-Choice-p");
const playerScorespan = document.querySelector(".Player-Score-span");
const aiScorespan = document.querySelector(".AI-Score-span");

const playerChoicepMainText = playerChoicep.innerText;
const aiChoiceMainText = aiChoicep.innerText;
let playerScore = 0;
let aiScore = 0;

playerScorespan.innerText = 0;
aiScorespan.innerText = 0;

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

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", (e) =>
    playRound(e.target.innerText, AIChoice)
  );
});
