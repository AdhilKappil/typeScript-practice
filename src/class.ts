
class User {

    // email : string
    // name : string
    // constructor(email:string, name:string){
    //     this.email = email
    //     this.name = name
    // }

    protected gender:string = 'male'

    // we can use like this and abouve code 
    constructor(private email:string, public name:string){
        this.email = email
        this.name = name
    }

    get display(){
        return (`my name is ${this.name} and my email is ${this.email}`);  
    }

    set userName(name:string){
        this.name = name
    }
}

class subUser extends User {
   
    chageName(){
        this.name = 'laila'
    }
}

const user = new subUser('adhil@gmail.com', 'adhil')
console.log(user.display);
user.userName = 'Adhil Ali'
user.chageName()
console.log(user.display);

