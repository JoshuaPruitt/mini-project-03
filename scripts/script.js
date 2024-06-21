const choices = ["r", "p", "s"];

function findUserChoice() {
  let choice = prompt("Do you chose rock paper or scissors?");

  return choice;
}

function computer() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userChoice, computerChoice) {
  userChoices[userChoice]++;

  if (userChoice === computerChoice) {
    //ties is for score
    ties++;
    alert(`It's a tie! You both chose ${userChoice}`);
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    userWins++;
    alert(`You win! ${userChoice} beats ${computerChoice}`);
  } else {
    alert(`You lose.. ${userChoice} beats ${computerChoice}`);
  }
}
