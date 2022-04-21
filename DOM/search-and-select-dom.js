// 5 ways to search and select HTML elements using javascript 


// getElementById
// This selects the unique element based on the given id. 
const element = document.getElementById('element-id'); 

// Note: The id must be unique. There can be only one element in the document with the given id.


// getElementByClassname
// This selects all elements based on the given class-name as an iterable object. 
const element = document.getElementsByClassName('element-class-name'); 


// getElementByTagname 
// This selects all element based on the given tag name. 
const element = document.getElementsByTagName('p');


// querySelector
// This selects the first element based on the given class/id/tag
const element = document.querySelector('.element-class-name');


// querySelectorAll 
// This selects all elements based on the given class/id/tag as iterable object. 
const element = document.querySelectorAll('.class-name');


// .matches()
// It's used when we are iterating over elements (like in an array or something) and trying to filter out those that interest us.
// it return true/false
element.forEach(el => {
    if(el.matches('a[href*="zip"]')) {
        el.style.color="red"; 
    }
})

// .closest()
// It's used to find ancesstors(the chain of parents from the element to the top)
const targetParent = element.closest('.target-parent-class'); 


