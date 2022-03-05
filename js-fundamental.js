/**
 * 
 * Wirtten by Khalil Nazari 
 * Date: 4 March 2022
 */


/**
 ************************************* methods to print in js file
*/
// show message in alert boxt 
alert('print in alert box')

// show message in console 
console.log('print in consule')

// show a message on webpage
document.write('print on web page')





/**
 ************************************* "use strict"
 * wirting "put strict" on the top of js page enable js to run as modern js 
 */
"use strict"





/**
 ************************************* Variables in Javascript
 */
// declaration 
let message; 
// initializaiton
message = 'Hey there...' 
// declare and initialize together 
let message2 = 'Whats up...?' 
// Create multiple variable 
let str = 'this is a string', 
    num = 123, 
    arr = [12, 34], 
    obj = new Object(), 
    isEvent = true; 
  
let myName; // value is undefined; 
myName = null // value is null.   

// variable naming: car is Car is different variable  
let car, Car; 

// constant variable 
const PAGE_COLOR = '#fff'





/**
 ************************************* Data Types in Javascript
 */
// Number 
let number = 123
let number3 = 23.334; 

// Infinity 
console.log( 1 / 0) // 1/0 = infinity

// NaN: Not A Number
console.log( "string" / 12 ) // string divid by number = NaN
NaN + 1 == NaN
3 * NaN == NaN

//bigInt
// bigint can hold up to (253-1) or -(253-1)
let bigInt = 1234567890123456789012345678901234567890n; 

//String 
let string1 = "double quotes string"
let string2 = 'single quotes string'
let phrase = `concat string with string1, ${string1}`

// Boolean 
let isBigger = 4 > 1; 
let isSmaller = 4 > 1; 

// Null 
// null prevent the error undefined.
// represents “nothing”, “empty” or “value unknown”.
let age = null;

// undefined: meaning no value is assigned to the variable. 
let count; 

// typeof operator 
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)





/**
 ************************************ Type Conversions
 */

// to String
let value = true; 
// typeof value == true 
String(value)
// typeof value == string

// to Number 
let num1 = "123"; // string
Number(num1) // Number
let isEven = true; // 1
Number(isEven) // "true"

//If the string is not a valid number, the result of such a conversion is NaN
let notNumberStr = Number("an arbitrary string instead of a number"); //NaN

Number(undefined) // NaN
Number(null) // 0 
Number(true) // 1 
Number(false) // 0 
Number("124") // 124 
Number('123szz') // NaN 
Number('lons tring') // NaN

// to Boolean 
Boolean(1) // true
Boolean(0) // false
Boolean("some string") // true
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false





/**
 ************************************ Basic operators, maths
 */
// 1 + 1 = 2;
// 1 * 2 = 2; 
// 4 / 2 = 2; 
// 5 % 2 = 1; 
// 2 ** 3 = 8

// Crazy operators (; 
// "my" + "string" = "mystring"
// '2' + 2 = 22
// '32' + 3 = 323
// 2 + 2 + "3" = 43
// "1" + 2 + 2 = 122
// 6 - "2" = 4
// "6" / "2" = 3
// +true = 1 
// +"" = 0 

// Modify-in-place
let n = 2; 
n = n + 4; // another way: n += 3 
n = n * 3; // another way: n *= 3;  

// Increment/decrement
let coutner = 2; 
// postfix 
counter++;  // inc
counter--; // dec
//prefix
++counter //inc 
--conter  // dec





/**
 ************************************ Bitwise operators
 */
//  AND ( & )
//  OR ( | ) 
//  XOR ( ^ ) 
//  NOT ( ~ )
//  LEFT SHIFT ( << )
//  RIGHT SHIFT ( >> )
//  ZERO-FILL RIGHT SHIFT ( >>> )





/**
 ************************************ comparison
 */
// the result is boolean
// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// = is assign operator
// == is equality operator
// === is strict equality operator 

// Crazy 
'2' > 1 // true 
'01' == 1  // true 
true == 1  // true
false == 0 // true
null === undefined // false 
null == undefined // true 

// funny 
let a = 0, b = "0"; 
Boolean(a) // false 
Boolean(b) // true 
a === b // true 

// WTF 
null > 0 // false 
null == 0 // flase 
null >= 0 // true 
null <= 0 // true 
undefined > 0 // false 
undefined < 0 // false 
undefined == 0 // false 





/**
 ************************************* Conditional branching:
 */
//falsy
if(0) {    
    // this code will never execute
}
// truthy
if (1) {
    // this code will always execute
}

// if 
let year = 2000; 
if (year == 2000) {
    // code goes here
}

// if else 
if (year == 2000) {
    // code goes here
} else {
    // other code goes here 
}

// if else if 
if (year == 2000) {
    // code goes here
} if (year < 2000) {
    // other code goes here 
} else {
    // anothere code goes here
}


// Conditional operator ‘?’
let lenght = 101; 
let isM = lenght >= 100 ? 'm' : 'cm'; // m
let ages = 21; 
let accessAllowed = (ages > 18) ? true : false; // true 
// multiple
lenght = 10001; 
isM = lenght < 100 ? 'cm' : 
    (lenght < 1000) ? 'm' : 
    (lenght >= 10000) ? 'km': 'hm'; 





/**
 * ************************************* Logical Operatro 
 */
// || (OR)
// true || true  = true 
// true || false  = true 
// false || true  = true 
// true || true  = false 
let hour = 9;
if (hour < 10 || hour > 18) {
   console.log( 'The office is closed.' );
}
// OR "||" finds the first truthy value
let result = 0 || false || 1 || null; // 1

let firstName = "";
let lastName = "";
let nickName = "Ahmad";
console.log( firstName || lastName || nickName || "Anonymous"); // Ahmad

// && (AND)
// true && true  = true 
// false && true  = false 
// true && false  = false 
// false && false  = false
hour = 11;
if (hour > 10 && hour < 18) {
   console.log( 'The office is open.' );
}
hour == 8; 
if (hour > 10 && hour < 18) {
    console.log( 'The office is close.' );
}

//AND “&&” finds the first falsy value
result = "" && null && 'time'; // null
result = 0 && "no matter what" // 0
result = null && "5" // null
result = 1 && 5 // 5

// && has higher precedence 
true && true || false 
//(true) || false = true 

// ! (NOT) Operator 
result = !1; // flase 
result = !0; // true 
result = !true; // false 
result = !false; // true 





/**
 * *************************************  Loops: while and for
*/
let i = 0;
// print: 0, 1, 2
while (i < 3) { 
    console.log(i);
    i++;
}

i = 3; 
// print : 3, 2, 1
while (i) {
    console.log(i)
    i--; 
}

// do while loop 
i = 0;
// pint : 0, 1, 2
do {
  console.log(i);
  i++;
} while (i < 3);

// The “for” loop
// print: 1, 2, 3
for (let i = 1; i <= 3 ; i++) {
    console.log(i)
} 
// skip
i = 1
for (; i <= 3 ;) {
    console.log(i)
    i++
}

// Break loop 
let stopAt = 4; 
for (let i = 1; i <= 10 ; i++) {
    if(i > stopAt) {
        break; // exit form for loop
        console.log(i)
    }
} 

// Continue the next iteration
for (let i = 1; i <= 10 ; i++) {
    if(i % 2 == 0) {
        continue; // cancel this iteration and continue to exit one
        console.log(i)
    }
} 








/**
 * *************************************  The "switch" statement
 */

 num = 4;
 // execut case 4 only 
 switch (num) {
    case 3:
        console.log( 'Too small' );
        break;

    case 4:
        console.log( 'Exactly!' );
        break;

    case 5:
        console.log( 'Too big' );
        break;

    default:
        console.log( "I don't know such values" );
}

num = 4;
// execuate all cases because there is no break 
switch (num) {
    case 3:
        console.log( 'Too small' );
        break;

    case 4:
        console.log( 'Exactly!' );
        break;

    case 5:
        console.log( 'Too big' );
        break;

    default:
        console.log( "I don't know such values" );
}


// grouping of cases: 4 and 5 will excecute 
switch (num) {
    case 3:
        console.log( 'Too small' );
        break; 
        
    case 4:
        console.log( 'Exactly!' );
        
    case 5:
        console.log( 'Too big' );
        break; 

    default:
        console.log( "I don't know such values" );
}

num = 100; 
// execuate default 
switch (num) {
    case 3:
        console.log( 'Too small' );

    case 4:
        console.log( 'Exactly!' );

    case 5:
        console.log( 'Too big' );

    default:
        console.log( "I don't know such values" );
}





/**
 * *************************************  Functions
 */




/**
 * *************************************  Function expressions
 */




/**
 * *************************************  Arrow functions, the basics
 */




/**
 * *************************************  JavaScript specials
 */
