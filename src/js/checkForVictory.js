import { addScore } from './app.js'

export const checkForVictory = (x, gameState) => {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if ((gameState[a] != 1) && (gameState[a] === gameState[b]) && (gameState[a] === gameState[c])) {
      addScore(x);
      return true;
    };
  };
  return false;
};
