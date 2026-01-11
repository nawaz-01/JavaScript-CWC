// Primitive

// 7 types:  String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100; // Number
// const scoreValue = 100.3; // Number

// const isLoggedIn = false; // Boolean
// const outsideTemp = null; // null
// let userEmail; // undefined
// const firstName = "Nawaz"; // String

// const id = Symbol('12345'); // Symbol
// const anotherId = Symbol('12345'); // Symbol

// console.log(id === anotherId); // false
// const bigNumber = 3456789012345678901234567890n; // BigInt

// Reference (Non-Primitive) types:  Object, Array, Function

// const heros = ["Shaktiman", "Naagraj", "Doga"]; // Array

// const myObj = {
//     name: "Nawaz",
//     age: 22,
// }; // Object

// const myFunction = function() {
//     console.log("Hello World");
// }

/* To know the type of variable we use typeof operator */

// console.log(typeof bigNumber); // bigint
// console.log(typeof myFunction); // function
// console.log(typeof heros); // object
// console.log(typeof myObj); // object
// console.log(typeof score); // number
// console.log(typeof firstName); // string
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof outsideTemp); // object
// console.log(typeof userEmail); // undefined
// console.log(typeof id); // symbol
// console.log(typeof anotherId); // symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory vs Heap Memory

// Primitive data types are stored in Stack Memory
// Reference data types are stored in Heap Memory
// Stack memory is faster than Heap memory
// Primitive data types are faster to access than Reference data types

let myLinkdinId = "https://www.linkedin.com/in/asif-nawaz0143"; // stored in Stack Memory
let anotherId = myLinkdinId // stored in Stack Memory
anotherId = "_nwz_01"; // stored in Stack Memory

console.log(anotherId); // https://www.linkedin.com/in/asif-nawaz0143
console.log(myLinkdinId); // _nwz_01

let userOne = {
    email: "nawaz@gmail.com",
    upi: "nawaz@ybl"
}

let userTwo = userOne; // both userOne and userTwo are stored in Stack Memory but the object is stored in Heap Memory

userTwo.email = "asif@gmail.com"; // updating the object in Heap Memory

console.log(userTwo.email); //
console.log(userOne.email); //

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

