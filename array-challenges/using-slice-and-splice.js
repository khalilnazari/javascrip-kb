// How to Use the slice() and splice() JavaScript Array Methods

/********** How to use the slice() JavaScript array method */
// it is used to create a copy of an array,without start and end paratmeter. 
const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
let citiesCopy = cities.slice(); 
citiesCopy.pop();
console.log(citiesCopy) // [ 'Tokyo', 'Cairo', 'Los Angeles', 'Paris', 'Seattle' ]

// Using slice with start parameter 
citiesCopy = cities.slice(2); // copy from index 2 onward
console.log(citiesCopy) //[ 'Los Angeles', 'Paris', 'Seattle' ]

citiesCopy = cities.slice(-2); // copy from end 
console.log(citiesCopy) // [ 'Paris', 'Seattle' ]


// Using slice the start and end parameters
citiesCopy = cities.slice(2,4); // from/including 2 till 4(excluding 4)
console.log(citiesCopy) // [ 'Los Angeles', 'Paris' ]




/********** How to use the splice() JavaScript array method */
// Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

const food = ['pizza', 'cake', 'salad', 'cookie'];
// If we wanted to add another food item to the array at index 1, then we can use the following code:
food.splice(1,0,"burrito")


console.log(food) // [ 'pizza', 'burrito', 'cake', 'salad', 'cookie' ]


// In this next example, we want to remove "salad" from the array.  We can use the start and delete parameters to accomplish this.
food.splice(2,1)


// conclusion: slice is for copying whole/part of an aray, splice is for adding and deleting element to/of any array. 