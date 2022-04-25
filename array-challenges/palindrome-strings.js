// Palindrome strings
const palindromeString = (string) => {
    // let trimedString = string.trim(); 
    let trimedString = string.replace(/[^\w]/g, "");
    
    // convert string to array, reverse it, back to string. 
    let stringReverse = trimedString.split('').reverse().join('')
    
    return stringReverse; 
}

console.log(palindromeString('hello'))