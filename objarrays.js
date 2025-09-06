//array methods
let person={
    name:"mahathi",
    age:18,
    branch:"CSE"
}
console.log(person.name)
console.log(person["branch"])
const {name,age} =person //destructuring assignment***
console.log(name)
console.log(age)

let fruits=["orange","apple","mango"]
console.log(fruits[2])

let numbers=[1,2,3,4,5]
//dot map method***
let sqrs=numbers.map((num)=>num*num)//update
console.log(sqrs)

let even=numbers.filter((num)=>num%2==0)//filter
console.log(even)

let sum=numbers.reduce((present,num)=>present+num)//reduce
console.log(sum)

//task
let frnds= [{
    name : "meghana",
    sgpa: 7.8
    }, {
    name : "drakshayani",
    sgpa : 8.4
    }, {
    name: "kavya",
    sgpa: 8.1
    }]
let max=0;
let topper
for(let top of frnds){
if(top.sgpa>max){
    max=top.sgpa;
    topper=top.name
}
}
console.log(`topper is ${topper} and he got ${max}`)


