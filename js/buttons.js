const btnPlay = document.querySelector('.buttonPlay')
const btnPause = document.querySelector('.buttonPause')
const btnSet = document.querySelector('.buttonSet')
const btnStop = document.querySelector('.buttonStop')


export default function controlButtons({countDown, hold, updateDisplay, resetControls, resetTimer, timerTimeOut, minutos}) {
    btnPlay.onclick = () => {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
        btnStop.classList.remove('hide')
        btnSet.classList.add('hide')
        countDown()
    }
    
    btnPause.onclick = () => {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
        hold(timerTimeOut)
    }
    
    btnSet.onclick = () => {
        minutos = Number(prompt('Quantos minutos?')) || 25     
        
        updateDisplay(minutos, 0)
    }
    
    btnStop.onclick = () => {
        resetControls()
        resetTimer()
    }
}

    
export {
    btnPlay,
    btnPause,
    btnSet,
    btnStop
}