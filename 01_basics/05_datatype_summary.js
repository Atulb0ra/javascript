//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack(primitive)  and Heap(non - primitive)
let myName = "Atul"
let anotherName = myName
anotherName = "Bora"
console.log(myName)//Atul
console.log(anotherName)//Bora 
// we can see there is no change in myName since for primitive type only copy is passed here a copy of myName is passed to
// anotherName hence changing another name will not affect myName

let myObj1 = {
    Name : "Atul",
    age : 32
}
let myObj2 = myObj
myObj2.age = "18"
console.log(myObj1.age)//18
console.log(myObj2.age)//18
// this is due to both object refering to same object means when we assign myobj1 to myobj2 it pass a reference of myobj1 
// to myobj2 heance any change in myobj1 changes myobj2
