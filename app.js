const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info-display");

const width = 6;

function createBoard() {
  for (let i = 0; i < 36; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gameBoard.append(square);
  }
}
createBoard();
