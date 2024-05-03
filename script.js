// Function to clear the result 
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Function to handle number and operator clicks 
function handleClick(value) {
    console.log('enna ithu', value);
    document.getElementById('result').value += value;
}

// Function to perform calculation 
function calculate() {
    try {
        const expression = document.getElementById('result').value;
        console.log('calculate', expression);
        const result = eval(expression);
        console.log('result', result);
        document.getElementById('result').value = result;
    }
    catch (error) {
        alert('Invalid expression');
    }
}
// Add event listeners for number buttons 
const numberButtons = document.querySelectorAll('.number');
console.log('typing number', numberButtons);
numberButtons.forEach(button => {
    console.log('button', button);
    button.addEventListener('click', () => {
        const value = button.textContent; document.getElementById('result').value += value;
    });
});
// Add event listener for operator buttons 
const operatorButtons = document.querySelectorAll('.operator');
console.log('operatorButtons', operatorButtons);
operatorButtons.forEach(button => {
    console.log('operator', button);
    button.addEventListener('click', () => {
        const value = button.textContent;
        console.log('value1', value);
        document.getElementById('result').value += value;
    });
});
// Alert warning for non-number keys 
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!/\d/.test(key) && key !== '+' && key !== '-' && key !== '*' && key !== '/' && key !== '%') {
        alert('Only numbers are allowed');
    }
});