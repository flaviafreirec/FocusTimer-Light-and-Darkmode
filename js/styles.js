const colorMode = document.querySelector('.colorMode')
const container = document.querySelector('.container')
const mode = document.querySelector('.mode')
const separador = document.querySelector('#separador')
const controlsSvg = document.querySelector('.controls')
const styleCards = document.querySelectorAll('.texture')


//styles
export default function colorModes() {
    colorMode.onclick = () => {
        container.classList.toggle("light")
        mode.classList.toggle("light")
        controlsSvg.classList.toggle("svgLight")
       
        
        for (let index = 0; index < styleCards.length; index++) {
            styleCards[index].classList.toggle("soundDark")
        }
        
    
        if(mode.classList.contains("light")) {
            mode.setAttribute('src', './assets/lightMode.svg')
            minutes.style.color = '#323238'
            seconds.style.color = '#323238'
            separador.style.color = '#323238'
            
            
        } else {
            mode.setAttribute('src', './assets/darkMode.svg')
            minutes.style.color = '#FFFFFF'
            seconds.style.color = '#FFFFFF'
            separador.style.color = '#FFFFFF'
            
            
            
        }
    }
}
