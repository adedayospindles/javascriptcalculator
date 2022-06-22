// javascript program for a zuri calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, *, / or % ): ');

// take the operand input
const firstNumber = parseFloat(prompt('Enter first number: '));
const secondNumber = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '*') {
    result = firstNumber * secondNumber;
}
else if (operator == '/') {
    result = firstNumber / secondNumber;
}
else if (operator == '%') {
    result = firstNumber % secondNumber;
}
else if (operator == '' || firstNumber == '' || secondNumber == '') {
    result ='I am sorry, you didn\'t enter either one or all of the input(s) required!';
}
else {
    result ='I am sorry, that\'s a wrong input!';
}

// display the result
alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`);