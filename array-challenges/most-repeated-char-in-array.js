
// get the most repeated character in a string. (1)
const getHighOccurance  = (stringExp) => {

    var expCounts = {};
    var maxKey = '';

    // remove all white spaces 
    stringExp = stringExp.replace(/\s/g, '')


    for(var i = 0; i < stringExp.length; i++) {   
        var key = stringExp[i];
    
        // add the new occurance
        if(!expCounts[key]){
         expCounts[key] = 0;
        }
    
        // increase the previous accurance
        expCounts[key]++;
    
        // if the new occurance is more than previous occurance
        if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
            maxKey = key;
        }
    }

    return maxKey; 
}

let strTest = "a b a bb a bb c a bb cc aa bb ccc aaa bbbb ccc ddd"; 
let exp = '3 5 5 3 8  5 3 3 3 5 ddddddddddddd333333333333' ;
let result = getHighOccurance(strTest);
// console.log(result)


// const numbers = [15, 2, 2, 2, 1, 1, 4, 3, 3, 3, 3];


// get the most repeated character in a string. (1)
const getMostOccurance = (stringExp) => {
    // remove all white spaces 
    stringExp = stringExp.replace(/\s/g, '')

    const charCount = {}; //Step 0
    let maxCharCount = 0;
    let maxChar = '';
    for(let i = 0; i < stringExp.length; i++) { // Step 1.
        charCount[stringExp[i]] = ++charCount[stringExp[i]] || 1;
    }

    for(let key in charCount) { //Step 2
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key] //Step 3
            maxChar = key;
        }
    }

    return maxChar; //Step 4
}

result = getMostOccurance(exp); 
console.log(result)