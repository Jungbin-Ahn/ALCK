burials = [];

const burialButton = document.querySelector("#burialButton");


function sendToBurialList(){
    if (playerName.innerText === ''){
        alert("플레이어를 추첨해주세요!");
    }
    else{
        const player = {
            Name: '',
            Tier: '',
            Positon: '',
            Champion: '',
            Intro: '',
        }
        player.Name = playerName.innerText;
        player.Tier = tier.innerText;
        player.Position = position.innerText;
        player.Champion = champion.innerText;
        player.Intro = intro.innerText;
        burials.push(player);
        resetPlayerSlot();
    }
}

burialButton.addEventListener("click", sendToBurialList);
