function User(email, password) {
  // Assign the email and password to private properties
  this._email = email;
  this._password = password;

  // Define the 'email' property with a getter and setter
  Object.defineProperty(this, 'email', {
      get: function() {
          // The getter returns the email in uppercase
          return this._email.toUpperCase();
      },
      set: function(value) {
          // The setter allows the email to be updated
          this._email = value;
      }
  });

  // Define the 'password' property with a getter and setter
  Object.defineProperty(this, 'password', {
      get: function() {
          // The getter returns the password in uppercase
          return this._password.toUpperCase();
      },
      set: function(value) {
          // The setter allows the password to be updated
          this._password = value;
      }
  });
}

// Create a new instance of User
const chai = new User("chai@chai.com", "chai");

// Access the email property using the getter method
console.log(chai.email);  // Output: "CHAI@CHAI.COM"
