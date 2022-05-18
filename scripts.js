let currentOp = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const clearButton = document.getElementById('clear-button')
const deleteButton = document.getElementById('delete-button')
const currentOpScreen = document.getElementById('current-op-screen')
const previousOpScreen = document.getElementById('previous-op-screen')

clearButton.addEventListener('click', resetScreen)
deleteButton.addEventListener('click', deleteNumber)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent)
         })
})

function appendNumber(number) {
    if (currentOpScreen.textContent === "0" || shouldResetScreen)
        resetScreen()
     currentOpScreen.textContent += number
}

function updateDiplay() {
    console.log("Updated!")
}

function resetScreen() {
        currentOpScreen.textContent = " "
        previousOpScreen.textContent = " "
}

function deleteNumber() {
         currentOpScreen.textContent = currentOpScreen.textContent
        .toString()
        .slice(0, -1)
 }