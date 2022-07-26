import { checkForVictory } from './checkForVictory.js'
import { gameEnd, currentText } from './gameFinish.js'

const board = document.getElementById('board');
export let valueAllSquares = [1, 1, 1, 1, 1, 1, 1, 1, 1];
export let X = true;
export let win = false;

board.onclick = (event) => {
  let currentSquareID = event.target.id;
  if (win === false) {
    if (X === true) {
      if (valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] === 1) {
        event.target.classList.add("kr");
        valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] = "x";
        currentText.innerText = "Ходит: О";
        X = false;
        win = checkForVictory("x");
      };
    }
    else {
      if (valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] === 1) {
        event.target.classList.add("n");
        valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] = "o";
        currentText.innerText = "Ходит: X";
        X = true;
        win = checkForVictory("o");
      };
    };

    gameEnd();
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

