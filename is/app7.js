let myNumber = parseInt(prompt('enter a three-digit number'));  

firstNumber = myNumber % 10;      
console.log(firstNumber); 

myNumber = (myNumber - firstNumber)/10;
secondNumber = myNumber % 10; 
console.log(secondNumber); 

myNumber = (myNumber - secondNumber)/10;
thirdNumber = myNumber % 10; 
console.log(thirdNumber);

// _______________________________

if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    console.log('numbers are the same');
} else if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber){
    console.log('there are 2 identical numbers');
} else (console.log('no identical numbers'));


