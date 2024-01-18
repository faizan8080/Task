interface person{

name: string;
age:number;

}

interface jobtitle{
 
id:number;
salary:number,
jobtitle:string,


}

type personJobtitle = person & jobtitle;
const s1 : personJobtitle= {
name:"faizan",
age:21,
id:8080,
salary:25000,
jobtitle: "back-end enjineer"
};

console.log(s1)