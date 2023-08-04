const push = document.getElementById("start1");
const push1 = document.getElementById("start");
let readySe = new Audio ("R.mp3");
let fireSe = new Audio ("F.mp3");
let fire = false;
let timer;
let count = [4, 5, 6, 7, 8, 9, 10, 11, 12];
let counts = Math.floor(Math.random () * count.length);
let timer1;
let timer2;
let timer3;
let countup = 0;
let countup2 = false;
let countup3 = false;
function start () {
    push.style.opacity = 0;
    const word1 = document.getElementById("word1");
    word1.innerText = "READY";
    readySe.play();
    startTimer ();
}
document.getElementById("push").style.backgroundColor = 'black';

function startTimer () {
    timer = setInterval(show1, 1000)
}

function show1 () {
    count[counts]--;
    if (count[counts] === 0) {
        fire = true;
        console.log(fire);
        word1.innerText = "FIRE";
        fireSe.play();
        countupTimer();
        count[counts] === 0;
        countup2 === 0;
        countup3 === 0;
        console.log(count[counts]);
    }
}

function countupTimer () {
    timer1 = setInterval(show2, 1000);
    timer2 = setInterval(show3, 100);
    timer3 = setInterval(show4, 10);
}

function show2 () {
    countup++;
    console.log(countup);
}
function show3 () {
    countup2++;
    console.log(countup2);
}
function show4 () {
    (countup3++) / 10;
    console.log(countup2);
}
function p1 () {
    if (fire === false) {
        alert("失格");
        document.location.reload();
    }else {
        alert(`${countup}.${countup2}${countup3}秒`);
        document.location.reload();
    }
}

