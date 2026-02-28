let responseTimes = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const SLA = 500;

function checkResponseTimes(responseTimes) {
    while (responseTimes.length > 0) {
        if (responseTimes[0] <= SLA) {
            console.log("Response time is less than SLA:PASS");
        } else {
            console.log("Response time is greater than SLA:FAIL");
        }
        responseTimes.shift();
    }
}

checkResponseTimes(responseTimes);