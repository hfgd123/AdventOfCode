const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'main_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(",");

let count = 0;

for (const line of lines) {
    let start = parseInt(line.split("-")[0]);
    let end = parseInt(line.split("-")[1]);


    for (let i = start; i < end+1; i++) {
        let half = i.toString().substr(0, i.toString().length/2);
        let secondHalf = i.toString().substr(i.toString().length/2);
        if (half === secondHalf) {
            count += i;
        }
    }

}


console.log(count);