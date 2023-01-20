/* 

Write a program which tells the number of days in a month.
Enter a month: January
January has 31 days.
Enter a month: JANUARY
January has 31 day
Enter a month: February
February has 28 days.
Enter a month: FEbruary
February has 28 days.

*/

let month = prompt("Enter a month: ");

let checkMonth = month.toLowerCase();

if(checkMonth == "january" || checkMonth == "march" || checkMonth == "may" || checkMonth == "july" || checkMonth == "august" || checkMonth == "october" || checkMonth == "december") {
    console.log(month + " has 31 days.");
}
else if(checkMonth == "april" || checkMonth == "june" || checkMonth == "september" || checkMonth == "november") {
    console.log(month + " has 30 days.");
}
else if(checkMonth == "february") {
    console.log(month + " has 28 days.");
}
else {
    console.log("Invalid month");
}
