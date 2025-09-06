//arithmetic
let x=10,y=2;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)
//assignment
let z=5;
z+=2;
console.log(z)
z-=2;
console.log(z)
z*=2;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)
//relational
let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>=b)
console.log(a<=b)
console.log(a>b)
console.log(a<b)
//logical(||,&&,!)
age=25;
console.log(age>=20 || age<=40)
console.log(age>=20 && age<=40)
console.log(!(age>18))
//string
let firstName="mahathi"
let lastName="devi"
let fullName=firstName+" "+lastName;
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName},welcome to this club`;
console.log(correctName)
//ternary(?,:)
let myAge=19;
if(myAge>=18){
    console.log("eligible for voting")
}
else{
     console.log("not eligible for voting")
}
let result=myAge>=18? "eligible for voting" : "not eligible for voting"
console.log(result)
//increment&decrement
let count=5;
console.log(count++)
console.log(count)
console.log(++count)
console.log(count--)
console.log(count)
console.log(--count)
//typeof
console.log(typeof 18)