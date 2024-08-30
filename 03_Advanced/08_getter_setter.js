class User {
  constructor(email, password) {
      // Constructor initializes the email and password properties
      this.email = email;
      this.password = password;
  }

  // Getter for the 'email' property
  get email() {
      // Returns the email in uppercase
      return this._email.toUpperCase();
  }

  // Setter for the 'email' property
  set email(value) {
      // Sets the '_email' private property
      this._email = value;
  }

  // Getter for the 'password' property
  get password() {
      // Returns the password with 'hitesh' appended to it
      return `${this._password}hitesh`;
  }

  // Setter for the 'password' property
  set password(value) {
      // Sets the '_password' private property
      this._password = value;
  }
}

// Create a new User instance
const hitesh = new User("h@hitesh.ai", "abc");

// Log the email property
console.log(htesh.email); // Output: H@HITESH.AI
