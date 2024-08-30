// Define the User class
class User {
  constructor(username) {
      this.username = username;
  }

  // Method to log the username
  logMe() {
      console.log(`USERNAME is ${this.username}`);
  }
}

// Define the Teacher class that extends User
class Teacher extends User {
  constructor(username, email, password) {
      // Call the parent class (User) constructor with 'username'
      super(username);
      this.email = email;
      this.password = password;
  }

  // Method to log a message indicating a new course was added
  addCourse() {
      console.log(`A new course was added by ${this.username}`);
  }
}

// Create an instance of Teacher
const chai = new Teacher("chai", "chai@teacher.com", "123");

// Call logMe() method from the User class on the Teacher instance
chai.logMe(); // Output: USERNAME is chai

// Create an instance of User
const masalaChai = new User("masalaChai");

// Call logMe() method from the User class on the User instance
masalaChai.logMe(); // Output: USERNAME is masalaChai

// Check if chai is an instance of User
console.log(chai instanceof User); // Output: true
