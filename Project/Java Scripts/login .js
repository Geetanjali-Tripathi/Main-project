document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get Values
    const customerId = document.getElementById("customerId").value.trim();
    const password = document.getElementById("password").value.trim();

    const customerIdError = document.getElementById("customerIdError");
    const passwordError = document.getElementById("passwordError");

    // Clear Previous Errors
    customerIdError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Customer ID Validation (5-20 characters)
    if (customerId.length < 5 || customerId.length > 20) {
        customerIdError.textContent = "Customer ID must be between 5 and 20 characters.";
        isValid = false;
    }

    // Password Validation (At least one uppercase, lowercase, number, special character)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,30}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be 4-30 characters and include at least one uppercase, one lowercase, one number, and one special character.";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        // Check if Customer ID exists (Assuming we stored it in localStorage)
        const storedCustomerId = localStorage.getItem("customerId");
        const storedPassword = localStorage.getItem("password");

        if (customerId === storedCustomerId && password === storedPassword) {
            window.location.href = "dashboard.html"; // Redirect after successful login
        } else {
            passwordError.textContent = "Invalid Customer ID or Password.";
        }
    }
});
