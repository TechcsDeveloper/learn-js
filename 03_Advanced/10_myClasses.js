class User {
  // The constructor method initializes the object with the given parameters
  constructor(username, email, password) {
      this.username = username;  // Assigns the username to the instance
      this.email = email;        // Assigns the email to the instance
      this.password = password;  // Assigns the password to the instance
  }

  // Method to "encrypt" the password (simple string concatenation in this case)
  encryptPassword() {
      return `${this.password}abc`;  // Appends 'abc' to the password and returns it
  }

  // Method to change the username to uppercase
  changeUsername() {
      return `${this.username.toUpperCase()}`;  // Converts username to uppercase and returns it
  }
}

// Create a new instance of the User class with the name 'chai'
const chai = new User("chai", "chai@gmail.com", "123");

// Call the encryptPassword method and log the result
console.log(chai.encryptPassword());  // Output: "123abc"

// Call the changeUsername method and log the result
console.log(chai.changeUsername());   // Output: "CHAI"

// Define the User constructor function to initialize properties
function User(username, email, password) {
  this.username = username;  // Assigns the username to the instance
  this.email = email;        // Assigns the email to the instance
  this.password = password;  // Assigns the password to the instance
}

// Define the encryptPassword method on the User prototype
User.prototype.encryptPassword = function() {
  return `${this.password}abc`;  // Appends 'abc' to the password and returns it
}

// Define the changeUsername method on the User prototype
User.prototype.changeUsername = function() {
  return `${this.username.toUpperCase()}`;  // Converts username to uppercase and returns it
}

// Create a new instance of the User function with the name 'tea'
const tea = new User("tea", "tea@gmail.com", "123");

// Call the encryptPassword method and log the result
console.log(tea.encryptPassword());  // Output: "123abc"

// Call the changeUsername method and log the result
console.log(tea.changeUsername());   // Output: "TEA"
