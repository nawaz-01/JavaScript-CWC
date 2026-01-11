// const score = 100;

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); // Convert to string
// console.log(balance.toFixed(2)); // Fixed to 2 decimal places

// const otherNumber = 123.8456;
// console.log(otherNumber.toPrecision(3)); // Precision of 3 digits

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Locale string for India


// //++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++//

// console.log(Math); // Math object
// console.log(Math.abs(-4)); // Absolute value
// console.log(Math.round(4.6)); // Round to nearest integer
// console.log(Math.ceil(4.2)); // Round up
// console.log(Math.floor(4.8)); // Round down
// console.log(Math.min(0, 150, 30, 20, -8, -200)); // Minimum value
// console.log(Math.max(0, 150, 30, 20, -8, -200)); // Maximum value

console.log(Math.random()); // Random number between 0 and 1
console.log((Math.random()*10) + 1); // Random number between 1 and 10
console.log(Math.floor((Math.random()*10) + 1)); // Random integer between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min and max (inclusive)   