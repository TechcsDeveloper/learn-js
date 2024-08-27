// A simple 'for' loop that runs from 0 to 10.
for (let i = 0; i <= 10; i++) {
  const element = i;  // Assigns the current value of i to the variable 'element'.
  
  if (element == 5) {
      // This checks if the element is equal to 5.
      // If true, it would print "5 is best number" (but it's currently commented out).
      console.log("5 is best number");
  }

  // This would print the value of 'element' in each iteration (currently commented out).
  console.log(element);
}

// Attempting to print 'element' outside the loop would cause an error because 'element' was declared with 'const' inside the loop and is out of scope here.
 console.log(element);

// Another 'for' loop, nested within another 'for' loop, creating a multiplication table.
for (let i = 1; i <= 10; i++) {
  // This would print the value of the outer loop's 'i' (currently commented out).
  console.log(`Outer loop value: ${i}`);

  for (let j = 1; j <= 10; j++) {
      // This would print the current values of both 'i' and 'j' (currently commented out).
      console.log(`Inner loop value ${j} and inner loop ${i}`);
      
      // This would print the result of multiplying 'i' and 'j' (currently commented out).
      console.log(i + '*' + j + ' = ' + i*j );
  }
}

// Declares an array with three superhero names.
let myArray = ["flash", "batman", "superman"];

// This would print the length of 'myArray' (currently commented out).
console.log(myArray.length);

// A 'for' loop that iterates through each element of 'myArray'.
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];  // Assigns the current array element to 'element'.
  
  // This would print the current 'element' (currently commented out).
  console.log(element);
}

// A demonstration of 'break' and 'continue' in loops.

// 'Break' example: This loop would stop when 'index' is equal to 5.
for (let index = 1; index <= 20; index++) {
 if (index == 5) {
        console.log(`Detected 5`);  // Prints a message when 5 is detected.
        break;  // Exits the loop immediately when 5 is detected.
    }
    console.log(`Value of i is ${index}`);  // Prints the value of 'index'.
 }

// 'Continue' example: This loop skips the iteration when 'index' is equal to 5.
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
      console.log(`Detected 5`);  // Prints a message when 5 is detected.
      continue;  // Skips the current iteration and moves to the next one.
  }
 console.log(`Value of i is ${index}`);  // Prints the value of 'index' except when 'index' is 5.
}

// Initializing a variable 'index' with a value of 0.
let index = 0;

// A 'while' loop that would continue running as long as 'index' is less than or equal to 10.
// The loop increments 'index' by 2 in each iteration.
while (index <= 10) {
    console.log(`Value of index is ${index}`);  // Prints the current value of 'index'.
     index = index + 2;  // Increments 'index' by 2.
}

// Declaring an array with three elements: 'flash', 'batman', and 'superman'.
let myArray = ['flash', "batman", "superman"];

// Initializing a variable 'arr' with a value of 0.
let arr = 0;

// A 'while' loop that iterates through the 'myArray' array.
while (arr < myArray.length) {
    // Prints the current element of 'myArray' (currently commented out).
    console.log(`Value is ${myArray[arr]}`);
    
    arr = arr + 1;  // Increments 'arr' by 1 to move to the next element in the array.
}

// Initializing a variable 'score' with a value of 11.
let score = 11;

// A 'do...while' loop that will execute the block of code once, regardless of the condition.
do {
    console.log(`Score is ${score}`);  // Prints the current value of 'score'.
    score++;  // Increments 'score' by 1.
} while (score <= 10);  // The loop checks this condition after executing the code block.

// 'for...of' loop with an array
const arr = [1, 2, 3, 4, 5];  // Declaring an array with numbers 1 through 5.

for (const num of arr) {
    // This loop iterates over each element in 'arr'.
    // 'num' holds the value of the current element during each iteration.
    // This would print each number in 'arr' (currently commented out).
    //console.log(num);
}

// 'for...of' loop with a string
const greetings = "Hello world!";  // Declaring a string.

for (const greet of greetings) {
    // This loop iterates over each character in the 'greetings' string.
    // 'greet' holds the current character during each iteration.
    // This would print each character in the string (currently commented out).
    //console.log(`Each char is ${greet}`);
}

// Working with Maps
const map = new Map();  // Creating a new Map object.
map.set('IN', "India");  // Adding a key-value pair to the map.
map.set('USA', "United States of America");  // Adding another key-value pair.
map.set('Fr', "France");  // Adding another key-value pair.
map.set('IN', "India");  // Adding the key 'IN' again, which will overwrite the previous 'IN' value.

// This would print the entire map object (currently commented out).
// console.log(map);

for (const [key, value] of map) {
    // This loop iterates over each key-value pair in the map.
    // 'key' holds the key, and 'value' holds the associated value during each iteration.
    // This would print each key-value pair (currently commented out).
    // console.log(key, ':-', value);
}

// Working with objects
const myObject = {
    game1: 'NFS',  // Defining a key-value pair.
    game2: 'Spiderman'  // Defining another key-value pair.
}

// The following 'for...of' loop would not work because objects are not directly iterable using 'for...of'.
// To iterate over the keys or values of an object, you would use 'Object.entries()', 'Object.keys()', or 'Object.values()'.
// Uncommenting the following code would result in an error.
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// An object containing programming languages and their shortcuts.
const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
};

// 'for...in' loop iterating over the keys of 'myObject'.
for (const key in myObject) {
  // This loop iterates over each key in 'myObject'.
  // 'key' holds the name of the current property during each iteration.
  // This would print the key and its corresponding value (currently commented out).
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// An array containing shortcuts for programming languages.
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // This loop iterates over the indices of the 'programming' array.
  // 'key' holds the current index during each iteration.
  // This would print the element at the current index (currently commented out).
  //console.log(programming[key]);
}

// 'for...in' loop with a Map (not appropriate usage).
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// The following 'for...in' loop would not work correctly with a Map because 'for...in' is intended for iterating over the properties of objects, not Maps or arrays.
// Uncommenting the following code would not produce the desired results:
// for (const key in map) {
//     console.log(key);  // This would not correctly iterate over the Map's keys or values.
// }

// An array of programming languages.
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with an anonymous function to iterate over 'coding' array.
// coding.forEach(function(val) {
//     console.log(val);  // Prints each value in the 'coding' array.
// });

// Using forEach with an arrow function to iterate over 'coding' array.
// coding.forEach((item) => {
//     console.log(item);  // Prints each value in the 'coding' array.
// });

// Defining a function to print each item in the array.
function printMe(item) {
    console.log(item);
}

// Using forEach to apply the 'printMe' function to each item in the 'coding' array.
// coding.forEach(printMe);

// Using forEach with an arrow function that also provides the index and the array.
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);  // Prints each item, its index, and the entire array.
// });

// An array of objects, each representing a programming language and its file extension.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

// Using forEach to iterate over 'myCoding' and print the 'languageName' property of each object.
myCoding.forEach((item) => {
    console.log(item.languageName);  // Prints the 'languageName' of each object in 'myCoding'.
});

// An array of programming languages.
const coding = ["js", "ruby", "java", "python", "cpp"];

// Attempt to use 'forEach' with 'return' inside the callback (incorrect usage).
// The 'forEach' method doesn't return a value to the 'values' variable.
// 'forEach' is used for side effects (like logging to the console), not for returning values.
// const values = coding.forEach((item) => {
//     //console.log(item);  // Prints each item in the 'coding' array.
//     return item;  // This 'return' statement is ignored by 'forEach'.
// });

// This would log 'undefined' because 'forEach' returns 'undefined'.
// console.log(values);

// An array of numbers.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using 'filter' to create a new array with numbers greater than 4.
// 'filter' returns a new array with elements that pass the test in the callback function.
// const newNums = myNums.filter((num) => {
//     return num > 4;  // Returns 'true' if 'num' is greater than 4, so the number is included in 'newNums'.
// });

// Creating a new empty array to store numbers greater than 4.
const newNums = [];

// Using 'forEach' to iterate over 'myNums' and manually add numbers greater than 4 to 'newNums'.
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);  // Adds 'num' to 'newNums' if it is greater than 4.
    }
});

// This would log the array of numbers greater than 4.
// console.log(newNums);

// An array of book objects.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering the 'books' array to find books with the genre 'History'.
let userBooks = books.filter((bk) => bk.genre === 'History');

// Further filtering 'books' to find 'History' books published on or after 1995.
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";  // Filters books based on both 'publish' year and 'genre'.
});

// Logs the filtered books to the console.
console.log(userBooks);

// An array of numbers.
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using 'map' to create a new array by adding 10 to each element (commented out).
// const newNums = myNumers.map((num) => { return num + 10 });

// Chaining multiple array methods:
// 1. The first 'map' multiplies each element by 10.
// 2. The second 'map' adds 1 to each resulting element.
// 3. The 'filter' returns only elements that are greater than or equal to 40.

const newNums = myNumers
    .map((num) => num * 10)  // Multiplies each number by 10.
    .map((num) => num + 1)    // Adds 1 to each of the multiplied numbers.
    .filter((num) => num >= 40);  // Filters the numbers, keeping only those >= 40.

// Logs the final array after applying all transformations.
console.log(newNums);  // Output: [41, 51, 61, 71, 81, 91, 101]

// An array of numbers.
const myNums = [1, 2, 3];

// Using 'reduce' to sum up the numbers in 'myNums'.
// The 'reduce' method accumulates the result by applying the function to each element.
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0); // The '0' here is the initial value of the accumulator 'acc'.

// A more concise version using an arrow function with 'reduce'.
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6

// An array representing items in a shopping cart.
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// Using 'reduce' to calculate the total price of items in the shopping cart.
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 22996
