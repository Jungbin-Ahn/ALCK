players = [
    {
        Name: '안정빈',
        Tier: 'Gold',
        Positon: 'Top',
        Champion: 'Leona, Akali',
        Intro: '잔인한 포식자',
    },
    {
        Name: '김광현',
        Tier: 'Silver',
        Positon: 'Jungle',
        Champion: 'Fizz',
        Intro: '어때',
    },
    {
        Name: '최정',
        Tier: 'Platimum',
        Positon: 'Mind',
        Champion: 'Sivir, Oriana',
        Intro: 'OOOOOOOO',
    },
];

const playerButton = document.querySelector("#playerbutton");
const playerName = document.querySelector("#playername");
const tier = document.querySelector("#tier");
const position = document.querySelector("#position");
const champion = document.querySelector("#champion");
const intro = document.querySelector("#intro");


function randomNumberGenerator(){
    if(players.length === 0){
        alert("추첨 끝!")
    }
    else{
        const arr = Math.floor(Math.random() * players.length);
        const chosenPlayer = players[arr];
        players.splice(arr,1);
        playerName.innerText = chosenPlayer.Name;
        tier.innerText = chosenPlayer.Tier;
        position.innerText = chosenPlayer.Position;
        champion.innerText = chosenPlayer.Champion;
        intro.innerText = chosenPlayer.Intro;
    }
}

playerButton.addEventListener("click", randomNumberGenerator);