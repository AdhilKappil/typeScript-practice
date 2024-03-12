"use strict";
// generic we can work with multiple types
function getAge(age) {
    return age;
}
getAge('10');
getAge(10);
// if no extra property for admin only the same then we can do this
// type AdminDetails = UseDetails    
// interface AdminDetails extends UseDetails {}      // using interface 
const userDetails = {
    name: 'adhil',
    age: 24
};
const adminDetails = {
    name: 'laila',
    age: 60,
    role: 'admin'
};
function getDetails(details) {
    return details;
}
const userValue = getDetails(userDetails);
const adminValue = getDetails(adminDetails);
console.log(adminValue.role);
