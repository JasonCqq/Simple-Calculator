const add = (...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul + argument;
    }, 0);
    console.log(total);
}

const subtract = (a, ...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul - argument;
    }, a);
    console.log(total);
}

const multiply = (...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul * argument;
    }, 1);
    console.log(total);
}


const divide = (a, ...args) => {
    total = args.reduce((accumul, argument) => {
        return accumul / argument;
    }, a);
    console.log(total);
}


subtract(2,3,5,2,1);
add(2,3,5,2,1);
multiply(2,3,5,2,1);
divide(2,3,5,2,1);