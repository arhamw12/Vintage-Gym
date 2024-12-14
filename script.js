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

displayGreeting();

// Image Slideshow
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0;
const slider = document.getElementById("slider");

function changeImage() {
  slider.style.opacity = 0; // Fade out
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slider.src = images[currentImageIndex];
    slider.style.opacity = 1; // Fade in
  }, 1000); // 1-second fade-out transition
}

setInterval(changeImage, 5000); // Change image every 5 seconds

