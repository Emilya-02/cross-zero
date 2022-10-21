const gameRun = (event, gameState, isX, isWin, currentConditionText, scoreFirstPlayerElement, scoreSecondPlayerElement) => {
  let currentSquareID = event.target.id;
  if (isWin === true) return;
  if (gameState[currentSquareID[0]] !== 1) return;
  if (isX === true) {
    event.target.classList.add("cross");
    gameState[currentSquareID[0]] = "x";
    currentConditionText.innerText = "Ходит: О";
    isX = false;
    isWin = checkForVictory("x", gameState, scoreFirstPlayerElement, scoreSecondPlayerElement);
    gameEnd(gameState, isX, isWin, currentConditionText);
    return(isX);
  }
  else {
    event.target.classList.add("zero");
    gameState[currentSquareID[0]] = "o";
    currentConditionText.innerText = "Ходит: X";
    isX = true;
    isWin = checkForVictory("o", gameState, scoreFirstPlayerElement, scoreSecondPlayerElement);
    gameEnd(gameState, isX, isWin, currentConditionText);
    return(isX);
  }; 
}

const addScore = (winner, scoreFirstPlayerElement, scoreSecondPlayerElement) => {
  let scoreFirstPlayer = Number(scoreFirstPlayerElement.textContent);
  let scoreSecondPlayer = Number(scoreSecondPlayerElement.textContent);
  if (winner === "x") {
    scoreFirstPlayer += 1;
    scoreFirstPlayerElement.innerText = String(scoreFirstPlayer);
  }
  else {
    scoreSecondPlayer += 1;
    scoreSecondPlayerElement.innerText = String(scoreSecondPlayer);
  };
};

const gameEnd = (gameState, isX, isWin, currentConditionText) => {
  if (isWin === true) {
    if (isX === true) {
      ChangeText("Победил О", currentConditionText);
    }
    else {
      ChangeText("Победил X", currentConditionText);
    };
  };

  if ((gameState.includes(1) === false) && (isWin === false)) {
    ChangeText("Ничья", currentConditionText);
  };
};

const ChangeText = (str, currentConditionText) => {
  currentConditionText.innerText = str;
};

const checkForVictory = (x, gameState, scoreFirstPlayerElement, scoreSecondPlayerElement) => {
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
    addScore(x, scoreFirstPlayerElement, scoreSecondPlayerElement,);
    return true;
  };
};
return false;
};
