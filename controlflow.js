
let day=5;
switch(day)
{
    case 1 :
        console.log("sunday")
            break;
    case 2 :
        console.log("monday")
            break;
    case 3 :
        console.log("tuesday")
            break;
    case 4 :
        console.log("wednesday")
            break;
    case 5 :
        console.log("thursday")
            break;
    case 6 :
        console.log("friday")
            break;
    case 7 :
        console.log("saturday")
            break;
    default:
        console.log("invalid!")
}
for(let i=0;i<5;i++){
    console.log(i)
}
let k=0;
while(k<7){
    console.log(k)
    k++;
}
let colours=["Red","blue","green"]
for(let i=0;i<colours.length;i++){
    console.log(colours[1])
}
for(colour of colours){
    console.log(colour)
}
let person={
    name:"mahathi",
    age:18,
    branch:"CSE"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}
for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }
    else if(i===2){
        break;
    }
    console.log(i)
}