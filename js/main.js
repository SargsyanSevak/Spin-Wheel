const spin = document.querySelector('.spin');
const wheel = document.querySelector('.wheel');
const chances = document.querySelector('.chances');

let chanceCount = 4;
chances.innerHTML = `Chances : ${chanceCount}`;

function playAudio(url) {
    new Audio(url).play();
  }

spin.addEventListener('click',(e)=>{
    if(chanceCount > 0){
        let val = Math.ceil(Math.random(1000) * 3600);
        wheel.style.transform += `rotate(${val}deg)`
        chanceCount  -= 1
        chances.innerHTML = `Chances : ${chanceCount}`
        playAudio('./assets/music1.mp3');
    }else{
        e.target.style = `
            pointerEvents: 'none';
            opacity : 0.8
        `
    }
})