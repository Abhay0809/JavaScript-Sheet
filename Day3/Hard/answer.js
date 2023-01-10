/*
1.  Create a human readable time format using the Date time object. The hour and
    the minute should be all the time two digits(7 hours should be 07 and 5 minutes
    should be 05 )

    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

let now = new Date()

let year = now.getFullYear()

let DD = (now.getDate() < 10 ? '0' : '') + now.getDate();
let MM = ((now.getMonth() + 1) < 10 ? '0' : '') + (now.getMonth() + 1);
let HH = (now.getHours() < 10 ? '0' : '') + now.getHours();
let mm = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();


console.log(year + "-" + MM + "-" + DD + " " + HH + ":" + mm)

