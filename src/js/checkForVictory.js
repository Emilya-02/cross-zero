import { valueAllSquares } from './app.js';

const scoreFirstPlayer = document.getElementsByTagName("p")['0'];
const scoreSecondPlayer = document.getElementsByTagName("p")['2'];
let currentScoreFirstPlayer = Number(scoreFirstPlayer.textContent);
let currentScoreSecondPlayer = Number(scoreSecondPlayer.textContent);

export const checkForVictory = (x) => {
  if ((valueAllSquares[0] === x && valueAllSquares[1] === x && valueAllSquares[2] === x) ||
    (valueAllSquares[3] === x && valueAllSquares[4] === x && valueAllSquares[5] === x) ||
    (valueAllSquares[6] === x && valueAllSquares[7] === x && valueAllSquares[8] === x) ||
    (valueAllSquares[0] === x && valueAllSquares[3] === x && valueAllSquares[6] === x) ||
    (valueAllSquares[1] === x && valueAllSquares[4] === x && valueAllSquares[7] === x) ||
    (valueAllSquares[2] === x && valueAllSquares[5] === x && valueAllSquares[8] === x) ||
    (valueAllSquares[0] === x && valueAllSquares[4] === x && valueAllSquares[8] === x) ||
    (valueAllSquares[2] === x && valueAllSquares[4] === x && valueAllSquares[6] === x)) {
    addScore(x);
    return true;
  };
  return false;
};

const addScore = (winner) => {
  if (winner === "x") {
    currentScoreFirstPlayer += 1;
    scoreFirstPlayer.innerText = String(currentScoreFirstPlayer);
  }
  else {
    currentScoreSecondPlayer += 1;
    scoreSecondPlayer.innerText = String(currentScoreSecondPlayer);
  };
};


// const checkForVictory = (valueAllSquares) =>{
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (valueAllSquares[a] && valueAllSquares[a] === valueAllSquares[b] && valueAllSquares[a] === valueAllSquares[c]) {
//       return true;
//     }
//   }
//   return false;
// }


// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }