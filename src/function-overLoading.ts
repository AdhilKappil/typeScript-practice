// Normal case
// function add(num1:number|string, num2:number|string):number|string{
//     if(typeof num1 === 'string' || typeof num2 === 'string'){
//         return num1 +''+ num2
//     }
//     return num1 + num2
// }

// add(10,20)
// add('10', '20')


// function overloading
function add(num1:number, num2:number):number;
function add(num1:string, num2:string):string;
function add(num1:any, num2:any):any{
    return num1 * num2     
}
add(10,20)
add('10','20')

