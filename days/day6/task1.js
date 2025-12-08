const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);
let count = 0;

let cleanLines= []

for (let i = 0; i < lines.length; i++) {
    let temp = lines[i].split(' ');
    let newArr = [];
    for (let j = 0; j < temp.length; j++) {
        if (temp[j] !== '') {
            newArr.push(temp[j]);
        }
    }
    cleanLines.push(newArr);
}

for (let i = 0; i < cleanLines[0].length; i++) {
    let type = cleanLines[cleanLines.length - 1][i];
    let temp = 0;
    for (let j = 0; j < cleanLines.length - 1; j++) {
        if(type === "+") {
            temp += parseInt(cleanLines[j][i]);
        } else if (type === "*") {
            if (temp === 0) {
                temp = 1;
            }
            temp *= parseInt(cleanLines[j][i]);
        }
    }
    count += temp;
}

console.log(count);