const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);
let count = 0;

let cleanLines = [];

for (let line of lines) {
    cleanLines.push(line.split(''));
}

let length = Math.max(cleanLines[0].length, cleanLines[1].length, cleanLines[2].length, cleanLines[3].length);

let columns = []
let operations = [];

for (let x = 0; x < length; x++) {
    let column = "";
    for (let y = 0; y < cleanLines.length - 1; y++) {
        column += cleanLines[y][x];
    }
    if (cleanLines[cleanLines.length -1][x] !== ' ') {
        operations.push(cleanLines[cleanLines.length - 1][x]);
    }
    columns.push(column.replace("undefinedundefined", '').trim());
}

operations = operations.filter(function( element ) {
    return element !== undefined;
});

for (const operation of operations) {
    let num = '';
    if (operation === '+') {
        do {
            if (columns.length === 0) break;
            num = columns.shift();
            if (num === '') continue;
            count += parseInt(num);
        } while (num !== '' || columns.length === 0)
    } else if (operation === '*') {
        let tempCount = 1;
        do {
            if (columns.length === 0) break;
            num = columns.shift();
            if (num === '') continue;
            tempCount *= parseInt(num);
        } while (num !== '' || columns.length === 0)
        count += tempCount;
    }
}

console.log(count);