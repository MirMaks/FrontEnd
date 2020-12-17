// Почему этот вариант кода считает одинаковыми числа, только если ввести три 111?. Все остальные значения - different

// const threeDigitNumber = Number(prompt('Enter a three-digit number'))
// const firstNumber = threeDigitNumber % 10;
// const twoNumber = (threeDigitNumber % 100 - firstNumber) / 10;
// const threeNumber = Math.floor(threeDigitNumber / 100);
// const identicalNumbers = (firstNumber == twoNumber == threeNumber);
// const differentNumbers = (firstNumber != twoNumber != threeNumber);
// if (identicalNumbers) {
//     result_a = `${threeDigitNumber}  - Identical numbers`;
// } else if (differentNumbers) {
//     result_a = `${threeDigitNumber}  - Different numbers`;
// }
// alert(result_a);

// a
const threeDigitNumber = Number(prompt('Enter a three-digit number'))
const firstNumber = threeDigitNumber % 10;
const twoNumber = (threeDigitNumber % 100 - firstNumber) / 10;
const threeNumber = Math.floor(threeDigitNumber / 100);
const identicalNumbers = (firstNumber + twoNumber + threeNumber) / 3 == firstNumber;
const differentNumbers = (firstNumber + twoNumber + threeNumber) / 3 != firstNumber;
if (identicalNumbers) {
    result_a = `${threeDigitNumber}  - Identical numbers`;
} else if (differentNumbers) {
    result_a = `${threeDigitNumber}  - Different numbers`;
}
// b
const indentOneTwo = (firstNumber + twoNumber) / 2 == firstNumber;
const indentOneThree = (firstNumber + threeNumber) / 2 == firstNumber;
const indentTwoThree = (twoNumber + threeNumber) / 2 == twoNumber;
const indent = (firstNumber + twoNumber + threeNumber) / 3 == firstNumber;
const different = (firstNumber + twoNumber + threeNumber) / 3 != firstNumber;
if (indent) {
    result_b = `${threeDigitNumber}  - the first and second and third numbers are the same`;
} else if (indentOneTwo) {
    result_b = `${threeDigitNumber}  - the second and third numbers are the same`;
} else if (indentOneThree) {
    result_b = `${threeDigitNumber}  - the first and third numbers are the same`;
} else if (indentTwoThree) {
    result_b = `${threeDigitNumber}  - the first and second numbers are the same`;
} else if (different) {
    result_b = `${threeDigitNumber}  - all numbers are different`;
}
alert(`${result_a}
${result_b}`);


