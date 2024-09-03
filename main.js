const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScore = document.querySelector(".score1>span");
const computerScore = document.querySelector(".score2>span");
const userChoice = document.querySelector(".choice1");
const computerChoice = document.querySelector(".choice2");
const result = document.querySelector(".result");

const arr = ["rock", "paper", "scissors"];
let computerMove = "";
let userMove = "";
function getComputerMove() {
  let rand = Math.round(Math.random() * 2);
  return arr[rand];
}

rock.addEventListener("click", () => {
  userMove = "rock";
  computerMove = getComputerMove();
  getResult(userMove, computerMove);
});

paper.addEventListener("click", () => {
  userMove = "paper";
  computerMove = getComputerMove();
  getResult(userMove, computerMove);
});

scissors.addEventListener("click", () => {
  userMove = "scissors";
  computerMove = getComputerMove();
  getResult(userMove, computerMove);
});

function getResult(userMove, computerMove) {
  switch (userMove) {
    case "rock":
      userChoice.innerHTML = `Your choice: &#x1F44A;`;
      break;
    case "paper":
      userChoice.innerHTML = `Your choice: &#x1f590;`;
      break;
    case "scissors":
      userChoice.innerHTML = `Your choice: &#x270c;`;
      break;
  }

  switch (computerMove) {
    case "rock":
      computerChoice.innerHTML = `Computer choice: &#x1F44A;`;
      break;
    case "paper":
      computerChoice.innerHTML = `Computer choice: &#x1f590;`;
      break;
    case "scissors":
      computerChoice.innerHTML = `Computer choice: &#x270c;`;
      break;
  }

  if (userMove === computerMove) {
    result.innerHTML = "It's a tie!";
    return;
  }
  if (
    (userMove == "rock" && computerMove == "scissors") ||
    (userMove == "paper" && computerMove == "rock") ||
    (userMove == "scissors" && computerMove == "paper")
  )
    userWin();
  else compWin();
}
let userCount = 0;
let computerCount = 0;

function userWin() {
  result.innerHTML = "You Win! Congratulations!";
  userCount++;
  userScore.innerHTML = userCount;
}

function compWin() {
  result.innerHTML = "You Lose:(  Try Again!";
  computerCount++;
  computerScore.innerHTML = computerCount;
}
