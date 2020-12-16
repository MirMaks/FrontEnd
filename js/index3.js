const threeDigitNumber = Number(prompt('Enter a three-digit number'))
// a
const firstNumber = threeDigitNumber % 10;
const twoNumber = (threeDigitNumber % 100 - firstNumber) / 10;
const threeNumber = Math.floor(threeDigitNumber / 100);
const sum = firstNumber + twoNumber + threeNumber;
const even = sum % 2
if (even == 0) {
    result_a = (`${sum} - Even`);
} else if (even > 0) {
    result_a = (`${sum} - Not even`);
}
// b
const multiple5 = sum % 5;
if (multiple5 == 0) {
    result_b = (`${sum} - multiple of 5`);
} else if (multiple5 > 0) {
    result_b = (`${sum} - not multiple of 5`);
}
// c
const composition = firstNumber * twoNumber * threeNumber
if (composition > 100) {
    result_c = `${composition} - product of all numbers greater than 100 `;
} else if (composition < 100) {
    result_c = `${composition} - product of all numbers less than 100`;
}
alert((`${result_a}
${result_b}
${result_c}`));
