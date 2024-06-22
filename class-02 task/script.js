// // The code was scrambled, I Formatted in notepad and paste it in here.

// var a = 5;
// var b = 15;

// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("a is not greater than b");
// }

// function multiply(x, y) {
//   return x * y;
// }
// console.log(multiply(3, 7)); //multiply 3 and 7

// var c = 8;
// var d = 8;
// if (c === d) {
//   console.log("c is equal to d");
// } else {
//   console.log("c is not equal to d");
// }

// function subtract(m, n) {
//   return m - n;
// }
// console.log(subtract(10, 4)); //subtract 10 and 4

// var e = 12;
// var f = 6;

// if (e % f === 0) {
//   console.log("e is divisible by f");
// } else {
//   console.log("e is not divisible by f");
// }

// function divide(p, q) {
//   return p / q;
// }
// console.log(divide(20, 5)); //divide 20 by 5

// ---------------------------------------------------------------------------------------------------------------

// // Please guess the output for every operations below without any tools:
// // Arithmetic Operations
// let a = 10;
// let b = 5;
// console.log(a + b); // 15 ?
// console.log(a - b); // 5?
// console.log(a * b); // 50?
// console.log(a / b); // 2 ?
// console.log(a % b); // 0?

// // Comparison Operations
// console.log(a > b); // true?
// console.log(a < b); // false?
// console.log(a == 10); // true?
// console.log(b != 5); // false?

// // Logical Operations
// let isAdult = true;
// let hasPermission = false;
// console.log(isAdult && hasPermission); // false ?
// console.log(isAdult || hasPermission); // true?
// console.log(!isAdult); // false?

// // Ternary Operation
// let age = 20;
// let access = age >= 18 ? "Granted" : "Denied";
// console.log(access); // Outputs: 'Granted'?

// ------------------------------------------------------------------------------------------------------------

// // Create four functions named add, subtract, multiply,
// // and divide that perform addition, subtraction, multiplication,
// // and division, respectively. Each function should take two parameters
// //  and return the result of the corresponding arithmetic operation.

// function add(one, two) {
//   return one + two;
// }

// console.log(add(5, 10));

// function subtract(three, four) {
//   return three - four;
// }

// console.log(subtract(10, 4));

// function multiply(five, six) {
//   return five * six;
// }

// console.log(multiply(3, 7));

// function divide(seven, eight) {
//   return seven / eight;
// }

// console.log(divide(20, 5));

// --------------------------------------------------------------------------------------------------------

// Optional Tasks:
// Task 1: Loops
//------------------------//

// For Loop:
// function printNumbers() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers()
//------------------------------------------------------
// While Loop:
// function printEvenNumbers() {
//   let i = 1;
//   while (i <= 20) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }

// printEvenNumbers(); // 2 4 6 8 10 12 14 16 18 20

//------------------------------------------------------

// Do-While Loop
// function printOddNumbers() {
//   let i = 1;
//   do {
//     if (i % 2 != 0) {
//       console.log(i);
//     }

//     i++;
//   } while (i <= 20);
// }

// printOddNumbers(); // 1 3 5 7 9 11 13 15 17 19

//------------------------------------------------------

// Switch Statements
// function getDayName(e) {
//   // console.log("inside fn", e);
//   let day;
//   switch (e) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       console.log("something wrong");
//   }

//   return day;
// }

// console.log(getDayName(3)); // Wednesday
// console.log(getDayName(6)); // Saturday

//----------------------------------------------------------------------------------------

// Task 3: Variable and Function Scope
// Objective: Learn about the scope of variables and functions in JavaScript.

// Function Scope:

// function testFunctionScope () {
//   let insideFunction = 'touhid'
// }

// testFunctionScope()

// console.log(insideFunction) // It says -> Uncaught ReferenceError: insideFunction is not defined

//------------------------------------------------

// Block Scope with let and const:

// function testBlockScope() {
//   if (true) {
//     let gg = "touhid";
//   } else {
//   }

// console.log(gg); //script.js:215 Uncaught ReferenceError: gg is not defined
// }

// testBlockScope();

//---------------------------------------------------------------------------------------------------------------------------------------------------

// Task 4: Immediately Invoked Function Expressions (IIFE)
// Objective: Learn about IIFE and its uses.

// Basic IIFE:
// (function () {
//   console.log(' This is an IIFE')
// })();

// IIFE with Parameters:
// (function (a,b) {
//   console.log(a+b)
// })(10,5);

// IIFE to Avoid Polluting Global Scope:
// (function() {
//   var innerVariable = "Hello, World!";
//   function innerFunction() {
//     console.log(innerVariable);
//   }
//   innerFunction();
// })();

// console.log(innerVariable); // undefined


                                            //TASK-2 COMPLETE
//-------------------------------------------------------------------------------------------------------------------------------------
