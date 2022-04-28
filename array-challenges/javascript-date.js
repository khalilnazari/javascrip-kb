// month names
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Week days 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// date object. 
const date = new Date(); 

/**
 * Four ways to create date
 * 1. new Date()
 * 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)  const d = new Date(2018, 11, 24, 10, 33, 30, 0);
 * 3. new Date(milliseconds)
 * 4. new Date(date string)
*/

// 1. current date: new Date()
let currentDate = new Date(); 

// 2. Given date: new Date(year, month, day, hours, minutes, seconds, milliseconds)
let givenDate = new Date(2022); // only year
givenDate = new Date(2022, 12) // year, month 
givenDate = new Date(2022, 10, 5) // year, month, day 
givenDate = new Date(2022, 10, 5, 12) // year, month, day, and hour
givenDate = new Date(2022, 10, 5, 12) // year, month, day, and hour, minute
givenDate = new Date(2018, 11, 24, 10, 33, 30); // year, month, day, and hour, minute, seconds

// 3 given milliseconds
let millisecondsDate = new Date(100000000000); 

// 4 given string 
const stringDate_1 = new Date("October 13, 2014 11:13:00");
const stringDate_2  = new Date("13 October, 2014 11:13:00"); // same as above




/***************** Date Methods ***************** */
// date is declated on the top; 

// .toString(); 
// Display all detail of date. 
let dateString = date.toString(); // Thu Apr 28 2022 12:26:56 GMT+0800 (Malaysia Time)

// .toUTCString() 
// Standard display of date. 
dateString = date.toUTCString();  // Thu, 28 Apr 2022 04:27:44 GMT


// .toDateString()
// Display date in more readable format
dateString = date.toDateString(); // Thu Apr 28 2022

// .toISOString(); 
// convert date in ISO format
dateString = date.toISOString();






/***************** Get Date Methods **************** */
// .getFullYear()
let getFullYear = date.getFullYear(); // 2022

// .getMonth(); 
let getMonth = date.getMonth(); //  months[0-11]
let monthString = months[getMonth] // April

// .getDate(); 
let getDate = date.getDate(); // 28

// .getHours(); 
let getHours = date.getHours(); // 12

// .getMinutes(); 
let getMinutes = date.getMinutes(); // 44

// .getSeconds(); 
let getSeconds = date.getSeconds(); // 34

// .getMilliseconds(); 
let getMilliseconds = date.getMilliseconds(); // 800

// .getTime(); 
// display date in milliseconds
let getTime = date.getTime(); // 1651121123810 

// .getDay(); 
// get week day [0-6]
let getDay = date.getDay(); // 1651121123810 
let weekDay = days[getDay] // Thursday





/***************** Set Date Methods **************** */
const setDate = new Date(); 
console.log(setDate.toString())

// setFullYear()
setDate.setFullYear(2023); 

// setMonths(); 
setDate.setMonth(2)

// setDate();
setDate.setDate(19) 

// setHours(); 
setDate.setHours(10); 

// setMinutes(); 
setDate.setMinutes(44);

// setSeconds(); 
setDate.setSeconds(31); 

// setMilliseconds(); 
setDate.setMilliseconds();

// setTime(); 