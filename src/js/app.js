const board = document.getElementById('board');

const scoreFirstPlayerElement = document.getElementById('scoreFirstPlayerElement');
const scoreSecondPlayerElement = document.getElementById('scoreSecondPlayerElement');

let scoreFirstPlayer = Number(scoreFirstPlayerElement.textContent);
let scoreSecondPlayer = Number(scoreSecondPlayerElement.textContent);

const currentText = document.getElementsByTagName("span")[0];

let gameState = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let isX = true;
let isWin = false;

board.onclick = (event) => {
  let currentSquareID = event.target.id;
  if (isWin === true) return;
  if (gameState[currentSquareID[0]] !== 1) return;
  if (isX === true) {
    event.target.classList.add("cross");
    gameState[currentSquareID[0]] = "x";
    currentText.innerText = "Ходит: О";
    isX = false;
    isWin = checkForVictory("x", gameState);
  }
  else {
    event.target.classList.add("zero");
    gameState[currentSquareID[0]] = "o";
    currentText.innerText = "Ходит: X";
    isX = true;
    isWin = checkForVictory("o", gameState);
  };

  gameEnd(gameState, isX, isWin, currentText);
  return;
};

startGameButton.onclick = () => {
  location.reload();
};

startPlayAgainButton.onclick = () => {
  currentText.style.display = "block";
  currentText.innerText = "Ходит: X";
  gameState = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  isWin = false;
  isX = true;
  for (let i = 0; i < board.children.length; i++) {
    board.children[i].classList.remove('cross');
    board.children[i].classList.remove('zero');
  }
};

const addScore = (winner) => {
  if (winner === "x") {
    scoreFirstPlayer += 1;
    scoreFirstPlayerElement.innerText = String(scoreFirstPlayer);
  }
  else {
    scoreSecondPlayer += 1;
    scoreSecondPlayerElement.innerText = String(scoreSecondPlayer);
  };
};
