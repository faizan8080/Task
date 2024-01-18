function isString(variable:any):variable is string{

return typeof variable === 'string';

}

function processString(input:any):string|void{

    if(isString(input)){



        return input.toUpperCase();
    }else{
        console.log("input is not a string input");
    }

}

const strR = processString("faizan");
console.log(strR);
const nonStrResult = processString(faiz);
