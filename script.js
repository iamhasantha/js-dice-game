let plyr1Score = 0
let plyr2Score = 0
let ply1Turn = true

var info = document.getElementById("infoBox")
var infobtn = document.getElementById("infobtn")
var close = document.getElementsByClassName("close")[0]

const plyr1Dice = document.getElementById('currentScoreboard1')
const plyr2Dice = document.getElementById('currentScoreboard2')
const Scoreboard1 = document.getElementById('Scoreboard1')
const message = document.getElementById('message')
const Scoreboard2 = document.getElementById('Scoreboard2')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

infobtn.onclick = function() {
    info.style.display = "block";
  }

close.onclick = function() {
    info.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == info) {
      info.style.display = "none";
    }
  }

function showDisplay(){
    rollBtn.style.display = "none"
    resetBtn.style.display = 'block'
}

rollBtn.addEventListener("click" , function() {

    const randomNumber1 = Math.floor(Math.random()*6)+1
    const randomNumber2 = Math.floor(Math.random()*6)+1
    const randomNumber = randomNumber1 + randomNumber2

    document.getElementById('dice-1').src = './img/dice-images/dice_' + randomNumber1 + '.png';
    document.getElementById('dice-2').src = './img/dice-images/dice_' + randomNumber2 + '.png';
    

    if (ply1Turn) {
        plyr1Dice.textContent = randomNumber
        plyr1Score += randomNumber
        Scoreboard1.textContent = plyr1Score
        plyr1Dice.classList.remove("active")
        plyr2Dice.classList.add("active")
        message.textContent = 'Player 2 Turn'
        if(randomNumber1 == 1 && randomNumber2 == 1) {
            plyr1Score = 0
            Scoreboard1.textContent = 0
        }


    }else {
        plyr2Dice.textContent = randomNumber
        plyr2Score += randomNumber
        Scoreboard2.textContent = plyr2Score
        plyr2Dice.classList.remove("active")
        plyr1Dice.classList.add("active")
        message.textContent = 'Player 1 Turn'
        if(randomNumber1 == 1 && randomNumber2 == 1) {
            plyr2Score = 0
            Scoreboard2.textContent = 0
        }
    }

    if(plyr1Score >= 100) {
        message.textContent = "Player 1 has won"
        message.classList.add("active-2")
        showDisplay()
    }else if(plyr2Score >= 100) {
        message.textContent = "Player 2 has won"
        message.classList.add("active-2")
        showDisplay()
    }

    if(randomNumber1 == randomNumber2 && randomNumber != 2){
        ply1Turn = !ply1Turn
    }

    ply1Turn = !ply1Turn
})

resetBtn.addEventListener('click', function(){
    reset()
})

function reset(){
    message.textContent = 'Player 1 Turn'
    plyr1Score = 0
    plyr2Score = 0
    plyr1Dice.textContent = '-'
    plyr2Dice.textContent = '-'
    Scoreboard1.textContent = 0
    Scoreboard2.textContent = 0
    plyr2Dice.classList.remove("active")
    plyr1Dice.classList.add("active")
    rollBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    message.classList.remove("active-2")

}
