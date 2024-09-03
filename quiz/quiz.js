let questions = document.getElementById('question');
function questionArray (){
  questions.append(jsMCQs[0].question);
}
const jsMCQs = [
  {
    question: "What is JavaScript?",
    options: ["A) A type of coffee", "B) A programming language", "C) A style sheet language", "D) A database"],
    answer: "B) A programming language"
  },
  {
    question: "What are the different data types in JavaScript?",
    options: ["A) Number, String, Boolean, Null, Undefined, Symbol, Object, Array", "B) Integer, Float, Double, Char, String", "C) Class, Object, Method, Variable", "D) None of the above"],
    answer: "A) Number, String, Boolean, Null, Undefined, Symbol, Object, Array"
  },
  {
    question: "What is hoisting in JavaScript?",
    options: ["A) A way to lift heavy objects", "B) A JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution", "C) A method to sort arrays", "D) None of the above"],
    answer: "B) A JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution"
  },
  {
    question: "What is the difference between null and undefined?",
    options: ["A) null is an assignment value that represents no value or an empty value, while undefined is a variable that has been declared but not assigned a value", "B) null and undefined are the same", "C) null is a type of object, while undefined is a type of string", "D) None of the above"],
    answer: "A) null is an assignment value that represents no value or an empty value, while undefined is a variable that has been declared but not assigned a value"
  },
  {
    question: "What is a closure in JavaScript?",
    options: ["A) A function that has access to its own scope, the scope of the outer function, and the global scope", "B) A method to close a window", "C) A type of loop", "D) None of the above"],
    answer: "A) A function that has access to its own scope, the scope of the outer function, and the global scope"
  },
  {
    question: "What is a callback function in JavaScript?",
    options: ["A) A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action", "B) A function that calls itself", "C) A function that returns another function", "D) None of the above"],
    answer: "A) A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action"
  },
  {
    question: "What are promises in JavaScript?",
    options: ["A) A way to handle asynchronous operations", "B) A type of loop", "C) A method to sort arrays", "D) None of the above"],
    answer: "A) A way to handle asynchronous operations"
  },
  {
    question: "What is the purpose of the setTimeout() function in JavaScript?",
    options: ["A) To execute a function after a specified number of milliseconds", "B) To stop the execution of a function", "C) To repeat a function indefinitely", "D) None of the above"],
    answer: "A) To execute a function after a specified number of milliseconds"
  },
  {
    question: "How can you check if an array includes a certain value?",
    options: ["A) Using the includes() method", "B) Using the find() method", "C) Using the filter() method", "D) None of the above"],
    answer: "A) Using the includes() method"
  },
  {
    question: "How can you remove duplicates in an array?",
    options: ["A) By converting it to a Set and then back to an array", "B) By using the filter() method", "C) By using the map() method", "D) None of the above"],
    answer: "A) By converting it to a Set and then back to an array"
  }
];