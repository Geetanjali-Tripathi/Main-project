document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    const customerId = "CUST" + Math.floor(100000 + Math.random() * 900000); // Example: CUST123456
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,30}$/;
    let mobilePattern = /^[0-9]{10}$/;
    
    if (!passwordPattern.test(password)) {
        showPopup("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.", "red");
        return;
    }
    
    if (password !== confirmPassword) {
        showPopup("Passwords do not match.", "red");
        return;
    }
    
    if (!mobilePattern.test(mobile)) {
        showPopup("Enter a valid 10-digit mobile number.", "red");
        return;
    }
    
    let customerData = {
        customerId: customerId,
        name: name,
        email: email,
        mobile: mobile,
        password: password
    };
    
    localStorage.setItem(customerId, JSON.stringify(customerData));
    
    showPopup(`Customer Registration Successful!<br><br>Customer ID: <b>${customerId}</b><br>Customer Name: <b>${name}</b>`, "green");
    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 5000);
});

function showPopup(message, color) {
    let popup = document.getElementById("popup");
    popup.innerHTML = message + ' <button onclick="closePopup()">Close</button>';
    popup.style.display = "block";
    popup.style.color = color;
    
    setTimeout(() => {
        closePopup();
    }, 60000);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Admin Credentials
const adminId = "ADMIN123";
const adminPassword = "Admin@123";
localStorage.setItem("admin", JSON.stringify({ adminId, adminPassword }));
