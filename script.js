let gameSeq = [];
let userSeq = [];
let level = 0;
let start = false;
let i = 0;
let HighScore=0;
let h4 = document.querySelector("h4");
let h3 = document.querySelector("h3");
let btns = ["purpule", "green", "orange", "pink"];

document.addEventListener("keypress", function() {
  if (start === false) {
    levelup();
    h4.innerText = "HighScore = " + HighScore;
    start = true;
  }
});

function levelup() {
  level++;
  h3.innerText = "level = " + level;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector("." + randColor);
  Gameflash(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq[level - 1]);
}

function Gameflash(btn) {
  btn.classList.add('flash');
  setTimeout(function() {
    btn.classList.remove('flash');
  }, 300);
}

function Userflash(btn) {
  btn.classList.add('userflash');
  setTimeout(function() {
    btn.classList.remove('userflash');
  }, 300);
}

function btnpress() {
  let btn = this;
  Userflash(btn);
  let userColor = btn.getAttribute("id");
  userSeq[i] = userColor;
  console.log(userSeq[i]);
  ++i;
  if (i == level) {
    checkAns();
  }
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnpress);
}

function checkAns() {
  let correct = true;
  for (let j = 0; j < level; j++) {
    if (userSeq[j] !== gameSeq[j]) {
      correct = false;
      break;
    }
  }

  if (correct) {
    levelup();
    userSeq = [];
    i = 0;
  } else {
    h3.innerText = "------------------------Game Over!---------------------";
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 1000);
    if(HighScore<level){
    HighScore=level;
    h4.innerText =  " Congratulation you beat the highScore! press any kew to start"
  }
  else{
    h4.innerText =  "press any kew to start"
  }
    gameSeq = [];
    userSeq = [];  
    level = 0;
    start = false;
    i=0;
  }
}
