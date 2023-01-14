// 13.) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive
// if not tell the user to wait a certain amount of years.
//
//     Enter birth year: 1995
//     You are 25. You are old enough to drive
//
//     Enter birth year: 2005
//     You are 15. You will be allowed to drive after 3 years.

let year1 = prompt("Enter birth year: ")
let now1 = new Date()
let age = now1.getFullYear() - year1

if(age > 18) {
    alert("You are " + age + " . " + " You are old enough to drive")
} else {
    alert("You are " + age + " . " + " You will be allowed to drive after " + (18 - age) + " years.")
}

