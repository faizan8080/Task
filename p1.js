function reverseArray(array) {
    var reverseArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
var strings = ['faiz', 'khan'];
var reversedStrings = reverseArray(strings);
console.log(reversedStrings);
