var display = document.getElementsByClassName('display')[0];
var calculating = 0;
var entry1 = 0;
var entry2 = 0;
var returned = 0;
var operation = '';
var isFloat = false;

function clearDisplay() {
    display.textContent = '0';
    calculating = 0;
    entry1 = 0;
    entry2 = 0;
    returned = 0;
    operation = '';
    isFloat = false;
}

function inputNum(num) {
    if (calculating === 0) {
        calculating = 1;
        display.textContent = '';
        display.textContent += num;
    } else {
        display.textContent += num;
        calculating = 1;
    }
}

function inputDecimal() {
    if (isFloat) {
        return;
    }

    if (calculating === 0) {
        calculating = 1;
        display.textContent = '';
        display.textContent += '.';
        isFloat = true;
    } else {
        display.textContent += '.';
        calculating = 1;
        isFloat = true;
    }
}

function setOperation(op) {

    if (calculating === 0) {
        return;
    }

    entry1 = Number(display.textContent);

    switch (op) {
        case '/':
            operation = '/';
            break;
        case '+':
            operation = '+';
            break;
        case '-':
            operation = '-';
            break;
        case '*':
            operation = '*';
            break;
    }

    display.textContent = '0';
    calculating = 0;
    isFloat = false;

    console.log(entry1)
}

function answer() {
    if (calculating === 0) {
        return;
    }

    entry2 = Number(display.textContent);

    switch (operation) {
        case '/':
            if (entry2 === 0) {
                alert('Can not divide by 0');
                clearDisplay();
                break;
            } else {
                returned = (entry1 / entry2);
                calculating = 0;
                display.textContent = returned;
                entry1 = 0;
                entry2 = 0;
                returned = 0;
                break;
            }
        case '*':
            returned = (entry1 * entry2);
            calculating = 0;
            display.textContent = returned;
            entry1 = 0;
            entry2 = 0;
            returned = 0;
            break;
        case '+':
            returned = (entry1 + entry2);
            calculating = 0;
            display.textContent = returned;
            entry1 = 0;
            entry2 = 0;
            returned = 0;
            break;
        case '-':
            returned = (entry1 - entry2);
            calculating = 0;
            display.textContent = returned;
            entry1 = 0;
            entry2 = 0;
            returned = 0;
            break;
    }
}