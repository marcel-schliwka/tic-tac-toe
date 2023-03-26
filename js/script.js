// Tic Tac Toe App - Copyright Marcel Schliwka - 2023

// Global Variables

let currentPlayer = "circle";
let board = [];
let winnerImg = document.getElementById("winner");

function play(id) {
  board[id] = currentPlayer;
  if (checkAlreadyClicked(id)) {
    return 0;
  }
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

function checkAlreadyClicked(index) {
  if (!document.getElementById(`circle${index}`).classList.contains("d-none")) {
    return true;
  }
  if (!document.getElementById(`cross${index}`).classList.contains("d-none")) {
    return true;
  }
}
function checkForWin() {
  let winner;

  // Row 1
  if (board[0] == board[1] && board[1] == board[2] && board[1]) {
    winner = board[0];
    markWinningFields(0, 1, 2);
    console.log(`Der Gewinner ist: ${winner}`);
  }

  // Row 2
  if (board[3] == board[4] && board[4] == board[5] && board[3]) {
    winner = board[3];
    markWinningFields(3, 4, 5);
    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Row 3
  if (board[6] == board[7] && board[7] == board[8] && board[6]) {
    winner = board[6];
    markWinningFields(6, 7, 8);

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Column 1
  if (board[0] == board[3] && board[3] == board[6] && board[0]) {
    winner = board[0];
    markWinningFields(0, 3, 6);

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Column 2
  if (board[1] == board[4] && board[4] == board[7] && board[1]) {
    winner = board[1];
    markWinningFields(1, 4, 7);

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Column 3
  if (board[2] == board[5] && board[5] == board[8] && board[2]) {
    winner = board[2];
    markWinningFields(2, 5, 8);

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Cross top left to bottom right
  if (board[0] == board[4] && board[4] == board[8] && board[0]) {
    winner = board[0];
    markWinningFields(0, 4, 8);

    console.log(`Der Gewinner ist: ${winner}`);
  }
  // Cross top right to bottom left
  if (board[2] == board[4] && board[4] == board[6] && board[2]) {
    winner = board[2];
    markWinningFields(2, 4, 6);

    console.log(`Der Gewinner ist: ${winner}`);
  }

  showWinner(winner);
}

function restartGame() {
  winnerImg.classList.add("d-none");
  board = [];
  currentPlayer = "circle";
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cross${i}`).classList.add("d-none");
    document.getElementById(`circle${i}`).classList.add("d-none");
    document.getElementById(`field${i}`).style.backgroundColor = "";
  }
}

function showWinner(winner) {
  if (winner == "cross") {
    winnerImg.setAttribute("src", "./assets/cross.png");
    winnerImg.classList.remove("d-none");
  }
  if (winner == "circle") {
    winnerImg.setAttribute("src", "./assets/circle.png");
    winnerImg.classList.remove("d-none");
  }
}

function markWinningFields(a, b, c) {
  document.getElementById(`field${a}`).style.backgroundColor =
    "rgb(255, 107, 107)";
  document.getElementById(`field${b}`).style.backgroundColor =
    "rgb(255, 107, 107)";
  document.getElementById(`field${c}`).style.backgroundColor =
    "rgb(255, 107, 107)";
}
