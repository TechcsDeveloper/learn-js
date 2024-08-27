// Declaring a constant score with the value 400
const score = 400
// Output the value of score to the console (commented out)
// console.log(score);

// Creating a new Number object with the value 100
const balance = new Number(100)
// Output the balance object to the console (commented out)
console.log(balance);

// Convert the balance to a string and get the length of the string (commented out)
console.log(balance.toString().length);

// Format the balance to one decimal place (commented out)
console.log(balance.toFixed(1));

const otherNumber = 123.8966

// Format the otherNumber to a precision of 4 significant digits (commented out)
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// Format the hundreds value with Indian locale formatting (commented out)
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Output the Math object, which contains various mathematical functions (commented out)
console.log(Math);

// Get the absolute value of -4 (commented out)
console.log(Math.abs(-4));

// Round 4.6 to the nearest integer (commented out)
console.log(Math.round(4.6));

// Round 4.2 up to the next whole number (commented out)
console.log(Math.ceil(4.2));

// Round 4.9 down to the previous whole number (commented out)
console.log(Math.floor(4.9));

// Find the minimum value among 4, 3, 6, 8 (commented out)
console.log(Math.min(4, 3, 6, 8));

// Find the maximum value among 4, 3, 6, 8 (commented out)
console.log(Math.max(4, 3, 6, 8));

// Generate a random number between 0 and 1
console.log(Math.random());

// Generate a random number between 1 and 10
console.log((Math.random() * 10) + 1);

// Generate a random whole number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

// Generate a random whole number between min (10) and max (20) inclusive
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
