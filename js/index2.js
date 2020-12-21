const dollar = 30;
let messange = 0;
console.log('Курс доллара к гривне');
for (let grivna = 10; grivna <= 100; grivna = grivna + 10) {
    messange = messange + 10;
    result = `${messange} Долларов равно ` + grivna * dollar + ` гривен`;
    console.log(result);
}