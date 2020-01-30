// 1.Change background to a random hex color

let changeBgButton = document.querySelector(".btn-bg");
let defaultBgButton = document.querySelector(".default-btn-bg");
let bodyBg = document.querySelector("body");
let spanHex = document.querySelector("#span-hex");

let arrayHex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

changeBgButton.addEventListener("click", () => {
  let spanHx = "#";
  for (let i = 0; i < 6; i++) {
    let randNumber = Math.floor(Math.random() * arrayHex.length);
    spanHx += arrayHex[randNumber];
  }
  bodyBg.style.backgroundColor = spanHx;
  spanHex.innerText = spanHx;
});

defaultBgButton.addEventListener("click", () => {
  bodyBg.style.backgroundColor = "#02385f";
});

//2. Add Items

let submitBtn = document.querySelector(".submit-btn");
let input = document.querySelector(".input");
let outputText = document.querySelector(".output");

submitBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Write something");
  } else {
    let inputText = input.value;
    outputText.innerText = inputText;
    input.value = "";
  }
});

//2. Tic Tac Toe Game

let currentPlayer = "X";
let won = false;

function place(box) {
  if (box.innerText != "" || won) return;
  box.innerText = currentPlayer;
  currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
  checkGame();
}

function checkGame() {
  for (let i = 0; i <= 2; i++) {
    winner(
      document.getElementById(i + "_0").innerText,
      document.getElementById(i + "_1").innerText,
      document.getElementById(i + "_2").innerText
    );
    winner(
      document.getElementById("0_" + i).innerText,
      document.getElementById("1_" + i).innerText,
      document.getElementById("2_" + i).innerText
    );
  }
  winner(
    document.getElementById("0_0").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_2").innerTexts
  );

  winner(
    document.getElementById("0_2").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_0").innerText
  );
}

function winner(first, second, third) {
  if (first != "" && first == second && first == third) {
    alert("Winner!");
    won = true;
  }
}
