// //Task 1
// document.write("<br>Task-1<br><br>")
// var number = 3.45214
// var roundy = Math.round(number)
// var floory = Math.floor(number)
// var ceiliy = Math.ceil(number)
// document.write("<br> Number: " + number + "<br>Round off value: " + roundy + "<br>Floor value: " + floory + "<br>Ceil value: " + ceiliy)


// //Task 2
// document.write("<br>Task-2<br><br>")
// var number = -2.673
// var roundy = Math.round(number)
// var floory = Math.floor(number)
// var ceiliy = Math.ceil(number)
// document.write("<br> Number: " + number + "<br>Round off value: " + roundy + "<br>Floor value: " + floory + "<br>Ceil value: " + ceiliy)

// //Task 3
// document.write("<br>Task-3<br><br>")
// var number = -4
// var absolutee = Math.abs(number)
// document.write("<br> Number: " + number + "<br>Absolute value: " + absolutee)

// //Task 4
// document.write("<br>Task-4<br><br>")
// var randomee = Math.random() * (7 - 1) + 1 //(Max - min) + min
// var floory = Math.floor(randomee)
// document.write("<br>Random Dice value: " + floory)

// //Task 5
// document.write("<br>Task-5<br><br>")
// var randomee = Math.random() * 2
// var floory = Math.floor(randomee)
// if (floory == 0) {
//     document.write("<br>Random coin value: Head")
// } else {
//     document.write("<br>Random coin value: Tail")
// }

// //Task 6
// document.write("<br>Task-6<br><br>")
// var randomee = Math.random() * (101 - 1) + 1 //(Max - min) + min
// var floory = Math.floor(randomee)
// document.write("<br>Random number between 1 and 100: " + floory)



// //Task 7
// document.write("<br>Task-7<br><br>")
// var userWeig = prompt("Enter your weight in Kilograms")
// var matches = userWeig.match(/\d+/g)
// document.write("<br> The weight of user is " + matches + " kilograms")


//Task 8
document.write("<br>Task-8<br><br>")
var randomee = Math.random() * (11 - 1) + 1 //(Max - min) + min
var floory = Math.floor(randomee)
var userInput = prompt("Enter the number between 1 and 10")
if (userInput == floory) {
    document.write("<br>Congratulations.. You have gussed the number")
} else {
    document.write("<br>Please try again")
}