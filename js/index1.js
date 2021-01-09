const action = prompt('Enter the action you want to take ( + , - , * , / , )');
const givenNumbers = prompt('Enter numbers separated by a space, with which you want to perform an action');

function creatingАrray(params) {
    const arr = givenNumbers.split(' ');
    const arrNumbers = arr.filter(item => parseInt(item));
    const newArray = arrNumbers.map((item) => parseInt(item));
    return newArray;
}
const newArray = creatingАrray();


function gettingNumber(params) {
    switch (action) {
        case '+':
            const sum = newArray.reduce((acc, number) => acc + number);
            alert(sum + ' - the sum of your numbers  ');
            break;

        case '-':
            const subtraction = newArray.reduce((acc, number) => acc - number);
            alert(subtraction + ' - the subtraction of your numbers  ');
            break;

        case '*':
            const multiply = newArray.reduce((acc, number) => acc * number);
            alert(multiply + ' - the multiply of your numbers  ');
            break;

        case '/':
            const division = newArray.reduce((acc, number) => acc / number);
            alert(division + ' - the division of your numbers  ');
            break;

        default:
            alert('You entered an invalid character !!!');
            break;
    }
}
gettingNumber();