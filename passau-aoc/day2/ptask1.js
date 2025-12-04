var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(testcase) {
    let width = [];
    let length = [];
    let parts = testcase.split(" ");
    for (const part of parts) {
        let test = part.split(",");
        width.push(parseInt(test[0].substr(1)));
        length.push(parseInt(test[1].substr(0, test[1].length - 1)));
    }
    let solution = Math.min(...width) * Math.min(...length)


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

