// Main Tasks:
//--------------------------------------------------------------------------------------------------------------------------
// Task One: -

// Create a function named as greet which will print “Hello World, {YOUR_NAME}” after 10 seconds
// Expected Output: (after 10 seconds):
// Hello World, Zonayed Ahmed

// function greet () {
//     setTimeout(() => {
//         console.log('Hello World, Touhid Hossain')
//     }, 10000);
// }

// greet()

//--------------------------------------------------------------------------------------------------------------------------
// Task Two:

// Create a function printNumbers that prints numbers from 1 to 10 at 1-second
// intervals using setInterval. After printing the number 10, the interval should stop.

// function printNumbers() {
//   let counter = 0;

//   let interval = setInterval(() => {
//     counter++;
//     console.log(counter);

//     if (counter >= 10) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// printNumbers();

//--------------------------------------------------------------------------------------------------------------------------
// Task Three:

// Create a function handleError that simulates an error and catches it using
//  try...catch. If an error occurs, the function should print "I have handled
//  the error successfully."

// function handleError() {
//   try {
//     validateNumber("abc");
//   } catch (error) {
//     console.error("I have handled the error successfully");
//   }
// }

// handleError();

//--------------------------------------------------------------------------------------------------------------------------
// Task four:

// Create a Promise that either resolves or rejects based on a condition.
// If the Promise resolves, it should print "I am resolved". If it rejects,
//  it should print "I am rejected".

// let promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     let success = true;
//     if (success) {
//       resolve('I am resolved');
//     } else {
//       reject('I am rejected');
//     }
//   });

//   promise
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

//--------------------------------------------------------------------------------------------------------------------------

// Optional Tasks:

// Task One:

// Create a function delayedMessage that returns a Promise which resolves after
// a given number of seconds, printing "Hello after {n} seconds". Use async/await
//  to call this function and handle the resolved message.

// function delayedMessage(n) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(`Hello after ${n} seconds`);
//       }, n * 1000);
//     });
//   }

//   async function callDelayedMessage() {
//     try {
//       const message = await delayedMessage(5);
//       console.log(message);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   callDelayedMessage();

//--------------------------------------------------------------------------------------------------------------------------

// Task Two:

// Create a function retryOperation that attempts to perform an operation
//  multiple times until it succeeds or reaches a maximum number of retries.
//   Use Promises and error handling to implement this functionality.

function retryOperation(maxRetries, operation) {
  return new Promise((resolve, reject) => {
    let retries = 0;
    function attemptOperation() {
      retries++;
      console.log(`Attempt ${retries}`);
      operation()
        .then((result) => {
          console.log(`Attempt ${retries} succeeded`);
          resolve(result);
        })
        .catch((error) => {
          if (retries < maxRetries) {
            console.log(`Attempt ${retries} failed, retrying...`);
            setTimeout(attemptOperation, 1000); // wait 1 second before retrying
          } else {
            console.log(`All attempts failed`);
            reject(error);
          }
        });
    }
    attemptOperation();
  });
}

// Example usage:
retryOperation(3, () => {
  // Simulate a random failure or success
  return Math.random() < 0.5
    ? Promise.reject(new Error("Operation failed"))
    : Promise.resolve("Operation succeeded");
});
