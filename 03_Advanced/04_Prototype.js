// Example string variables with trailing spaces
let myName = "hitesh     ";
let mychannel = "chai     ";

// Attempting to access a custom method 'trueLength' on a string variable
// This will not work until we define 'trueLength' on String.prototype
// console.log(myName.trueLength);

// Example array of heroes
let myHeros = ["thor", "spiderman"];

// An object representing hero powers with a method to get Spider-Man's power
let heroPower = {
    thor: "hammer", // Power associated with Thor
    spiderman: "sling", // Power associated with Spider-Man

    // Method to get Spider-Man's power
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Adding a custom method 'hitesh' to the Object prototype
// This method will now be available on all objects
Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
};

// Adding a custom method 'heyHitesh' to the Array prototype
// This method will now be available on all arrays
Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
};

// Calling the custom 'hitesh' method on the heroPower object
// heroPower.hitesh(); // Output: hitesh is present in all objects

// Calling the custom 'hitesh' method on the myHeros array
// myHeros.hitesh(); // Output: hitesh is present in all objects

// Calling the custom 'heyHitesh' method on the myHeros array
// myHeros.heyHitesh(); // Output: Hitesh says hello

// Attempting to call 'heyHitesh' on the heroPower object will result in an error
// heroPower.heyHitesh(); // Error: heroPower.heyHitesh is not a function (since it's defined on Array.prototype, not Object.prototype)

// Inheritance example

// User object with basic properties
const User = {
    name: "chai",
    email: "chai@google.com"
};

// Teacher object with an additional property
const Teacher = {
    makeVideo: true
};

// TeachingSupport object with its own property
const TeachingSupport = {
    isAvailable: false
};

// TASupport object with additional properties and prototypal inheritance from TeachingSupport
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Setting TeachingSupport as the prototype
};

// Setting User as the prototype for Teacher
Teacher.__proto__ = User;

// Modern syntax to set prototypes
Object.setPrototypeOf(TeachingSupport, Teacher);

// Example string with trailing spaces
let anotherUsername = "ChaiAurCode     ";

// Adding a custom method 'trueLength' to the String prototype
// This method will now be available on all string instances
String.prototype.trueLength = function() {
    console.log(`${this}`); // Log the original string
    console.log(`True length is: ${this.trim().length}`); // Log the length after trimming spaces
};

// Calling the custom 'trueLength' method on the 'anotherUsername' string
anotherUsername.trueLength(); // Output: True length is: 12

// Calling 'trueLength' on a string literal
"hitesh".trueLength(); // Output: True length is: 6

// Calling 'trueLength' on another string literal
"iceTea".trueLength(); // Output: True length is: 6
