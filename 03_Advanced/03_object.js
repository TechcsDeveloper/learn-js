// Define a function named multipleBy5 that takes a single argument 'num'
function multipleBy5(num) {
  // Return the result of 'num' multiplied by 5
  return num * 5;
}

// Add a custom property 'power' to the function multipleBy5 and set its value to 2
multipleBy5.power = 2;

// Call the multipleBy5 function with an argument of 5 and log the result
console.log(multipleBy5(5)); // Output: 25

// Log the value of the custom property 'power' that was added to the function
console.log(multipleBy5.power); // Output: 2

// Log the prototype property of the multipleBy5 function
console.log(multipleBy5.prototype); // Output: {constructor: ƒ} (empty object by default for functions)

// Define a constructor function named createUser that takes two arguments 'username' and 'score'
function createUser(username, score) {
  // Assign the 'username' argument to the 'username' property of the object being created
  this.username = username;
  // Assign the 'score' argument to the 'score' property of the object being created
  this.score = score;
}

// Add a method named 'increment' to the createUser function's prototype
createUser.prototype.increment = function() {
  // Increment the 'score' property of the object by 1
  this.score++;
};

// Add a method named 'printMe' to the createUser function's prototype
createUser.prototype.printMe = function() {
  // Log the score of the object with a message
  console.log(`Score is ${this.score}`);
};

// Create a new instance of createUser with the username "chai" and score 25
const chai = new createUser("chai", 25);

// Attempt to call the createUser function without the 'new' keyword
// This will create an undefined object, as 'this' would point to the global object (in non-strict mode)
const tea = createUser("tea", 250); // Incorrect way to instantiate an object

// Call the printMe method on the chai object
chai.printMe(); // Output: Score is 25

/*
Here's what happens behind the scenes when the new keyword is used:

1. A new object is created:
 - The new keyword initiates the creation of a new JavaScript object, which will be returned from the function.

2. A prototype is linked:
 - The newly created object gets linked to the prototype property of the constructor function. This gives the object access to methods and properties defined on the prototype.

3. The constructor is called:
 - The constructor function is called with the specified arguments, and 'this' is bound to the newly created object. The constructor function initializes properties on 'this'.

4. The new object is returned:
 - If the constructor function doesn't return an object explicitly, the new object created in step 1 is returned by default.

*/

// chai is a correctly created object using 'new', while 'tea' is just undefined as 'createUser' was called without 'new'.
