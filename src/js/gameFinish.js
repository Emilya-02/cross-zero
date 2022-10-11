const gameEnd = (gameState, isX, isWin, currentText) => {
  if (isWin === true) {
    if (isX === true) {
      ChangeText("Победил О", currentText);
    }
    else {
      ChangeText("Победил X", currentText);
    };
  };

  if ((gameState.includes(1) === false) && (isWin === false)) {
    ChangeText("Ничья", currentText);
  };
};

const ChangeText = (str, currentText) => {
  currentText.innerText = str;
};
