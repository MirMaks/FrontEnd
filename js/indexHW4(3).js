const integer = parseInt(prompt('Please enter an integer '));
const message = `All integers from 1 to 100 whose square does not exceed the number ${integer}`
console.log(message);
for (let i = 1; i <= 100; i++) {
    if (Math.pow(i, 2) <= integer) {
        console.log(i);
    } else if (Math.pow(i, 2) > integer)
        break;
}
