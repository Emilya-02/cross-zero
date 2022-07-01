  const area = document.getElementById('area');
  
  let mas = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  let symbol = true;
  let win = false;

  area.onclick = function(event) {
    let w = event.target.id;
    if (symbol == true) {
      if (mas[w[w.length - 1] - 1] == 1) {
        event.target.classList.add("kr");
        mas[w[w.length - 1] - 1] = "x";
        symbol = false;
        win = winOrNot("x");
      }
    }
    else {
      if (mas[w[w.length - 1] - 1] == 1) {
        event.target.classList.add("n");
        mas[w[w.length - 1] - 1] = "o";
        symbol = true;
        win = winOrNot("o");
      }
    };

    finish();
  };

  startOverButton.onclick = function() {
    location.reload();
  }

  let finish = () => {
    if (win == true) {
      alert(win);
    }

    if (mas.includes(1) == false) {
      alert("Ничья");
    }
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
      return true;
    }
    return false;
  };
  