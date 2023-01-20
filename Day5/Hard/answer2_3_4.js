/* 

- Slice the first ten countries from the countries array
- Find the middle country(ies) in the countries array
- Divide the countries array into two equal arrays if it is even. If countries
array is not even , one more country for the first half

*/

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

// Find the middle country(ies) in the countries array
const middle = countries.length % 2 === 0 ? countries.slice(countries.length / 2 - 1, countries.length / 2 + 1) : countries.slice(Math.floor(countries.length / 2), Math.floor(countries.length / 2) + 1);
console.log(middle);

// Divide the countries array into two equal arrays if it is even. If countries
// array is not even , one more country for the first half
const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2));
console.log(firstHalf);
console.log(secondHalf);
