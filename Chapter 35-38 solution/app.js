// //Task-1
// document.write("<br><br>Task-1<br><br>")

// function datetime() {
//     var datetimevar = new Date()
//     document.write(datetimevar + "<br>")
// }

// datetime()

// //Task-2
// document.write("<br><br>Task-2<br><br>")

// function greetin() {
//     var first = prompt("Enter your first name")
//     var last = prompt("Enter your last name")
//     alert("Hello " + first + " " + last)
// }

// greetin()

// //Task-3
// document.write("<br><br>Task-3<br><br>")

// function addition() {
//     var first = +(prompt("Enter first number"))
//     var second = +(prompt("Enter second number"))
//     var add = first + second
//     document.write("The result of addition of " + first + " and " + second + " is " + add)
// }

// addition()

// //Task-4
// document.write("<br><br>Task-4<br><br>")

// function calc() {
//     var first = +(prompt("Enter first number"))
//     var oper = (prompt("Enter operator (+, -, *, /, %, ^)"))
//     var second = +(prompt("Enter second number"))
//     if (oper == '+') {
//         var add = first + second
//         return add
//     }
//     if (oper == '-') {
//         var add = first - second
//         return add
//     }
//     if (oper == '*') {
//         var add = first * second
//         return add
//     }
//     if (oper == '/') {
//         var add = first / second
//         return add
//     }
//     if (oper == '%') {
//         var add = first % second
//         return add
//     }
//     if (oper == '^') {
//         var add = Math.pow(first, second)
//         return add
//     }
// }


// document.write("The result is " + calc())


// //Task-5
// document.write("<br><br>Task-5<br><br>")

// function squ(a = 5) {
//     var b = Math.pow(a, 2)
//     return b
// }

// document.write("The result of square of 7 is " + squ(7))


// //Task-6
// document.write("<br><br>Task-6<br><br>")

// function facto(a = 5) {
//     if (a == 1) {
//         return 1
//     } else {
//         return a * (facto(a - 1))
//     }
// }


// var a = +(prompt("Enter number for factorial..."))
// document.write("The result of factorial of " + a + " is " + facto(a))

// //Task-7
// document.write("<br><br>Task-7<br><br>")

// function count(a = 1, b = 10) {
//     for (var i = a; i <= b; i++) {
//         document.write(i + "<br>")
//     }
//     document.write("Counting Complete" + "<br>")
// }

// var a = prompt("Enter start of counting: ")
// var b = prompt("Enter end of counting: ")
// count(a, b)


// //Task-8
// document.write("<br><br>Task-8<br><br>")

// function calculateSquare(a) {
//     var b = Math.pow(a, 2)
//     return b
// }

// function calculateHypotenuse(base, perpend) {
//     var baseSq = calculateSquare(base)
//     var perpendSq = calculateSquare(perpend)
//     var hyptoSq = baseSq + perpendSq
//     var hypo = Math.sqrt(hyptoSq)
//     return hypo
// }

// var base = +(prompt("Enter value of base.."))
// var perpend = +(prompt("Enter value of perpendicular.."))
// document.write("The hypotenuse is " + calculateHypotenuse(base, perpend))


// //Task - 9
// document.write("<br><br>Task-9<br><br>")

// function calculateArea(height = 2, width = 2) {
//     var area = width * height
//     return area
// }

// //Argument as value

// document.write("Area of rectangle with height of 3 and width of 5 is " + calculateArea(3, 5) + "<br>")

// //Argument as variables
// var height = 5
// var width = 6
// document.write("Area of rectangle with height of " + height + " and width of " + width + " is " + calculateArea(height, width) + "<br>")





// //Task - 10
// document.write("<br><br>Task-10<br><br>")


// function strReverse(stringg) {
//     var splitString = stringg.split("")
//         // document.write(splitString)
//     var reverseArray = splitString.reverse()
//         // document.write(reverseArray)
//     var joinArray = reverseArray.join("")
//     return joinArray
// }

// function palindrome(stringg) {
//     var strRev = strReverse(stringg)
//         // document.write(strRev)
//     if (stringg == strRev) {
//         document.write("You have provided a palindrome")
//     } else {
//         document.write("You have not provided a palindrome")
//     }
// }



// palindrome("dfan")



// //Task - 11
// document.write("<br><br>Task-11<br><br>")

// function capitalize(stringg) {
//     var seprate = stringg.split(" ")
//         // document.write(seprate)
//     for (var i = 0; i < seprate.length; i++) {
//         // document.write(seprate[i] + "<br>")
//         seprate[i] = seprate[i].charAt(0).toUpperCase() + seprate[i].substring(1)
//             // document.write(seprate[i] + "<br>")
//         var capitalStr = seprate.join(" ")
//     }
//     document.write("Input: " + stringg + "<br>Output: " + capitalStr)
// }

// capitalize("There is no way")


// //Task - 12
// document.write("<br><br>Task-12<br><br>")

// function longWord(stringg) {
//     var seprate = stringg.split(" ")
//     var wordLength = 0
//     var wordItself = ""
//         // document.write(seprate)
//     for (var i = 0; i < seprate.length; i++) {
//         if (seprate[i].length > wordLength) {
//             wordLength = seprate[i].length
//             wordItself = seprate[i]
//         }
//     }
//     return wordItself
// }


// var stringg = "Here we have Biggest shops"
// document.write("The string is: " + stringg + "<br>The longest word is: " + longWord(stringg))



// //Task - 13
// document.write("<br><br>Task-13<br><br>")

// function occurance(stringg, letter) {
//     var occur = 0
//     for (var i = 0; i < stringg.length; i++) {
//         if (stringg[i] == letter) {
//             occur = occur + 1
//         }
//     }
//     return occur
// }


// var stringg = prompt("Enter text here")
// var stringg1 = stringg.toLowerCase()
// var letter = prompt("Enter letter here")
// var letter1 = letter.toLowerCase()
// document.write("The provided string is: " + stringg + "<br>The letter " + letter + " appeared " + occurance(stringg1, letter1) +
//     " times in the string")



//Task - 14
document.write("<br><br>Task-14<br><br>")
var pi = 3.14

function calcCircumference(radius) {
    var circum = (2 * pi * radius).toFixed(2)
    return circum
}

function calcArea(radius) {
    var radSq = Math.pow(radius, 2)
    var area = pi * radSq
    return area
}


var radius = 10
document.write("The radius of circle is " + radius + "<br>The circumference of circle is " + calcCircumference(radius) + "<br>The Area of circle is " + calcArea(radius))