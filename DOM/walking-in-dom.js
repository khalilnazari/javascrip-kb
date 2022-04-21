// Children: childNodes, firstChild, lastChild

// children or child nodes - all the direct children of a particular element. 
// Descendants – all elements that are nested in the given one, including children, their children and so on.


const element = document.getElementsByClassName('.class-name'); 

// direct chidren
const directChildren = element.children; 

// decendants 
const decendants = element.childNodes; 
// Note: childNodes are special type of iterable array which cannot be looped through by .forEach(), for..in. 
// Use: spread operator or Array.from(); 
[...decendants].forEach(ele => console.log(ele)); 
Array.from(decendants).forEach(ele => console.log(ele))



// first child 
const first_child = element.firstChild; 

// last child 
const last_child = element.lastChild; 

// get direct parent 
const direct_parent = element.parentNode; // returns any parent
// or
const direct_parent = element.parentElement; // returns the direct parent 


// Previous sibling 
const previous_element_sibling = element.previousElementSibling; // returns only the sibling element. 
// or
const previous_element_sibling = element.previousSibling; // returns all childrens of sibling

// next sibling 
const next_element_sibling = element.nextElementSibling; 
// or
const next_element_sibling = element.nextSibling; 
