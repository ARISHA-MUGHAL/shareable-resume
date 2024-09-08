import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Function to show the form and hide the initial button
function showForm(): void {
    const formSection = document.getElementById("form-section") as HTMLElement;
    const generateButtonSection = document.getElementById("generateButtonSection") as HTMLElement;
    const resumeContainer = document.querySelector(".resume-container") as HTMLElement;

    formSection.style.display = "block";
    generateButtonSection.style.display = "none";
    resumeContainer.style.display = "none";
}

// Function to update the resume with the form data
function updateResume(): void {
    const name = (document.getElementById('nameInput') as HTMLInputElement).value;
    const title = (document.getElementById('titleInput') as HTMLInputElement).value;
    const education = (document.getElementById('educationInput') as HTMLInputElement).value;
    const expertise = (document.getElementById('expertiseInput') as HTMLInputElement).value;
    const hobbies = (document.getElementById('hobbiesInput') as HTMLInputElement).value;
    const about = (document.getElementById('aboutInput') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperienceInput') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projectsInput') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skillsInput') as HTMLInputElement).value;
    const email = (document.getElementById('emailInput') as HTMLInputElement).value;
    const phone = (document.getElementById('phoneInput') as HTMLInputElement).value;

    // Updating content
    (document.getElementById('name') as HTMLHeadingElement).textContent = name;
    (document.getElementById('title') as HTMLParagraphElement).textContent = title;
    (document.getElementById('resume-education') as HTMLParagraphElement).textContent = education;
    (document.getElementById('resume-expertise') as HTMLParagraphElement).textContent = expertise;
    (document.getElementById('resume-hobbies') as HTMLParagraphElement).textContent = hobbies;
    (document.getElementById('resume-about') as HTMLParagraphElement).textContent = about;
    (document.getElementById('resume-work-experience') as HTMLParagraphElement).textContent = workExperience;
    (document.getElementById('resume-projects') as HTMLParagraphElement).textContent = projects;
    (document.getElementById('resume-skills') as HTMLParagraphElement).textContent = skills;
    (document.getElementById('resume-email') as HTMLParagraphElement).innerHTML =` <strong>Email:</strong> ${email}`;
    (document.getElementById('resume-phone') as HTMLParagraphElement).innerHTML = `<strong>Phone:</strong> ${phone}`;

    // Hiding form and showing resume
    const formSection = document.getElementById("form-section") as HTMLElement;
    const resumeContainer = document.querySelector(".resume-container") as HTMLElement;

    formSection.style.display = "none";
    resumeContainer.style.display = "block";
}

// Function to handle profile picture upload
function uploadProfilePicture(): void {
    const input = document.getElementById("profilePictureInput") as HTMLInputElement;
    const displayPicture = document.getElementById("displayPicture") as HTMLImageElement;

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                displayPicture.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Function to toggle edit mode
function toggleEdit(): void {
    const formSection = document.getElementById("form-section") as HTMLElement;
    const resumeContainer = document.querySelector(".resume-container") as HTMLElement;

    if (formSection.style.display === "block") {
        formSection.style.display = "none";
        resumeContainer.style.display = "block";
    } else {
        formSection.style.display = "block";
        resumeContainer.style.display = "none";
    }
}

// Function to export the resume as PDF
function exportResumeAsPDF(): void {
    const resumeElement = document.querySelector(".resume-container") as HTMLElement;
    html2canvas(resumeElement).then((canvas: HTMLCanvasElement) => {
        const imageData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imageData, "PNG", 10, 10, 190, 0);
        pdf.save("resume.pdf");
    });
}

// Function to export the resume as PNG
function exportResumeAsPNG(): void {
    const resumeElement = document.querySelector(".resume-container") as HTMLElement;
    html2canvas(resumeElement).then((canvas: HTMLCanvasElement) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "resume.png";
        link.click();
    });
}

// Function to generate a unique URL based on username
function generateUniqueURL(): void {
    const username = (document.getElementById('nameInput') as HTMLInputElement).value.trim();
    const encodedData = encodeURIComponent(JSON.stringify(getFormData()));
    const uniqueURL = `${window.location.origin}/resume?user=${username}&data=${encodedData}`;
    alert(`Your resume URL: ${uniqueURL}`);
}

// Function to get form data for URL encoding
function getFormData(): object {
    return {
        name: (document.getElementById("nameInput") as HTMLInputElement).value,
        title: (document.getElementById("titleInput") as HTMLInputElement).value,
        education: (document.getElementById("educationInput") as HTMLInputElement).value,
        expertise: (document.getElementById("expertiseInput") as HTMLInputElement).value,
        hobbies: (document.getElementById("hobbiesInput") as HTMLInputElement).value,
        about: (document.getElementById("aboutInput") as HTMLTextAreaElement).value,
        workExperience: (document.getElementById("workExperienceInput") as HTMLTextAreaElement).value,
        projects: (document.getElementById("projectsInput") as HTMLTextAreaElement).value,
        skills: (document.getElementById("skillsInput") as HTMLInputElement).value,
        email: (document.getElementById("emailInput") as HTMLInputElement).value,
        phone: (document.getElementById("phoneInput") as HTMLInputElement).value,
    };
}

// Event Listeners for buttons
document.getElementById("exportPDFBtn")?.addEventListener("click", exportResumeAsPDF);
document.getElementById("exportPNGBtn")?.addEventListener("click", exportResumeAsPNG);
document.getElementById("generateURLBtn")?.addEventListener("click", generateUniqueURL);