function concatenateOrSum(arr: (string | number)[]): string | number {



    if (arr.every((item) => typeof item === 'string')) 
 return arr.join('');
    



    else {
      let sum = 0;
      for (const num of arr) {
        sum += num as number;
      }
      
      return sum;
    }
  
    return "Invalid input";
  }
  
  const stringArrayResult = concatenateOrSum(["faizan", "khan"]);
  console.log(stringArrayResult);



  
  const numberArrayResult = concatenateOrSum([7, 5, 6, 4, 5]);
  console.log(numberArrayResult);