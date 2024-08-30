// Define the User class
class User {
  constructor(username) {
      this.username = username; // Initialize the username property
  }

  // Instance method that logs the username
  logMe() {
      console.log(`Username: ${this.username}`);
  }

  // Static method that returns a static ID
  static createId() {
      return `123`;
  }
}

// Create an instance of User
const hitesh = new User("hitesh");
// console.log(hitesh.createId()) // This will throw an error because createId is a static method

// Define the Teacher class that extends User
class Teacher extends User {
  constructor(username, email) {
      super(username); // Call the constructor of the parent class (User)
      this.email = email; // Initialize the email property
  }
}

// Create an instance of Teacher
const iphone = new Teacher("iphone", "i@phone.com");

// Try to call createId on the instance of Teacher
console.log(iphone.createId()); // This will throw an error because createId is a static method
