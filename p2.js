function handleInput(input) {
    if (typeof input === 'string') {
        return input.length;
    }
    else {
        return input * input;
    }
}
var resultString = handleInput("faizan");
console.log(resultString);
var resultNumber = handleInput(808023);
console.log(resultNumber);
