/*

Get user input using prompt(“Enter your age:”). If user is 18 or older , give
feedback:'You are old enough to drive' but if not 18 give another feedback
stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.
Enter your age:15
You are left with 3 years to drive.

*/

// Alternative use of prompt for node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter your age?\n', age => {
    console.log(`Hey there ${age}!`);

    if (age >= 18) {
        console.log("You are old enough to drive.")
    }
    else {
        console.log("You are left with " + (18 - age) + " years to drive.");
    }

    readline.close();
  });
