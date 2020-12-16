const sixDigitNumber = Number(prompt('Enter a six-digit number'))
const firstNumber = sixDigitNumber % 10;
const secondNumber = (sixDigitNumber % 100 - firstNumber) / 10;
const thirdNumber = (sixDigitNumber % 1000 - sixDigitNumber % 100) / 100;
const fourthNumber = (sixDigitNumber % 10000 - sixDigitNumber % 1000) / 1000;
const fifthNumber = (sixDigitNumber % 100000 - sixDigitNumber % 10000) / 10000;
const sixthNumber = (sixDigitNumber % 1000000 - sixDigitNumber % 100000) / 100000;
const oneVsSix = firstNumber == sixthNumber;
const twoVsFive = secondNumber == fifthNumber;
const threeVsFour = thirdNumber == fourthNumber;
const mirrored = Boolean(oneVsSix && twoVsFive && threeVsFour);
if (mirrored) {
    result = (`${sixDigitNumber} Your number is mirrored`);
} else {
    result = (`${sixDigitNumber} Your number is not mirrored`);
}
alert(result);
