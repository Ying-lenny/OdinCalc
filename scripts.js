let currentOp = null

const currentOpScreen = document.getElementById('current-op-screen')
const calcButtons = document.querySelectorAll('[data-number]')

calcButtons.forEach((button) => 
    button.addEventListener('click', () => setCurrentOp(button.textContent))
)

function setCurrentOp(number) {
    currentOpScreen.textContent += number
}