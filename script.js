// Event listener for image upload
document.getElementById('image-upload').addEventListener('change', function(event) {
  const inputImage = document.getElementById('input-preview-image');
  const fileNameDisplay = document.getElementById('file-name');
  const uploadLabel = document.querySelector('.upload-label');

  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
          inputImage.src = e.target.result;
          inputImage.style.display = 'block';
          fileNameDisplay.textContent = file.name; // Display the file name
          uploadLabel.style.display = 'none'; // Hide the upload label
      };

      reader.readAsDataURL(file);
  }
});

// Event listener for the download button
document.getElementById('download-btn').addEventListener('click', function() {
  const outputImage = document.getElementById('output-preview-image');
  if (outputImage.src) {
      const link = document.createElement('a');
      link.href = outputImage.src;
      link.download = 'processed-image.png';
      link.click();
  } else {
      alert("No image to download.");
  }
});

// Reset button functionality
document.getElementById('reset-btn').addEventListener('click', function() {
  // Clear the image preview
  const inputImage = document.getElementById('input-preview-image');
  inputImage.style.display = 'none';
  inputImage.src = '';

  // Reset the file input
  document.getElementById('image-upload').value = '';

  // Hide the file name display and clear its content
  const fileNameDisplay = document.getElementById('file-name');
  fileNameDisplay.textContent = '';

  // Show the upload label again
  const uploadLabel = document.querySelector('.upload-label');
  uploadLabel.style.display = 'inline-block';
});
