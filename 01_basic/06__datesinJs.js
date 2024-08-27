// Dates

// Creating a new Date object with the current date and time
let myDate = new Date();
// Convert the date to a string and output it to the console (commented out)
console.log(myDate.toString());

// Convert the date to a date string (without time) and output it (commented out)
console.log(myDate.toDateString());

// Convert the date to a locale-specific string and output it (commented out)
console.log(myDate.toLocaleString());

// Check the type of the myDate object (commented out)
console.log(typeof myDate);

// Creating a Date object for a specific date: January 23, 2023 (commented out)
let myCreatedDate = new Date(2023, 0, 23);

// Creating a Date object for a specific date and time: January 23, 2023, 5:03 AM (commented out)
let oneCreatedDate = new Date(2023, 0, 23, 5, 3);

// Creating a Date object using a string format "2023-01-14" (commented out)
let twoCreatedDate = new Date("2023-01-14");

// Creating a Date object using a string format "01-14-2023"
let threeCreatedDate = new Date("01-14-2023");
// Convert the date to a locale-specific string and output it (commented out)
console.log(myCreatedDate.toLocaleString());

// Getting the current timestamp in milliseconds since January 1, 1970
let myTimeStamp = Date.now();

// Output the current timestamp to the console (commented out)
console.log(myTimeStamp);

// Get the timestamp in milliseconds for myCreatedDate and output it (commented out)
console.log(myCreatedDate.getTime());

// Get the current timestamp in seconds since January 1, 1970, and output it (commented out)
console.log(Math.floor(Date.now()/1000));

// Creating a new Date object with the current date and time
let newDate = new Date();
console.log(newDate); // Output the full current date and time

// Get the current month (0-11), add 1 to convert it to 1-12 format, and output it
console.log(newDate.getMonth() + 1);

// Get the current day of the week (0-6) where 0 is Sunday, and output it
console.log(newDate.getDay());

// Format the date to show the full weekday name
newDate.toLocaleString('default', {
    weekday: "long",
});
