const uniqueId = () => {
    // time to string
    let strOne = Date.now().toString(36); 
    // random number to string 
    let strTwo = Math.random().toString(36).substring(2)

    // concatination of both strings. 
    let uniqueStr = strOne + strTwo; 
    return uniqueStr.toUpperCase(); 
}

const uid = uniqueId()
console.log(uid) // L2E4THFV1PBWXK4WZ6U L2E4SL66S3PCB3QMN8G
