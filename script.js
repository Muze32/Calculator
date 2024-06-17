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

const operate = function (a, b, operator) {
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
console.log(calculator);
calculator.addEventListener('click', e => {
    console.log(e.target.textContent);
})