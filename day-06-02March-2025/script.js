// JavaScript Loops Explained

// 1. For Loop
// The for loop is used to repeat a block of code a known number of times.
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}

// 2. While Loop
// The while loop repeats a block of code as long as a specified condition is true.
let count = 0;
while (count < 5) {
    console.log("While Loop iteration:", count);
    count++;
}

// 3. Do-While Loop
// The do-while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
let num = 0;
do {
    console.log("Do-While Loop iteration:", num);
    num++;
} while (num < 5);

// 4. For-In Loop
// The for-in loop is used to iterate over the properties of an object.
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`For-In Loop: ${key} = ${person[key]}`);
}

// 5. For-Of Loop
// The for-of loop is used to iterate over the values of an iterable object like an array.
const numbers = [1, 2, 3, 4, 5];
for (let value of numbers) {
    console.log("For-Of Loop value:", value);
}

// Tricky Questions and Solutions

// Question 1: What will be the output of the following code?
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Solution: The output will be 0, 1, 2. The let keyword creates a block-scoped variable, so each iteration has its own scope.

// Question 2: How can you break out of a nested loop?
// Solution: You can use labels to break out of a nested loop.
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// Question 3: How can you skip an iteration in a loop?
// Solution: You can use the continue statement to skip an iteration.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log("Skipping iteration 2:", i);
}