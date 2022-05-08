
// A Javascript Map object holds the key-value pairs of elements. An array or any other iterable object can be passed to the Map.

// – Map is a new data structure introduced in JavaScript ES6.
// – It’s an alternative to JavaScript Object for storing key/value pairs.
// – It has useful methods for iteration over the key/value pairs.


// Create a Map object in Javascript
let map = new Map();
map.set('name', 'John');
map.set('id', 11);
console.log(map); // Map { 'name' => 'John', 'id' => 11 }


// Get value of the Map using key
console.log(map.get('name')); // John 
console.log(map.get('id')); // 11


// Get size of the Map
console.log(map.size); // 2


// Check key exists in Map
console.log(map.has('name')); // true
console.log(map.has('age')); // false


// Get keys of the Map object
console.log(map.keys()); // MapIterator { 'name', 'id' }


// Get values of the Map object
console.log(map.values()); // MapIterator { 'John', 11 }


// Get elements of the Map
for (let element of map) {
    console.log(element);
}
// Output:
// [ 'name', 'John' ]
// [ 'id', 11 ]


// Print key value pairs
for (let [key, value] of map) {
    console.log(key + " - " + value);
}
// Output: 
// name - John
// id - 11


// Print only keys of the Map
for (let key of map.keys()) {
    console.log(key);
}
// Output:
// name
// id


// Print only values of the Map
for (let value of map.values()) {
    console.log(value);
}
// Output:
// John
// 11

// Iterating Map object with forEach() function
map.forEach(function(value, key) {
	console.log(key, value);
});
// Output: 
// name John
// id 11


// Add a new element to the Map
map.set('gender', 'M');
console.log(map); // Map(3) {"name" => "John", "id" => 11, "gender" => "M"}


// Delete an element from the Map
map.delete('gender');
console.log(map); // Map(2) {"name" => "John", "id" => 11}


// Delete all key-value pairs of the Map
map.clear();
console.log(map); // Map(0) {}



/************* CONVERT ARRAY INTO MAP & CONVERT MAP INTO ARRAY */
// Creating Map object with multi-dimensional array as iterable
let multiArray = [
	['id', 5],
	['name', 'John']
];


// Convert Array object into Map object
// this creates a key-value pair
let myMap = new Map(multiArray);
console.log(myMap); // Map(2) {"id" => 5, "name" => "John"}


// Convert Map into Array
// Array.from() method is used to do so
let mapToArray = Array.from(myMap);

// JSON.stringify() method is used to print the array
console.log(JSON.stringify(mapToArray)); // [["id",5],["name","John"]]



// Map is similar to Object as both have key-value pairs.
// However, iteration is easier in Map as compared to Object.
// Map can be directly iterated whereas you have to obtain the keys of an Object to iterate it.
// The other difference is that the keys of Object has to be String or Symbol but for Map, it can be anything like Object, String, Function, etc.