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

// Validation and adding participant
rsvpForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const stateInput = document.getElementById("state-input");
  const emailInput = document.getElementById("email-input");

  // Reset previous error highlight
  [nameInput, stateInput, emailInput].forEach(input => input.classList.remove("error"));

// Validation
let valid = true;

// Name must be 2+ characters
if (nameInput.value.trim().length < 2) { 
  nameInput.classList.add("error"); 
  valid = false; 
}

// State must be 2+ characters
if (stateInput.value.trim().length < 2) { 
  stateInput.classList.add("error"); 
  valid = false; 
}

// Email must contain "@"
if (!emailInput.value.includes("@")) { 
  emailInput.classList.add("error"); 
  valid = false; 
}

if (!valid) return; // stop if invalid

  // Add participant to list
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🎟️ ${nameInput.value} from ${stateInput.value} has RSVP'd.`;
  participantsDiv.appendChild(newParticipant);

  // Update RSVP count
  count++;
  const countEl = document.getElementById("rsvp-count");
  if (countEl) countEl.textContent = `⭐ ${count} people have RSVP'd to this event!`;

  // Reset form
  rsvpForm.reset();
});
