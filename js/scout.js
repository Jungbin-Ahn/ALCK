
const scoutForm = document.querySelector("#scout-form");
const teamSelect = document.querySelector("#team-number")
const teamNumber1 = document.querySelector(".team :nth-child(1)")
const teamNumber2 = document.querySelector(".team :nth-child(2)")
const teamNumber3 = document.querySelector(".team :nth-child(3)")
const teamNumber4 = document.querySelector(".team :nth-child(4)")
const teamNumber5 = document.querySelector(".team :nth-child(5)")
const teamNumber6 = document.querySelector(".team :nth-child(6)")

function assignPlayer(info){
    info.preventDefault();
    if(playerName.innerText === ''){
        console.log("no player name");
        alert("먼저 선수 추첨 부탁해요!");
    }
    else{
        console.log("here's player name");
        if(teamSelect.value === 'TEAM1'){paintPlayer(teamNumber1);}
        else if(teamSelect.value === 'TEAM2'){paintPlayer(teamNumber2);}
        else if(teamSelect.value === 'TEAM3'){paintPlayer(teamNumber3);}
        else if(teamSelect.value === 'TEAM4'){paintPlayer(teamNumber4);}
        else if(teamSelect.value === 'TEAM5'){paintPlayer(teamNumber5);}
        else{paintPlayer(teamNumber6);}
        resetPlayerSlot();
    }

}


function paintPlayer(ul){
    const recruitedPlayer = playerName.innerText;
    const li = document.createElement("li");
    li.innerText = recruitedPlayer;
    ul.appendChild(li);
}


scoutForm.addEventListener("submit", assignPlayer);