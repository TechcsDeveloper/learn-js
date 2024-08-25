// Declare variables num1, num2, and rolle
let num1 = 10;
let num2 = 20;
let rolle = "02";

// Arithmetic operations

// Addition: Adds num1 and num2
console.log(num1 + num2); // Output: 30

// Subtraction: Subtracts num1 from num2
console.log(num2 - num1); // Output: 10

// Multiplication: Multiplies num1 and num2
console.log(num1 * num2); // Output: 200

// Exponentiation: num1 raised to the power of num2
console.log(num1 ** num2); // Output: 100000000000000000000

// Division: Divides num2 by num1
console.log(num2 / num1); // Output: 2

// Modulus: Remainder of num2 divided by num1
console.log(num2 % num1); // Output: 0

// Assignment and comparison operations

// Assignment: Assigns the value of num2 to num1
console.log(num1 = num2); // Output: 20 (num1 is now 20)

// Equality: Compares if num1 and num2 have the same value
console.log(num1 == num2); // Output: true (both are now 20)

// Greater than: Checks if num1 is greater than num2
console.log(num1 > num2); // Output: false (20 is not greater than 20)

// Less than: Checks if num1 is less than num2
console.log(num1 < num2); // Output: false (20 is not less than 20)

// Greater than or equal to: Checks if num1 is greater than or equal to num2
console.log(num1 >= num2); // Output: true (20 is equal to 20)

// Less than or equal to: Checks if num1 is less than or equal to num2
console.log(num1 <= num2); // Output: true (20 is equal to 20)

// Loose equality: Checks if rolle (string "02") is equal to num1 (number 20) after type conversion
console.log(rolle == num1); // Output: false (string "02" is not equal to number 20)

// Strict equality: Checks if rolle (string "02") is strictly equal to num1 (number 20), no type conversion
console.log(rolle === num1); // Output: false (different types: string vs number)

// Comparison with null: Checks if null is greater than num1 (number 20)
console.log(null > num1); // Output: false (null is not greater than any number)

// Loose equality with undefined: Checks if undefined is equal to num1 (number 20) after type conversion
console.log(undefined == num1); // Output: false (undefined is not equal to any number)
