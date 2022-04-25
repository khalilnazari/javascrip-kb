
// This function check if two strings are anagram of each other. 
const stringAnagram = (stringOne, stringTwo) => {
    // 1. if lenght of two string is not the same return false.
    if(stringOne.length !== stringTwo.length) {
        return false;
    }

    // 2. arrange the order of strings. 
    let strOneSorted = stringOne.split('').sort();
    strOneSorted = strOneSorted.join('')
    let strTwoSorted = stringTwo.split('').sort();
    strTwoSorted = strTwoSorted.join('')
    
    if(strOneSorted === strTwoSorted) return true; 
}


let result = stringAnagram("lest", "elts") // true
let result2 = stringAnagram("lesdt", "elts") // false

console.log(result2)