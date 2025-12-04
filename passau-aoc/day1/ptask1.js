var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(testcase) {
    // Input
    let solution = "IT'S ";
    let input = testcase.split(":");
    let hours = parseInt(input[0])%12;
    let minutes = parseInt(input[1]);

    // Minutes handler
    let oclock = (minutes < 5);
    if (minutes >= 5 && minutes < 10 || minutes >= 55) solution += "FIVE MINUTES ";
    if (minutes >= 10 && minutes < 15 || minutes >= 50 && minutes < 55) solution += "TEN MINUTES ";
    if (minutes >= 15 && minutes < 20 || minutes >= 45 && minutes < 50) solution += "QUARTER ";
    if (minutes >= 20 && minutes < 25 || minutes >= 40 && minutes < 45) solution += "TWENTY MINUTES ";
    if (minutes >= 25 && minutes < 30 || minutes >= 35 && minutes < 40) solution += "TWENTY FIVE MINUTES ";
    if (minutes >= 30 && minutes < 35) solution += "HALF ";

    // Past or to
    if (minutes >= 35) {
        solution += "TO ";
        hours++;
    } else if (!oclock) {
        solution += "PAST ";
    }

    // Hours to words
    if (hours === 0 || hours === 12) solution += "TWELVE";
    if (hours === 1) solution += "ONE";
    if (hours === 2) solution += "TWO";
    if (hours === 3) solution += "THREE";
    if (hours === 4) solution += "FOUR";
    if (hours === 5) solution += "FIVE";
    if (hours === 6) solution += "SIX";
    if (hours === 7) solution += "SEVEN";
    if (hours === 8) solution += "EIGHT";
    if (hours === 9) solution += "NINE";
    if (hours === 10) solution += "TEN";
    if (hours === 11) solution += "ELEVEN";

    // O'clock handler
    if (oclock) solution += " O'CLOCK";
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

