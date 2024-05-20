// Function to open the modal with fade-in effect and spin the wheel
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = "block";
  setTimeout(() => {
      modal.classList.add('show');
      spinWheel(); // Automatically spin the wheel after modal is shown
  }, 10); // Small delay to ensure display is set before adding the class
}

// Function to close the modal with fade-out effect
// function closeModal() {
//   const modal = document.getElementById('modal');
//   modal.classList.remove('show');
//   setTimeout(() => {
//       modal.style.display = "none";
//   }, 500); // Match the duration of the fade-out transition
// }

// Function to show the congratulations overlay
// function showCongratsOverlay(message) {
//   const congratsOverlay = document.getElementById('congratsOverlay');
//   const congratsMessage = document.getElementById('congratsMessage');
//   congratsMessage.textContent = message;
//   congratsOverlay.classList.add('show');

//   // Close the modal and overlay after a delay
//   setTimeout(() => {
//       congratsOverlay.classList.remove('show');
//       closeModal();
//   }, 2000); // Adjust the delay time (4000 milliseconds = 4 seconds)
// }

// Function to spin the wheel
function spinWheel() {
  const wheel = document.getElementById('wheel');
  const degreesTo95OffStart = 324; // Start position of "95% OFF" in degrees
  const degreesTo95OffEnd = 360; // End position of "95% OFF" in degrees
  const additionalRotations = 5 * 360; // 10 full rotations

  // Generate a more distributed random number within the range of the "95% OFF" section
  const randomOffset = Math.random() * (degreesTo95OffEnd - degreesTo95OffStart);

  // Calculate the exact rotation to land within the "95% OFF" section
  const deg = degreesTo95OffStart + randomOffset + additionalRotations;

  // Reset the wheel rotation before applying the new rotation
  wheel.style.transition = 'none';
  wheel.style.transform = 'rotate(0deg)';

  // Force a reflow to ensure the previous transform is applied immediately
  wheel.offsetHeight; // This is a hack to force a reflow

  // Apply the new rotation with a transition
  wheel.style.transition = 'transform 3s ease-out'; // Adjust the duration as needed
  wheel.style.transform = `rotate(${deg}deg)`;

  // Show the congratulations overlay after the wheel stops spinning
  // setTimeout(() => {
  //     showCongratsOverlay("You got a 95% Discount!");
  // }, 3500); // Adjust the delay time (4000 milliseconds = 4 seconds)
}

// Open the modal with a delay when the page loads
// window.onload = function() {
//   setTimeout(openModal, 2000); // Adjust the delay time (2000 milliseconds = 2 seconds)
// };

// Existing event listeners
document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
      closeModal();
  }
};

document.getElementById('spinButton').addEventListener('click', spinWheel);
