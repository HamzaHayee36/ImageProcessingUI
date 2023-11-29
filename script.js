// Event listener for the image upload input
document.getElementById('image-upload').addEventListener('change', function(event) {
  // References to the image preview and file name display elements
  const inputImage = document.getElementById('input-preview-image');
  const fileNameDisplay = document.getElementById('file-name');
  const uploadLabel = document.querySelector('.upload-label');

  // Check if a file was selected
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Load the image and update the UI
    reader.onload = function(e) {
      inputImage.src = e.target.result; // Set the image source
      inputImage.style.display = 'block'; // Display the image
      fileNameDisplay.textContent = file.name; // Show the file name
      uploadLabel.style.display = 'none'; // Hide the upload label
    };

    reader.readAsDataURL(file); // Read the file
  }
});

// Event listener for the download button
document.getElementById('download-btn').addEventListener('click', function() {
  const outputImage = document.getElementById('output-preview-image');

  // Check if there's an image to download
  if (outputImage.src) {
    const link = document.createElement('a');
    link.href = outputImage.src; // Set the download URL
    link.download = 'processed-image.png'; // Set the file name
    link.click(); // Trigger the download
  } else {
    alert("No image to download."); // Alert if no image
  }
});
