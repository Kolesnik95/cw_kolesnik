let a = prompt('Number1');
let b = prompt('Number2');

c = a % b;
d = b % a;


if (a === c) {
    console.log('Number1 divider Number2')
} else {
    console.log('Number1 not a divider Number2')
}

if (b === d) {
    console.log('Number2 divider Number1')
} else {
    console.log('Number2 not a divider Number1')
}



