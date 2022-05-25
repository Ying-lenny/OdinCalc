let firstOperand = ''
let secondOperand = ''

let currentOp = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[operator-button]')
const clearButton = document.getElementById('clear-button')
const deleteButton = document.getElementById('delete-button')
const equalButton = document.getElementById('equal-button')
const currentOpScreen = document.getElementById('current-op-screen')
const previousOpScreen = document.getElementById('previous-op-screen')

//Triggers clear function on button click
clearButton.addEventListener('click', resetScreen)
//Triggers Delete function on button click
deleteButton.addEventListener('click', deleteNumber)
//Triggers equal function on button
equalButton.addEventListener('click', evaluate)

//Triggers function to add operator to calculation
operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
)
//Triggers function to add a number
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

//Moves current number and the selected operator to the top
function setOperator(operator) {
    firstOperand = currentOpScreen.textContent
    secondOperand = operator
    previousOpScreen.textContent = `${firstOperand} ${secondOperand}`
    currentOpScreen.textContent = " "
    console.log(secondOperand)
}

//Removes the 0 and adds whatever number selected to the calculation
function appendNumber(number) {
    if (currentOpScreen.textContent === "0" || shouldResetScreen)
        resetScreen()
     currentOpScreen.textContent += number
}

//Sets both calculations to 0
function resetScreen() {
    firstOperand = ''
    secondOperand = ''
    currentOpScreen.textContent = ""
    previousOpScreen.textContent = ""
    currentOp = null
}

//Starts Evaluation to see if a valid calculation was submitted
function evaluate() {
    console.log("Evaluated")
}

//Removes most recent number from current calculation
function deleteNumber() {
    currentOpScreen.textContent = currentOpScreen.textContent
    .toString()
    .slice(0, -1)
 }