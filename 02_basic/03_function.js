// Function definition to print a name
function sayMyname() {
  console.log("Babulal"); // Logs the name "Babulal" to the console
}

// Function call to execute sayMyname
sayMyname(); // This will print "Babulal" to the console

// Function definition to add two numbers
function addTowNumbers(num1, num2) {
  let num3 = num1 + num2; // Adds num1 and num2, stores the result in num3
  console.log(num3); // Logs the result to the console
  return num3; // Returns the result
}

// Function call to execute addTowNumbers with arguments 10 and 30
addTowNumbers(10, 30); // This will log 40 and return 40

// Function definition to add two numbers and return the result
function addNumbers(num3, num4) {
  return num3 + num4; // Returns the sum of num3 and num4
}

// Function call to execute addNumbers with arguments 58 and 95
addNumbers(58, 95); // This will return 153

// Function definition to handle a variable number of arguments
function calculateCartPrice(...num1) {
  return num1; // Returns the array of numbers passed as arguments
}

// Function call to execute calculateCartPrice with multiple arguments
console.log(calculateCartPrice(200, 400, 500, 2000)); // Logs [200, 400, 500, 2000] to the console

// Object definition to store user information
let userInfo = {
  firstName: "Babulal", // First name property
  lastName: "Mandal", // Last name property
  pinCode: 732205 // Pin code property
}

// Function definition to handle an object and log its properties
function handleObject(anyObject) {
  console.log(`First Name is ${anyObject.firstName} Last Name is ${anyObject.lastName} Pin Code is ${anyObject.pinCode}`);
  // Logs the first name, last name, and pin code from the object to the console
}

// Function call to execute handleObject with userInfo as argument
handleObject(userInfo); // This will log "First Name is Babulal Last Name is Mandal Pin Code is 732205" to the console

// Array definition to store numbers
let handleArray = [200, 100, 300];

// Function definition to handle an array and return the first element
function handleAnyArray(anyArray) {
  return anyArray[0]; // Returns the first element of the array
}

// Function call to execute handleAnyArray with handleArray as argument
handleAnyArray(handleArray); // This will return 200
