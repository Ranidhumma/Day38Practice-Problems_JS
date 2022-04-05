//1: Randomn Function to get Single Digit
console.log (Math.floor(Math.random() * 10)) ;

//2 : Randomn to get number between 1 and 6
console.log(Math.floor(Math.random() * 6 + 1));

//3: Add 2 random dice numbers
let number1 = Math.floor(Math.random() * 6 + 1)
console.log("Dice 1 num is " + number1);
let number2 = Math.floor(Math.random() * 6 + 1)
console.log("Dice 2 num is " + number2);
let sum = number1 + number2;
console.log("The sum of two dice is : " + sum);