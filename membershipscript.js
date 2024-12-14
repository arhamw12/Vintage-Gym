// Dynamic Greeting Based on Time of Day
function displayGreeting() {
  const greetingElement = document.getElementById("greeting");
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning! Your fitness journey starts here!";
  } else if (hours < 18) {
    greeting = "Good Afternoon! Your fitness journey starts here!";
  } else {
    greeting = "Good Evening! Your fitness journey starts here!";
  }

  greetingElement.textContent = greeting; // Set the greeting message dynamically
}

displayGreeting(); // Invoke the greeting function

// Membership Form Validation
document.getElementById("membership-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission for validation

  let isValid = true;

  // Get values from form fields
  const contactDetails = document.getElementById("contact-details").value;
  const dob = document.getElementById("dob").value;
  const emergencyContact = document.getElementById("emergency-contact").value;

  // Clear previous error messages
  document.getElementById("contact-error").textContent = "";
  document.getElementById("dob-error").textContent = "";
  document.getElementById("emergency-error").textContent = "";

  // Validate Contact Details (Email or Phone)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;
  if (contactDetails === "") {
    document.getElementById("contact-error").textContent = "Contact details are required.";
    isValid = false;
  } else if (!emailPattern.test(contactDetails) && !phonePattern.test(contactDetails)) {
    document.getElementById("contact-error").textContent = "Please enter a valid email or 10-digit phone number.";
    isValid = false;
  }

  // Validate Date of Birth
  if (dob === "") {
    document.getElementById("dob-error").textContent = "Date of Birth is required.";
    isValid = false;
  } else {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      document.getElementById("dob-error").textContent = "You must be at least 18 years old.";
      isValid = false;
    }
  }

  // Validate Emergency Contact
  if (emergencyContact === "") {
    document.getElementById("emergency-error").textContent = "Emergency contact is required.";
    isValid = false;
  } else if (!emailPattern.test(emergencyContact) && !phonePattern.test(emergencyContact)) {
    document.getElementById("emergency-error").textContent = "Please enter a valid email or 10-digit phone number.";
    isValid = false;
  }

  // If validation passes
  if (isValid) {
    document.getElementById("success-message").style.display = "block"; // Show success message
    alert("Membership form successfully submitted!");
    // Further actions like submitting to a backend can be added here
  }
});

// Initialize OpenStreetMap
function initializeMap() {
  const map = L.map("map").setView([40.712776, -74.005974], 14); // Coordinates for New York City

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Add a marker
  L.marker([40.712776, -74.005974])
    .addTo(map)
    .bindPopup("<b>Vintage Gym</b><br>Our location")
    .openPopup();
}

initializeMap(); // Initialize the map


