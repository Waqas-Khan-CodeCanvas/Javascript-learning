// 1. Basic Array Destructuring
// Extract the first two fruits from the array.

// const fruits = ["apple", "banana", "mango"];
// const [firstFruit , secondFruit ]= fruits
// console.log(firstFruit , secondFruit);

// 2. Swap Variables
// Use array destructuring to swap a and b.

// let a = 5;
// let b = 10;
// [a,b] = [b,a]
// console.log(`a = ${a} , b = ${b}`);

// 3. Destructuring with Default Values
// Destructure three values from colors, provide default if a value is missing.

// const colors =["red"];
// const [color = "color"]= colors
// console.log(color);


// 4. Skip Items in Array
// Extract the first and third numbers only.

// const numbers = [10, 20, 30];
// const [ first , , third] = numbers
// console.log(`first = ${first} , third = ${third}`);


// 5. Rest Operator in Destructuring
// Get the first number as first, and the rest as others.

const nums = [1, 2, 3, 4, 5];
const [first]
