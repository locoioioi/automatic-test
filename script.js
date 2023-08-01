// Function to perform an automatic click
function autoClick() {
  // Replace 'targetButtonId' with the ID of the button you want to click automatically
  const buttonToClick = document.getElementById('targetButtonId');
  
  // Check if the button exists on the page
  if (buttonToClick) {
    // Perform the click event on the button
    buttonToClick.click();
  } else {
    console.log("Button not found on the page.");
  }
}
window.onload = autoClick;