let firstOperand = ''
let secondOperand = ''

let currentOp = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[operator-button]')
const clearButton = document.getElementById('clear-button')
const deleteButton = document.getElementById('delete-button')
const equalButton = document.getElementById('equal-button')
const pointButton = document.getElementById('point-button')
const currentOpScreen = document.getElementById('current-op-screen')
const previousOpScreen = document.getElementById('previous-op-screen')

//Triggers clear function on button click
clearButton.addEventListener('click', resetScreen)

//Triggers Delete function on button click
deleteButton.addEventListener('click', deleteNumber)

//Triggers equal function on button
equalButton.addEventListener('click', evaluate)

//Triggers function to add point to calculation
pointButton.addEventListener('click', appendPoint)

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
    if (currentOp != null) evaluate()
    firstOperand = currentOpScreen.textContent
    currentOp = operator
    previousOpScreen.textContent = `${firstOperand} ${currentOp}`
    currentOpScreen.textContent = " "
    console.log(currentOp)
}

//Removes the 0 and adds whatever number selected to the calculation
function appendNumber(number) {
    if (currentOpScreen.textContent === "0" || shouldResetScreen)
        resetScreen()
     currentOpScreen.textContent += number
}

function appendPoint() {
    if (currentOpScreen.textContent.includes('.')) return
        currentOpScreen.textContent += '.'
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
    if (firstOperand != '' && secondOperand != '' && currentOpScreen != '') 
    console.log(currentOp)
    secondOperand = currentOpScreen.textContent
    
    previousOpScreen.textContent = `${firstOperand} ${currentOp} ${secondOperand}`

    currentOpScreen.textContent = calculate(
        currentOp, firstOperand, secondOperand
    )

    currentOp = null
}

//Removes most recent number from current calculation
function deleteNumber() {
    currentOpScreen.textContent = currentOpScreen.textContent
    .toString()
    .slice(0, -1)
 }

function add(a, b) {
    return a + b
  }

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

 function calculate(operator, a, b) {
     a = Number(a)
     b = Number(b)
     switch (operator) {
        case '+':
            return add(a, b);
         case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
         case '÷':
            if (b === 0) return null
            else return divide(a, b);
        default:
            return null
        }
 }