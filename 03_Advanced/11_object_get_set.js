const User = {
  // Private properties (by convention, indicated with an underscore)
  _email: 'h@hc.com',
  _password: "abc",

  // Getter for the 'email' property
  get email() {
      // Returns the '_email' property value in uppercase
      return this._email.toUpperCase();
  },

  // Setter for the 'email' property
  set email(value) {
      // Updates the '_email' property with the new value provided
      this._email = value;
  }
}

// Create a new object 'tea' that inherits from 'User'
const tea = Object.create(User);

// Access the 'email' property using the getter method
console.log(tea.email);  // Output: "H@HC.COM"
