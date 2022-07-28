export const gameEnd = (valueAllSquares, X, win, currentText) => {
  if (win === true) {
    if (X === true) {
      ChangeText("Победил О", currentText);
    }
    else {
      ChangeText("Победил X", currentText);
    };
  };

  if ((valueAllSquares.includes(1) === false) && (win === false)) {
    ChangeText("Ничья", currentText);
  };
};

const ChangeText = (str, currentText) => {
  currentText.innerText = str;
};
