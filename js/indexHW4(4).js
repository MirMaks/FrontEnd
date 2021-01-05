const integer = parseInt(prompt('Please enter an integer '));
const prime = (integer >= 4) & (integer % 2 != 0) & (integer % 3 != 0);
if (prime === 1) {
    console.log(`${integer} - This is a prime number`);
} else if (integer === 1) {
    console.log(`${integer} - This is a complex number`);
} else if (integer === 2) {
    console.log(`${integer} - This is a prime number`);
} else if (integer === 3) {
    console.log(`${integer} - This is a prime number`);
}
else {
    console.log(`${integer} - This is a complex number`);
}
