const home = document.querySelector("#home");
const aboutMe = document.querySelector("#about-me");
const education = document.querySelector("#education");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const contactBtn = document.querySelector(".contact-btn");
const closeContact = document.querySelector(".close-contact");
const formContainer = document.querySelector(".form");
const navBar = document.querySelector(".header-nav-links");

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".header-nav-links a");

  links.forEach((link, index) => {
    if (index !== links.length - 1) {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetId = link.getAttribute("href"); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section

        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});

// //revealing elements on scroll
const reveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //console.log(entry.target);
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const allSections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((sec) => {
  //console.log(sec);

  sectionObserver.observe(sec);
  sec.classList.add("section-hidden");
  //console.log(sec.classList);
});

closeContact.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
});

contactBtn.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
});

//form handling using java script
// const contactForm = document.querySelector("#contact-form");

// contactForm.addEventListener("submit", (e) => {
//   //e.preventDefault();

//   // Clear previous error messages
//   const errorMessages = document.getElementById("errorMessages");
//   errorMessages.innerHTML = "";

//   // Get form values
//   const name = document.querySelector("#name");
//   const email = document.querySelector("#email");
//   const message = document.querySelector("#message");

//   // Validate each field
//   let isValid = true;

//   // Name validation
//   if (name.value.trim() === "") {
//     isValid = false;
//     showError(name, "Name is required.");
//   } else if (name.value.trim().length < 3) {
//     isValid = false;
//     showError(name, "Name must be at least 3 characters long.");
//   } else {
//     clearError(name);
//   }

//   // Email validation
//   const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
//   if (email.value.trim() === "") {
//     isValid = false;
//     showError(email, "Email is required.");
//   } else if (!emailPattern.test(email.value.trim())) {
//     isValid = false;
//     showError(email, "Invalid email format.");
//   } else {
//     clearError(email);
//   }

//   // Message validation
//   if (message.value.trim() === "") {
//     isValid = false;
//     showError(message, "Message is required.");
//   } else if (message.value.trim().length < 10) {
//     isValid = false;
//     showError(message, "Message must be at least 10 characters long.");
//   } else {
//     clearError(message);
//   }

//   // If the form is valid, submit it
//   if (isValid) {
//     alert("Form submitted successfully!");
//     this.submit(); // Remove this if you're not testing
//   }
// });

// // Function to display error messages
// function showError(input, message) {
//   input.classList.add("invalid");
//   const errorDiv = document.createElement("div");
//   errorDiv.textContent = message;
//   errorMessages.appendChild(errorDiv);
// }

// // Function to clear error messages
// function clearError(input) {
//   input.classList.remove("invalid");
// }
