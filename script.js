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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  console.log(humanChoice);
  console.log(computerChoice);

  let resultado = 0;

  if (humanChoice === computerChoice) {
    resultado = "empate";
  } else if (
    (humanChoice === "pedra" && computerChoice === "tesoura") ||
    (humanChoice === "papel" && computerChoice === "pedra") ||
    (humanChoice === "tesoura" && computerChoice === "papel")
  ) {
    humanScore++;

    resultado = `${humanChoice} ganhou! ponto para humano!`;
  } else {
    computerScore++;
    resultado = `${computerChoice} ganhou! ponto para o computador!`;
  }

  document.querySelector("#escolhaHumano").textContent =
    `Player: ${humanChoice}`;
  document.querySelector("#escolhaPc").textContent =
    `Computador: ${computerChoice}`;
  document.querySelector("#resultado").textContent = resultado;
  document.querySelector("#ganhador").textContent =
    `Placar: Humano ${humanScore} x ${computerScore} Computador`;

  if (humanScore >= 5) {
    document.querySelector("#ganhador").textContent =
      `O player alcançou 5 pontos.`;
  } else if (computerScore >= 5) {
    document.querySelector("#ganhador").textContent =
      `O computador alcançou 5 pontos.`;
  }
}

const btnPaper = document.querySelector("#paper");
const btnRock = document.querySelector("#rock");
const btnScissor = document.querySelector("#scissor");

btnPaper.addEventListener("click", () => {
  playRound("papel");
});

btnRock.addEventListener("click", () => {
  playRound("pedra");
});

btnScissor.addEventListener("click", () => {
  playRound("tesoura");
});
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }

//   console.log("Humano:" + humanScore);
//   console.log("Computador:" + computerScore);

//   if (humanScore > computerScore) {
//     console.log("Humano ganhou");
//   } else if (computerScore > humanScore) {
//     console.log("maquina ganhou");
//   } else {
//     console.log("Empate!");
//   }

// }
