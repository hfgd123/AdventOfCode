const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);

let count = 0;

for (const line of lines) {
    let joltage = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    let indexes = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    let batteries = line.split('');
    for (let i = 0; i < 13; i++) {
        for (let j = indexes[i-1] + 1; j < batteries.length - (12 - i); j++) {
            if (batteries[j] > joltage[i]) {
                joltage[i] = parseInt(batteries[j]);
                indexes[i] = j;
            }
        }
    }
    joltage.shift()
    let num = "";
    for (const number of joltage) {
        num += number;
    }
    count += parseInt(num);
}

console.log(count);