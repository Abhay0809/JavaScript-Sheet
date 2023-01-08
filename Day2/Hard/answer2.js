
// 2.) Use match() to count the number of all because in the following sentence:
//     'You cannot end a sentence with because because because is a conjunction'

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence2.match(/because/gi).length)
