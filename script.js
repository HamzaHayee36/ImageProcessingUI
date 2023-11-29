document.getElementById('image-upload').addEventListener('change', function(event) {
  const inputImage = document.getElementById('input-preview-image');

  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      inputImage.src = e.target.result;
      inputImage.style.display = 'block';
    };

    reader.readAsDataURL(event.target.files[0]);
  }
});

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
