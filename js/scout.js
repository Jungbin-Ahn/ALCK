const teamPoints = [1000, 1000, 1000, 1000, 1000, 1000];

const scoutForm = document.querySelector("#scout-form");
const pointInput = document.querySelector("#scout-form input");
const teamSelect = document.querySelector("#team-number");
const point = document.querySelector("#point");
const teamNumber1 = document.querySelector("#team :nth-child(1)");
const teamNumber2 = document.querySelector("#team :nth-child(2)");
const teamNumber3 = document.querySelector("#team :nth-child(3)");
const teamNumber4 = document.querySelector("#team :nth-child(4)");
const teamNumber5 = document.querySelector("#team :nth-child(5)");
const teamNumber6 = document.querySelector("#team :nth-child(6)");

function assignPlayer(info) {
  info.preventDefault();
  if (playerName.innerText === "") {
    alert("먼저 선수 추첨 부탁해요!");
  } else {
    console.log("here's player name");
    if (teamSelect.value === "TEAM1") {
      paintPlayer(teamNumber1);
      teamPoints[0] = teamPoints[0] - pointInput.value;
    } else if (teamSelect.value === "TEAM2") {
      paintPlayer(teamNumber2);
      teamPoints[1] = teamPoints[1] - pointInput.value;
    } else if (teamSelect.value === "TEAM3") {
      paintPlayer(teamNumber3);
      teamPoints[2] = teamPoints[2] - pointInput.value;
    } else if (teamSelect.value === "TEAM4") {
      paintPlayer(teamNumber4);
      teamPoints[3] = teamPoints[3] - pointInput.value;
    } else if (teamSelect.value === "TEAM5") {
      paintPlayer(teamNumber5);
      teamPoints[4] = teamPoints[4] - pointInput.value;
    } else {
      paintPlayer(teamNumber6);
      teamPoints[5] = teamPoints[5] - pointInput.value;
    }
    resetPlayerSlot();
    pointInput.value = "";
    paintRemainingPoint();
  }
}

function paintPlayer(ul) {
  const recruitedPlayer = playerName.innerText;
  const li = document.createElement("li");
  li.innerText = recruitedPlayer;
  ul.appendChild(li);
}

function paintRemainingPoint() {
  for (let i = 1; i < teamPoints.length + 1; i++) {
    const pointDiv = point.querySelector(`div:nth-child(${i})`);
    const pointFirstSpan = pointDiv.querySelector("div :first-child");
    const pointSecondSpan = pointDiv.querySelector("div :last-child");
    pointFirstSpan.innerText = `Team ${i}`;
    pointSecondSpan.innerText = `${teamPoints[i - 1]}`;
  }
}

scoutForm.addEventListener("submit", assignPlayer);
paintRemainingPoint();
