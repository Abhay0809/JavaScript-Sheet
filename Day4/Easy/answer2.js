/* 

Compare the values of myAge and yourAge using if … else. Based on the
comparison and log the result to console stating who is older (me or you). Use
prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me.

*/

let myAge = prompt("Enter your age: ");
let yourAge = prompt("Enter your age: ");

if (myAge > yourAge) {
    console.log("You are " + (myAge - yourAge) + " years older than me.");
}