// Check if a variable is an Object

// 1) First way
// define an object
let myObject = {id: 11, name: John}

console.log(Object.prototype.toString.call(myObject)); // [object Object]

// check if the variable is an object
if (Object.prototype.toString.call(myObject) === '[object Object]') {
    console.log('The variable is an object.');
} else {
	console.log('The variable is NOT an object.');
}

// for array, you will get [object Array]
let myArray = [1, 2, 3];
console.log(Object.prototype.toString.call(myArray)); // [object Array]



// 2) Second way
function isObject(obj) {
    return obj !== null && typeof obj === 'object' && Array.isArray(obj) === false;
}

console.log(isObject(myObject)); // true

myArray = [1, 2, 3];
console.log(isObject(myArray)); // false


// 3) Third way
// using object instanceof and constructor operator
function isObject(obj) {
    return obj instanceof Object && obj.constructor === Object;
}

console.log(isObject(myObject)); // true
console.log(isObject(myArray)); // false


//   Using `typeof` operator

// using object typeof and constructor operator
function isObject(obj) {
    return typeof obj === 'object' && obj.constructor === Object;
}

console.log(isObject(myObject)); // true
console.log(isObject(myArray)); // false



