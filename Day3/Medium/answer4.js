// 4.) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let r = prompt("Enter the value of Radius: ")
let pi = 3.14

let aC = (pi * r * r)
let pC = (2 * pi * r)

alert("The area of the circle is " + aC)
alert("The perimeter of the circle is " + pC)