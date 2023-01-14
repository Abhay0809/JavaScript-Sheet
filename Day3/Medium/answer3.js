// 3.) Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let l = prompt("Enter the value of Length: ")
let w = prompt("Enter the value of Width: ")

let aR = l * w
let pR = (2 * (l + w))

alert("The area of the rectangle is " + aR)
alert("The perimeter of the rectangle is " + pR)