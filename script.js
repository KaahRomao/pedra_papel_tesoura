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
  return prompt("Qual você escolhe?");
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(`Escolha do player: ${humanChoice}`);
  console.log(`Escolha da Maquina: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Empate!");

    console.log("Humano:" + humanScore);
    console.log("Computador:" + computerScore);
  } else if (
    (humanChoice === "pedra" && computerChoice === "tesoura") ||
    (humanChoice === "papel" && computerChoice === "pedra") ||
    (humanChoice === "tesoura" && computerChoice === "papel")
  ) {
    humanScore++;

    console.log(`${humanChoice} ganhou! ponto para humano!`);

    console.log("Humano:" + humanScore);
    console.log("Computador:" + computerScore);
  } else {
    computerScore++;

    console.log(`${computerChoice} ganhou! ponto para o computador!`);
    console.log("Humano:" + humanScore);
    console.log("Computador:" + computerScore);
  }
}

playRound();
