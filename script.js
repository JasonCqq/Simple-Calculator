const numButton = document.querySelectorAll(".numberButton");
const operatorButton = document.querySelectorAll(".normalOperator");
const equalButton = document.getElementById("equalOperator");
const clearButton = document.getElementById("clearOperator");
const mainDisplay = document.getElementById("calculatorDisplay");
mainDisplay.style.fontSize = "5vh";

const add = (...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul + argument;
    }, 0);
    mainDisplay.value = total;
}
const subtract = (a, ...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul - argument;
    }, a);
    mainDisplay.value = total;
}
const multiply = (...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul * argument;
    }, 1);
    mainDisplay.value = total;
}
const divide = (a, ...args) => {
    if (args === 0){
        mainDisplay.value = "ERROR";
    } else {
        total = args.reduce((accumul, argument) => {
            return accumul / argument;
        }, a);
        mainDisplay.value = total;
    }
}

const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "×":
            multiply(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
    }
}

const mainCalculatorFunction = () => {
    let operatorCount = 0; // to make sure we get a value2. 
    let currentOperator;
    let value1;
    let value2;

    for (const btns of numButton) {
        btns.addEventListener("click", () => {
            mainDisplay.value += btns.innerText;
        },);
    }

    for (const btns of operatorButton) {
        btns.addEventListener("click", () => {
            if (mainDisplay.value !== undefined && operatorCount !== 1){
                value1 = parseInt(mainDisplay.value);
                console.log(value1);
                currentOperator = btns.innerText;
                mainDisplay.value += currentOperator;
                operatorCount++;
            }
        },);
    }

    equalButton.addEventListener("click", () => {
        const tempArray = Array.from(String(mainDisplay.value), Number)
        value2 = tempArray.slice(String(value1).length + 1).join('');
        operate(currentOperator, value1, parseInt(value2));
    },)

    clearButton.addEventListener("click", () => {
        mainDisplay.value = '';
        value1 = '';
        value2 = '';
    });
}

mainCalculatorFunction();