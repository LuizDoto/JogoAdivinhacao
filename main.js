//variáveis
let randomNumber = Math.round(Math.random() * 10)
let xAtempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

//Funções

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function handleTryClick(event) {
    event.preventDefault ()
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `acertou em ${xAtempts} tentativas`
        
    }
    inputNumber.value = 0
    xAtempts++
}
function handleResetClick() {
    toggleScreen ()
    xAtempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter" && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})