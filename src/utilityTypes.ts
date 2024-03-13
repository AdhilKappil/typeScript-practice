import { StatusType } from "./nameTypes"


// read only property
type UserDetails1 = {
   readonly name: string,
    age : number
}


// all properties optional fieleds partial so all will be optional 
const userDetails1:Partial<UserDetails1> = {
    // name:'adhil',
    // age : 24
}


// rank is optional
type User = {
    id:number,
    rank? : number
    place : string
 }

//  userd here required so rank is now not oprional its required
 const user : Required <User> = {
    id : 123,
    rank : 1,
    place : 'wandoor'
 }


// pick is used pick spcific field we can choose single field no need to provide all here we select id and place
 const user1 : Pick <User, 'id' | 'place'> = {
    id : 123,
    place : 'Nilambur'
 }


 // omit is used to avoid specific fields we can avoid one or more fields
 const use2 : Omit <User, 'place'> = {
    id: 3,
    rank : 1
 }


// status type pending excludes means we cant use it 
 const status : Exclude<StatusType,'pending'> = ''

// key string and value any type (we can use value any type)
 type Food = Record<string, any>

 // we can aslo do this without using Record (index is key and any is value)
//  type Food = {
//     [index : string] : any
//  }

 const food:Food = {}


