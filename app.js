  const area = document.getElementById('area');
  let score1 = Number(document.getElementsByTagName("p")['0'].textContent);
  let score2 = Number(document.getElementsByTagName("p")['2'].textContent);
 
  let mas = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  let symbol = true;
  let win = false;

  area.onclick = function(event) {
    let w = event.target.id;
    if (win == false) {
      if (symbol == true) {
        if (mas[w[w.length - 1] - 1] == 1) {
          event.target.classList.add("kr");
          mas[w[w.length - 1] - 1] = "x";
          document.getElementsByTagName("span")[0].innerText = "Ходит: О";
          symbol = false;
          win = winOrNot("x");
        };
      }
      else {
        if (mas[w[w.length - 1] - 1] == 1) {
          event.target.classList.add("n");
          mas[w[w.length - 1] - 1] = "o";
          document.getElementsByTagName("span")[0].innerText = "Ходит: X";
          symbol = true;
          win = winOrNot("o");
        };
      };

      finish();
    };
  };

  playAgainButton.onclick = function() {
    document.getElementById('winText').style.display = "none";
    document.getElementsByTagName("span")[0].style.display = "block";
    document.getElementsByTagName("span")[0].innerText = "Ходит: X";
    mas = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    win = false;
    symbol = true;
    for( let i = 0; i < area.children.length; i++ ) {
      area.children[i].classList.remove('kr');
      area.children[i].classList.remove('n');
    }
  }

  startButton.onclick = function() {
    location.reload();
  }

  let finish = () => {
    if (win == true) {
      document.getElementsByTagName("span")[0].style.display = "none";
      if (symbol == true) {
        winText("Победил О");
      }
      else {
        winText("Победил X");
      };
    };

    if ((mas.includes(1) == false)&(win == false)) {
      document.getElementsByTagName("span")[0].style.display = "none";
      winText("Ничья");
    };
  }

  let winText = (str) => {
    document.getElementById('winText').style.display = "block";
    document.getElementsByTagName("p")['3'].innerText = str;
  }

  let addScore = (winner) => {
    if (winner == "x") {
      score1 += 1;
      document.getElementsByTagName("p")['0'].innerText = String(score1);
    }
    else {
      score2 += 1;
      document.getElementsByTagName("p")['2'].innerText = String(score2);
    };
  }

  let winOrNot = (s) => {
    if ((mas[0] == s & mas[1] == s & mas[2] == s)||
    (mas[3] == s & mas[4] == s & mas[5] == s)||
    (mas[6] == s & mas[7] == s & mas[8] == s)||
    (mas[0] == s & mas[3] == s & mas[6] == s)||
    (mas[1] == s & mas[4] == s & mas[7] == s)||
    (mas[2] == s & mas[5] == s & mas[8] == s)||
    (mas[0] == s & mas[4] == s & mas[8] == s)||
    (mas[2] == s & mas[4] == s & mas[6] == s)) {
      addScore(s);
      return true;
    };
    return false;
  };
  