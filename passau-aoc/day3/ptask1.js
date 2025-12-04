var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function solve(testcase) {

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

