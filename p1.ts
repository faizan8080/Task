function reverseArray<T>(array:T[]):T[] {

let reverseArr: T[] = [];

for (let i=array.length -1;i>=0;i--){

    reverseArr.push(array[i]);
}


return reverseArr;


}

let numbers: number[] = [1,2,3,4,5];

let reversedNumbers:number[] = reverseArray(numbers);
console.log(reversedNumbers);
let strings:string[] = ['faiz','khan'];

let reversedStrings:string[]=reverseArray(strings);


console.log(reversedStrings);