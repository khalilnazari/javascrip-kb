// create a Promose 
// let myPromise = new Promise( (resolse, reject) => {
//     // code999
// }) 


// example 1
let countValue = new Promise((resolve, reject) => {
    if(true) {
        resolve("its true")
    } else {
        reject('its not true')
    }
})

countValue
    .then( (result) => {
        console.log(result)
    })
    .then(() => {
        console.log('another then')
    })
    .catch( error=> {
        console.log(error)
    })
    .finally(() => {
        console.log("finally")
    })
    .finally(() => {
        console.log("finally 33")
    })


// How does it work? 
/**
 * For example fetching data form an API 
 * first state is pending 
 * secod state is either resolve or reject. 
 * if success resolve 
 * if error reject. 
 */

