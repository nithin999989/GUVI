function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("passwordMessage");

    if (password === confirmPassword) {
        message.innerHTML = "Passwords match!";
        message.style.color = "green";
    } else {
        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";
    }
}
function submitForm() {
    var formData = $("#myForm").serialize();

    $.ajax({
        type: "POST",
        url: "../DATABASE/Register.php",
        data: formData,
        success: function(response) {
            // Assuming the server responds with a success message
            $("#result").html("Registration successful: " + response);
        },
        error: function(error) {
            $("#result").html("Registration failed: " + error);
        }
    });
}


function register() {
   
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Save user information in local storage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration successful!");
}
