import { btnPlay, btnPause, btnSet, btnStop} from "./buttons.js"
import  ControlsButtons  from "./buttons.js"
import ColorModes from "./styles.js"
import Sound from "./sounds.js"


const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
let minutos = Number(minutesDisplay.textContent)
let timerTimeOut
const addFive = document.querySelector('.addFive')
const menosFive = document.querySelector('.menosFive')


ControlsButtons({countDown, hold, updateDisplay, resetControls, resetTimer, timerTimeOut, minutos})

ColorModes()

Sound()

function countDown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent) 
        let minutes = Number(minutesDisplay.textContent)

        if(seconds <= 0 && minutes <= 0) {
            
            minutesDisplay.textContent = 25
            secondsDisplay.textContent = String(seconds).padStart(2, "0")
            resetControls()
            return
        }

        if(seconds <= 0) {
            seconds = 60
            --minutes
            
        }      

        
        updateDisplay(minutes, String(seconds - 1))
        countDown()
    }, 1000)
}


function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetControls() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    btnSet.classList.remove('hide')
    btnStop.classList.add('hide')
}

function resetTimer() {
    updateDisplay(minutos, 0)
    clearTimeout(timerTimeOut)
}

addFive.onclick = () => {
    minutos += 5
    updateDisplay(minutos, 0)
    console.log(minutos)
}

menosFive.onclick = () => {
    minutos -= 5
    updateDisplay(minutos, 0)
    
}

function hold() {
    clearTimeout(timerTimeOut)
}





