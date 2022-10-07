const time = document.querySelector("#timer span");
const timerStartButton = document.querySelector("#timer button");
const timerResetButton = document.querySelector("#timer :last-child");

let TIME = 15;
let timer;


function showAlert() {
  alert("시간초과!");
}

function startTimer(){
    updateTimer();
    stopTimer();
    timer = setInterval(updateTimer, 1500);
}
function stopTimer(){
    clearInterval(timer);
}
function updateTimer(){
    time.innerText = `${TIME}s`;
    TIME--;
    if(TIME < 0){
        stopTimer();
        TIME=15;
        showAlert();
    }
}
function resetTimer(){
    stopTimer();
    TIME = 15;
    time.innerText = `${TIME}s`;
}
timerStartButton.addEventListener("click", startTimer);
timerResetButton.addEventListener("click", resetTimer);