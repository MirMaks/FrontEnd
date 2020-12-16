const givenNumber = Number(prompt('Please enter your number'));
const lastNumber = givenNumber % 10;
const even = lastNumber % 2;
if (even <= 0) {
    result = (`${lastNumber} - Even`);
} else if (even > 0) {
    result = (`${lastNumber} - Not even`);
}
alert(result);