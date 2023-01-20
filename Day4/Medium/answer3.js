/* 

Check if a day is weekend day or a working day. Your script will take day as an
input.

What is the day today? Saturday
Saturday is a weekend.
What is the day today? saturDaY
Saturday is a weekend.
What is the day today? Friday
Friday is a working day.
What is the day today? FrIDAy
Friday is a working day.


*/

let day = prompt("What is the day today? ");

let checkDay = day.toLowerCase();

if (checkDay == "saturday" || checkDay == "sunday") {
    console.log(day + " is a weekend.");
}
else if (checkDay == "monday" || checkDay == "tuesday" || checkDay == "wednesday" || checkDay == "thursday" || checkDay == "friday") {
    console.log(day + " is a working day.");
}
else {
    console.log("Invalid day");
}