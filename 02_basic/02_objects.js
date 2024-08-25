// Singleton pattern example: Creating a single instance of an object

// Object literals: Defining an object using object literal notation
const mySym = Symbol("key1"); // Creating a unique symbol to be used as a key in the object

const JsUser = {
    name: "Hitesh", // Property with key "name" and value "Hitesh"
    "full name": "Hitesh Choudhary", // Property with a space in the key, requires quotes
    [mySym]: "mykey1", // Symbol as a key, ensuring unique property in the object
    age: 18, // Property with key "age" and value 18
    location: "Jaipur", // Property with key "location" and value "Jaipur"
    email: "hitesh@google.com", // Property with key "email" and value "hitesh@google.com"
    isLoggedIn: false, // Property with key "isLoggedIn" and value false
    lastLoginDays: ["Monday", "Saturday"], // Property with key "lastLoginDays" and an array of values
}

// Accessing object properties
console.log(JsUser.email); // Accessing the 'email' property using dot notation
console.log(JsUser["email"]); // Accessing the 'email' property using bracket notation
console.log(JsUser["full name"]); // Accessing the 'full name' property using bracket notation
console.log(JsUser[mySym]); // Accessing the symbol-keyed property

// Modifying object properties
JsUser.email = "hitesh@chatgpt.com"; // Updating the 'email' property

Object.freeze(JsUser); // Freezing the object to prevent further modifications
JsUser.email = "hitesh@microsoft.com"; // Attempt to modify the 'email' property after freezing (won't work if frozen)
// console.log(JsUser);

// Adding methods to the object

// Method 'greeting' that logs a simple message
JsUser.greeting = function() {
    console.log("Hello JS user");
};

// Method 'greetingTwo' that uses 'this' to access the object's 'name' property
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling the methods
console.log(JsUser.greeting()); // Output: "Hello JS user"
console.log(JsUser.greetingTwo()); // Output: "Hello JS user, Hitesh"

// Creating an empty object using object literal syntax
const tinderUser = {};

// Adding properties to the 'tinderUser' object
tinderUser.id = "123abc"; // Adds a property 'id' with value "123abc"
tinderUser.name = "Sammy"; // Adds a property 'name' with value "Sammy"
tinderUser.isLoggedIn = false; // Adds a property 'isLoggedIn' with value false

// Logging the 'tinderUser' object
console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Creating an object with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Accessing nested properties
console.log(regularUser.fullname.userfullname.firstname); // Output: "hitesh"

// Creating multiple objects with similar structures
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Merging objects into one using the spread operator
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Creating an array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
];

// Accessing a specific user's email
console.log(users[1].email); // Output: "h@gmail.com"

// Working with object properties

// Getting keys of the 'tinderUser' object
console.log(Object.keys(tinderUser)); // Output: ['id', 'name', 'isLoggedIn']

// Getting values of the 'tinderUser' object
console.log(Object.values(tinderUser)); // Output: ['123abc', 'Sammy', false]

// Getting entries (key-value pairs) of the 'tinderUser' object
console.log(Object.entries(tinderUser)); // Output: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// Checking if 'tinderUser' has a specific property
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true

// Destructuring an object with renaming
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Destructuring with renaming: renaming 'courseInstructor' to 'instructor'
const {courseInstructor: instructor} = course;

// Logging the renamed variable
console.log(courseInstructor); // Error: courseInstructor is not defined
console.log(instructor); // Output: "hitesh"

// JSON-like object and array structure examples
/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

[
    {},
    {},
    {}
]
*/
