
let myNumber = parseInt(prompt('enter a three-digit number'));  

firstNumber = myNumber % 10;      
console.log(firstNumber); 

myNumber = (myNumber - firstNumber)/10;
secondNumber = myNumber % 10; 
console.log(secondNumber); 

myNumber = (myNumber - secondNumber)/10;
thirdNumber = myNumber % 10; 
console.log(thirdNumber);

// ____________________________________________________
sum = (firstNumber + secondNumber + thirdNumber);
console.log(sum +' sum numbers');

a = (sum % 2);
if (a===0) {
    console.log('pair sum of numbers')
} else {console.log('the sum of the numbers is not paired') }

b = (sum % 5);
console.log(b);
if (b===0) {
    console.log('the sum is a multiple of 5')
} else {console.log('the sum is not a multiple of 5') }

// ________________________________________________________
multiplication = (firstNumber * secondNumber * thirdNumber);
console.log(multiplication +' multiplication numbers');

if (multiplication > 100) {
    console.log('multiplied numbers more 100')
} else if (multiplication < 100) {
    console.log('multiplied numbers less 100')}
    else (console.log('multiplied numbers equal 100'));