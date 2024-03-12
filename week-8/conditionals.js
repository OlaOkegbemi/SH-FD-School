// Conditional STatement - Allows us to make decisions in our code. By specifying different actions to be performed by the program, based on the conditions that are met.

// IF statements - if something is true, do something
// IF-ELSE statements - if something is true, do something, else do something else
// ELSE-IF statements - if something is true, do something, else if another thing is true, do something else

// Examples

// Write a program that checks if a number is greater than 10
const currentBalance = 5000;
const amountToWithdraw = 3000;
let newBalance;

if (amountToWithdraw > currentBalance) { // if the amount to withdraw is greater than the current balance
    console.log("Insufficient funds");
} else { // if false

    // deduct the amount from the current balance
    newBalance = currentBalance - amountToWithdraw;
    
    // console.log("Payment made! Transaction successful!");
}


// console.log("The customer's new balance is -",newBalance);
// console.log("Thank you for banking with us!");

// Write a program that determines if a student has passed or failed an exam
const passMark = 70;
const studentScore = 60;

if (studentScore >= passMark) { // if the student's score is greater than or equal to the pass mark
    console.log("Congratulations! You have passed the exam");
} else {
    console.log("Sorry, you have failed the exam");
}

// Assingment One
// Write a program that determines the grade of a student based on the student's score
// A - 70 - 100
// B - 60 - 69
// C - 50 - 59
// D - 40 - 49
// F - 0 - 39


// Assignment Two
// Write a program that determines the time of the day based on the current time and greet the user accordingly
// 12am - 6am - Good morning
// 6am - 12pm - Good afternoon
// 12pm - 6pm - Good evening
// Tip: Use the Date object to get the current time