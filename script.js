document.getElementById('imageUpload').addEventListener('change', function(event) {
  const previewContainer = document.getElementById('previewContainer');
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
          previewContainer.innerHTML = '';
          previewContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  const previewContainer = document.getElementById('previewContainer');
  previewContainer.innerHTML = 'Image preview will be shown here...';
  document.getElementById('imageUpload').value = '';
});

document.getElementById('runButton').addEventListener('click', function() {
  // Add logic for processing the image
  alert('Run button clicked. Implement the processing logic.');
});
