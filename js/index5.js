const inputNumber = parseInt(prompt('Insert the number '));

for (let i = 1; i <= inputNumber; i = i * 3) {
    Cannot = (inputNumber / i) % 1 != 0;
    if (i === inputNumber) {
        console.log(`${inputNumber}  - This number can be obtained by raising 3 to the power`);
    } else if (Cannot) {
        console.log(`${inputNumber} - Cannot be obtained by raising 3 to a power`);
    }
}



