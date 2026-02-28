//Environments: 
// dev, staging, qa, 
// production/prod. 
// Each has different base URL, 
// API key prefix, timeout, and description.
const timeout = 8000;
switch (environment) {
    case dev:
        console.log("Base URL: https://dev-api.testingacademy.com");
        console.log("API Key: dev_key_xxxx-xxxx");
        console.log("Timeout: " + timeout + "ms");
        console.log("Description: Dev");
        break;
    case staging:
        console.log("Base URL: https://staging-api.testingacademy.com");
        console.log("API Key: staging_key_xxxx-xxxx");
        console.log("Timeout: " + timeout + "ms");
        console.log("Description: staging");
        break;
    case qa:
        console.log("Base URL: https://qa-api.testingacademy.com");
        console.log("API Key: qa_key_xxxx-xxxx");
        console.log("Timeout: " + timeout + "ms");
        console.log("Description: qa");
        break;
    case production:
        console.log("Base URL: https://prod-api.testingacademy.com");
        console.log("API Key: prod_key_xxxx-xxxx");
        console.log("Timeout: " + timeout + "ms");
        console.log("Description: prod");
        break;
    default:
        console.log("Invalid environment");
        break;
}