let array = [
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
];
let char1 = "X";
let char2 = "O";

let arraystring = JSON.stringify(array);
localStorage.setItem("arraychar", arraystring);

let arraydata = JSON.parse(localStorage.getItem("arraychar"));

function tick() {
  let removed = arraydata.shift();
  return removed;
}
function tac1() {
  let char = tick();
  document.getElementById("box1").innerHTML = char;
}
function tac2() {
  let char = tick();
  document.getElementById("box2").innerHTML = char;
}
function tac3() {
  let char = tick();
  document.getElementById("box3").innerHTML = char;
}
function tac4() {
  let char = tick();
  document.getElementById("box4").innerHTML = char;
}
function tac5() {
  let char = tick();
  document.getElementById("box5").innerHTML = char;
}
function tac6() {
  let char = tick();
  document.getElementById("box6").innerHTML = char;
}
function tac7() {
  let char = tick();
  document.getElementById("box7").innerHTML = char;
}
function tac8() {
  let char = tick();
  document.getElementById("box8").innerHTML = char;
}
function tac9() {
  let char = tick();
  document.getElementById("box9").innerHTML = char;
}

function conditions() {
  let box1 = document.getElementById("box1").innerText;
  let box2 = document.getElementById("box2").innerText;
  let box3 = document.getElementById("box3").innerText;
  let box4 = document.getElementById("box4").innerText;
  let box5 = document.getElementById("box5").innerText;
  let box6 = document.getElementById("box6").innerText;
  let box7 = document.getElementById("box7").innerText;
  let box8 = document.getElementById("box8").innerText;
  let box9 = document.getElementById("box9").innerText;

  let cod1 = box1 == char1 && box2 == char1 && box3 == char1;
  let cod2 = box1 == char1 && box4 == char1 && box7 == char1;
  let cod3 = box1 == char1 && box5 == char1 && box9 == char1;
  let cod4 = box2 == char1 && box5 == char1 && box8 == char1;
  let cod5 = box3 == char1 && box6 == char1 && box9 == char1;
  let cod6 = box4 == char1 && box5 == char1 && box6 == char1;
  let cod7 = box7 == char1 && box8 == char1 && box9 == char1;
  let cod8 = box3 == char1 && box5 == char1 && box7 == char1;

  let codo1 = box1 == char2 && box2 == char2 && box3 == char2;
  let codo2 = box1 == char2 && box4 == char2 && box7 == char2;
  let codo3 = box1 == char2 && box5 == char2 && box9 == char2;
  let codo4 = box2 == char2 && box5 == char2 && box8 == char2;
  let codo5 = box3 == char2 && box6 == char2 && box9 == char2;
  let codo6 = box4 == char2 && box5 == char2 && box6 == char2;
  let condo7 = box7 == char2 && box8 == char2 && box9 == char2;
  let condo8 = box3 == char2 && box5 == char2 && box7 == char2;
  if (
    cod1 == true ||
    cod2 == true ||
    cod3 == true ||
    cod4 == true ||
    cod5 == true ||
    cod6 == true ||
    cod7 == true ||
    cod8 == true
  ) {
    document.getElementById("dec").innerHTML = "Player X Wins the Game";
  } else if (
    codo1 == true ||
    codo2 == true ||
    codo3 == true ||
    codo4 == true ||
    codo5 == true ||
    codo6 == true ||
    condo7 == true ||
    condo8 == true
  ) {
    document.getElementById("dec").innerHTML = "Player O Wins the Game";
  }

  let box11 = document.getElementById("box1");
  let box22 = document.getElementById("box2");
  let box33 = document.getElementById("box3");
  let box44 = document.getElementById("box4");
  let box55 = document.getElementById("box5");
  let box66 = document.getElementById("box6");
  let box77 = document.getElementById("box7");
  let box88 = document.getElementById("box8");
  let box99 = document.getElementById("box9");

  if (cod1 == true || codo1 == true) {
    box11.style.color = "#FF4191";
    box22.style.color = "#FF4191";
    box33.style.color = "#FF4191";
  } else if (cod2 == true || codo2) {
    box11.style.color = "#FF4191";
    box44.style.color = "#FF4191";
    box77.style.color = "#FF4191";
  } else if (cod3 == true || codo3 == true) {
    box11.style.color = "#FF4191";
    box55.style.color = "#FF4191";
    box99.style.color = "#FF4191";
  } else if (cod4 == true || codo4 == true) {
    box22.style.color = "#FF4191";
    box55.style.color = "#FF4191";
    box88.style.color = "#FF4191";
  } else if (cod5 == true || codo5 == true) {
    box33.style.color = "#FF4191";
    box66.style.color = "#FF4191";
    box99.style.color = "#FF4191";
  } else if (cod6 == true || codo6 == true) {
    box44.style.color = "#FF4191";
    box55.style.color = "#FF4191";
    box66.style.color = "#FF4191";
  } else if (cod7 == true || condo7 == true) {
    box77.style.color = "#FF4191";
    box88.style.color = "#FF4191";
    box99.style.color = "#FF4191";
  } else if (cod8 == true || condo8 == true) {
    box33.style.color = "#FF4191";
    box55.style.color = "#FF4191";
    box77.style.color = "#FF4191";
  }
}
let array2 = [
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
  "O",
  "X",
];
let ch4 = "X";
let ch5 = "O";

let arraystring2 = JSON.stringify(array2);
localStorage.setItem("arraychar2", arraystring2);

let arraydata2 = JSON.parse(localStorage.getItem("arraychar2"));

function tick2() {
  let removed = arraydata2.shift();
  return removed;
}

function computerplay() {
  let cont = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let randomindex = Math.floor(Math.random() * cont.length);
  let randomremoved=cont.splice(randomindex,1);
  let random=randomremoved[0];

  if (random == 1) {
    document.getElementById("box1").innerHTML = tick2();
  } else if (random == 2) {
    document.getElementById("box2").innerHTML = tick2();
  } else if (random == 3) {
    document.getElementById("box3").innerHTML = tick2();
  } else if (random == 4) {
    document.getElementById("box4").innerHTML = tick2();
  } else if (random == 5) {
    document.getElementById("box5").innerHTML = tick2();
  } else if (random == 6) {
    document.getElementById("box6").innerHTML = tick2();
  } else if (random == 7) {
    document.getElementById("box7").innerHTML = tick2();
  } else if (random == 8) {
    document.getElementById("box8").innerHTML = tick2();
  } else {
    document.getElementById("box9").innerHTML = tick2();
  }
}

function funcbox1() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac1();

  conditions();
}
function funcbox2() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac2();
  conditions();
}
function funcbox3() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac3();
  conditions();
}
function funcbox4() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac4();
  conditions();
}
function funcbox5() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac5();
  conditions();
}
function funcbox6() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac6();
  conditions();
}
function funcbox7() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac7();
  conditions();
}
function funcbox8() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac8();
  conditions();
}
function funcbox9() {
  let check = document.getElementById("check");

  if (check.checked == true) {
    computerplay();
  }
  tac9();
  conditions();
}
function refreshPage() {
  location.reload();
}