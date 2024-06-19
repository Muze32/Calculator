const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const divide = function(a, b) {
    if (b == 0) {
        return 'lmao'
    }
	return a / b;
};

const multiply = function(a, b) {
    return a * b;
};

const operate = function (a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator) {
        case '+':
            result = add(a, b);
            break;

        case '-':
            result = subtract(a, b);
            break;

        case '/':
            if (b == 0) {
                return 'lmao';
            }

            result = divide(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;
    }

    return Math.round(result * 100) / 100;
}

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const body = document.querySelector("body");
let equation = '';
let result = 0;
let floatingEnabled = true;

////////////Main code
calculator.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') { //Check if the elment clicked is a button
        updateDisplayContent(e.target.textContent);
    }
})

body.addEventListener('keydown', e => {
    if (!(isNaN(e.key)) || ('/*+-=.').split('').includes(e.key) || ['Enter', 'Backspace'].includes(e.key)) {
        updateDisplayContent(e.key);
    }
})


function updateDisplayContent (event) {
    switch(event) {
        case '-':
        case '+':
        case '/':   
        case '*':
            floatingEnabled = true; //Enables the floating button again
            display.textContent += ` ${event} `;
            if (equation[2]) { //Checks if the equations contains a second number
                result = operate(equation[0], equation[1], equation[2]);
                display.textContent = `${result} ${event} `; //Updates display with the result and the current operator selected
            }
            break;

        case '=': 
        case 'Enter':
            result = operate(equation[0], equation[1], equation[2]);
            if (isNaN(result) && result != "lmao") {
                break;
            }
            display.textContent = result;
            break;

        case 'AC':
            display.textContent = '';
            break;

        case '.':
            if (floatingEnabled) { //Checks if the floating button has already been pressed
                display.textContent += `${event}`
                floatingEnabled = false;    
            }
            break;
            
        case 'DEL':
        case 'Backspace':
            display.textContent = display.textContent.slice(0, -1);
            break;

        default:
            display.textContent += `${event}`
            break;  
        }
        equation = display.textContent.split(' ');
}