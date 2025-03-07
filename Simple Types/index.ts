// without the type
let firstName: string = "Dylan";

// with the type
let firstName2 = "Dylan";

console.log(firstName);

console.log(firstName2);

let myName: string = "Jareth"; // type string
// name = 33; // attempts to re-assign the value to a different type 

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json); // output: number