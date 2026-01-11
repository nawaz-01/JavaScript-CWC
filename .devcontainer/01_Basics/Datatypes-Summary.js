// Primitive

// 7 types:  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // null
let userEmail; // undefined
const firstName = "Nawaz"; // String

const id = Symbol('12345'); // Symbol
const anotherId = Symbol('12345'); // Symbol

console.log(id === anotherId); // false
// const bigNumber = 3456789012345678901234567890n; // BigInt

// Reference (Non-Primitive) types:  Object, Array, Function

const heros = ["Shaktiman", "Naagraj", "Doga"]; // Array

const myObj = {
    name: "Nawaz",
    age: 22,
}; // Object

const myFunction = function() {
    console.log("Hello World");
}

/* To know the type of variable we use typeof operator */

console.log(typeof bigNumber); // bigint
console.log(typeof myFunction); // function
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof score); // number
console.log(typeof firstName); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
