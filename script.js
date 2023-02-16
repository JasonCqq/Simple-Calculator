const add = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log(sum);
};

const subtract = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum -= args[i];
    }
    console.log(sum);
};

const multiply = (...args) => {
    let sum = 1;
    for (let i = 0; i < args.length; i++){
        sum *= args[i];
    }
    console.log(sum);
};

const divide = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum /= args[i];
    }
    console.log(sum);
};

function operate(operator, num1, num2) {
    let result;
    if (operator == "+"){
        result = add(num1, num2);
    } else if (operator == "-"){
        result = subtract(num1, num2);
    } else if (operator == "*"){
        result = multiply(num1, num2);
    } else if (operator == "/"){
        result = divide(num1, num2);
    }
    return result;
}
