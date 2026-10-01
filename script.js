// console.log("hello world!");

function getComputerChoice(value) {
  const escolha = Math.floor(Math.random() * 3);

  if (escolha === 1) {
    console.log("pedra");
  } else if (escolha === 2) {
    console.log("papel");
  } else {
    console.log("tesoura");
  }
}

getComputerChoice();
