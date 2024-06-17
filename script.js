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

const operate = function (operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            subtract(a ,b)
            break;
    }
}

let num1 = parseInt(prompt('Please enter a number: '))
let num1 = parseInt(prompt('Please enter another number: '))