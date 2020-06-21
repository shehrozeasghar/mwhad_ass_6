// // Task 1

// document.write("<br>Task-1<br><br>")
// var nameFirst = prompt("Enter first name", "First name")
// var nameLast = prompt("Enter last name", "Last name")
// var fullName = (nameFirst + " " + nameLast)
// document.write(fullName)

// // Task 2

// document.write("<br>2<br>Task-2<br><br>")
// var nameModel = prompt("Enter your favourite mobile phone model")
// document.write("My favourite phone is: " + nameModel + "<br>Length of string: " + nameModel.length)


// //Task 3

// document.write("<br><br>Task-3<br><br>")
// var stringg = "Pakistani"
// document.write("String: " + stringg + "<br>")
// for (var i = 0; i < stringg.length; i++) {
//     if (stringg[i] == 'n') {
//         document.write("Index of n: " + i)
//     }
// }

// //Task 4

// document.write("<br><br>Task-4<br><br>")
// var stringg = "Hello World"
// document.write("String: " + stringg + "<br>")
// for (var i = 0; i < stringg.length; i++) {
//     if (stringg[i] == 'l') {
//         document.write("Last index of l: " + i)
//     }
// }


// //Task 5

// document.write("<br><br>Task-5<br><br>")
// var stringg = "Pakistani"
// document.write("String: " + stringg + "<br>")
// document.write("Character at index 3: " + stringg[3])


// // Task 6

// document.write("<br>Task-6<br><br>")
// var nameFirst = prompt("Enter first name", "First name")
// var nameLast = prompt("Enter last name", "Last name")
// var fullName = nameFirst.concat(" ", nameLast)
// document.write(fullName)


// // Task 7

// document.write("<br>Task-7<br><br>")
// var city = "Hyderabad"
// var cityNew = city.replace("Hyder", "Islam")
// document.write("City: " + city + "<br> After replacement: " + cityNew)


// Task 8

// document.write("<br>Task-8<br><br>")
// var text = "Ali and Sami are best friends. They play cricket and football together."
// var textNew = text.replace("and", "&")
// document.write("Message: " + text + "<br> After replacement: " + textNew)


// // Task 9

// document.write("<br>Task-9<br><br>")
// var text = "472"
// var num = Number(text)
// document.write("Value: " + text + "<br> Type: " + typeof(text) + "<br>Value: " + num + "<br>Type: " + typeof(num))

// // // Task 10

// document.write("<br>Task-10<br><br>")
// var texty = prompt("Enter word or text", "Type here")
// document.write("User Input: " + texty + "<br>Upper Case: " + texty.toUpperCase())


// Task 11

// document.write("<br>Task-11<br><br>")
// var texty = prompt("Enter word", "Type here")
// var alphaNum = texty.charCodeAt(0)
//     // document.write(alphaNum)
// alphaNum1 = alphaNum - 32
// numAlpha = String.fromCharCode(alphaNum1)
//     // document.write("<br>" + numAlpha)

// document.write("User input: " + texty)
// var newTexty = texty.replace(texty[0], numAlpha)
//     // document.write("<br>" + texty[0])
// document.write("<br> Title case: " + newTexty)


// // Task 12

// document.write("<br>Task-12<br><br>")
// var num = 35.63
// document.write("Number: " + num + "<br>")
// var numString = String(num)
//     // document.write(typeof(numString.length))
// for (var i = 0; i < numString.length; i++) {
//     if (numString[i] == ".") {
//         numString[i] = ''
//     }
// }
// document.write("Result: " + numString)



// // Task 13

// document.write("<br>Task-13<br><br>")
// var userName = prompt("Enter username", "Enter here..")
// for (var i = 0; i < userName.length; i++) {
//     if (userName[i] == "@" || userName[i] == "!" || userName[i] == "," || userName[i] == ".") {
//         alert("Please Enter valid username..")
//     }
// }
// document.write("<br> Username is valid..")


// // Task 14

// document.write("<br>Task-14<br><br>")
// var items = ["cake", "cookie", "chips", "patties", "apple pie"]
// var itemName = prompt("Welcome to ABC bakery. What you want to order sir/ma'am", "Enter order here..")
// var itemName1 = itemName.toLowerCase()
// for (var i = 0; i < items.length; i++) {
//     if (items[i] == itemName1) {
//         document.write(itemName + " available at index " + i + " in our bakery")
//         break
//     } else {
//         document.write("We are sorry. " + itemName + "is not available in our bakery.")
//         break
//     }
// }


// // Task 15

// document.write("<br>Task-15<br><br>")
// var password = prompt("Enter password", "Enter here")
// // document.write(password.match("^[a-zA-Z]+$"))

// if()


// // Task 16

// document.write("<br>Task-16<br><br>")
// var university = "University of Karachi"
// var arrUni = university.split("")
// for (var i = 0; i < arrUni.length; i++) {
//     document.write(arrUni[i] + "<br>")
// }


// // Task 17

// document.write("<br>Task-17<br><br>")
// var inputt = prompt("Enter word")
// document.write("User input: " + inputt + "<br>Last character of input: " + inputt[inputt.length - 1])


// // Task 18
// document.write("<br>Task-18<br><br>")
// var temp = "The quick brown fox jumps over the lazy dog";
// var temp1 = temp.toLowerCase()
// var count = (temp1.match(/the/g) || []).length;
// document.write("Text: " + temp + "<br>There are " + count + " occurances of word 'the'");