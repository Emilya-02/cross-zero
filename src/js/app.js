const area = document.getElementById('area');
let scoreFirstPlayer = Number(document.getElementsByTagName("p")['0'].textContent);
let scoreSecondPlayer = Number(document.getElementsByTagName("p")['2'].textContent);

let valueAllSquares = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let X = true;
let win = false;

area.onclick = (event) => {
  let currentSquare = event.target.id;
  if (win == false) {
    if (X == true) {
      if (valueAllSquares[currentSquare[currentSquare.length - 1] - 1] == 1) {
        event.target.classList.add("kr");
        valueAllSquares[currentSquare[currentSquare.length - 1] - 1] = "x";
        document.getElementsByTagName("span")[0].innerText = "Ходит: О";
        X = false;
        win = checkForVictory("x");
      };
    }
    else {
      if (valueAllSquares[currentSquare[currentSquare.length - 1] - 1] == 1) {
        event.target.classList.add("n");
        valueAllSquares[currentSquare[currentSquare.length - 1] - 1] = "o";
        document.getElementsByTagName("span")[0].innerText = "Ходит: X";
        X = true;
        win = checkForVictory("o");
      };
    };

    gameEnd();
  };
};

startPlayAgainButton.onclick = () => {
  document.getElementById('textOFGameEnd').style.display = "none";
  document.getElementsByTagName("span")[0].style.display = "block";
  document.getElementsByTagName("span")[0].innerText = "Ходит: X";
  valueAllSquares = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  win = false;
  X = true;
  for (let i = 0; i < area.children.length; i++) {
    area.children[i].classList.remove('kr');
    area.children[i].classList.remove('n');
  }
}

startGameButton.onclick = () => {
  location.reload();
}

const gameEnd = () => {
  if (win == true) {
    document.getElementsByTagName("span")[0].style.display = "none";
    if (X == true) {
      textOFGameEnd("Победил О");
    }
    else {
      textOFGameEnd("Победил X");
    };
  };

  if ((valueAllSquares.includes(1) == false) & (win == false)) {
    document.getElementsByTagName("span")[0].style.display = "none";
    textOFGameEnd("Ничья");
  };
}

const textOFGameEnd = (str) => {
  document.getElementById('textOFGameEnd').style.display = "block";
  document.getElementsByTagName("p")['3'].innerText = str;
}

const addScore = (winner) => {
  if (winner == "x") {
    scoreFirstPlayer += 1;
    document.getElementsByTagName("p")['0'].innerText = String(scoreFirstPlayer);
  }
  else {
    scoreSecondPlayer += 1;
    document.getElementsByTagName("p")['2'].innerText = String(scoreSecondPlayer);
  };
}

const checkForVictory = (s) => {                                                        // можно сделать через for
  if ((valueAllSquares[0] == s & valueAllSquares[1] == s & valueAllSquares[2] == s) ||
    (valueAllSquares[3] == s & valueAllSquares[4] == s & valueAllSquares[5] == s) ||
    (valueAllSquares[6] == s & valueAllSquares[7] == s & valueAllSquares[8] == s) ||
    (valueAllSquares[0] == s & valueAllSquares[3] == s & valueAllSquares[6] == s) ||
    (valueAllSquares[1] == s & valueAllSquares[4] == s & valueAllSquares[7] == s) ||
    (valueAllSquares[2] == s & valueAllSquares[5] == s & valueAllSquares[8] == s) ||
    (valueAllSquares[0] == s & valueAllSquares[4] == s & valueAllSquares[8] == s) ||
    (valueAllSquares[2] == s & valueAllSquares[4] == s & valueAllSquares[6] == s)) {
    addScore(s);
    return true;
  };
  return false;
};
