const twoDigitNumber = Number(prompt('Please enter a two - digit number.'));
const firstNumber = Math.floor(twoDigitNumber / 10);
const secondNumber = twoDigitNumber % 10;
const more = firstNumber > secondNumber;
const less = firstNumber < secondNumber;
const equally = firstNumber == secondNumber;
if (more) {
    result = ('The first number is greater');
} else if (less) {
    result = ('Second number greater');
} else if (equally) {
    result = ('The numbers are equal');
}
alert(result);