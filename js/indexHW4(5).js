const integerNumber = parseInt(prompt('Insert the number '));
for (let exponent = 1; exponent <= integerNumber; exponent++) {
    if (Math.pow(3, exponent) === integerNumber) {
        console.log(`${integerNumber}  - This number can be obtained by raising 3 to the power`);
    }
}
for (let i = 1; i <= integerNumber; i = i * 3) {
    const сantGet = (integerNumber / i) % 1 != 0;
    if (сantGet) {
        console.log(`${integerNumber} - Cannot be obtained by raising 3 to a power`);
    }
}

//В первом цикле я не смог получить ответ else, тоесть оно выводила все значения, которые проходят через цикл.
//Поэтому для получения отрицательных ответов, я опять написал ту же формулу,что и в прошлый раз.