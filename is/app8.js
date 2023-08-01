
myNumber = prompt('num');  
console.log(myNumber);

firstNumber = myNumber % 10;      
console.log(firstNumber); 

myNumber = (myNumber - firstNumber)/10;
secondNumber = myNumber % 10; 
console.log(secondNumber); 

myNumber = (myNumber - secondNumber)/10;
thirdNumber = myNumber % 10; 
console.log(thirdNumber);

myNumber = (myNumber - thirdNumber)/10;
fourthNumber = myNumber % 10;
console.log(fourthNumber);

myNumber = (myNumber - fourthNumber)/10;
fifthNumber = myNumber % 10;
console.log(fifthNumber);

myNumber = (myNumber - fifthNumber)/10;
sixthNumber = myNumber % 10;
console.log(sixthNumber);
// ____________________________________________

console.log(firstNumber, secondNumber, thirdNumber);
console.log(sixthNumber, fifthNumber, fourthNumber)


if ((firstNumber, secondNumber, thirdNumber) === (sixthNumber, fifthNumber, fourthNumber)) {
    console.log("mirror number")
} else console.log('not mirror number');

