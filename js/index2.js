const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let arrItemSum = [];
let arrItemPlus = [];
let arrItemMin = [];
let arrItemMinOne = [];
let arrItemMax = [];
let oddPositives = [];
let evenPositives = [];
let oddPositivesSum = [];
let evenPositivesSum = [];
let productOfPositive = [];
let zeroing = [];
console.log(arr + ' -  Array')
console.log('Positive array elements:')
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
        arrItemPlus.push(arr[i]);
    }
}
console.log(arrItemPlus);
arrItemSum = arrItemPlus[0] + arrItemPlus[1] + arrItemPlus[2] + arrItemPlus[3] + arrItemPlus[4] + arrItemPlus[5] + arrItemPlus[6] + arrItemPlus[7] + arrItemPlus[8] + arrItemPlus[9] + arrItemPlus[10] + arrItemPlus[11] + arrItemPlus[12] + arrItemPlus[13];
console.log(arrItemSum + ' - Sum of all positive elements');
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
        arrItemMin.push(arr[i]);
    }
}
for (let j = 0; j <= arrItemMin.length; j++) {
    if (arrItemMin[j] < -62) {
        arrItemMinOne.push(arrItemMin[j]);
    }
}
console.log(arrItemMin + ' - Negative numbers');
console.log(arrItemMinOne + ' - Minimum number, its index - ' + arr.indexOf(-63));
for (let i = 0; i <= arrItemPlus.length; i++) {
    if (arrItemPlus[i] > 72) {
        arrItemMax.push(arrItemPlus[i]);
    }
}
console.log(arrItemMax + ' - Maximum number, its index - ' + arr.indexOf(76));
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

evenPositivesSum = evenPositives[0] + evenPositives[1] + evenPositives[2] + evenPositives[3] + evenPositives[4] + evenPositives[5] + evenPositives[6] + evenPositives[7] + evenPositives[8] + evenPositives[9];
console.log(evenPositivesSum + ' - sum even positive elements');

oddPositivesSum = oddPositives[0] + oddPositives[1] + oddPositives[2] + oddPositives[3];
console.log(oddPositivesSum + ' - sum odd positive elements');

productOfPositive = arrItemPlus[0] * arrItemPlus[1] * arrItemPlus[2] * arrItemPlus[3] * arrItemPlus[4] * arrItemPlus[5] * arrItemPlus[6] * arrItemPlus[7] * arrItemPlus[8] * arrItemPlus[9] * arrItemPlus[10] * arrItemPlus[11] * arrItemPlus[12] * arrItemPlus[13];
console.log(productOfPositive + ' - Product of positive elements');

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 72) {
        zeroing.push(arr[i]);
    } else if (arr[i] < 76) {
        zeroing.push(arr[i] * 0);
    }
}
console.log(zeroing + ' - Maximum number and zeroing');
