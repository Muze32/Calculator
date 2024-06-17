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
let operation = '';
let result = 0;

calculator.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') { //Check if the elment clicked is a button

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
                result = operate(operation[0], operation[1], operation[2]);
                if (isNaN(result)) {
                    break;
                }
                display.textContent = result;
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