import { Details,userDetails } from "./type-interface";

// teturn type with parameters
function myltiply(num1:number, num2:number):number{
    return num1 * num2
}
myltiply(10,10)


// no return 
function print ():void{
    console.log('hello');
    
}
print()


// function for get name 
function getUserName(userDetails:Details){
    return userDetails.name
}
console.log(getUserName(userDetails));



// inline argument and type with destracture
function inlineObject({name, age}:{name:string, age:number}){
    return {name, age}
}

console.log(inlineObject({name:'adhil', age:24}));






