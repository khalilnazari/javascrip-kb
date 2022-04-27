
// Array destructuring in Javascript 

const array = [1, 2, 3, 4, 5]
let [first, second, third] = array;
console.log(first, third) // 1 3

let [first, ,third] = array;
console.log(first, third) // 1 3


// Spread operator in Javascript 
const [first, third, ...rest] = array;

console.log(first, third) // 1 2
console.log(rest) // [ 3, 4, 5 ]


// concatinate two arrays using spread operator 
const arr1= [1, 2, 3]
const arr2= [5, 6, 7]
let concatinatedArray = [...arr1, ...arr2]
console.log(concatinatedArray) // [ 1, 2, 3, 5, 6, 7 ]
concatinatedArray = [...arr1, 54, 55, 23, ...arr2, 66]
console.log(concatinatedArray) // [ 1, 2, 3, 54, 55,23, 5, 6, 7, 66 ]


// Destructing function
const [sum, multiply] = sumAndMult(2, 3)
console.log(sum, multiply) // 5 6

function sumAndMult(n, m) {
    return [n+m, n*m];
}