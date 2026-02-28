let results;
let totalTests;
let passedTests;
let failedTests;
let skippedTests;
let testPercentage = (passedTests / totalTests) * 100;

if (results === "pass") {
    passedTests++;
} else if (results === "fail") {
    failedTests++;
} else if (results === "skip") {
    skippedTests++;
} else {
    console.log("UNKNOWN");
}

console.log("Total Tests: " + totalTests);
console.log("Passed Tests: " + passedTests);
console.log("Failed Tests: " + failedTests);
console.log("Skipped Tests: " + skippedTests);
console.log("Test Percentage: " + testPercentage + "%");


if (passedTests === totalTests) {
    console.log("Ready for release");
} else if (failedTests == 2 || faiedTests == 1) {
    console.log("Review");
} else if (failedTests > 2) {
    console.log("Block");
}