/* It´s me Mario! */
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const music = document.getElementById('music')
const audio = document.getElementById('sound')
var themeAudio = new Audio('sounds/01-main-theme-overworld.mp3')
var deathAudio = new Audio('sounds/08-you-re-dead.mp3')


const jump = () => {
    mario.classList.add('jump');
    audio.play()
    setTimeout(() => {
        mario.classList.remove('jump')
        
    },1000);
}
function gameOver(cloudsPosition , pipePosition, marioPosition){
    if(pipePosition <= 110 && pipePosition > 0 && marioPosition < 100){
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png'
        mario.style.width = `70px`;
        mario.style.marginLeft = '50px'
        mario.style.animation = 'none';
        clearInterval(loop)
       
    }
    
}
const loop = setInterval(() => {
    const cloudsPosition = clouds.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    gameOver(cloudsPosition , pipePosition, marioPosition)
}, 10);

document.addEventListener('keydown' , jump)

/* const playMusic = () => {
    audio.play()
}

document.addEventListener('keydown' , playMusic) */