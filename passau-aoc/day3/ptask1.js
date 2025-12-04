var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var testcaseLines = [];
var values = [];
var output = [];

function solve(testcase) {
    // Fill values array with all matching testcase lines
    for (const testcaseElement of testcaseLines) {
        if (testcaseElement.startsWith(testcase)) {
            values.push(testcaseElement);
        }
    }
    // Add count to output and sort
    for (const value of values) {
        if (value === null) {
            continue;
        }
        let count = 0;
        for (let i = 0; i < values.length; i++) {

            if (values[i] === value && values[i] !== null) {
                count++;
                values[i] = null; // Mark as counted
            }
        }
        output.push(value + " " + count);
        output.sort((a, b) => a.localeCompare(b));
    }
    for (const outputElement of output) {
        process.stdout.write(outputElement + "\n");
    }
}

var numTestcases = null;
var done = 0;

rl.on("line", function(line) {
    if (numTestcases === null) {
        numTestcases = parseInt(line);
    } else if (done < numTestcases) {
        testcaseLines.push(line);
        done++;
    } else if (done === numTestcases) {
        solve(line);
        done++;
    }
});