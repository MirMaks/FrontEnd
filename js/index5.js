const inputNumber = parseInt(prompt('Insert the number '));

for (let i = 1; i <= inputNumber; i = i * 3) {
    if (i === inputNumber) {
        alert(`${inputNumber}  - This number can be obtained by raising 3 to the power`);
    }
}



