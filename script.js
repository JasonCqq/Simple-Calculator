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
    if (args == 0){
        mainDisplay.value = "ERROR";
    }

    total = args.reduce((accumul, argument) => {
        return accumul / argument;
    }, a);
    mainDisplay.value = total;
}

const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
    }
}

const mainDisplay = document.getElementById("calculatorDisplay");
mainDisplay.style.fontSize = "5vh";

const numButton = document.querySelectorAll(".numberButton");
const operatorButton = document.querySelectorAll(".normalOperator");
const equalsButton = document.getElementById("equalOperator");
const clearButton = document.getElementById("clearOperator");

let currentOperator;
let value1;
let value2;

const mainCalculatorFunction = () => {

    for (const btns of numButton) {
        btns.addEventListener("click", () => {
            mainDisplay.value += btns.innerText;
        }, );
    }

    for (const btns of operatorButton) {
        btns.addEventListener("click", () => {
            if (value1 === undefined) {
                value1 = parseInt(mainDisplay.value);
                mainDisplay.value = "";
                console.log(value1);
                currentOperator = btns.innerText;
            }
                
            if (value1 !== undefined && mainDisplay.value !== undefined) {
                value2 = parseInt(mainDisplay.value);
                console.log(value2);
            }
        }, {once:true});
    }

    equalsButton.addEventListener("click", () => {
        operate(currentOperator, value1, value2);
    },)

    clearButton.addEventListener("click", () => {
        mainDisplay.value = "";
        value1 = '';
        value2 = '';
    })
}

mainCalculatorFunction();