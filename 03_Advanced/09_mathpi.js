// Obtain the property descriptor for the 'PI' property of the Math object
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// Log the descriptor to the console to examine its properties (configurable, enumerable, writable, value)
console.log(descripter);

// Log the value of Math.PI to the console, which should be the mathematical constant Pi (~3.14159)
console.log(Math.PI);

// Attempt to change the value of Math.PI to 5
// Since Math.PI is a read-only property (writable: false), this change will not take effect
Math.PI = 5;

// Log the value of Math.PI again, it should still be the original Pi value (~3.14159)
console.log(Math.PI);

// Define an object 'chai' representing a chai (tea) with properties name, price, isAvailable, and a method orderChai
const chai = {
    name: 'ginger chai',      // name of the chai
    price: 250,               // price of the chai
    isAvailable: true,        // availability status of the chai

    // Method to simulate ordering chai, logs a message to the console
    orderChai: function(){
        console.log("chai nhi bni");  // "Chai not made" in Hindi
    }
}

// Log the property descriptor for the 'name' property of the 'chai' object
// This descriptor includes information such as configurable, enumerable, writable, and value
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Define a new property descriptor for the 'name' property of the 'chai' object
Object.defineProperty(chai, 'name', {
    // writable: false,  // This line is commented out, meaning 'name' could still be writable
    enumerable: true,     // 'name' will be included when enumerating (e.g., in a for-in loop)
    
})

// Log the updated property descriptor for the 'name' property of the 'chai' object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Iterate over all key-value pairs in the 'chai' object
for (let [key, value] of Object.entries(chai)) {
    // Check if the value is not a function (so we only log properties, not methods)
    if (typeof value !== 'function') {
        
        // Log the key and value to the console
        console.log(`${key} : ${value}`);
    }
}
