/**
* When passing an object method as callback, there is a known problem: "losing this"
* let use setTimeout()
*/

// let's consider this example and call method sayHi(); 
let user = {
    firstName: 'Khalil', 
    sayHi() {
        console.log(`Hello, ${this.firstName}`)
    }
}
// Problem: passing object as call back funciton. 
setTimeout(user.sayHi(), 1000) // Error 
setTimeout(user.sayHi, 1000) // lose of content: Hello, undefined

// SOLUTION 1: use wrapper function. 
setTimeout( () => user.sayHi(), 1000) // Hello, Khalil

// SOLUTION 2: use bind; function.bind(obj)
let newUser = {
    firstName: "Khalil"
}

function printName() {
    console.log(this.firstName)
}
let printFunc = printName.bind(newUser); 
printFunc(); // Khalil 


// the setTimeout example: 
let sayhi = user.sayHi.bind(user); 
setTimeout(() => sayhi() , 1000); // after 1 second: Hello, Khalil


// A complex example 
function askPassword(ok, fail) {
    let password = "1234"; // let's say its user's input
    if (password == "1234") ok();
    else fail();
}
  
let customer = {
    name: 'John',
    loginOk () { 
        console.log(`${this.name} logged in`) 
    },
    loginFail () { 
        console.log(`${this.name} failed to log in`)
    },
};

askPassword(customer.loginOk.bind(customer), customer.loginFail.bind(customer))