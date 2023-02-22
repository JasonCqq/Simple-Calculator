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
    mainDisplay.value = total.toFixed(2);
}
const subtract = (a, ...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul - argument;
    }, a);
    mainDisplay.value = total.toFixed(2);
}
const multiply = (...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul * argument;
    }, 1);
    mainDisplay.value = total.toFixed(2);
}
const divide = (a, ...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul / argument;
    }, a);

    if(total === Infinity){
        mainDisplay.value = "CAN'T DO IT!!!";
    }
    else {
        mainDisplay.value = total.toFixed(2);
    }
 
}
const exponent = (a, b) => {
    mainDisplay.value = (a ** b).toFixed(2);
}
const modulo = (a, b) => {
    mainDisplay.value = (a % b).toFixed(2);
}
let solutionCounter = 0; // to let operator buttons work again after we give solution
const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            add(a, b);
            solutionCounter++;
            break;
        case "-":
            subtract(a, b);
            solutionCounter++;
            break;
        case "×":
            multiply(a, b);
            solutionCounter++;
            break;
        case "÷":
            divide(a, b);
            solutionCounter++;
            break;
        case "^":
            exponent(a, b);
            solutionCounter++;
            break;
        case "%":
            modulo(a, b);
            solutionCounter++;
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
            
            if (solutionCounter === 1) {
                operatorCount--;
                solutionCounter--;
            }

            if (mainDisplay.value !== undefined && operatorCount !== 1){
                value1 = parseFloat(mainDisplay.value);
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
        operate(currentOperator, value1, parseFloat(value2));
    },)

    clearButton.addEventListener("click", () => {
        mainDisplay.value = '';
        value1 = '';
        value2 = '';
    });
}

mainCalculatorFunction();