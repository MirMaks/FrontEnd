const act = prompt('Enter the action you want to take ( + , - , * , / , )');
console.log(act);

const massangeValue = prompt('Enter numbers separated by a space, with which you want to perform an action');
const arr = massangeValue.split(' ');
let arrValue = arr.filter(item = Number);
let arrValue2 = arrValue.map((item) => item * 1);
// Только так получилось прировнять к числам, если использовал только фильтер - то считал как строки при сложении.
console.log(arrValue2);
if (act === '+') {
    const sum = arrValue2.reduce((acc, number) => acc + number);
    console.log(sum + ' - the sum of your numbers  ');
}
else if (act === '-') {
    const minus = arrValue2.reduce((acc, number) => acc - number);
    console.log(minus + ' - the subtraction of your numbers  ');
} else if (act === '*') {
    const multiply = arrValue2.reduce((acc, number) => acc * number);
    console.log(multiply + ' - the multiply of your numbers  ');
} else if (act === '/') {
    const division = arrValue2.reduce((acc, number) => acc / number);
    console.log(division + ' - the division of your numbers  ');
} else {
    alert('You entered an invalid character !!!');
}







