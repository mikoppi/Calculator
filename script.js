//Initial values
let currentNumber='';
let previousNumber='';
let operator='';



// Calculator functions for add, substract, multiply and divide
const add = function(a,b) {
    return a+b;    
};
  
const subtract = function(a,b) {
    return a-b;   
};

const multiply = function (a,b) {
    return a*b;
};

const divide = function (a,b) {
    if (b==0) return 'Cant divide by 0!';
    return a/b;
};

// Function that takes an operator and 2 numbers and calls
// one of the above functions
function operate () {
    if(previousNumber !== '' && currentNumber !== '') {
        let numberOne=Number(previousNumber);
        let numberTwo=Number(currentNumber);
        let operators=['+','-','*','/'];
        switch (operator) {
            case operators[0]:
                currentNumber=add(numberOne,numberTwo);
                break;
            case operators[1]:
                currentNumber=subtract(numberOne,numberTwo);
                break;
            case operators[2]:
                currentNumber=multiply(numberOne,numberTwo);
                break;
            case operators[3]:
                currentNumber=divide(numberOne,numberTwo);
                break;
            default:
                return;
        }
    previousNumber='';
    operator='';
    updateDisplay()
    }
};

//function that clears calculator
function clearDisplay(e) {
    currentNumber='';
    previousNumber='';
    operator='';
    updateDisplay();
}

function deleteCurrentNumber(e) {
    currentNumber=currentNumber.substring(0, currentNumber.length-1);
    updateDisplay();
}
//DOM manipulation 
const displayCurrent=document.querySelector('.currNumber');
const displayPrevious=document.querySelector('.prevNumber');

const equalsButton= document.querySelector('[data-equals]');
    equalsButton.addEventListener('click', operate);

const clearButton = document.querySelector('[data-clear]');
    clearButton.addEventListener('click', clearDisplay);

const deleteButton = document.querySelector('[data-delete]');
    deleteButton.addEventListener('click', deleteCurrentNumber);

const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', appendNumber);
});

const operationButtons = document.querySelectorAll('[data-operation]');
operationButtons.forEach((operationButton) => {
    operationButton.addEventListener('click', appendOperator)
});

//functions that make pressed numbers/operators appear on display div
function updateDisplay() {
    displayCurrent.textContent=currentNumber;
    displayPrevious.textContent = `${previousNumber} ${operator}`;

}

function appendNumber(e) {
    let number = e.target.textContent.toString();
    currentNumber+=number
    updateDisplay();
}

function appendOperator(e) {
    if(previousNumber !== '') {
        operate();
    }
    operator = e.target.textContent.toString();
    previousNumber=currentNumber;
    currentNumber='';
    updateDisplay();
}