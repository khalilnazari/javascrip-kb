
// sort in accending order 
const sortAscending = (obj) => obj.sort((a, b) => a-b); 

// sort in decending order 
const sortDecending = (obj) => obj.sort((a, b) => b-a)


console.log(sortAscending([1, 11, 27, 2, 34, 123]))
console.log(sortDecending([1, 11, 27, 2, 34, 123]))