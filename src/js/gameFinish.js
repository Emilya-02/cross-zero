import {valueAllSquares, X, win } from './app.js';

export const currentText = document.getElementsByTagName("span")[0];

export const gameEnd = () => {
  if (win === true) {
    if (X === true) {
      ChangeText("Победил О");
    }
    else {
      ChangeText("Победил X");
    };
  };

  if ((valueAllSquares.includes(1) === false) && (win === false)) {
    ChangeText("Ничья");
  };
};

const ChangeText = (str) => {
  currentText.innerText = str;
};
