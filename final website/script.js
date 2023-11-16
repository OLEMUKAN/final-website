document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is authenticated (you may need to implement this check using sessions or cookies)
    const isAuthenticated = /* Implement your logic to check authentication status */ false;

    // Get the "Join Us" button element
    const joinUsButton = document.getElementById("joinUsButton");

    // If the user is authenticated, change the button to a user icon
    if (isAuthenticated) {
        joinUsButton.innerHTML = '<i class="fas fa-user"></i>';
        joinUsButton.href = "profile.html"; // Update the href to the user's profile page
    }
});
