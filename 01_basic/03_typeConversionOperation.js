let score = "33";  // Declares a variable `score` and assigns it the string value "33".

console.log(typeof score); // Logs the type of the variable `score`, which is "string".
console.log(typeof(score)); // This is functionally the same as the previous line; it logs the type of `score`, which is still "string".

let valueInNumber = Number(score); // Converts the string `score` to a number using the `Number()` function and assigns it to `valueInNumber`.
console.log(typeof valueInNumber); // Logs the type of `valueInNumber`, which is now "number".

console.log(typeof score); // Logs the type of `score` again, which is still "string". The original `score` variable hasn't changed.
valueInNumber = Number(score); // This line repeats the conversion of `score` to a number, assigning it to `valueInNumber` again.
console.log(typeof score); // Logs the type of `score` again, which remains "string".
console.log(score); // Logs the value of `score`, which is still "33" as a string.


// Declare a variable named 'result'
let result;

// Numeric string used with + gives a string type result
// The number 2 is implicitly converted to a string and concatenated with "3"
result = "3" + 2; 
console.log(result, "-", typeof(result)); // Output: "32" - string

// The boolean value true is implicitly converted to a string "true" and concatenated with "3"
result = "3" + true; 
console.log(result, "-", typeof(result)); // Output: "3true" - string

// The value null is implicitly converted to the string "null" and concatenated with "3"
result = "3" + null; 
console.log(result, "-", typeof(result)); // Output: "3null" - string



// Re-declare the variable 'result1'

let result1;
result1 = "3" + 2;
// Convert string to number using Number() function
result1 = Number("5");
console.log(result1, "-", typeof(result1)); // Output: 5 - number

// Convert boolean to string using String() function
result1 = String(true);
console.log(result, "-", typeof(result1)); // Output: "true" - string

// Convert number to boolean using Boolean() function
// 0 is falsy in JavaScript, so this will convert to false
result1 = Boolean(0);
console.log(result1, "-", typeof(result1)); // Output: false - boolean

