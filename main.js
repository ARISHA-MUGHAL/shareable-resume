"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var html2canvas_1 = require("html2canvas");
var jspdf_1 = require("jspdf");
// Function to show the form and hide the initial button
function showForm() {
    var formSection = document.getElementById("form-section");
    var generateButtonSection = document.getElementById("generateButtonSection");
    var resumeContainer = document.querySelector(".resume-container");
    formSection.style.display = "block";
    generateButtonSection.style.display = "none";
    resumeContainer.style.display = "none";
}
// Function to update the resume with the form data
function updateResume() {
    var name = document.getElementById('nameInput').value;
    var title = document.getElementById('titleInput').value;
    var education = document.getElementById('educationInput').value;
    var expertise = document.getElementById('expertiseInput').value;
    var hobbies = document.getElementById('hobbiesInput').value;
    var about = document.getElementById('aboutInput').value;
    var workExperience = document.getElementById('workExperienceInput').value;
    var projects = document.getElementById('projectsInput').value;
    var skills = document.getElementById('skillsInput').value;
    var email = document.getElementById('emailInput').value;
    var phone = document.getElementById('phoneInput').value;
    // Updating content
    document.getElementById('name').textContent = name;
    document.getElementById('title').textContent = title;
    document.getElementById('resume-education').textContent = education;
    document.getElementById('resume-expertise').textContent = expertise;
    document.getElementById('resume-hobbies').textContent = hobbies;
    document.getElementById('resume-about').textContent = about;
    document.getElementById('resume-work-experience').textContent = workExperience;
    document.getElementById('resume-projects').textContent = projects;
    document.getElementById('resume-skills').textContent = skills;
    document.getElementById('resume-email').innerHTML = " <strong>Email:</strong> ".concat(email);
    document.getElementById('resume-phone').innerHTML = "<strong>Phone:</strong> ".concat(phone);
    // Hiding form and showing resume
    var formSection = document.getElementById("form-section");
    var resumeContainer = document.querySelector(".resume-container");
    formSection.style.display = "none";
    resumeContainer.style.display = "block";
}
// Function to handle profile picture upload
function uploadProfilePicture() {
    var input = document.getElementById("profilePictureInput");
    var displayPicture = document.getElementById("displayPicture");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                displayPicture.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// Function to toggle edit mode
function toggleEdit() {
    var formSection = document.getElementById("form-section");
    var resumeContainer = document.querySelector(".resume-container");
    if (formSection.style.display === "block") {
        formSection.style.display = "none";
        resumeContainer.style.display = "block";
    }
    else {
        formSection.style.display = "block";
        resumeContainer.style.display = "none";
    }
}
// Function to export the resume as PDF
function exportResumeAsPDF() {
    var resumeElement = document.querySelector(".resume-container");
    (0, html2canvas_1.default)(resumeElement).then(function (canvas) {
        var imageData = canvas.toDataURL("image/png");
        var pdf = new jspdf_1.default();
        pdf.addImage(imageData, "PNG", 10, 10, 190, 0);
        pdf.save("resume.pdf");
    });
}
// Function to export the resume as PNG
function exportResumeAsPNG() {
    var resumeElement = document.querySelector(".resume-container");
    (0, html2canvas_1.default)(resumeElement).then(function (canvas) {
        var link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "resume.png";
        link.click();
    });
}
// Function to generate a unique URL based on username
function generateUniqueURL() {
    var username = document.getElementById('nameInput').value.trim();
    var encodedData = encodeURIComponent(JSON.stringify(getFormData()));
    var uniqueURL = "".concat(window.location.origin, "/resume?user=").concat(username, "&data=").concat(encodedData);
    alert("Your resume URL: ".concat(uniqueURL));
}
// Function to get form data for URL encoding
function getFormData() {
    return {
        name: document.getElementById("nameInput").value,
        title: document.getElementById("titleInput").value,
        education: document.getElementById("educationInput").value,
        expertise: document.getElementById("expertiseInput").value,
        hobbies: document.getElementById("hobbiesInput").value,
        about: document.getElementById("aboutInput").value,
        workExperience: document.getElementById("workExperienceInput").value,
        projects: document.getElementById("projectsInput").value,
        skills: document.getElementById("skillsInput").value,
        email: document.getElementById("emailInput").value,
        phone: document.getElementById("phoneInput").value,
    };
}
// Event Listeners for buttons
(_a = document.getElementById("exportPDFBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", exportResumeAsPDF);
(_b = document.getElementById("exportPNGBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", exportResumeAsPNG);
(_c = document.getElementById("generateURLBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", generateUniqueURL);
