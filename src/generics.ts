

// generic we can work with multiple types
function getAge<T>(age:T):T{
    return age
}

getAge<string>('10')
getAge<number>(10)


type UserDetails = {
    name:string;
    age:number
}

// extending name and age from userDetails || merging now admin have name, age, role
type AdminDetails = UserDetails & {
    role : string
}

// if no extra property for admin only the same then we can do this
// type AdminDetails = UseDetails    
// interface AdminDetails extends UseDetails {}      // using interface 

const userDetails = {
    name : 'adhil',
    age : 24
}

const adminDetails = {
    name : 'laila',
    age : 60,
    role : 'admin'
}

function getDetails <T>(details:T):T{
    return details
}

const userValue = getDetails(userDetails)
const adminValue = getDetails(adminDetails)

console.log(adminValue.role)


