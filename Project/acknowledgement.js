document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    
    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Mobile Number Validation
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Password Validation (At least one uppercase, lowercase, digit, special char)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,30}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be 4-30 characters and include at least one uppercase, one lowercase, one number, and one special character.");
        return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Generate Unique Customer ID
    const customerId = "CUST" + Math.floor(100000 + Math.random() * 900000); // Example: CUST123456

    // Redirect to Acknowledgment Page with Data
    localStorage.setItem("customerId", customerId);
    localStorage.setItem("customerName", name);
    window.location.href = "acknowledgment.html"; 
});
