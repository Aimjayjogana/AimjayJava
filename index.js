const studentForm = document.getElementById("studentForm");
const studentNameInput = document.getElementById("studentName");
const schoolNameInput = document.getElementById("schoolName");
const courseInput = document.getElementById("course");
const formMessage = document.getElementById("formMessage");

const cardResult = document.getElementById("cardResult");
const cardStudentName = document.getElementById("cardStudentName");
const cardSchoolName = document.getElementById("cardSchoolName");
const cardCourse = document.getElementById("cardCourse");
const cardNumber = document.getElementById("cardNumber");

// Generates a card number like SC-2026-4817
function generateCardNumber() {
    const year = new Date().getFullYear();
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    return `SC-${year}-${randomPart}`;
}

function showError(message) {
    formMessage.textContent = message;
}

function clearError() {
    formMessage.textContent = "";
}

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = studentNameInput.value.trim();
    const schoolName = schoolNameInput.value.trim();
    const course = courseInput.value.trim();

    // Validation: all fields are required
    if (!studentName || !schoolName || !course) {
        showError("Please fill in all the fields before generating your card.");
        cardResult.hidden = true; // hide any previously generated card
        return;
    }

    clearError();

    // textContent is used so user input is never treated as HTML
    cardStudentName.textContent = studentName;
    cardSchoolName.textContent = schoolName;
    cardCourse.textContent = course;
    cardNumber.textContent = "Card No: " + generateCardNumber();

    cardResult.hidden = false;
    cardResult.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Clear the error as soon as the user starts typing again
[studentNameInput, schoolNameInput, courseInput].forEach(function (input) {
    input.addEventListener("input", clearError);
});