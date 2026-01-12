// Dates

let myDate = new Date(); // Current date and time
console.log(myDate); // Full date and time but looks meshyyyy

console.log(myDate.toString()); // Full date and time in string format
console.log(myDate.toDateString()); // Date in string format
console.log(myDate.toTimeString()); // Time in string format
console.log(myDate.toISOString()); // Date in ISO string format
console.log(myDate.toUTCString()); // Date in UTC string format
console.log(myDate.toLocaleString()); // Date and time in locale string format
console.log(myDate.toLocaleDateString()); // Date in locale string format
console.log(myDate.toLocaleTimeString()); // Time in locale string format   


// Specific date
let specificDate = new Date('2020-01-01T10:20:30Z');
console.log(specificDate.toString());


// Getters
console.log(specificDate.getFullYear()); // Get year
console.log(specificDate.getMonth()); // Get month (0-11)
console.log(specificDate.getDate()); // Get date (1-31)
console.log(specificDate.getDay()); // Get day of the week (0-6)
console.log(specificDate.getHours());   // Get hours (0-23)
console.log(specificDate.getMinutes()); // Get minutes (0-59)
console.log(specificDate.getSeconds()); // Get seconds (0-59)
console.log(specificDate.getMilliseconds()); // Get milliseconds (0-999)
console.log(specificDate.getTime()); // Get time in milliseconds since Jan 1, 1970  
console.log(specificDate.getTimezoneOffset()); // Get timezone offset in minutes


// Setters
specificDate.setFullYear(2021);
specificDate.setMonth(5); // June (0-11)
specificDate.setDate(15);
specificDate.setHours(12);
specificDate.setMinutes(45);
specificDate.setSeconds(30);
specificDate.setMilliseconds(500);
console.log(specificDate.toString());


// Time calculations
let startDate = new Date('2022-01-01T00:00:00Z');
let endDate = new Date('2022-12-31T23:59:59Z'); 
let timeDiff = endDate - startDate; // Time difference in milliseconds
console.log(`Time Difference in milliseconds: ${timeDiff}`);
let daysDiff = timeDiff / (1000 * 60 * 60 * 24); // Convert milliseconds to days
console.log(`Time Difference in days: ${daysDiff}`);
let hoursDiff = timeDiff / (1000 * 60 * 60); // Convert milliseconds to hours
console.log(`Time Difference in hours: ${hoursDiff}`);
let minutesDiff = timeDiff / (1000 * 60);
console.log(`Time Difference in minutes: ${minutesDiff}`); // Convert milliseconds to minutes
let secondsDiff = timeDiff / 1000; // Convert milliseconds to seconds
console.log(`Time Difference in seconds: ${secondsDiff}`);
console.log(`Time Difference in weeks: ${daysDiff/7}`); // Convert days to weeks


// Date Comparisons
let date1 = new Date('2022-06-01');
let date2 = new Date('2022-12-01');
console.log(date1 < date2); // true
console.log(date1 > date2); // false
console.log(date1 <= date2); // true
console.log(date1 >= date2); // false
console.log(date1 === date2); // false
console.log(date1 !== date2); // true   
console.log(date1.getTime() === date2.getTime()); // false

// Note: Direct comparison of Date objects using === or !== checks for reference equality, not value equality.
// To compare the actual date values, use getTime() method.


// Date Formatting
console.log(date1.toLocaleDateString('en-US')); // MM/DD/YYYY
console.log(date1.toLocaleDateString('en-GB')); // DD/MM/YYYY
console.log(date1.toLocaleDateString('de-DE')); // DD.MM.YYYY
console.log(date1.toLocaleTimeString('en-US')); // Time in AM/PM format
console.log(date1.toLocaleTimeString('de-DE')); // Time in 24-hour format
console.log(date1.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Full date with weekday


// Advanced: Date Arithmetic
let initialDate = new Date('2022-01-01');
initialDate.setDate(initialDate.getDate() + 10); // Add 10 days
console.log(`Date after adding 10 days: ${initialDate.toDateString()}`);
initialDate.setMonth(initialDate.getMonth() + 2); // Add 2 months
console.log(`Date after adding 2 months: ${initialDate.toDateString()}`);
initialDate.setFullYear(initialDate.getFullYear() + 1);
console.log(`Date after adding 1 year: ${initialDate.toDateString()}`); // Add 1 year


//Subtracting Dates
let subtractDate = new Date('2023-01-01');
subtractDate.setDate(subtractDate.getDate() - 15);  // Subtract 15 days
console.log(`Date after subtracting 15 days: ${subtractDate.toDateString()}`);
subtractDate.setMonth(subtractDate.getMonth() - 3); // Subtract 3 months
console.log(`Date after subtracting 3 months: ${subtractDate.toDateString()}`);
subtractDate.setFullYear(subtractDate.getFullYear() - 2);
console.log(`Date after subtracting 2 years: ${subtractDate.toDateString()}`); // Subtract 2 years

// Note: When adding or subtracting months or years, be cautious of month-end boundaries and leap years.


//Leap Year Check
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}   
console.log(`Is 2020 a leap year? ${isLeapYear(2020)}`); // true
console.log(`Is 2021 a leap year? ${isLeapYear(2021)}`); // false
console.log(`Is 2000 a leap year? ${isLeapYear(2000)}`); // true
console.log(`Is 1900 a leap year? ${isLeapYear(1900)}`); // false

// Note: A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400.

// End of Date and Time examples
