// Mandatory Task
//--------------------------------------------------------------------------------------
// Task One :

// Create a function createGreeting that takes two parameters, name and age,
// and returns a greeting message using a template literal. The message should be
// in the format: "Hello, my name is {name} and I am {age} years old."

// function createGreeting(name, age) {
//   return `Hello, my name is ${name} and I am ${age} years old.`;
// }

// console.log(createGreeting("Zohan", 25));

//--------------------------------------------------------------------------------------
// Task Two :

// Create a function calculateArea that takes two parameters,
// length and width. If the width is not provided, it should default to the value of
// length (making it a square). The function should return the area of the rectangle.

// function calculateArea (length, width = length ) {
// return  width * length
// }

// console.log(calculateArea(5, 10));

//--------------------------------------------------------------------------------------
// Task Three :

// Given an object user with an optional nested structure,
//  create a function getStreetName that returns the street name if it exists,
//   otherwise returns "Street not found".

// const user = {
//     address: {
//         street: {
//             name: "CR Dutta Road"
//         }
//     }
// };

// const userWithoutStreet = {
//     address: {}
// };

// function getStreetName(user) {
//     // Your code here
//      if(user.address.street) {
//         return console.log(user.address.street.name)
//     }else {
//         console.log('Street not found')
//     }
// }

// console.log(getStreetName(user)); // Output: CR Dutta Road
// console.log(getStreetName(userWithoutStreet)); // Output: Street not found

//--------------------------------------------------------------------------------------
// Task Four :

// Create a function cleanUpString that takes a string, trims any leading or
//  trailing whitespace, and replaces all occurrences of the word "white" with "red".

// function cleanUpString(str) {
//     return str.trim().replace(/\bwhite\b/g, 'red');
//     // Your code here
// }

// console.log(cleanUpString("   white is white   ")); // Output: red is red

// Let's break it down:
// return str.trim().replace(/\bwhite\b/g, 'red');

// This line is doing three things:

// str.trim(): This part is removing any leading or trailing whitespace from the input string str. For example, if str is " hello world ", str.trim() would return "hello world".
// replace(): This method is used to replace some characters in a string with other characters. In this case, it's replacing the word "white" with "red".
// /\bwhite\b/g: This is a regular expression (regex) pattern. It's a way to match patterns in strings.
// Here's what the regex pattern /\bwhite\b/g means:

// \b: This is a word boundary. It matches the position where a word character (letter, digit, or underscore) is not followed or preceded by another word-character. In other words, it ensures that we're matching a whole word, not just part of another word.
// white: This is the literal string "white" that we're searching for.
// \b: Another word boundary, to ensure that we're matching a whole word.
// g: This is a flag that makes the replacement global, meaning it will replace all occurrences of "white" in the string, not just the first one.
// So, when we put it all together, str.trim().replace(/\bwhite\b/g, 'red') is removing any leading or trailing whitespace from the input string, and then replacing all occurrences of the word "white" with "red".

// For example, if the input string is " white is white ", the output would be "red is red".

//--------------------------------------------------------------------------------------
// Task Five :

// Create a function processArray that takes an array of strings. Each string
// contains a name and age separated by a hyphen (e.g., "Zohan-25"). The function
//  should: Split each string into a name and age.
// Filter out the ones where the age is less than 18.
// Return an array of objects with the properties name and age.

// function processArray(arr) {
//   return arr
//     .map((str) => str.split('-')) // split each string into an array of [name, age]
//     .filter(([, age]) => !isNaN(age) && +age >= 18) // filter out the ones where age is less than 18
//     .map(([name, age]) => ({ name, age })); // convert the array of [name, age] to an object with name and age properties
// }

// const input = ["Zohan-25", "Wafi-17", "Saher-19"];

// console.log(processArray(input));

//--------------------------------------------------------------------------------------