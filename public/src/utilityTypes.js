"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// all properties optional fieleds partial so all will be optional 
const userDetails1 = {
// name:'adhil',
// age : 24
};
//  userd here required so rank is now not oprional its required
const user = {
    id: 123,
    rank: 1,
    place: 'wandoor'
};
// pick is used pick spcific field we can choose single field no need to provide all here we select id and place
const user1 = {
    id: 123,
    place: 'Nilambur'
};
// omit is used to avoid specific fields we can avoid one or more fields
const use2 = {
    id: 3,
    rank: 1
};
// status type pending excludes means we cant use it 
const status = '';
// we can aslo do this without using Record (index is key and any is value)
//  type Food = {
//     [index : string] : any
//  }
const food = {};
