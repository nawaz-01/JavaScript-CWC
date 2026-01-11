const score = 100;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); // Convert to string
console.log(balance.toFixed(2)); // Fixed to 2 decimal places

const otherNumber = 123.8456;
console.log(otherNumber.toPrecision(3)); // Precision of 3 digits

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // Locale string for India