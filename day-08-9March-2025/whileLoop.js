// Example of a while loop
// The while loop will execute as long as the condition is true

let count = 0;

console.log("While Loop Example:");
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}
// Output:
// Count is: 0
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4

// Example of a do...while loop
// The do...while loop will execute the code block once before checking the condition
// Then it will repeat the loop as long as the condition is true

let number = 0;

console.log("\nDo...While Loop Example:");
do {
    console.log("Number is: " + number);
    number++;
} while (number < 5);
// Output:
// Number is: 0
// Number is: 1
// Number is: 2
// Number is: 3
// Number is: 4


// Tricky code question: Find the sum of all even numbers between 1 and 10 using a while loop

let sum = 0;
let i = 1;

console.log("\nSum of all even numbers between 1 and 10:");
while (i <= 10) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log("Sum is: " + sum);
// Output:
// Sum is: 30

// Example of an infinite loop (use with caution)
// This loop will run indefinitely because the condition is always true

let infiniteCount = 0;

console.log("\nInfinite Loop Example:");
while (true) {
    console.log("Infinite Count is: " + infiniteCount);
    infiniteCount++;
    if (infiniteCount === 10) {
        console.log("Breaking out of the infinite loop.");
        break; // This will break the loop after 10 iterations
    }
}
// Output:
// Infinite Count is: 0
// Infinite Count is: 1
// Infinite Count is: 2
// Infinite Count is: 3
// Infinite Count is: 4
// Infinite Count is: 5
// Infinite Count is: 6
// Infinite Count is: 7
// Infinite Count is: 8
// Infinite Count is: 9
// Breaking out of the infinite loop.