/**
 *  How copy and clone object 
 *  There are three wasy to clone an object. 
 */

const obj = {name: 'Khalil', city: 'KL'} 

// 1 - using spread operators 
let objClone = {...obj}

// 2 - using assing() 
objClone = Objcet.assing({}, obj); 

// Json.parse() 
objClone = JSON.parse(JSON.stringify(obj))




/**
 * How check if a vaiable is object; 
 * there are two ways 
 */

let user = {firstName: "Khalil", nickName: "Ahmad"}
// using toString.call()
let isObject = toString.call(user) === "[object Object]"

// using typeOf
let isObject = typeof user === 'object'; 



/**
 * Two ways to clone array 
 */
let arr = [2, 3, 4, 5]; 

// 1 - Using slice
let arrClone = arr.slice(0)

// 2 - Using spread Operator
let arrClone = [...arr]


/**
 * 
 * How to get a part of array
 */
 let array = [22, 33, 44, 55, 66]
 // array.slice(index = start, item = array item)
 let sliceArray = array.slice(0, 1) 



/**
* Get the last element of any array 
* array.lenght-1 gives the index of last element in array 
*/
let array = [1, 2, 3, 4, 5]
let lastEelement = array[array.lenght-1]



/**
 * 
 * Convert array elements to string 
 * Use .join('')
 */
 let colors = ["Red", "Green", "White", "Black"];
 let colorString = colors.join(" ") // "Red Green White Black"




 /**
  * Put "_" only between even numbers.
  * 12498734 => 12-492-8736-4
  */

let number = 24672344987; 
number = number.toString(); 
number = number.split("")

number = number.map((value, index, array) => {
    value = Number(value); 
    
     if( (array[index -1] % 2 === 0) && (array[index] % 2 === 0)) {
         value = "-" + value; 
     } 
     
     return value; 
}).join("")

console.log(number); //2-4-67234-4987 




/**
 * Find the most frequent item of an array 
 */
var array = [3,3,3,3,3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let arrayLength = 0;
let tempArray = []; 
let frequentItem = '';

for(let i = 0; i < array.length; i++) {
    tempArray = []
    for(let j = 0; j < array.length; j++) {
        if(array[i] == array[j]) {
            tempArray.push(array[j])
        }    
    }
    
    if(tempArray.length > arrayLength){
       frequentItem = array[i]
       arrayLength = tempArray.length; 
    }  
}

console.log(char) // 3




/**
 * Swapping upperCase to lowerCase and viceversa 
 * using toUpperCase(); && toLowerCase(); 
 * 
*/
let str = "Coding"

let swappedStr = ""; 
str.split("").forEach(letter => {
  if(letter === letter.toUpperCase()) {
      letter = letter.toLowerCase(); 
  }else if(letter === letter.toLowerCase()) {
      letter = letter.toUpperCase(); 
  }
  
  swappedStr += letter; 
})

console.log(swappedStr) // cODING




/**
 * Print nested array or 2D array 
 */
var array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i = 0; i < array.length; i++) {
    // declare nested array 
    let nestedArr = array[i]
    let nestedStr = '';

    // loop through nested array 
    for(let j = 0; j < nestedArr.length; j++) {
        nestedStr += nestedArr[j]
    }
    
    console.log(nestedStr)
}


