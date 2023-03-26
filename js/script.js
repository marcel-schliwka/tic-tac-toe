// Tic Tac Toe App - Copyright Marcel Schliwka - 2023

// Global Variables

let currentPlayer = "circle";
let board = [];
let winnerImg = document.getElementById("winner");

function play(id) {
  board[id] = currentPlayer;
  if (currentPlayer == "circle") {
    document.getElementById(`circle${id}`).classList.remove("d-none");
    document.getElementById(`cross${id}`).classList.add("d-none");

    currentPlayer = "cross";
  } else {
    document.getElementById(`cross${id}`).classList.remove("d-none");
    document.getElementById(`circle${id}`).classList.add("d-none");

    currentPlayer = "circle";
  }
  checkForWin();
}

function checkForWin() {
  let winner;
  let winningCells = [];

  // Row 1
  if (board[0] == board[1] && board[1] == board[2] && board[1]) {
    winner = board[0];
    document.getElementById("line-1").style.transform = "scaleX(1)";
    console.log(`Der Gewinner ist: ${winner}`);
  }

  // Row 2
  if (board[3] == board[4] && board[4] == board[5] && board[3]) {
    winner = board[3];
    document.getElementById("line-2").style.transform = "scaleX(1)";

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Row 3
  if (board[6] == board[7] && board[7] == board[8] && board[6]) {
    winner = board[6];
    winningCells = [6, 7, 8];

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Column 1
  if (board[0] == board[3] && board[3] == board[6] && board[0]) {
    winner = board[0];
    winningCells = [0, 3, 6];

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Column 2
  if (board[1] == board[4] && board[4] == board[7] && board[1]) {
    winner = board[1];
    winningCells = [1, 4, 7];

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Column 3
  if (board[2] == board[5] && board[5] == board[8] && board[2]) {
    winner = board[2];
    winningCells = [2, 5, 8];

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Cross top left to bottom right
  if (board[0] == board[4] && board[4] == board[8] && board[0]) {
    winner = board[0];
    winningCells = [0, 4, 8];

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Cross top right to bottom left
  if (board[2] == board[4] && board[4] == board[6] && board[2]) {
    winner = board[2];
    winningCells = [2, 4, 6];

    console.log(`Der Gewinner ist: ${winner}`);
  }

  if (winner == "circle") {
    console.log(`Der Gewinner ist: ${winner}`);
    winnerImg.setAttribute("src", "./assets/circle.png");
    winnerImg.classList.remove("d-none");
  }
}

function restartGame() {
  winnerImg.classList.add("d-none");
  board = [];
}
