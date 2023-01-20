//  In countries array check if 'Ethiopia' exists in the array if it exists print
// 'ETHIOPIA'. If it does not exist add to the countries list.

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

for (let i = 0; i < countries.length; i++) {
    if (countries[i] === 'Ethiopia') {
        console.log('ETHIOPIA');
        break;
    } else if (i === countries.length - 1) {
        countries.push('Ethiopia');
    }
}