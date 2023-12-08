// profile.js

// Function to retrieve user information from local storage
function getUserInfo() {
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    // Add more information retrieval as needed

    return {
        email: storedEmail,
        password: storedPassword
        // Add more properties as needed
    };
}

// Function to update the profile details in the HTML
function updateProfile() {
    var userInfo = getUserInfo();

    // Check if user information is available
    if (userInfo.email) {
        document.getElementById("profileEmail").innerText = userInfo.email;
    }

    // Add more profile details updating as needed
}

// Call the updateProfile function when the page loads
window.onload = function () {
    updateProfile();
};
