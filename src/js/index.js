const board = document.getElementById('board');

const scoreFirstPlayerElement = document.querySelector('#scoreFirstPlayerElement p');
const scoreSecondPlayerElement = document.querySelector('#scoreSecondPlayerElement p');

const currentConditionText = document.querySelector('#currentCondition');

let gameState = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let isX = true;
let isWin = false;

board.onclick = (event) => {
  isX = gameRun(event, gameState, isX, isWin, currentConditionText, scoreFirstPlayerElement, scoreSecondPlayerElement);
  console.log(gameState);
};

startGameButton.onclick = () => {
  location.reload();
};

startPlayAgainButton.onclick = () => {
  currentConditionText.style.display = "block";
  currentConditionText.innerText = "Ходит: X";
  gameState = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  isWin = false;
  isX = true;
  for (let i = 0; i < board.children.length; i++) {
    board.children[i].classList.remove('cross');
    board.children[i].classList.remove('zero');
  }
};
