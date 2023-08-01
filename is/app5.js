let digit = prompt('enter a two-digit number');
const lastDigit = digit  % 10;
digit = (digit - lastDigit)/10;
const prevDigit = digit % 10;

if (lastDigit < prevDigit) {
    console.log('the first digit is greater than the second');
} if (lastDigit > prevDigit) {
    console.log('the first digit is less than the second');
}  if (lastDigit === prevDigit) {
    console.log('the numbers the same');
} 