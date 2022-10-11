"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var board = document.getElementById('board');
var scoreFirstPlayerElement = document.getElementById('scoreFirstPlayerElement');
var scoreSecondPlayerElement = document.getElementById('scoreSecondPlayerElement');
var scoreFirstPlayer = Number(scoreFirstPlayerElement.textContent);
var scoreSecondPlayer = Number(scoreSecondPlayerElement.textContent);
var currentText = document.getElementsByTagName("span")[0];
var gameState = [1, 1, 1, 1, 1, 1, 1, 1, 1];
var isX = true;
var isWin = false;

board.onclick = function (event) {
  var currentSquareID = event.target.id;
  if (isWin === true) return;
  if (gameState[currentSquareID[0]] !== 1) return;

  if (isX === true) {
    event.target.classList.add("cross");
    gameState[currentSquareID[0]] = "x";
    currentText.innerText = "Ходит: О";
    isX = false;
    isWin = checkForVictory("x", gameState);
  } else {
    event.target.classList.add("zero");
    gameState[currentSquareID[0]] = "o";
    currentText.innerText = "Ходит: X";
    isX = true;
    isWin = checkForVictory("o", gameState);
  }

  ;
  gameEnd(gameState, isX, isWin, currentText);
  return;
};

startGameButton.onclick = function () {
  location.reload();
};

startPlayAgainButton.onclick = function () {
  currentText.style.display = "block";
  currentText.innerText = "Ходит: X";
  gameState = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  isWin = false;
  isX = true;

  for (var i = 0; i < board.children.length; i++) {
    board.children[i].classList.remove('cross');
    board.children[i].classList.remove('zero');
  }
};

var addScore = function addScore(winner) {
  if (winner === "x") {
    scoreFirstPlayer += 1;
    scoreFirstPlayerElement.innerText = String(scoreFirstPlayer);
  } else {
    scoreSecondPlayer += 1;
    scoreSecondPlayerElement.innerText = String(scoreSecondPlayer);
  }

  ;
};

var checkForVictory = function checkForVictory(x, gameState) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (gameState[a] != 1 && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      addScore(x);
      return true;
    }

    ;
  }

  ;
  return false;
};

var gameEnd = function gameEnd(gameState, isX, isWin, currentText) {
  if (isWin === true) {
    if (isX === true) {
      ChangeText("Победил О", currentText);
    } else {
      ChangeText("Победил X", currentText);
    }

    ;
  }

  ;

  if (gameState.includes(1) === false && isWin === false) {
    ChangeText("Ничья", currentText);
  }

  ;
};

var ChangeText = function ChangeText(str, currentText) {
  currentText.innerText = str;
};
//# sourceMappingURL=script.js.map
