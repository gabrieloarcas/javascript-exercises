// 1.Change background to a random hex color

let changeBgButton = document.querySelector(".btn-bg");
let defaultBgButton = document.querySelector(".default-btn-bg");
let bodyBg = document.querySelector("body");
let spanHex = document.querySelector("#span-hex");

let arrayHex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomColor() {
  let spanHx = "#";
  for (let i = 0; i < 6; i++) {
    let randNumber = Math.floor(Math.random() * arrayHex.length);
    spanHx += arrayHex[randNumber];
  }
  spanHex.style.color = spanHx;
}

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

  //Asynchronous stuff

  const changeColorAnyway = () => {
    setInterval(() => {
      randomColor();
    }, 100);
  };

  changeColorAnyway();
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

//3. Tic Tac Toe Game

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
    document.getElementById("2_2").innerText
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

//4. Caculator

let digits = document.querySelectorAll(".calc-button");
let screen = document.querySelector(".display");
let result = document.querySelector(".equal");
let cancel = document.querySelector(".cancel");

digits.forEach(digit => {
  digit.addEventListener("click", () => {
    let oneNumber = digit.getAttribute("attr");
    screen.value += oneNumber;
  });
});

result.addEventListener("click", () => {
  if (screen.value == "") {
    alert("put some numbers");
  } else {
    let evaluate = eval(screen.value);
    screen.value = evaluate;
  }
});

cancel.addEventListener("click", () => {
  screen.value = "";
});

let changeTitle = document.querySelector("h1");
let changeTitleColor = changeTitle;

setTimeout(() => {
  changeTitleColor.style.color = "white";
}, 1000);

//5. Fetch api
const someText = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => {
      return result.json();
    })
    .then(data => {
      document.querySelector("#json-text").innerHTML += data[0].body;
      document.querySelector("#json-text").innerHTML += ".";
    })
    .catch(error => console.log(error));
};

someText();

//6. Get Time

let timer = document.querySelector("#timer");
let milliseconds = document.querySelector("#milliseconds");
let getTime = document.querySelector("#start");

getTime.addEventListener("click", () => {
  setInterval(() => {
    let getDate = new Date();
    let milli = getDate.getMilliseconds();
    let seconds = getDate.getSeconds();
    let minutes = getDate.getMinutes();
    let hours = getDate.getHours();
    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
    milliseconds.innerText = `${milli}`;
    if (milli < 200) {
      milliseconds.style.color = "#025169";
    } else if (milli > 200 && milli < 400) {
      milliseconds.style.color = "#014f86";
    } else if (milli > 400 && milli < 600) {
      milliseconds.style.color = "#0275c7";
    } else if (milli > 600 && milli < 800) {
      milliseconds.style.color = "#0390f5";
    } else {
      milliseconds.style.color = "#014f86";
    }
  }, 1);
});
