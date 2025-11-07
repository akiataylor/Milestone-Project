/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
// Step 1: Add your query for the submit RSVP button here

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here

    event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
themeButton.addEventListener("click", toggleDarkMode);
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/