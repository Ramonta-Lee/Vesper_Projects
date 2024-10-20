// scripts.js
function showCard(cardId) {
  console.log("Showing card:", cardId); // Debug message
  document.querySelectorAll(".overlay").forEach((overlay) => {
    overlay.classList.add("hidden-card");
  });
  document.getElementById(cardId).classList.remove("hidden-card");
}

function hideCard(cardId) {
  console.log("Hiding card:", cardId); // Debug message
  document.getElementById(cardId).classList.add("hidden-card");
}

document.querySelectorAll(".close-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click from propagating to overlay
    console.log("Close button clicked"); // Log when the close button is clicked
    hideCard(event.target.closest(".overlay").id);
  });
});
