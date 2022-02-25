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

// Function that takes an operator and 2 numbers and calls
// one of the above functions

function operate (num1,operator,num2) {
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

let contentArray=[];
let tempResult=0;
const displayContent=document.querySelector('.user-input');
const buttons = document.querySelectorAll('.excludeEqual');
buttons.forEach((button)=> {
    button.addEventListener('click',showTextContent)
})

const displayResult=document.querySelector('.result');
const resultButton=document.getElementById('=');
resultButton.addEventListener('click', showResult);


function showTextContent (e) {
    let text=(e.target.id);
    if (text!=='delete'&&text!=='clear'&&text!=='=') {
        contentArray.push(text);
    }
    else if (text=='delete') {
        contentArray.pop();
    }
    else if (text=='clear') {
        contentArray.length=0;
    }
    displayContent.textContent=contentArray.join('');
    return contentArray;
}


function showResult (e) {
    while (contentArray.length!=1) {
        let result=operate(contentArray[0],contentArray[1],contentArray[2]);
        contentArray.splice(0,3,result);
    }
        
    displayResult.textContent=result;
    }


   