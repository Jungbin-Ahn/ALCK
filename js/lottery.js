const playerButton = document.querySelector("#playerbutton");
const playerName = document.querySelector("#playername");
const tier = document.querySelector("#tier");
const position = document.querySelector("#position");
const champion = document.querySelector("#champion");
const intro = document.querySelector("#intro");

function randomNumberGenerator() {
  if (players.length === 0) {
    alert("본 추첨 끝!!");
    burialToPlayerButton.classList.remove("hidden")
  } else {
    const arr = Math.floor(Math.random() * players.length);
    const chosenPlayer = players[arr];
    players.splice(arr, 1);
    playerName.innerText = chosenPlayer.Name;
    tier.innerText = chosenPlayer.Tier;
    position.innerText = chosenPlayer.Position;
    champion.innerText = chosenPlayer.Champion;
    intro.innerText = chosenPlayer.Intro;
    paintPlayers();
  }
}

function resetPlayerSlot() {
  playerName.innerText = "";
  tier.innerText = "";
  position.innerText = "";
  champion.innerText = "";
  intro.innerText = "";
}

playerButton.addEventListener("click", randomNumberGenerator);
