// Ticket 1 - Set up
// console.log("hello");

// Ticket 2 - Callback Functions

function greetingFunction(name) {
  console.log(`Hello, ${name}`);
}

let A = "Serge";
let B = "Oliver";
let C = "David";

function callbackGreeting(callback, name1, name2, name3) {
  callback(name1);
  callback(name2);
  callback(name3);
}

callbackGreeting(greetingFunction, A, B, C);
