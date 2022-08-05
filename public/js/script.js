"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addScore = void 0;

var _checkForVictory = require("./checkForVictory.js");

var _gameFinish = require("./gameFinish.js");

var board = document.getElementById('board');
var scoreFirstPlayer = document.getElementsByTagName("p")['0'];
var scoreSecondPlayer = document.getElementsByTagName("p")['2'];
var currentScoreFirstPlayer = Number(scoreFirstPlayer.textContent);
var currentScoreSecondPlayer = Number(scoreSecondPlayer.textContent);
var currentText = document.getElementsByTagName("span")[0];
var valueAllSquares = [1, 1, 1, 1, 1, 1, 1, 1, 1]; // state game

var X = true;
var win = false;

board.onclick = function (event) {
  var currentSquareID = event.target.id;

  if (win === false) {
    if (X === true) {
      if (valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] === 1) {
        event.target.classList.add("kr");
        valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] = "x";
        currentText.innerText = "Ходит: О";
        X = false;
        win = (0, _checkForVictory.checkForVictory)("x", valueAllSquares);
      }

      ;
    } else {
      if (valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] === 1) {
        event.target.classList.add("n");
        valueAllSquares[currentSquareID[currentSquareID.length - 1] - 1] = "o";
        currentText.innerText = "Ходит: X";
        X = true;
        win = (0, _checkForVictory.checkForVictory)("o", valueAllSquares);
      }

      ;
    }

    ;
    (0, _gameFinish.gameEnd)(valueAllSquares, X, win, currentText);
    return;
  }

  ;
};

startGameButton.onclick = function () {
  location.reload();
};

startPlayAgainButton.onclick = function () {
  currentText.style.display = "block";
  currentText.innerText = "Ходит: X";
  valueAllSquares = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  win = false;
  X = true;

  for (var i = 0; i < board.children.length; i++) {
    board.children[i].classList.remove('kr');
    board.children[i].classList.remove('n');
  }
};

var addScore = function addScore(winner) {
  if (winner === "x") {
    currentScoreFirstPlayer += 1;
    scoreFirstPlayer.innerText = String(currentScoreFirstPlayer);
  } else {
    currentScoreSecondPlayer += 1;
    scoreSecondPlayer.innerText = String(currentScoreSecondPlayer);
  }

  ;
};

exports.addScore = addScore;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForVictory = void 0;

var _app = require("./app.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var checkForVictory = function checkForVictory(x, gameState) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (gameState[a] != 1 && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      (0, _app.addScore)(x);
      return true;
    }

    ;
  }

  ;
  return false;
};

exports.checkForVictory = checkForVictory;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameEnd = void 0;

var gameEnd = function gameEnd(gameState, X, win, currentText) {
  if (win === true) {
    if (X === true) {
      ChangeText("Победил О", currentText);
    } else {
      ChangeText("Победил X", currentText);
    }

    ;
  }

  ;

  if (gameState.includes(1) === false && win === false) {
    ChangeText("Ничья", currentText);
  }

  ;
};

exports.gameEnd = gameEnd;

var ChangeText = function ChangeText(str, currentText) {
  currentText.innerText = str;
};
//# sourceMappingURL=script.js.map
