const natureSound = document.querySelector('.nature')
const rainSound = document.querySelector('.rain')
const homeSound = document.querySelector('.house')
const fireSound = document.querySelector('.fire')
const inputNature = document.querySelector('#inputNature')
const inputRain = document.querySelector('#inputRain')
const inputHome = document.querySelector('#inputHome')
const inputFire = document.querySelector('#inputFire')
const soundNaturesvg = document.querySelector('.soundNaturesvg')
const rainSvg = document.querySelector('.rainSvg')
const houseSvg = document.querySelector('.houseSvg')
const fireSvg = document.querySelector('.fireSvg')




export default function Sounds() {
    const naturePressed = new Audio("./assets/soundNature.wav")
    const rainPressed = new Audio("./assets/soundRain.wav")
    const homePressed = new Audio("./assets/soundHome.wav")
    const firePressed = new Audio("./assets/soundFire.wav")

    soundNaturesvg.onclick = () => {
        if(naturePressed.paused) {
            naturePressed.play()
            natureSound.classList.add('lightCardsvg') 
            natureSound.classList.add('lightCard')
            natureSound.onclick = () => {
                naturePressed.volume = 0.5
                inputNature.value = 50
            }
        
        } else {
            naturePressed.pause()
            natureSound.classList.remove('lightCardsvg')
            natureSound.classList.remove('lightCard')
            
        }
   }

     inputNature.addEventListener('input', function() {
     inputNature.textContent = this.value
     
     naturePressed.volume = inputNature.textContent / 100
     
      
    });


   rainSvg.onclick = () => {
        if(rainPressed.paused) {
            rainPressed.play()
            rainSound.classList.add('lightCardsvg') 
            rainSound.classList.add('lightCard')
            rainSound.onclick = () => {
                rainPressed.volume = 0.5
                inputRain.value = 50
            }
        } else {
            rainPressed.pause()
            rainSound.classList.remove('lightCardsvg')
            rainSound.classList.remove('lightCard')
        }
   }

   inputRain.addEventListener('input', function() {
        inputRain.textContent = this.value
        rainPressed.volume = inputRain.textContent / 100
   });

   houseSvg.onclick = () => {
    if(homePressed.paused) {
        homePressed.play()
        homeSound.classList.add('lightCardsvg') 
        homeSound.classList.add('lightCard')
        homeSound.onclick = () => {
            homePressed.volume = 0.5
            inputHome.value = 50
        }
    } else {
        homePressed.pause()
        homeSound.classList.remove('lightCardsvg')
        homeSound.classList.remove('lightCard')
    }
   }

   inputHome.addEventListener('input', function() {
    inputHome.textContent = this.value
    homePressed.volume = inputHome.textContent / 100
});


   fireSvg.onclick = () => {
    if(firePressed.paused) {
        firePressed.play()
        fireSound.classList.add('lightCardsvg') 
        fireSound.classList.add('lightCard')
        fireSound.onclick = () => {
            firePressed.volume = 0.5
            inputFire.value = 50
        }
    } else {
        firePressed.pause()
        fireSound.classList.remove('lightCardsvg')
        fireSound.classList.remove('lightCard')
    }
   }

   inputFire.addEventListener('input', function() {
    inputFire.textContent = this.value
    firePressed.volume = inputFire.textContent / 100
   })
}

