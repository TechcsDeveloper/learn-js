// Define a function SetUsername that takes a 'username' as an argument
function SetUsername(username) {
  // Simulate complex database operations (commented for now)
  // This function sets the 'username' property on the object it's called on
  this.username = username;
  // Log a message to indicate the function was called
  console.log("called");
}

// Define a function createUser that takes 'username', 'email', and 'password' as arguments
function createUser(username, email, password) {
  // Use the call() method to invoke SetUsername in the context of the current object ('this')
  // 'this' refers to the object being created by createUser
  SetUsername.call(this, username);
  
  // Assign the 'email' and 'password' arguments to the object
  this.email = email;
  this.password = password;
}

// Create a new object using the createUser function with the 'new' keyword
const chai = new createUser("chai", "chai@fb.com", "123");

// Log the created object to the console
console.log(chai);
