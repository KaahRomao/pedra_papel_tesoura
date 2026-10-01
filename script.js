// console.log("hello world!");

function getComputerChoice() {
  let escolha = Math.floor(Math.random() * 3);

  if (escolha === 1) {
    return "pedra";
  } else if (escolha === 2) {
    return "papel";
  } else {
    return "tesoura";
  }
}

function getHumanChoice() {
  return prompt("Qual você escolhe?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log("Empate!");
  } else if (
    (humanChoice === "pedra" && computerChoice === "tesoura") ||
    (humanChoice === "papel" && computerChoice === "pedra") ||
    (humanChoice === "tesoura" && computerChoice === "papel")
  ) {
    humanScore++;

    console.log(`${humanChoice} ganhou! ponto para humano!`);
  } else {
    computerScore++;

    console.log(`${computerChoice} ganhou! ponto para o computador!`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  console.log("Humano:" + humanScore);
  console.log("Computador:" + computerScore);

  if (humanScore > computerScore) {
    console.log("Humano ganhou");
  } else if (computerScore > humanScore) {
    console.log("maquina ganhou");
  } else {
    console.log("Empate!");
  }
}

playGame();
