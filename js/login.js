
function submitForm() 
{
    var formData = $("#myForm").serialize();

    $.ajax({
        type: "POST",
        url: "../DATABASE/Login.php",
        data: formData
        // success: function(response) {
        //     $("#result").html("Relationship: " + response);
        // }
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
