// Array declaration

// Declares an array 'myArr' with elements 0 to 5
const myArr = [0, 1, 2, 3, 4, 5];

// Declares an array 'myHeors' with elements "shaktiman" and "naagraj"
const myHeors = ["shaktiman", "naagraj"];

// Declares an array 'myArr2' using the Array constructor with elements 1 to 4
const myArr2 = new Array(1, 2, 3, 4);

// Accessing array element at index 1 (second element)
console.log(myArr[1]); // Output: 1

// Array methods

// Adds elements 6 and 7 to the end of 'myArr'
myArr.push(6);
myArr.push(7);

// Removes the last element (7) from 'myArr'
myArr.pop();

// Adds element 9 to the beginning of 'myArr'
myArr.unshift(9);

// Removes the first element (9) from 'myArr'
myArr.shift();

// Checks if 'myArr' includes the element 9
console.log(myArr.includes(9)); // Output: false (9 was removed)

// Finds the index of the element 3 in 'myArr'
console.log(myArr.indexOf(3)); // Output: 3 (3 is at index 3)

// Joins all elements of 'myArr' into a string separated by commas
const newArr = myArr.join();

console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]
console.log(newArr); // Output: "0,1,2,3,4,5,6"

// Slice and Splice operations

// Slicing the array (creates a shallow copy from index 1 to 3, not including 3)
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1); // Output: [1, 2]
console.log("B ", myArr); // Output: [0, 1, 2, 3, 4, 5, 6] (original array is unchanged)

// Splicing the array (removes 3 elements starting from index 1)
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // Output: [0, 4, 5, 6] (elements at index 1, 2, 3 are removed)
console.log(myn2); // Output: [1, 2, 3] (removed elements)

// Declare two arrays for Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// If you push 'dc_heros' array into 'marvel_heros', it adds the entire 'dc_heros' array as a single element
marvel_heros.push(dc_heros);

// This would log 'marvel_heros' with 'dc_heros' as the fourth element (a nested array)
console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// Accessing the second element of the nested array
console.log(marvel_heros[3][1]); // Output: "flash" (the second element in the 'dc_heros' array)

// Concatenating 'marvel_heros' and 'dc_heros' into a new array 'allHeros'
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Creating a new array 'all_new_heros' using the spread operator to combine 'marvel_heros' and 'dc_heros'
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Working with nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening 'another_array' to remove all nested arrays
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // Output: false (a string is not an array)
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"] (converts a string to an array of characters)
console.log(Array.from({name: "hitesh"})); // Output: [] (an object with no length property returns an empty array)

// Creating an array from given arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300] (creates an array from the given values)
