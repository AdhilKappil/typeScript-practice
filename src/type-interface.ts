
export type Details = {
    name : String;
    age : number;
    salary:  number | string ;
    getName?:()=>void // void means no return 
}

 interface Details1  {
    name : String;
    age : number;
    salary:  number | string ;
    getName:()=>void // void means no return 
}

export const userDetails:Details = {
    name: 'adhil',
    age:24,
    salary:50000

}