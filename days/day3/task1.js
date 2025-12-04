const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);

let count = 0;

for (const line of lines) {
    let big = 0;
    let small = 0;
    let indexBig = 0;
    let batteries = line.split('');
    for (let i = 0; i < batteries.length - 1; i++) {
        if (batteries[i] > big) {
            big = batteries[i];
            indexBig = i;
        }
    }
    for (let i = indexBig + 1; i < batteries.length; i++) {
        if (batteries[i] > small) {
            small = batteries[i];
        }
    }
    big = parseInt(big);
    small = parseInt(small);
    count = count + big*10 + small;
}

console.log(count);