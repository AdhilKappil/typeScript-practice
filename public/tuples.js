"use strict";
// this will strictly follow the position of the type
const arr = ['adhil', 3];
// arr [0] = 5  not possible to do this
// not allow to add string in the position of boolean and more than 3 elements becuse declared 3 types
// const arr1 : [string,number,true] = ['adhil',3,'kappil'] 
// push and unshift valis no limi or type position issue
arr.push(10);
arr.unshift('laila');
console.log(arr);
