let buttonClicked = false;

// Function to open the modal with fade-in effect
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add('show');
    if (buttonClicked) {
      spinWheel(); // Automatically spin the wheel only if the button was not clicked
    }
  }, 10); // Small delay to ensure display is set before adding the class
}

// Function to close the modal with fade-out effect
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = "none";
    redirectToLink(); // Redirect after the modal is closed
  }, 500); // Match the duration of the fade-out transition
}

// Function to show the congratulations overlay
function showCongratsOverlay(message) {
  const congratsOverlay = document.getElementById('congratsOverlay');
  const congratsMessage = document.getElementById('congratsMessage');
  congratsMessage.textContent = message;
  congratsOverlay.classList.add('show');

  // Close the congratulations overlay after a delay
  setTimeout(() => {
    congratsOverlay.classList.remove('show');
    if (buttonClicked) {
      closeModal(); // Close the modal only if the button was not clicked
    }
  }, 2000); // Adjust the delay time (2000 milliseconds = 2 seconds)
}

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
  setTimeout(() => {
    showCongratsOverlay("You got a 95% Discount!");
  }, 3500); // Adjust the delay time (3500 milliseconds = 3.5 seconds)
}

// Function to redirect to a different link
function redirectToLink() {
  window.location.href = "https://www.example.com"; // Replace with your desired URL
}

// Open the modal with a delay when the page loads
// window.onload = function() {
//   setTimeout(openModal, 2000); // Adjust the delay time (2000 milliseconds = 2 seconds)
// };

// Event listener for the first open modal button
document.getElementById('openModal1').addEventListener('click', function() {
  buttonClicked = true; // Set the flag when the button is clicked
  openModal(); // Open the modal without spinning the wheel automatically
});

// Event listener for the second open modal button
document.getElementById('openModal2').addEventListener('click', function() {
  buttonClicked = true; // Set the flag when the button is clicked
  openModal(); // Open the modal without spinning the wheel automatically
});

// Add event listener for the ad div
document.getElementById('adClickable').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior if needed
  buttonClicked = true; // Set the flag when the div is clicked
  openModal(); // Open the modal without spinning the wheel automatically
});

// Existing event listeners
document.getElementById('closeModal').addEventListener('click', closeModal);

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
};

document.getElementById('spinButton').addEventListener('click', spinWheel);

// Add event listeners for images with the 'trigger-modal' class
document.querySelectorAll('.trigger-modal').forEach(function(image) {
  image.addEventListener('click', function() {
    buttonClicked = true; // Set the flag when the image is clicked
    openModal(); // Open the modal without spinning the wheel automatically
  });
});

// Add event listeners for links with the 'trigger-modal-link' class
document.querySelectorAll('.trigger-modal-link').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    buttonClicked = true; // Set the flag when the link is clicked
    openModal(); // Open the modal without spinning the wheel automatically
  });
});
