// 14.) Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//
// Enter number of years you live: 100
// You lived 3153600000 seconds.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter Number of Years?\n', year => {
    console.log(`Hey there ${year}!`);

    let d = year * 365
    let h = d * 24
    let m = h * 60
    let s = m * 60

    console.log("You lived " + s + " seconds.")

    readline.close();
  });
