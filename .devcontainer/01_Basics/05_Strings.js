const name = "Nawaz";
const repoCount = 50;

// Concatenation using +
console.log("Hello " + name + ", you have " + repoCount + " repositories on your profile.");

console.log(`Hello my name is ${name} and I have ${repoCount} repositories on my profile.`);

const gameName = new String('nawaz');
console.log(gameName);

console.log(gameName[0]); // Accessing first character
console.log(gameName.__proto__); // Accessing prototype

console.log(gameName.length); // Length of the string
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.charAt(2)); // Character at index 2
console.log(gameName.indexOf('w')); // Index of character 'w'

const newString = gameName.substring(0, 4); // Substring from index 0 to 4
console.log(newString);

const anotherString = gameName.slice(-5, 2); // Slice from -5 to 2
console.log(anotherString);

const newStringOne = "   Nawaz   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Trim whitespace

const url = "https://nawaz.com/nawaz%20asif";
console.log(url.replace("%20", "-")); // Replace %20 with -

console.log(url.includes('sundar')); // Check if 'sundar' is in the URL

console.log(gameName.split('-')); // Split the gameName by '-'