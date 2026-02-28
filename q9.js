var failedAttempts;
const MAX_ATTEMPTS = 3;
const USERNAME = "admin";
const PASSWORD = "[PASSWORD]";


function login(username, password) {
    do {
        console.log("Attempt " + failedAttempts + " of " + MAX_ATTEMPTS);
        failedAttempts++;
    } while (failedAttempts < MAX_ATTEMPTS);
}

const attempts = [
    { username: "admin", password: "wrong" },
    { username: "admin", password: "badpass" },
    { username: "admin", password: "[PASSWORD]" } // correct one
];
console.log(login(attempts[0].username, attempts[0].password));
console.log(login(attempts[1].username, attempts[1].password));
console.log(login(attempts[2].username, attempts[2].password));
