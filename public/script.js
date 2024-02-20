// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Add event listener for the "Sign Up" button
  document.getElementById("signup-button").addEventListener("click", function() {
    // Redirect to the About page
    window.location.href = "about.html";
  });

  // Add event listener for the "Add Post" button
  document.getElementById("add-post-button").addEventListener("click", function() {
    // Trigger file input click event
    document.getElementById("file-upload").click();
  });

  // Add event listener for file input change event
  document.getElementById("file-upload").addEventListener("change", function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // You can now upload the file to the server or perform any other action
      alert("File selected: " + file.name);
    }
  });
});
