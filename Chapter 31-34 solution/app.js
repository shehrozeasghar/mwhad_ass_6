// //Task-1
// document.write("<br>Task-1<br><br>")
// var dateDay = new Date()
// document.write(dateDay)

// //Task-2
// document.write("<br>Task-2<br><br>")
// var monthy = dateDay.toLocaleString('default', { month: 'long' })
// document.write("Current Month: " + monthy + "<br>")

// //Task-3
// document.write("<br>Task-3<br><br>")
// var todayStatus = 0
// var dayy = dateDay.getDay()
//     // document.write("Today is " + dayy + "<br>")
//     // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var dayss = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
// for (var i = 0; i < dayss.length; i++) {
//     if (i == dayy) {
//         document.write("Today is " + dayss[i] + "<br>")
//         todayStatus = dayss[i]
//     }
// }

// //Task-4
// document.write("<br>Task-4<br><br>")
// if (todayStatus == "Sun" || todayStatus == "Sat") {
//     document.write("It's Fun day")
// }

// //Task-5
// document.write("<br><br>Task-5<br><br>")
// var datee = dateDay.getDate()
//     // document.write(datee)

// if (datee < 16) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }


// //Task-6
// document.write("<br>Task-6<br><br>")
// var dateDay = new Date()
// var miliSec = dateDay.getTime()
// var minutes = miliSec / (1000 * 60)
// document.write("Current date: " + dateDay + "<br>Elapsed milliseconds since January 1, 1970: " + miliSec + "<br>Elapsed minutes since January 1, 1970: " + minutes)


// //Task-7
// document.write("<br><br>Task-7<br><br>")
// var hourly = dateDay.getHours()
//     // document.write(hourly)
// if (hourly >= 0 && hourly <= 12) {
//     document.write("It's AM..<br>")
// } else {
//     document.write("It's PM..<br>")

// }

// //Task-8
// document.write("<br><br>Task-8<br><br>")

// //Task-9
// document.write("<br><br>Task-9<br><br>")
// var startRamd = new Date('April 25, 2020')
// var todayRamd = new Date()
// var todayRamdmili = todayRamd.getTime()
//     // document.write(startRamd)
// var startRamdmili = startRamd.getTime()
//     // document.write(startRamdmili)
//     // document.write("<br>" + todayRamdmili)
// var timediff = ((todayRamdmili - startRamdmili) / (1000 * 60 * 60 * 24))
// var timediffRound = Math.floor(timediff)
// document.write(timediffRound + " days has been passed since 1st Ramadan, 2020")


// //Task-10
// document.write("<br><br>Task-10<br><br>")
// var refDate2 = new Date('Dec 05, 2015')
// var refDate1 = new Date('Jan 01, 2015')
// var refDatemili1 = refDate1.getTime()
//     // document.write(startRamd)
// var refDatemili2 = refDate2.getTime()
//     // document.write(startRamdmili)
//     // document.write("<br>" + todayRamdmili)
// var timediff = ((refDatemili2 - refDatemili1) / (1000))
// var timediffRound = Math.floor(timediff)
// document.write("On reference date " + refDate2 + ", " + timediffRound + " seconds had passed since beginning of 2015")

//Task-11
document.write("<br><br>Task-11<br><br>")
var todayDate = new Date()
var currentHour = todayDate.getHours()
document.write("<br>" + currentHour)
var afterOne = currentHour + 1
var afterOneHour = todayDate.setHours(afterOne)
    // document.write("<br>" + afterOneHour)


// //Task-12
// document.write("<br><br>Task-12<br><br>")
// var todayDate = new Date()
//     // var pastDate = new Date()
// var pastDate = todayDate.setFullYear((2020 - 100))
// var pastDate1 = new Date(pastDate)
// document.write("Current date: " + todayDate + " 100 years back, it was " + pastDate1)


// //Task-13
// document.write("<br><br>Task-13<br><br>")
// var agee = 34
//     // prompt("Enter Age: ")
// var currenty = new Date()
//     // document.write("<br>" + currenty)
// var yearly = currenty.getFullYear()
// var yourYeary = Number(yearly) - Number(agee)
//     // document.write("<br>" + yearly)
// document.write("<br>Your age is " + agee + "<br>Your birth year is " + yourYeary)


// //Task-14
// document.write("<br><br>Task-14<br>")
// var nameCust = "ABC Customer"
// var month = dateDay.toLocaleString('default', { month: 'long' })
// var unitNo = 410
// var unitChar = 16
// var amountNet = unitNo * unitChar
// var lateChar = 350
// amountGross = amountNet + lateChar

// document.write("<br><h1>K-Electric bill</h1><br>Customer Name: <b>" + nameCust + "</b><br>Month: <b>" +
//     month + "</b><br>Number of units: <b>" + unitNo + "</b><br>Charges per unit: <b>" + unitChar +
//     "</b><br><br>Net Amount Payable (within due date): <b>" + amountNet + "</b><br>Late payment surcharge: <b>" +
//     lateChar + "</b><br>Gross Amount Payable (after due date): <b>" + amountGross + "</b>")