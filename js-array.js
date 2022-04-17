// check if array is empty 
let arr = [12];

// when the length is 0, !0 === true
if(arr.length) {
    // console.log('array is empty')
} 

// if lenght is equal to 0
if(arr.length === 0) {
    // console.log('array is empty')
}



// how to check if a passed value is array 
arr = 12; 
if(Array.isArray(arr)) {
    // it is not array
    // console.log("not array")
} 

arr = []; 
if(Array.isArray(arr)) {
    // it is  array
    // console.log("It is array")
} 




// how to check if an object is array and it's actually an array
arr = 23; 
if(Array.isArray(arr) && arr.length) {
    // this will not be executed
    // console.log(arr)
}

arr = []; 
if(Array.isArray(arr) && arr.length) {
    // this will not be executed
    // console.log(arr)
}

arr = [23]; 
if(Array.isArray(arr) && arr.length) {
    // Now, this will be executed
    // console.log(arr)
}




// Four Methods to Search Through Arrays in JavaScript
// Lets consider this simple array
arr = [1, 2, 'abc', '23', 5, 2]; 
let result = 0; 


// Using includes()
// It returns true or alse if a value exists in an array or not.
result = arr.includes(5) // true 
result = arr.includes(2323) // false 


// Using indexOf()
// It returns the index of the first value in an array. If there is no match, it returns -1.
result = arr.indexOf("23") // 3
result = arr.indexOf(333) // -1


// Using find()
// It returns the first value matches in an array. otherwise, it returns undefined.
result = arr.find(el => el == 5); // 5
result = arr.find(el => el == 43); // undefined


// Using filter()
// It returns array of all matched values. If no match found, it returns an empty array.
result = arr.filter(el => el == 2) // [2, 2]
result = arr.filter(el => el == 553) // []
console.log(result)