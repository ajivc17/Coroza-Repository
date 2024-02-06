let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    document.getElementById('display').value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += operator;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('display').value = currentExpression;
}

function calculate() {
    try {
        const result = eval(currentExpression);
        document.getElementById('display').value = result;
        currentExpression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentExpression = '';
    }
}
