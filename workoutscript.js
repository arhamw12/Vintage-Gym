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

// Workout Plan Generator
document.getElementById("workout-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const days = parseInt(document.getElementById("days").value);
  const workoutPlan = document.getElementById("workout-plan");
  workoutPlan.innerHTML = ""; // Clear previous plan

  if (days < 1 || days > 7 || isNaN(days)) {
    alert("Please enter a valid number of days between 1 and 7.");
    return;
  }

  const exercises = ["Cardio", "Strength Training", "Yoga", "HIIT", "Pilates", "Core Workouts", "Stretching"];
  for (let i = 0; i < days; i++) {
    const workout = exercises[i % exercises.length]; // Rotate through the exercises
    const listItem = document.createElement("li");
    listItem.textContent = `Day ${i + 1}: ${workout}`;
    workoutPlan.appendChild(listItem);
  }
});
