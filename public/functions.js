"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_interface_1 = require("./type-interface");
// teturn type with parameters
function myltiply(num1, num2) {
    return num1 * num2;
}
myltiply(10, 10);
// no return 
function print() {
    console.log('hello');
}
print();
// function for get name 
function getUserName(userDetails) {
    return userDetails.name;
}
console.log(getUserName(type_interface_1.userDetails));
// inline argument and type with destracture
function inlineObject({ name, age }) {
    return { name, age };
}
console.log(inlineObject({ name: 'adhil', age: 24 }));
