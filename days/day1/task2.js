const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);

let count = 0;

let value = 50;
for (const line of lines) {
    if (line.startsWith("L")) {
        for (let i = 0; i < parseInt(line.slice(1)); i++) {
            if (value === 0) {
                value = 99;
            } else {
                value--;
            }
            if (value === 0) {
                count++;
                console.log(line)
            }
        }
    } else if (line.startsWith("R")) {
        for (let i = 0; i < parseInt(line.slice(1)); i++) {
            if (value === 99) {
                value = 0;
            } else {
                value++;
            }
            if (value === 0) {
                count++;
                console.log(line)
            }
        }
    }
}

console.log(count);