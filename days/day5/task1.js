const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);
const ranges = [];
const inputs = [];
let count = 0;

let empty = false;
for (const line of lines) {
    if (!empty && line === '') {
        empty = true;
    } else if (!empty) {
        ranges.push(line);
    } else {
        inputs.push(line);
    }
}
for (const input of inputs) {
    for (const range of ranges) {
        const [start, end] = range.split('-').map(Number);
        if (Number(input) >= start && Number(input) <= end) {
            count++;
            break;
        }
    }
}

console.log(count);