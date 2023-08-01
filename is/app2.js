let km = prompt('km');
let ft = prompt('ft');
digit1 = (km*1000);
console.log(digit1);
digit2 = (ft*0.305);
console.log(digit2);
if (digit1 > digit2) {
    console.log('distance in ft less');
} else if (digit1 < digit2) {
    console.log('distance in km less');
} else {
    console.log('distance are equal')
}


