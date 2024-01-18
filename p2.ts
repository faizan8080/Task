

function handleInput(input: string | number): number {

 if (typeof input === 'string') {
    return input.length;




 } else  {
    return input * input;
 }


}
 const resultString = handleInput("faizan");
 console.log(resultString);

 const resultNumber =  handleInput(808023)

 console.log(resultNumber)
