function validate(a, b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return true
    }
    return false
}

function add(a,b){
    if(validate(a,b)){
        return a + b;
    }
    return 'wrong type of input'
}

function subtract(a,b){
    if(validate(a,b)){
        return a - b;
    }
    return 'wrong type of input'
}

function multiply(a,b){
    if(validate(a,b)){
        return a * b;
    }
    return 'wrong type of input'
}

function divide(a,b){
    if(validate(a,b)){
        return a / b;
    }
    return 'wrong type of input'
}

const calc = {
    add,
    subtract,
    multiply,
    divide
}

export default calc