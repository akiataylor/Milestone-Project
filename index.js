/*** Dark Mode ***/
const themeButton = document.getElementById("theme-button");

// Toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  // Glow animation
  themeButton.classList.add("glow");
  setTimeout(() => themeButton.classList.remove("glow"), 500);

  // Save preference
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


/*** RSVP Form Handling ***/
const rsvpForm = document.getElementById("rsvp-form");
const participantsDiv = document.querySelector(".rsvp-participants");
let count = 3; // initial RSVP count


const toggleModal = (person) => {
    const modal = document.getElementById("success-modal");
    const modalContent = document.getElementById("modal-text");

    // TODO: Update modal display to flex
    modal.style.display = "flex";
  
    // TODO: Update modal text to personalized message
modalContent.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;

    // Set modal timeout to 5 seconds
    setTimeout(() => {
  modal.style.display = "none";
}, 5000);
    
}
const closeModalBtn = document.getElementById("close-modal-btn");
const closeModal = () => {
    const modal = document.getElementById("success-modal");
    modal.style.display = "none";
};
closeModalBtn.addEventListener("click", closeModal);



// TODO: animation variables and animateImage() function

// Validation function - creates person object and validates form
const validateForm = () => {
  let containsErrors = false;

  let rsvpInputs = document.getElementById("rsvp-form").elements;

  // Create person object from form inputs
  let person = {
    name: rsvpInputs[0].value,        // name-input
    hometown: rsvpInputs[1].value,    // state-input
    email: rsvpInputs[2].value        // email-input
  }
   
  // Reset previous error highlights
  const nameInput = document.getElementById("name-input");
  const stateInput = document.getElementById("state-input");
  const emailInput = document.getElementById("email-input");
  [nameInput, stateInput, emailInput].forEach(input => input.classList.remove("error"));

  // Validation
  // Name must be 2+ characters
  if (person.name.trim().length < 2) {
    nameInput.classList.add("error");
    containsErrors = true;
  }

  // Hometown/State must be 2+ characters
  if (person.hometown.trim().length < 2) {
    stateInput.classList.add("error");
    containsErrors = true;
  }

  // Email must contain "@"
  if (!person.email.includes("@")) {
    emailInput.classList.add("error");
    containsErrors = true;
  }

  if (containsErrors) return null; // return null if validation fails

  return person; // return the person object if valid
  
}

// Form submission handling
rsvpForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate form and get person object
  const person = validateForm();

  if (!person) return; // stop if validation failed

  // Add participant to list
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🎟️ ${person.name} from ${person.hometown} has RSVP'd.`;
  participantsDiv.appendChild(newParticipant);

  // Update RSVP count
  count++;
  const countEl = document.getElementById("rsvp-count");
  if (countEl) countEl.textContent = `⭐ ${count} people have RSVP'd to this event!`;

  // ✅ Show personalized modal
  toggleModal(person);


  // Reset form
  rsvpForm.reset();
});

/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
          revealableContainers[i].classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else {
          revealableContainers[i].classList.remove('active');
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);

// Run once on load so elements in view are revealed immediately
document.addEventListener('DOMContentLoaded', reveal);