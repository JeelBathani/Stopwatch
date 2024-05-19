const minutelabel = document.getElementById('minute');
const secondlabel = document.getElementById('second');
const milisecondlabel = document.getElementById('milisecond');

const startbutton = document.getElementById('startbtn');
const stopbutton = document.getElementById('stopbtn');
const pausebutton = document.getElementById('pausebtn');
const resetbutton = document.getElementById('resetbtn');

const laplist = document.getElementById('laplist');

let minute = 0;
let second = 0;
let milisecond = 0;
let Interval;

startbutton.addEventListener('click', startTimer);
stopbutton.addEventListener('click', stopTimer);
pausebutton.addEventListener('click', pauseTimer);
resetbutton.addEventListener('click', resetTimer);

function startTimer() {
    Interval = setInterval(updateTimer, 10);
    startbutton.disabled = true;
}

function stopTimer() {
    clearInterval(Interval);
    addToLapList();
    resettimerdata();
    startbutton.disabled = false;
}

function pauseTimer() {
    clearInterval(Interval);
    pausebutton.disabled = true;
}

function resetTimer() {
    clearInterval(Interval);
    resettimerdata();
    startbutton.disabled = false;
}

function updateTimer() {
    milisecond++;
    if (milisecond === 100) {
        milisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    displayTimer();
}

function displayTimer() {
    milisecondlabel.textContent = padTime(milisecond);
    secondlabel.textContent = padTime(second);
    minutelabel.textContent = padTime(minute);
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function resettimerdata() {
    minute = 0;
    second = 0;
    milisecond = 0;
}

function addToLapList() {
    const lapTime = `${padTime(minute)}:${padTime(second)}:${padTime(milisecond)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>lap ${laplist.childElementCount + 1}: </span>${lapTime}`;
    laplist.appendChild(listItem);
}
