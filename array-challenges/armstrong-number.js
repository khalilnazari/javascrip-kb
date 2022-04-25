
const isArmstrongNumber = (number) => {
    // Convert number to string
    let numberStr = String(number);
    // get the length 
    let numberLength = Number(numberStr.length); 
    // convert string to array 
    let numberArr = numberStr.split(''); 
    let total = 0; 

    numberArr.forEach(s => {
        // total= earch digit of number to power to the length of number.
        total += Math.pow(Number(s), numberLength)
    })

    return total === number; 
} 

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(1533)); // false