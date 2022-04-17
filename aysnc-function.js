// syntax 
async function myFunction(para1, para2, para3) {
    // statement
}


/**
 * When using async: 
 *  1. represent that the function is an asynchronous function
 *  2. the aysnc function return a promise 
 */

async function func() {
    console.log("async function")
    return Promise.resolve(1)
}
func()
    .then((result) => {
        console.log(result)
    })



/**
 * await keyword 
 * The await keyword is used only inside the async function to wait for the asynchronous operation.
 */
// let result = await Promise; 


// promise
let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Promise resolved')
    },4000)

    if (false){
        console.log("some action is done here.")
    }
})

// async await function 
async function aysncFunc(){
    let reuslt = await promise;

    console.log(reuslt)
    console.log("hey")
}

aysncFunc(); 


/**
 * async makes the function to act aysnchoronsly 
 * await makes the function to wait for previous promise to be resolved. 
 * let's consider below examle: 
 */

 let promise1;
 let promise2;
 let promise3;
 
 async function async_func() {
    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;

    console.log(result1);
    console.log(result2);
    console.log(result3);
}

async_func(); 



/**
 * Error Handling
 * try 
 * .catch()
 */

let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hey, issue is resolved")
    }, 2000); 

    if(false) {
        reject("Here is some issuee"); 
    }
})


async function newFunc() {
    try {
        let result = await newPromise;
        console.log(result) 
        
    } catch (error) {
        // throw error
        console.log(error)
    }
}

newFunc();


/**
 * Using try catch over .then.catch.finally
 * The code is more readable than using a callback or a promise.
 * Error handling is simpler.
 * Debugging is easier.
*/


// promise 
let promise = new Promise((resolve, reject) => {
    resolve("Success")

    if(false) {
        reject("Error")
    }
})

// async await function 
async function aysncFunc() {
    try {
        let reuslt = await promise;
        console.log(result)
    } catch (error) {
        throw error
    }
}

aysncFunc() // print: Success
