

function bugs(frequency, impact) {
    if (frequency === "always" && impact === "blocker") {
        console.log("Frequency: always Impact: blocker Severity: P0");
    } else if (frequency === "always" && impact === "major") {
        console.log("Frequency: always Impact: major Severity: P1");
    } else if (frequency === "always" && impact === "minor") {
        console.log("Frequency: always Impact: minor Severity: P2");
    } else if (frequency === "often" && impact === "blocker") {
        console.log("Frequency: often Impact: blocker Severity: P1");
    } else if (frequency === "often" && impact === "major") {
        console.log("Frequency: often Impact: major Severity: P2");
    } else if (frequency === "often" && impact === "minor") {
        console.log("Frequency: often Impact: minor Severity: P3");
    } else if (frequency === "rarely" && impact === "blocker") {
        console.log("Frequency: rarely Impact: blocker Severity: P2");
    } else if (frequency === "rarely" && impact === "major") {
        console.log("Frequency: rarely Impact: major Severity: P3");
    } else if (frequency === "rarely" && impact === "minor") {
        console.log("Frequency: rarely Impact: minor Severity: P4");
    }
}