// 1. Declare an empty array;
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6];

// 3. Find the length of your array
console.log(numbers.length);

// 4. Get the first item, the middle item and the last item of the array    
console.log(numbers[0]);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers[numbers.length - 1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array
// and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'a', true, null, undefined, { name: 'John' }];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook,
// Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
const middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
// IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(' and ') + ' are big IT companies.');

// 13. Check if a certain company exists in the itCompanies array. If it exist return
// the company else return a company is not found
const company = 'Google';
if (itCompanies.includes(company)) {
    console.log(company);
} else {
    console.log('Company is not found');
}

// 14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] === 'o') {
            count++;
        }
    }
    if (count > 1) {
        console.log(itCompanies[i]);
    }
}

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3));

// 19. Slice out the middle IT company or companies from the array
const middleIndexIT = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
    console.log(itCompanies.slice(middleIndexIT - 1, middleIndexIT + 1));
} else {
    console.log(itCompanies[middleIndexIT]);
}

// 20. Remove the first IT company from the array
console.log(itCompanies.slice(1));

// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
    console.log(itCompanies.slice(0, middleIndexIT - 1).concat(itCompanies.slice(middleIndexIT + 1)));
}
else {
    console.log(itCompanies.slice(0, middleIndexIT).concat(itCompanies.slice(middleIndexIT + 1)));
}

// 22. Remove the last IT company from the array
console.log(itCompanies.slice(0, itCompanies.length - 1));

// 23. Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length));
