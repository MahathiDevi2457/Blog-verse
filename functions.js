function great(){
    console.log("welcome world")
}
great()

function add(x,y){
    return x+y;
}
let result=add(12,14)
console.log(result)

const mul=function(a,b){
    return a*b;
}
console.log(mul(5,3))
//arrow function
const sqr= (x)=>x*x;
console.log(sqr(5))
const sub=(x,y)=>{
    console.log(x,y);
    return x-y
}
console.log(sub(10,15))