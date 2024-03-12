// STEPS TO THINKING LIKE A PROGRAMMER
// 1. Understand the problem (Make examples out of them).
// 2. Plan your solution (Pseudo code) (Considering the input and output).
// 3. Divide the problem into smaller problems
// 4. Solve the smaller problems
// 5. Combine the solutions to solve the bigger problem
// 6. Test and refactor your code

// PSEUDO CODE
// Withdraw cash from an ATM
// 1. Enter your card
// 2. Enter your pin
    // If pin is wrong, display an error message
// 3. Select the account type
// 4. Select the amount to withdraw
    // If the amount is greater than the balance, display an error message
// 5. Collect your cash 
// 6. Take your card

// Assingment One
// Write a program that determines the grade of a student based on the student's score
// A - 70 - 100
// B - 60 - 69
// C - 50 - 59
// D - 40 - 49
// E - 0 - 39

// 1.  Get the student's score - Input
// 2.  Determine the grade based on the score - Process
// 3.  Display the grade to the user - Output

const studentScore = 56;

// check if the student's score is greater than 100
if (studentScore > 100) {
    console.log('Invalid score');

    return;
}

// 
if(studentScore >= 70 && studentScore <= 100) {
    console.log('A');
} else if (studentScore >= 60 && studentScore <= 69) {
    console.log('B');
} else if (studentScore >= 50 && studentScore <= 59) {
    console.log('C');
} else if (studentScore >= 40 && studentScore <= 49) {
    console.log('D');
} else if (studentScore >= 0 && studentScore <= 39) {
    console.log('E');
} else {
    console.log('Invalid score');
}


// Assignment Two
// Write a program that determines the time of the day based on the current time and greet the user accordingly
// 12am - 12pm - Good morning
// 12pm - 6pm - Good afternoon
// 6pm - 12am - Good evening
// Tip: Use the Date object to get the current time

// 1. Get the current time (Convert to hours) - Input
// 2. Determine the time of the day - Process
// 3. Greet the user - Output

const currentTime = new Date();
const currentHour = currentTime.getHours();

// if (currentHour >= 0 && currentHour < 12) {
//     console.log('Good morning');
// } else if (currentHour >= 12 && currentHour < 18) {
//     console.log('Good afternoon');
// } else if (currentHour >= 18 && currentHour < 24) {
//     console.log('Good evening');
// } else {
//     console.log('Invalid time');
// }

// Assignment 3
// Write prime numbers from 1 to 100
// Prime numbers are numbers that are only divisible by 1 and itself

// 1,2,3,4,5,6,7,8,9,10
// 1 - 1;
// 2 - 1, 2;
// 3 - 1, 3;
// 4 - 1, 2, 4;
// 5 - 1, 5;


// 1. Get the numbers from 1 to 100 - Input
// 2. Divide the number by other lesser numbers until you get to the number itself - Process
// 3. If the division results in a remainder; If the result in step 2 is not equal to zero, then the number is a prime number - process
// 4. Display the prime numbers - Output

for (let num = 1; num <= 100; num++){
    let isPrime = true;

    // count from 2 up until the number itself
    // avoid 1 and the number itself
    for (let i = 2; i < num; i++) {

        // If the remainder after division is zero, then the number is not prime
        if (num % i === 0) {
            isPrime = false;

            break;
        }
    }

    // if the number is prime, print it
    if (isPrime) {
        console.log(num);
    }
}

