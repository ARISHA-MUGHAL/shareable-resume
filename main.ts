// Function to toggle visibility of a section
function toggleVisibility(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Function to handle profile picture upload
function uploadProfilePicture(): void {
    const input = document.getElementById("profilePictureInput") as HTMLInputElement;
    const displayPicture = document.getElementById("displayPicture") as HTMLImageElement;
    
    if (input && displayPicture && input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                displayPicture.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Adding event listeners for toggle buttons to ensure they work after the page loads
document.addEventListener("DOMContentLoaded", () => {
    const skillsButton = document.querySelector("button[onclick*='toggleVisibility(\"skillsSection\")']");
    const expertiseButton = document.querySelector("button[onclick*='toggleVisibility(\"expertiseSection\")']");

    skillsButton?.addEventListener("click", () => toggleVisibility("skillsSection"));
    expertiseButton?.addEventListener("click", () => toggleVisibility("expertiseSection"));
});