// Mandatory Tasks:

// Implement several examples where this behaves differently, including in global context.
// Create a utility function that needs to be applied to multiple objects with call or bind.

//------------------------------------------------------------------------------------------------

// Task 1: Implementing calculateArea function with call and bind :

// Utility function
function calculateArea() {
  return this.width * this.height;
}

// Object 1
const rectangle = {
  width: 10,
  height: 20,
};

// Object 2
const square = {
  width: 15,
  height: 15,
};

// Find the area for the rectangle using call
console.log("Rectangle call Result ->", calculateArea.call(rectangle)); // Output: 200

// Find the area for the rectangle using bind
const boundCalculateArea = calculateArea.bind(rectangle);
console.log("Rectangle bind Result ->", boundCalculateArea()); // Output: 200

// Find the area for the square using call
console.log("square bind Result ->", calculateArea.call(square)); // Output: 225

// Find the area for the square using bind
const boundCalculateAreaSquare = calculateArea.bind(square);
console.log("square bind Result ->", boundCalculateAreaSquare()); // Output: 225

//------------------------------------------------------------------------------------------------

// Task 2: Building a simple object-oriented application using constructors

// Using Class:
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} is now online.`);
  }

  logout() {
    console.log(`${this.name} is now offline.`);
  }
}

// Create instances
const user1 = new User("Zohan", "zohan@example.com");
user1.login(); // Output: Zohan is now online.

//------------------------------------------------------------------------------------------------

// Using Constructor function :

function User1(name, email) {
    this.name = name;
    this.email = email;
    
  }
  
  User1.prototype.login = function() {

    console.log(`${this.name} is now online.`);
  };
  
  User1.prototype.logout = function() {

    console.log(`${this.name} is now offline.`);
  };
  
  // Create instances
  const user3 = new User1('Zohan', 'zohan@example.com');
  user1.login(); // Output: Zohan is now online.
  