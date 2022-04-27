
// sort in ascending order 
const sortAscending = (obj) => obj.sort((a, b) => a - b); 

console.log(sortAscending([1, 11, 27, 2, 34, 123])) 
// Output: [ 1, 2, 11, 27, 34, 123 ]


// sort in descending order 
const sortDecending = (obj) => obj.sort((a, b) => b - a); 

console.log(sortDecending([1, 11, 27, 2, 34, 123]))
// Output : [ 123, 34, 27, 11, 2, 1 ]
