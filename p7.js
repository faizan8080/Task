function isString(variable) {
    return typeof variable === 'string';
}
function processString(input) {
    if (isString(input)) {
        return input.toUpperCase();
    }
    else {
        console.log("input is not a string input");
    }
}
var strR = processString("faizan");
console.log(strR);
var nonStrResult = processString(faiz);
