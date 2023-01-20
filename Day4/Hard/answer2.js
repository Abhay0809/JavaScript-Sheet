/* 

 Write a program which tells the number of days in a month, now consider leap
year.

*/

let year = prompt("Enter a year: ");
let month = prompt("Enter a month: ");

let checkMonth = month.toLowerCase();

switch (checkMonth) {
    case "january":
        monthNum = 1;
        break;
    case "february":
        monthNum = 2;
        break;
    case "march":
        monthNum = 3;
        break;
    case "april":
        monthNum = 4;
        break;
    case "may":
        monthNum = 5;
        break;
    case "june":
        monthNum = 6;
        break;
    case "july":
        monthNum = 7;
        break;
    case "august":
        monthNum = 8;
        break;
    case "september":
        monthNum = 9;
        break;
    case "october":
        monthNum = 10;
        break;
    case "november":
        monthNum = 11;
        break;
    case "december":
        monthNum = 12;
        break;
}
if(monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
    return 30;
} else if(monthNum === 2) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 29;
    } else {
        return 28;
    }
} else {
    return 31;
}