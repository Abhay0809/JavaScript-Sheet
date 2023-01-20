/* 

The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
console.log(ages);

// Find the median age(one middle item or two middle items divided by two)
const median = ages.length % 2 === 0 ? (ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2 : ages[Math.floor(ages.length / 2)];
console.log(median);

// Find the average age(all items divided by number of items)
const average = ages.reduce((a, b) => a + b) / ages.length;

// Find the range of the ages(max minus min)
const range = ages[ages.length - 1] - ages[0];

// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(ages[0] - average));
console.log(Math.abs(ages[ages.length - 1] - average));


