// 1.) Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// 2.) Print the string on the browser console using console.log()
// 3.) Print the length of the string on the browser console using console.log()
// 4.) Change all the string characters to capital letters using toUpperCase() method
// 5.) Change all the string characters to lowercase letters using toLowerCase() method
// 6.) Cut (slice) out the first word of the string using substr() or substring() method
// 7.) Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// 8.) Check if the string contains a word Script using includes() method
// 9.) Split the string into an array using split() method
// 11.) Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// 12.) What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// 13.) What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// 14.) Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// 15.) Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// 20.) Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// 21.) Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// 22.) Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// 23.) Use match() method to find all the a’s in 30 Days Of JavaScript

let challenge = '30 Days Of JavaScript'

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2))
console.log(challenge.substring(10,21))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.trim(' '))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match(/a/g))

// 10.) 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

 let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(" "))

// 16.) Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 17.) Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 18.) Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

// 24.)  Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let task = '30 Days of'
console.log(task.concat(' JavaScript'))


// 25.) Use repeat() method to print 30 Days Of JavaScript 2 times

let name = 'JavaScript'
console.log(name.repeat(2))
