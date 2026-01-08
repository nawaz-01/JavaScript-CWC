let score = "nawaz"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1 , false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true , 0 => false
// "" => false , "nawaz" => true


let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


//*******************************OPERATIONS***************************//

let value = 3
let negValue = -value
//console.log(negValue);

console.log(2+2);// addition
console.log(2-2);// subtraction
console.log(2*2);// multiplication
console.log(2/2);// division
console.log(2%3);// remainder

let str1 = "Hello "
let str2 = "Nawaz"

let str3 = str1 + str2 // concatenation
console.log(str3);

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

console.log((3 + 4) * 5 % 3); // 2

console.log(true); // 1
console.log(false); // 0

console.log(+"");// 0

let num1, num2, num3 // multiple variable assignment

num1 = num2 = num3 = 2 + 2 // right to left assignment

console.log(num1, num2, num3);

let gameCounter = 100
++gameCounter;// pre-increment

console.log(gameCounter);