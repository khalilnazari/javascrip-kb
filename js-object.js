/**
 * Written by: Khalil Nazari 
 * Date: 6 March 2022
 */


// How to create/declare objects 
let user = new Object();  // object constructor syntax
let anotherUser = {}; // object literal syntax



/** 
 * 
 * 
 * Object literals and properties 
 * 
 * 
 */
let newUser = {
    // key: 'property'
    name: 'khalil', 
    age: 23,
}
//read object property
console.log(newUser.name, newUser.age); 

// update object property
newUser.name = 'Ahmad'; 

// add new property 
newUser.location = "Kuala Lumpur"; 
newUser.isAdmin = false; 

// remove object property 
delete newUser.location; 

/**  Multy words property   */
// set 
newUser["second language"] = 'English'; 
// get 
console.log(newUser["second language"]) // English
// delete : return true is delete is successfull
delete newUser['second langauge']; 


/** 
 * 
 * 
 * Computed Properties 
 *  
 */
// let's say user input his car name as toyota
let carName = 'toyota'; 
let cars = {
    [carName]: 100,
}
// console.log(cars.toyota) //output is : 100

// More complex expressions inside squaer brackets: 
let computer = "apple"; 
let computers = {
    [computer + 'Computer']: 200,
}
// console.log(computers.appleComputers) // 200


/**
 * 
 * 
 * Property value shorthand
 * 
 * 
 */

function makeUser(name, age) {
    return {
        // name: name,
        name, 
        // age : age,
        age
    }
}

let newUser = maekUser('Ahmad', 23); 
// console.log(newUser.age) // 23



/**
 * 
 * Property existence test, “in” operator
 * syntax: key in object 
 * Return: true/fase
 */
let users = {
    name: 'Khalil'
}
console.log(user.noSuchProperty === undefined) // true
// check if name exist in the users object. 
// console.log("name" in users) // true




/**
 * 
 * "for ... in" Loop 
 * syntax: for(key in object) {}
 * 
*/
let user = {
    name: "Ahmad",
    age: 30,
    isAdmin: true
};

for(let key in user) {
    console.log(key) // name, age, isAdmine
    console.log(user[key]) // Ahmad 30 true 
}




/**
 * 
 * Copy object 
 * Copy of an object uses the same reference 
 * anyone is updated others will be updated
 * technically, copying an object creates one more reference to the same object
 */
let user = {name: 'khalil'}
let admin = user; 
console.log(user === admin) //true 
user.age = 121; 
console.log("age" in admin) // true 


/**
 * 
 * Cloning and merging, Object.assign
 * creates independent objects
 * syntax: Object.assign(dest, [src1, src2, src3...])
 */

// user object 
let user = {
    name: 'John', 
    age: 23, 
    number: 234
}
// another object 
let editPermit = {edit: true}

// declate new object 
let admin = {}; 
// clone above objects to admin abject. 
Object.assign(admin, user, editPermit); 
// or using for...in loop 
for(key in user) {
    admin[key] = user[key]
}
for(key in editPermit) {
    admin[key] = editPermit[key]
}



/**
 * 
 * Using "this" in object 
 */
 let user = {
    firstName: 'John', 
    lastName: 'Boston', 
    age: 12,
    sayHi:  () => {
        return "Hi";
    },

    fullName: () => {
        return this.firstName + " " + this.lastName;  
    }, 
    getAge() {
        return this.age 
    }
}
// console.log(user.getAge()) //12





/**
 * 
 * 
 * Constructor, operator "new"
 * 
 */

// constructor function 
/**
 * When funciton is executed with new, it does the following steps: 
 * 1. A new empty object is created and assigned to this.
 * 2. The function body executes. Usually it modifies this, adds new properties to it.
 * 3. The value of this is returned.
 */
function User(name) {
    // step 1: 
    // this = {};  (implicitly)

    // step 2:
    this.name = name; 
    this.isAdmin = false;

    this.sayHi = () => {
        return "Hi";
    };
    
    // step 3:
    // return this; (implicitly) 
}

let user = new User("Khalil"); 
// {
//     name: 'Khalil', 
//     isAdmin: false,
// }

// reuse 
let user = new User("John"); 
// {
//     name: 'John', 
//     isAdmin: false,
// }



/**
 * 
 * Optional chaining 
 * checks if items keys exist in the object. 
 *  "obj?.key?.anotherKey"
 */
let user = {}; 
// check for address
let userAddress = user?.address;
// check for street 
userAddress = user.address?.street;  
console.log(userAddress) // undefined




// How to Check if a Property Exists in a JavaScript Object
// lets consider developer object. 
const developer = {
    name: "Jessica Wilkins",
    country: "United States",
    isEmployed: true
};

// 1. using .hasOwnProperty()
developer.hasOwnProperty("isEmployed"); // true 
developer.hasOwnProperty("somethingElse"); // false

// 2. using in operator
"country" in developer; // true
"somethingElse" in developer; // false

// 3. using undefined  
developer.name !== undefined // true 
developer.somethingElse !== undefined // false  

