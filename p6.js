function isString(variable) {
    return typeof variable === 'string';
}
function processString(input) {
    if (isString(input)) {
        console.log("Capitalized String: ".concat(input.toUpperCase()));
    }
    else {
        console.log("Input is not a string: ".concat(input));
    }
}
var exampleString = 'faiz';
var exampleNumber = 21;
processString(exampleString);
processString(exampleNumber);
