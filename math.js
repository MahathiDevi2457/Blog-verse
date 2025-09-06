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
    console.log(sub(x,y));
    return x-y
}
