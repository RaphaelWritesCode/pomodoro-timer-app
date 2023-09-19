const pomodoro = document.getElementById("pomodoro");
const shortRest = document.getElementById("shortRest");
const longRest = document.getElementById("longRest");
const timeDisplay = document.getElementById("timeDisplay");
const timeDisplayBtns = document.getElementById("timeDisplayBtns");

let mins;
let secs;
let paused;
let intervalID;

pomodoro.addEventListener("click", () => {
    timeDisplayBtns.innerHTML = '';    
    clearInterval(intervalID);
    paused = true;    
    timeDisplay.textContent = "25:00";
    mins = 25;
    secs = mins * 60;
    
    const btn = document.createElement("button");
    btn.textContent = "Start";

    btn.addEventListener("click", () => {
        if (paused) {
            btn.textContent = "Pause";
            intervalID = setInterval(updateTime, 1000);
            paused = false;
        }
        else {
            btn.textContent = "Start";
            clearInterval(intervalID);
            paused = true;
        }
    })

    timeDisplayBtns.appendChild(btn);
})

shortRest.addEventListener("click", () => {
    timeDisplayBtns.innerHTML = '';
    clearInterval(intervalID);
    paused = true; 

    timeDisplay.textContent = "05:00";

    mins = 5;
    secs = mins * 60;

    const btn = document.createElement("button");
    btn.textContent = "Start";

    btn.addEventListener("click", () => {
        if (paused) {
            btn.textContent = "Pause";
            intervalID = setInterval(updateTime, 1000);
            paused = false;
        }
        else {
            btn.textContent = "Start";
            clearInterval(intervalID);
            paused = true;
        }
    })

    timeDisplayBtns.appendChild(btn);
})

longRest.addEventListener("click", () => {
    timeDisplayBtns.innerHTML = '';
    clearInterval(intervalID);
    paused = true; 

    timeDisplay.textContent = "15:00";

    mins = 15;
    secs = mins * 60;

    const btn = document.createElement("button");
    btn.textContent = "Start";

    btn.addEventListener("click", () => {
        if (paused) {
            btn.textContent = "Pause";
            intervalID = setInterval(updateTime, 1000);
            paused = false;
        }
        else {
            btn.textContent = "Start";
            clearInterval(intervalID);
            paused = true;
        }
    })

    timeDisplayBtns.appendChild(btn);
})

function updateTime() {
    secs--;
    let minsLeft = Math.floor(secs / 60);
    let secsLeft = secs % 60;

    secsLeft = secsLeft < 10 ? '0' + secsLeft : secsLeft;

    timeDisplay.textContent = `${minsLeft}:${secsLeft}`;
}

document.addEventListener("DOMContentLoaded", () => {
    pomodoro.click();
})