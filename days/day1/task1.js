const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);

let count = 0;

let start = 5050;
for (const line of lines) {
    if (line.startsWith("L")) {
        let num = line.slice(1);
        start -= parseInt(num);
    } else if (line.startsWith("R")) {
        let num = line.slice(1);
        start += parseInt(num);
    }
    if (start%100 === 0) {
        count++;
    }
}

console.log(count);