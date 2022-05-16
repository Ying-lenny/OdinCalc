let currentOp = null

const numberButtons = document.querySelectorAll('[data-number]')
const currentOpScreen = document.getElementById('current-op-screen')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent)
        updateDiplay()
        })
})

function appendNumber(number) {
    if (currentOpScreen.textContent === "0")
        resetScreen()
     currentOpScreen.textContent += number
}

function updateDiplay() {
    console.log("Updated!")
}

function resetScreen() {
    currentOpScreen.textContent = ""
}