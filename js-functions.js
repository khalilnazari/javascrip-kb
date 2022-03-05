/**
 * 
 * Wirtten by Khalil Nazari 
 * Date: 5 March 2022
 */


// Functions are resusable 
// writing function avoid code repetition 
// Functions are called many times when the same things to be done 
// each function is separate depented or independent building blocks of code. 

// Function declaration 
function showMessage () {
    console.log('Hey there!')
}

// call showMessage function as much as needed.  
showMessage(); 
showMessage(); 
showMessage(); 
showMessage(); 

// Variables declared inside a function are visible only inside that function. 
function printMessage() {
    let message = "Javascript is cool!"; 
    console.log(message); 
}
printMessage();
console.log(message) // undefined

// functions in JS can access out variables and able to modify it 
const TEXT_COLOR = '#fff'; 
function setText() {
    text.style.color=TEXT_COLOR;
    TEXT_COLOR = '#fff000' 
    textSeconday.style.color = TEXT_COLOR; 
}
setText(); 

// local variable is accessible only inside the function. 
let morningMessage = "Good morning!"; 
function goodMorning () {
    let morningMessage = "Good morning everybody!"; 
    console.log(morningMessage); 
}
goodMorning() // "Good morning everybody!"
console.log(morningMessage) // "Good morning!"





/**
 * Parameters
 * Parameters
 * Parameters
 * 
 * 
 * 
 * Data can be pass to functions using parameters
 */

// function with two parameters
function message(from, text) {
    console.log(`${from}: ${text}`); 
} 
message('Khalil', 'happy coding!'); // value passed here is called arguments 

// parameters can be modified 
function message(from, text) {
    from = "**" + from + "**";
    console.log(`${from}: ${text}`); 
} 

// Default values 
function message (from, text ="No message is give."){
    console.log(`${from}: ${text}`); 
} 
message('Khalil') // "Khalil: No message is give."


// undefined or null parameters 
function message (text) {
    if(text === undefined) {
        text = "No message is gived"; 
        // or using OR operator
        text = text || 'No message is gived'
        // or using nullish operator 
        text = text ?? 'No message is gived'
    }
    console.log(text)
}
message();  // "No message is gived"




/**
 * Returning a value 
 * Returning a value 
 * Returning a value 
 * Returning a value 
 * 
 * 
 * return cause function to exit immediately
 * a function can return back a value when its called. 
 */
function squre(number) {
    return number * number; 
}
squre(2) // 4 is returned 

// directive return can be placed anywhere inside function  
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}
// call the checkAge function 
if ( checkAge(18) ) {
    console.log( 'Access granted' );
} else {
    console.log( 'Access denied' );
}

// exist with no value 
function showMovie(age) {
    // if age is not passed/undefined/null
    if(!checkAge(age)){
        return; 
    }

    // if age is provided continue execution 
} 
showMovie(18); 


// function whiout any calculation or return value is null 
function message() {
    // nothing 
}
message(); // undefined

// when return nothing 
function message() {
    return;
}
message(); // undefined


// Do not break the return line 
function message() {
    return 
    "hey, buddy!"; 
}
// it will behave like 
function message() {
    return;
    "hey, buddy!"; 
}
message() // undefined


// BEST Rules for function 
/**
 * 1 : descriptive name. showMessage(), getAge(), createForm(), checkPermission()....
 * 2 : ONE function -  ONE action
 */







/**
 * ************* Function expressions
 * ************* Function expressions
 * ************* Function expressions
 * ************* Function expressions
 * 
 * 
 * function express allow developers to create function anywhere needed.
 */

// function declaration 
function sum(a, b){
    return a + b;
}
// function expression
let sum = function (a, b) {
    return a + b; 
}; 
// or using ES6
let sum = (a, b) => {
    return a + b; 
}; 
