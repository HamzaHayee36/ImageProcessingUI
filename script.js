document.getElementById('image-upload').addEventListener('change', function(event) {
  const inputImage = document.getElementById('input-image');

  // Check if a file was selected
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      // Set the source of the input image and display it
      inputImage.src = e.target.result;
      inputImage.style.display = 'block';
    }

    // Read the file as a Data URL
    reader.readAsDataURL(event.target.files[0]);
  }
});

document.getElementById('download-btn').addEventListener('click', function() {
  const outputImage = document.getElementById('output-image');
  if(outputImage.src) {
    // Create a link and set the URL to the image source
    const link = document.createElement('a');
    link.href = outputImage.src;
    // Set the download attribute to a default file name
    link.download = 'processed-image.png';
    // Trigger the download
    link.click();
  } else {
    alert("No image to download.");
  }
});

// You can add additional event listeners and functions for other buttons as needed
