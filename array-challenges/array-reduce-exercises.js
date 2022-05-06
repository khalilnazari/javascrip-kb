// 1. Turn an array of numbers into a total of all the numbers
const numbers = [1, 2, 3, 4, 5];
let numTotal = numbers.reduce((sum, current) => {
    return sum + current;   
}, 0)

// numTotal = numbers.reduce((prevVal, currVal) => prevVal + currVal); 
// console.log(numTotal); // 15


// 2. Turn an array of numbers into a long string of all those numbers.
// using reduce 
let arrayStr = numbers.reduce((prevVal, currVal, idx) => {
    return  idx == 0 ? prevVal: prevVal + '' + currVal;
    // return prevVal + '' + currVal;
}) 
// using map and join
arrayStr = numbers.map(number => number).join('')
//using join
arrayStr = numbers.join('')

// console.log(arrayStr)


// 3. Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// using filter.
let voteCount = voters.filter(vote => vote.voted == true).length;

// using Reduce
voteCount = voters.reduce((votedObj, obj) => {
    if(obj.voted) {
        votedObj.push(obj.voted)
    }
    return votedObj;
}, []).length;
// console.log(voteCount)


// 4, Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let totalCost = wishlist.map(obj => obj.price).reduce((a,b) => a+b); 
// console.log(totalCost) 227005



// 5. Given an array of arrays, flatten them into a single array
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

let concatArray = arrays.reduce((mainArray, currentArray) => {
    Array.concate(mainArray, currentArray);
})
