const newArray = [];
newArray.lenght = prompt('Introducing array length');
for (let i = 0; i <= newArray.lenght; i++) {
    newArray[0 + i] = prompt('Enter array value');
}
console.log(newArray);
//2
newArray.sort();
console.log(newArray);
//3
if (newArray.lenght < 3) {
    console.log(`Array length less than 3`);
} else if (newArray.lenght > 2) {
    newArray.splice(2, 2);
    console.log(`Remove values ​​from 2 to 4 ===  ${newArray}`);
}

