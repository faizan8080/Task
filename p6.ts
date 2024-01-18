
function isString(variable: any): variable is string {
    return typeof variable === 'string';
  }
 
  function processString(input: any): void {
    if (isString(input)) {
 console.log(`Capitalized String: ${input.toUpperCase()}`);
    }else{
         console.log(`Input is not a string: ${input}`);
    }  
}

  const exampleString='faiz';
  const exampleNumber = 21;
  
  processString(exampleString); 
  processString(exampleNumber); 
  