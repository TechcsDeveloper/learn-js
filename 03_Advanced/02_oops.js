// Define an object called 'user' with three properties and one method.
const user = {
  // 'username' is a property that stores the name of the user.
  username: "hitesh",

  // 'loginCount' is a property that tracks the number of times the user has logged in.
  loginCount: 8,

  // 'signedIn' is a boolean property indicating whether the user is currently signed in.
  signedIn: true,

  // 'getUserDetails' is a method of the 'user' object.
  getUserDetails: function() {
      // This line, when uncommented, would print a message to the console
      // indicating that user details were retrieved from the database.
      // console.log("Got user details from database");

      // This line, when uncommented, would print the username property of the 'user' object.
      // console.log(`Username: ${this.username}`);

      // This line prints the entire 'user' object to the console.
      // The 'this' keyword refers to the current object (in this case, 'user').
      console.log(this);
  }
}

// These lines are examples of how you might access the properties or methods of the 'user' object.
 console.log(user.username)          // Would print "hitesh" to the console.
 console.log(user.getUserDetails()); // Would execute the 'getUserDetails' method and print the entire 'user' object.
 console.log(this);                  // In a global context, this would refer to the global object (e.g., 'window' in a browser).

// Define a constructor function 'User' that creates new user objects.
function User(username, loginCount, isLoggedIn) {
  // The 'this' keyword refers to the new object being created.
  // Set the 'username' property of the new object to the value passed to the constructor.
  this.username = username;

  // Set the 'loginCount' property of the new object to the value passed to the constructor.
  this.loginCount = loginCount;

  // Set the 'isLoggedIn' property of the new object to the value passed to the constructor.
  this.isLoggedIn = isLoggedIn;

  // Define a method 'greeting' for the new object, which prints a welcome message.
  this.greeting = function() {
      // Print a welcome message that includes the user's username.
      console.log(`Welcome ${this.username}`);
  }

  // The 'return this' statement is implicit in constructor functions, so it is not strictly necessary.
  // However, explicitly returning 'this' ensures that the new object is returned.
  return this;
}

// Create a new user object called 'userOne' using the 'User' constructor.
const userOne = new User("hitesh", 12, true);

// Create a second user object called 'userTwo' using the 'User' constructor.
const userTwo = new User("ChaiAurCode", 11, false);

// The 'constructor' property of an object refers to the function that created the instance's prototype.
// In this case, it will point to the 'User' constructor function.
console.log(userOne.constructor);  // Prints the 'User' function to the console.

// console.log(userTwo); // This would print the 'userTwo' object to the console, showing all its properties and methods.
