// How to Remove a Property from a JavaScript Object

// 1. delete obj['peroperty']
let blog = {name: 'Wisdom Geek', author: 'Saransh Kataria'};
const propToBeDeleted = 'author';
delete blog[propToBeDeleted];
console.log(blog); // {name: 'Wisdom Geek'}


// 2. destructuring 
let blog = {name: 'Wisdom Geek', author: 'Saransh Kataria'};
const { author, ...blogRest } = blog;
console.log(blogRest) // {name: 'Wisdom Geek'};
console.log(blog); // {name: 'Wisdom Geek', author: 'Saransh Kataria'}

// If we want to do this dynamically, we can do this
const name = 'propertToBeRemoved';
const { [name]: removedProperty, ...remainingObject } = object;