const EXTERNAL_LIBRARY_URL = "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

// Initialize window object
window = {};

// Send request to load external library
pm.sendRequest(EXTERNAL_LIBRARY_URL, (error, response) => {
    if (error || response.code !== 200) {
        console.log('Could not load external library');
        return;
    }
    // Evaluate the external library
    eval(response.text());

    // Wait for the evaluation to complete before using faker
    setTimeout(() => {
        // Generate data using faker
        const username = window.faker.internet.userName();
        const email = window.faker.internet.email();
        const password = window.faker.internet.password();
        const firstName = window.faker.name.firstName();
        const lastName = window.faker.name.lastName();
        const cellPhoneNumber = window.faker.phone.phoneNumber();

        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Cell Phone Number: ${cellPhoneNumber}`);
    });
});
