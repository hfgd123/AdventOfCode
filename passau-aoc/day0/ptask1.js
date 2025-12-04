var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(testcase) {
    let letters = testcase.split('');
    let solution = "";
    for (const letter of letters) {
        if (letter.charCodeAt(0) >= 110) {
            solution += String.fromCharCode(letter.charCodeAt(0) - 13);
        } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 109) {
            solution += String.fromCharCode(letter.charCodeAt(0) + 13);
        }
    }
    return solution;
}

var numTestcases = null;
var done = 0;

rl.on("line", function(line) {
    if (numTestcases === null) {
        numTestcases = parseInt(line);
    } else if (done < numTestcases) {
        var solution = solve(line);
        process.stdout.write(solution + "\n");
        done++;
    }
});

