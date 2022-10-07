const time = document.querySelector("#timer span");
const timerStartButton = document.querySelector("#timer button");
const timerResetButton = document.querySelector("#timer :last-child");

let sec = '15s';

function showAlert(){
    alert("시간초과!");
}

function resetTimer(){
    alert("reset");
}



timerStartButton.addEventListener("click",showAlert);
timerResetButton.addEventListener("click", resetTimer);