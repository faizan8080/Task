function concatenateOrSum(arr) {
    if (arr.every(function (item) { return typeof item === 'string'; }))
        return arr.join('');
    else {
        var sum = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var num = arr_1[_i];
            sum += num;
        }
        return sum;
    }
    return "Invalid input";
}
var stringArrayResult = concatenateOrSum(["faizan", "khan"]);
console.log(stringArrayResult);
var numberArrayResult = concatenateOrSum([7, 5, 6, 4, 5]);
console.log(numberArrayResult);
