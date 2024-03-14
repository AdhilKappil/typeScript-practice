"use strict";
// Normal case
// function add(num1:number|string, num2:number|string):number|string{
//     if(typeof num1 === 'string' || typeof num2 === 'string'){
//         return num1 +''+ num2
//     }
//     return num1 + num2
// }
function add(num1, num2) {
    return num1 * num2;
}
add(10, 20);
add('10', '20');
