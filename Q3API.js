const MAX = 5;
var tries = 0;
while (tries < MAX) {
    const success = Math.random() > 0.6;
    if (success) {
        console.log("SUCCESS (Response 200 OK)");
        console.log("API call PASSED after " + tries + " attempt(s).");
        break;
    } else {
        console.log("FAILED (Timeout/Error)");
    }
    tries++
}


