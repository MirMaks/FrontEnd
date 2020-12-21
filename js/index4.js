const integer = parseInt(prompt('Please enter an integer '));
const prime = (integer >= 1) & (integer % 2 != 0);
if (prime === 1) {
    alert(`${integer} - This is a prime number`);
} else {
    alert(`${integer} - This is a complex number`);
}
