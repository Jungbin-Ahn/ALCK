const scoutForm = document.querySelector(".scout");
const pointSpent = scoutForm.querySelector("input");
const teamSelect = document.querySelector("#team-number")


function scoutPlayer(){
    const recruitedPlayer = playerName;
    const teamNumber = teamSelect.value;
    const teamDistribute = document.querySelector(`.team:nth-child(${teamNumber})`);
    const li = document.createElement("li");
    li.classList.add("player");
    li.innerText = recruitedPlayer;
    teamDistribute.appendChild(li);
}



pointSpent.addEventListener("submit", scoutPlayer);