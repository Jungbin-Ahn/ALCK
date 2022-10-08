burials = [];

const burialButton = document.querySelector("#burialButton");
const burialToPlayerButton = document.querySelector("#burial-to-players");
const burialList = document.querySelector("#burial-list");

function sendToBurialList() {
  if (playerName.innerText === "") {
    alert("플레이어를 추첨해주세요!");
  } else {
    const player = {};
    player.Name = playerName.innerText;
    player.Tier = tier.innerText;
    player.Position = position.innerText;
    player.Champion = champion.innerText;
    player.Intro = intro.innerText;
    burials.push(player);
    resetPlayerSlot();
    paintBurialPlayers();
  }
}
function sendBurialToPlayer() {
  if (burials.length === 0) {
    alert("유찰자가 없습니다!");
  } else {
    players = burials;
    alert("유찰경매를 시작하겠습니다!");
    burialList.innerText = '';
    paintPlayers();
    burialToPlayerButton.classList.remove("hidden")
  }
}

function paintBurialPlayers(){
  burialList.innerText = "";
  for (let i = 0; i < players.length; i++) {
    const span = document.createElement("span");
    span.innerText = burials[i].Name;
    burialList.appendChild(span);
  }
}



burialButton.addEventListener("click", sendToBurialList);
burialToPlayerButton.addEventListener("click", sendBurialToPlayer);
