const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let arrItemPlus = [];
let arrItemMin = [];
let arrItemMinOne = [];
let arrItemMax = [];
let oddPositives = [];
let evenPositives = [];
let sumEven = 0;
let sumOdd = 0;
let productPositive = 1;
let zeroing = [];
let sum = 0;
console.log(arr + ' -  Array')
console.log('Positive array elements:')
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
        arrItemPlus.push(arr[i]);
    }
}
console.log(arrItemPlus);
for (let i = 0; i < arrItemPlus.length; i++) {
    sum += arrItemPlus[i];
}
console.log(sum + ' - Sum of all positive elements');
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
        arrItemMin.push(arr[i]);
    }
}
const min = Math.min(...arrItemMin);
console.log(arrItemMin + ' - Negative numbers');
console.log(min + ' - Minimum number, its index - ' + arr.indexOf(min));
const max = Math.max(...arrItemPlus);
console.log(max + ' - Maximum number, its index - ' + arr.indexOf(76));
for (i = 0; i <= arrItemPlus.length; i++) {
    if (arrItemPlus[i] % 2 == 1) {
        oddPositives.push(arrItemPlus[i]);
    }
}
console.log(oddPositives + ' - odd positive elements');
for (i = 0; i <= arrItemPlus.length; i++) {
    if (arrItemPlus[i] % 2 == 0) {
        evenPositives.push(arrItemPlus[i]);
    }
}
console.log(evenPositives + ' - even positive elements');

for (let i = 0; i < evenPositives.length; i++) {
    sumEven += evenPositives[i];
}
console.log(sumEven + ' - sum even positive elements');
for (i = 0; i < oddPositives.length; i++) {
    sumOdd += oddPositives[i]
}
console.log(sumOdd + ' - sum odd positive elements');

for (i = 0; i < arrItemPlus.length; i++) {
    productPositive *= arrItemPlus[i];
}
console.log(productPositive + ' - Product of positive elements');

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= max) {
        zeroing.push(arr[i]);
    } else if (arr[i] < max) {
        zeroing.push(arr[i] = 0);
    }
}
console.log(zeroing + ' - Maximum number and zeroing');

