function submitForm() {
    var formData = $("#myForm").serialize();

    $.post({
        url: "../DATABASE/Login.php",
        data: formData,
        success: function(response) {
            // Assuming the response is a JSON object with username and password
            var receivedData = JSON.parse(response);

            // Store received data in local storage
            localStorage.setItem("email", receivedData.email);
            localStorage.setItem("password", receivedData.password);

            alert("Data successfully fetched and stored!");
        },
        error: function() {
            alert("Failed to fetch data from the server.");
        }
    });
}

function login() {
    var enteredUsername = document.getElementById("email").value;
    var enteredPassword = document.getElementById("password").value;

    // Retrieve stored user information from local storage
    var storedUsername = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    // Check if entered credentials match stored credentials
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}
