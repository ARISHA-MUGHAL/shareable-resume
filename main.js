// Function to toggle visibility of a section
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
}
// Function to handle profile picture upload
function uploadProfilePicture() {
    var input = document.getElementById("profilePictureInput");
    var displayPicture = document.getElementById("displayPicture");
    if (input && displayPicture && input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                displayPicture.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// Adding event listeners for toggle buttons to ensure they work after the page loads
document.addEventListener("DOMContentLoaded", function () {
    var skillsButton = document.querySelector("button[onclick*='toggleVisibility(\"skillsSection\")']");
    var expertiseButton = document.querySelector("button[onclick*='toggleVisibility(\"expertiseSection\")']");
    skillsButton === null || skillsButton === void 0 ? void 0 : skillsButton.addEventListener("click", function () { return toggleVisibility("skillsSection"); });
    expertiseButton === null || expertiseButton === void 0 ? void 0 : expertiseButton.addEventListener("click", function () { return toggleVisibility("expertiseSection"); });
});
