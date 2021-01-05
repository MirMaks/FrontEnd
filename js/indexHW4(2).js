const dollar = 30;
console.log('Курс доллара к гривне');
for (let grivna = 10; grivna <= 100; grivna += 10) {
    const result = `${grivna} Долларов равно ` + grivna * dollar + ` гривен`;
    console.log(result);
}