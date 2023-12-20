// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save preference in local storage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Check if dark mode preference is stored in local storage
function checkDarkModePreference() {
    const isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode === "true") {
        document.body.classList.add("dark-mode");
    }
}

// Add event listener for the dark mode button click
const darkModeButton = document.getElementById("dark-mode-btn");
if (darkModeButton) {
    darkModeButton.addEventListener("click", toggleDarkMode);
}

// Check and set the dark mode based on user preference
checkDarkModePreference();
