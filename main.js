const push = document.getElementById("start1");
const push1 = document.getElementById("start");
const TCT = document.getElementById('tc');
const bb = document.getElementById('back');
TCT.style.display = 'none';
bb.style.display = 'none';
let readySe = new Audio("R.mp3");
let fireSe = new Audio("F.mp3");
let fire = false;
let timer;
let count = [4, 5, 6, 7, 8, 9, 10, 11, 12];
let counts = Math.floor(Math.random() * count.length);//いつ「FIRE」になるかをランダムに設定
var startTime;
var elapsedTime = 0;
var timerID;
var timeToadd = 0;

function start() {
    push.style.display = 'none';
    TCT.style.display = 'block'
    const word1 = document.getElementById("word1");
    word1.innerText = "READY";
    readySe.play();
    startTimer();
}
document.getElementById("push").style.backgroundColor = 'black';

function startTimer() {
    timer = setInterval(show1, 1000)
}

function show1() {
    count[counts]--;
    if (count[counts] === 0) {
        clearInterval(timer);
        fire = true;
        console.log(fire);
        word1.innerText = "FIRE";
        fireSe.play();
        countupTimer();
        console.log(count[counts]);
    }
}

function countupTimer() {
    startTime = Date.now();
    countup()
}
function countup() {
    timerID = setTimeout(function () {
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTimeText();
        countup()
    }, 10);
}

function updateTimeText() {
    var s = Math.floor((elapsedTime % 60000) / 1000);
    var ms = elapsedTime % 1000;
    s = ("0" + s).slice(-2);
    ms = ("00" + ms).slice(-3);
    TCT.textContent = s + ":" + ms;

    if (s == 60) {
        clearInterval(timerID);
        alert("失格")
        document.location.reload();
    }
}
function p1() {
    clearInterval(timerID);
    bb.style.display = 'block';

    if (fire === false) {
        alert("失格");
        document.location.reload();
    }
}
function backb() {
    document.location.reload();
}
