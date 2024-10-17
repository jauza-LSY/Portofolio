
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText;

    expression = expression.replace(/\^/g, '**');

    try {
        const result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
} 