let inputString = '';
let displayValue = '';
let resultValue = '';
let operator;

function btn_click(value) {
    inputString += value;
    displayValue += value;
    document.querySelector('#resultFld').value = displayValue;
    
    if(inputString.indexOf('+')!=-1) {
        operator = '+';
    } else if(inputString.indexOf('-')!=-1) {
        operator = '-';
    } else if(inputString.indexOf('*')!=-1) {
        operator = '*';
    } else if(inputString.indexOf('/')!=-1) {
        operator = '/';
    }
}

function compute() {
    let calculation;
    let num1;
    let num2;
    
    switch (operator) {
        case '+':
            calculation = inputString.split(operator);
            num1 = parseFloat(calculation[0]);
            num2 = parseFloat(calculation[1]);
            resultValue = num1 + num2;
            break;
        case '-':
            calculation = inputString.split(operator);
            num1 = parseFloat(calculation[0]);
            num2 = parseFloat(calculation[1]);
            resultValue = num1 - num2;
            break;
        case '*':
            calculation = inputString.split(operator);
            num1 = parseFloat(calculation[0]);
            num2 = parseFloat(calculation[1]);
            resultValue = num1 * num2;
            break;
        case '/':
            calculation = inputString.split(operator);
            num1 = parseFloat(calculation[0]);
            num2 = parseFloat(calculation[1]);
            resultValue = num1 / num2;
            break;
    }
    document.querySelector('#resultFld').value = resultValue;
}

function clear_del() {
    inputString = '';
    displayValue = '';
    resultValue = '';
    operator = '';
    document.querySelector('#resultFld').value = '';
}