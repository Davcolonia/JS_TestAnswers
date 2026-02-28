function checkElementStatus(isPresent, isDisplayed, isEnabled) {

    if (isPresent && isDisplayed && isEnabled) {
        console.log("Status: READY ");
    } else if (isPresent && isDisplayed && !isEnabled) {
        console.log("Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.");
    } else if (isPresent && !isDisplayed) {
        console.log("Status: HIDDEN Severity: WARNING Action: Element is present but not visible.");
    } else if (!isPresent) {
        console.log("Status: NOT FOUND: Severity: CRITICAL.");
    } else if (!isDisplayed || !isEnabled) {
        console.log("WARNING (not displayed or not enabled)");
    } else {
        console.log("OK (all good)");
    }
}
