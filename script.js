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
    return a/b;
};

// Function that takes an operator and 2 numbers and call
// one of the above functions

function operate (operator,num1,num2) {
    let numberOne=Number(num1);
    let numberTwo=Number(num2);
    let operators=['+','-','*','/'];
    switch (operator) {
        case operators[0]:
            return result=add(numberOne,numberTwo);
        case operators[1]:
            return result=subtract(numberOne,numberTwo);
        case operators[2]:
            return result=multiply(numberOne,numberTwo);
        case operators[3]:
            return result=divide(numberOne,numberTwo);
    }
};

//functions that make pressed numbers/operators appear on display div

const display=document.querySelector('.display');
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=> {
    button.addEventListener('click',showTextContent)
})

function showTextContent (e) {
    let text=(e.target.id);
    display.textContent=text;
    
}

