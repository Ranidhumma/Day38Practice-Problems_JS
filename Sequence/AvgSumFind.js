//Que 4: Reads 5 Random 2 digit values, and calculate their sum and the average
function generateRandomNumber() 
{
    return Math.round(Math.random() * 90 + 10);
}
let sum = 0;
for (index = 1; index <= 5; index++)
 {
    let number = generateRandomNumber();
    console.log("Number" + index + " = " + number);
    sum += number;
}
console.log("The sum of 5 random 2 digit value is = " + sum);
console.log("The average of 5 random 2 digit value is = " + sum / 5);