const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const divide = function(a ,b) {
	return a / b;
};

const multiply = function(a, b) {
  return a * b;
};

const operate = function (a, operator, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);
        default:
            alert('Please enter a valid operator');
    }
}
/*
let num1 = parseInt(prompt('Please enter a number: '));
let num2 = parseInt(prompt('Please enter another number: '));
let operator = prompt('Please enter the operator: ');

console.log(operate(num1, num2, operator))
*/
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
let operation = '';
console.log(calculator);

calculator.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') { //Check if the elment clicked is a button
        operation = display.textContent;
        switch(e.target.className) {
            case 'operator':
                display.textContent += ` ${e.target.textContent} `;
                break;
            case 'equal': 
                console.log(operation);
                operation = operation.split(' ');
                display.textContent = operate(operation[0], operation[1], operation[2])
                break;
            case 'clear':
                display.textContent = '';
                break;
            default:
                display.textContent += `${e.target.textContent}`
                break;  
            }
    }

})