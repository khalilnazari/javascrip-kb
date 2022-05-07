// Add single css property using .style
const element = document.querySelector('.element-class'); 
element.style.color = '#000'; 
element.style.border = '1px solid red';


// Add multiple css property using .setAttribute()
const element = document.querySelector('.element-class'); 
element.setAttribute('style', "color:#000; border:1px solid red;");