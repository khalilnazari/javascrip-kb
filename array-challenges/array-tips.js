// 1. Remove duplicates from an array
let fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
 
// First method
let uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns ['banana', 'apple', 'orange', 'watermelon', 'grape']
// Second method
let uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2); // returns ['banana', 'apple', 'orange', 'watermelon', 'grape']



// 2. Replace the specific value in an array
// let fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
fruits.splice(0, 2, 'potato', 'tomato');
console.log(fruits); // returns ['potato', 'tomato', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple']



// 3. Map array without .map()
let friends = [
    { name: 'John', age: 22 },
    { name: 'Peter', age: 23 },
    { name: 'Mark', age: 24 },
    { name: 'Maria', age: 22 },
    { name: 'Monica', age: 21 },
    { name: 'Martha', age: 19 },
]

let friendsNames = Array.from(friends, ({name}) => name);
console.log(friendsNames); // returns ['John', 'Peter', 'Mark', 'Maria', 'Monica', 'Martha']



// 4. Empty an array
let num = [1, 2, 3, 4, 5]
fruits.length = 0;
console.log(fruits); // returns []



// 5. Convert array to an object
let fruits = ['banana', 'apple', 'orange', 'watermelon'];
let fruitsObj = {...fruits };
console.log(fruitsObj); // returns {0: 'banana', 1: 'apple', 2: 'orange', 3: 'watermelon', 4: 'apple', 5: 'orange', 6: 'grape', 7: 'apple'}



// 6. Fulfill array with data
let newArray = new Array(10).fill('1');
console.log(newArray); // returns ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']



// 7. Merge arrays
let fruits = ['apple', 'banana', 'orange'];
let meat = ['poultry', 'beef', 'fish'];
let vegetables = ['potato', 'tomato', 'cucumber'];
let food = [...fruits, ...meat, ...vegetables];
console.log(food); // ['apple', 'banana', 'orange', 'poultry', 'beef', 'fish', 'potato', 'tomato', 'cucumber']



// 8. Find the intersection of two arrays
let numOne = [0, 2, 4, 6, 8, 8];
let numTwo = [1, 2, 3, 4, 5, 6];
let duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item));
console.log(duplicatedValues); // returns [2, 4, 6]



// 9. Remove falsy values from an array
let mixedArr = [0, 'blue', '', NaN, 9, true, undefined, 'white', false];
let trueArr = mixedArr.filter(Boolean);
console.log(trueArr); // returns ['blue', 9, true, 'white']



// 10. Get random value form the array
let colors = ['blue', 'white', 'green', 'navy', 'pink', 'purple', 'orange', 'yellow', 'black', 'brown'];
let randomColor = colors[(Math.floor(Math.random() * (colors.length)))]



// 11. Reversing an array
let colors = ['blue', 'white', 'green', 'navy', 'pink', 'purple', 'orange', 'yellow', 'black', 'brown'];
let reversedColors = colors.reverse();
console.log(reversedColors); // returns ['brown', 'black', 'yellow', 'orange', 'purple', 'pink', 'navy', 'green', 'white', 'blue']



// 12. .lastIndexOf() method
var nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
var lastIndex = nums.lastIndexOf(5);
console.log(lastIndex); // returns 9



// 13. Sum all the values in the array
var nums = [1, 5, 2, 6];
var sum = nums.reduce((x, y) => x + y);
console.log(sum); // returns 14