//primitive


// 7 types :string , number ,boolearn, null ,undefined, symbol,bigint

const score = 100
const scorevalue = 100.4

const islogged = false 
const temp = null 
let useremail;
 
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

const bignumber  = 125475482481152n


//reference (non primitive)

//array objects, functions


const heros = ["vanshika" ,  "shivani" , "pari"]

let myobj = {
    name : "vanshika",
    age : 25

}
 let myfunc = function(){
console.log("hello world");
  
 }
  //findout datatypes

  console.log(typeof id)