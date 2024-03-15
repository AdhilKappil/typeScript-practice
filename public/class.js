"use strict";
class User {
    // we can use like this and abouve code 
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // email : string
        // name : string
        // constructor(email:string, name:string){
        //     this.email = email
        //     this.name = name
        // }
        this.gender = 'male';
        this.email = email;
        this.name = name;
    }
    get display() {
        return (`my name is ${this.name} and my email is ${this.email}`);
    }
    set userName(name) {
        this.name = name;
    }
}
class subUser extends User {
    chageName() {
        this.name = 'laila';
    }
}
const user = new subUser('adhil@gmail.com', 'adhil');
console.log(user.display);
user.userName = 'Adhil Ali';
user.chageName();
console.log(user.display);
