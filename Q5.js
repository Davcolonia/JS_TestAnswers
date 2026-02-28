//USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE 
//USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE 
//USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
const roles = ["admin", "editor", "viewer", "tester", "manager"];


function generateUser(user) {
    const users = [];
    for (let i = 0; i < user; i++) {
        let id = "USR00" + i;
        let name = "TestUser_" + i;
        let email = "testuser" + i + "@testingacademy.com";
        let role = roles[i];
        let isActive = i % 3 !== 0;
        users.push({
            id,
            name,
            email,
            role,
            isActive
        });
    }
    return users;


}

console.log(generateUser(5));