const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(/\r?\n/);
const ranges = [];
let count = 0;

for (const line of lines) {
    if (line === '') {
        break;
    } else {
        ranges.push(line);
    }
}

let parsedRanges = [];
for (const range of ranges) {
    let bounds = range.split('-');
    parsedRanges.push([Number(bounds[0]), Number(bounds[1])]);
}

parsedRanges.sort((a) => a - a[0]);

let merged = [];
for (const parsedRange of parsedRanges) {
    if (merged.length === 0 || merged[-1][1] < range[0] - 1) {
        merged.push(parsedRange);
    } else {
        merged[-1][1] = Math.max(merged[-1][1], parsedRange[1]);
    }
}

for (const mergedElement of merged) {
    count += mergedElement[1] - mergedElement[0] + 1;
}


console.log(count);