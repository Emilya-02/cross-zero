import { checkForVictory } from './checkForVictory.js'
import { gameEnd } from './gameFinish.js'

const board = document.getElementById('board');

const scoreFirstPlayer = document.getElementsByTagName("p")['0'];
const scoreSecondPlayer = document.getElementsByTagName("p")['2'];

let currentScoreFirstPlayer = Number(scoreFirstPlayer.textContent);
let currentScoreSecondPlayer = Number(scoreSecondPlayer.textContent);

const currentText = document.getElementsByTagName("span")[0];

let valueAllSquares = [1, 1, 1, 1, 1, 1, 1, 1, 1];  // state game
let X = true;
let win = false;

board.onclick = (event) => {
  let currentSquareID = event.target.id;
  if (win === false) {
    if (X === true) {
      if (valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] === 1) {
        event.target.classList.add("kr");
        valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] = "x";
        currentText.innerText = "Ходит: О";
        X = false;
        win = checkForVictory("x", valueAllSquares);
      };
    }
    else {
      if (valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] === 1) {
        event.target.classList.add("n");
        valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] = "o";
        currentText.innerText = "Ходит: X";
        X = true;
        win = checkForVictory("o", valueAllSquares);
      };
    };

    gameEnd(valueAllSquares, X, win, currentText);
    return;
  };
};

startGameButton.onclick = () => {
  location.reload();
};

startPlayAgainButton.onclick = () => {
  currentText.style.display = "block";
  currentText.innerText = "Ходит: X";
  valueAllSquares = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  win = false;
  X = true;
  for (let i = 0; i < board.children.length; i++) {
    board.children[i].classList.remove('kr');
    board.children[i].classList.remove('n');
  }
};

export const addScore = (winner) => {
  if (winner === "x") {
    currentScoreFirstPlayer += 1;
    scoreFirstPlayer.innerText = String(currentScoreFirstPlayer);
  }
  else {
    currentScoreSecondPlayer += 1;
    scoreSecondPlayer.innerText = String(currentScoreSecondPlayer);
  };
};
