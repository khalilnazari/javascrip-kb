// Rest Parameter ...
// It is used when arbitrary arguments are passed to a function. 
function sum (...numbers) {
    let result = 0; 
    
    for (let number of numbers) {
        result += number;
    }
    
    return result; 
}

let total = sum(1, 2, 3, 4, 5) 
console.log(total) // 15




// Spread syntax ... 
// let's find the biggest number in the an array 
let numberArr = [2, 3, 4, 5, 6, 8]; 
let evenNumbers = [22, 44, 55, 66, 70]
let max = Math.max(numberArr) 
console.log(max) // NaN

max = Math.max(...numberArr); 
console.log(max) // 8

// passing more arrays 
max = Math.max(...numberArr, ...evenNumbers); 
console.log(max) // 70

// and more arguments 
max = Math.max(0, 1, ...numberArr, ...evenNumbers, 333, 900); 
console.log(max) // 900


// spread syntax ... is also used to merge & copy objects/arrays. 
let userName = ["Khalil"]; 
let userAddress = ["KL"]

// copy
let userNameCopy = [...userName]; 
let diff = userName === userNameCopy; // false (different reference)

// merge
let userDetail = [...userName, ...userAddress]
console.log(userDetail) 

// Spread syntax in Objects  
let user = {name: 'Khalil', city: 'KL'}
let course = {course:"javascript", level: "advanced"}

// Copy objects. 
let  userCopy = {...user}; 
diff = user === userCopy; // false (different reference)

// Merger objects 
let userMerge = {...user, ...course}