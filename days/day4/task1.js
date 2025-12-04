const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
let lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);

let count = 0;

for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split("");
}

for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        let neighbors = 0;
        if (i !== 0) {
            if (j !== 0) {
                if (lines[i-1][j-1] === "@") neighbors++;
            }
            if (lines[i-1][j] === "@") neighbors++;
            if (j !== lines[i].length - 1) {
                if (lines[i - 1][j + 1] === "@") neighbors++;
            }
        }
        if (j !== 0) {
            if (lines[i][j - 1] === "@") neighbors++;
        }
        if (j !== lines[i].length - 1) {
            if (lines[i][j + 1] === "@") neighbors++;
        }
        if (i !== lines.length - 1) {
            if (j !== 0) {
                if (lines[i + 1][j - 1] === "@") neighbors++;
            }
            if (lines[i + 1][j] === "@") neighbors++;
            if (j !== lines[i].length - 1) {
                if (lines[i + 1][j + 1] === "@") neighbors++;
            }
        }
        if (neighbors < 4 && lines[i][j] === "@") {
            count++;
        }
    }
}

console.log(count);

