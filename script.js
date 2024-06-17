const add = function(a, b = 0) {
	return a + b;
};

const subtract = function(a, b = 0) {
	return a - b;
};

const divide = function(a ,b = 1) {
	return a / b;
};

const multiply = function(a, b = 1) {
  return a * b;
};

const operate = function (a, operator, b) {
    a = parseInt(a);
    b = parseInt(b);
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);
    }
}

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
let operation = '';
let equalPressed = true;
let result = 0;

calculator.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') { //Check if the elment clicked is a button

        if (equalPressed) {  //If equal have been pressed deletes display value
            equalPressed = false;
            display.textContent = '';
            
        }

        switch(e.target.className) {
            case 'operator':
                display.textContent += ` ${e.target.textContent} `;
                operation = operation.split(' ');
                if (operation[2]) { //Checks if the operations contains a second number
                    result = operate(operation[0], operation[1], operation[2]);
                    display.textContent = `${result} ${e.target.textContent} `; //Updates display with the result and the current operator selected
                }
                break;

            case 'equal': 
                console.log(operation);
                operation = operation.split(' ');
                result = operate(operation[0], operation[1], operation[2])
                display.textContent = result;
                equalPressed = true;
                break;

            case 'clear':
                display.textContent = '';
                break;

            default:
                display.textContent += `${e.target.textContent}`
                break;  
            }
            operation = display.textContent;
    }
})