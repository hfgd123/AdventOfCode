const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'test_input.txt');
const lines = fs.readFileSync(inputPath, 'utf8').split(",");

let count = 0;

for (const line of lines) {
    let start = parseInt(line.split("-")[0]);
    let end = parseInt(line.split("-")[1]);


    for (let number = start; number < end+1; number++) {
        let matching = true;
        let elements = [];
        for (let divisor = 2; divisor < number.length; divisor++) {
            if (number.length % divisor === 0) {
                let partLength = number.length / divisor;
                for (let elemCount = 0; elemCount < number.length/divisor; elemCount++) {
                    elements.push(number.toString().substr(elemCount*divisor, (elemCount+1)*divisor -1))
                }
            }
        }
        for (let elem of elements) {
            if (elem !== elements[0]) {
                matching = false;
            }
        }
        if (matching) {
            count += number;
        }
    }

}


console.log(count);