// Loops - It helps performs a task multiple times

// Types of loops
    // 1. For loop
    // 2. While loop
    // 3. Do while loop

// For loop
// Syntax
    // for (initialization; condition; increment/decrement) {
        // code block to be executed
    // }

// Example
// Write a program that prints the numbers from 1 to 10

// Using a for loop
for (let num = 1; num <= 100; num++) {
    // print the number
    // console.log(num);
}

// Assignment 3
// Write prime numbers from 1 to 100
// Prime numbers are numbers that are only divisible by 1 and itself


// Write a multiplication table for 2 up until 12
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6

for (let num = 1; num <= 12; num++ ) {
    let result = 2 * num;
    // console.log(`2 * ${num} = ${result}`);
}

// Write a multiplication table for 3 up until 12 
// 3 x 1 = 3
// 3 x 2 = 6
for (let num = 1; num <= 12; num++ ) {
    let result = 3 * num;
    // console.log(`3 * ${num} = ${result}`);
}

// Write a multiplication table for 4 up until 12
// 4 x 1 = 4
// 4 x 2 = 8
for (let num = 1; num <= 12; num++ ) {
    let result = 4 * num;
    // console.log(`4 * ${num} = ${result}`);
}

// Write a function that takes in a number and prints the multiplication table for that number up until 12
function multiplicationTable(x) {
    // write your code
    for (let num = 1; num <= 12; num++ ) {
        let result = x * num;
        console.log(`${x} * ${num} = ${result}`);
    }
}

"this is a string"
'this is a string x'
`This is a string - ${x} ` // template literals - allows us to embed expressions in a string

// Call the function
multiplicationTable(5);
multiplicationTable(4);
multiplicationTable(20);