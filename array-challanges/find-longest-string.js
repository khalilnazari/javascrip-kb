// How to Longest String in Array
// 1. using loop 
let strArray = ['hey', 'John!', 'How are you', 'dong?']; 
// strArray = 'hey john, how are you doing?'
const findLogestString_loop = (arrayData) => {
    // if the length of prop is 0 return nothing.
    if(arrayData.length == 0){
        return; 
    }

    //  if data is not array 
    if(!Array.isArray(arrayData)) {
        arrayData = arrayData.split(' '); 
    }   

    let longestString = ''; 
    arrayData.forEach(strItem => {
        if(strItem.length > longestString.length) {
            longestString = strItem;
        }
    }) 

    return longestString; 
}
let result = findLogestString_loop(strArray); 
console.log(result, ' ---using loop')



// using filter method 
const findLogestString_filter = (arrayData) => {
    if(arrayData.length == 0) return;

    // if its string
    if(!Array.isArray(arrayData)) {
        arrayData = arrayData.split(' ')
    }
 
    // length of first item; 
    var maxLength = arrayData[0].length;

    // maxLength length
    arrayData.forEach(strItem => {
        maxLength = Math.max(maxLength, strItem.length)
    });

    // using the maxLength filter the array;
    let longestStr = arrayData.filter(item => item.length == maxLength);
    return longestStr.join(' ');
}
result = findLogestString_filter(strArray); 
console.log(result, ' ---using filter')


// Find the first longest strings in array using .sort()
let longestStr = strArray.sort((a, b) => b.length - a.length)[0]
console.log(longestStr, '---using sort') //front-end
