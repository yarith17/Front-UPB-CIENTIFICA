// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const fileForm = document.getElementById('file-upload-form');
    const imageForm = document.getElementById('image-upload-form');
    const fileGrid = document.querySelector('.file-grid');
    const imageGrid = document.querySelector('.image-grid');

    fileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const files = document.getElementById('file-upload').files;
        for (const file of files) {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.textContent = file.name;
            fileGrid.appendChild(fileItem);
        }
    });

    imageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const images = document.getElementById('image-upload').files;
        for (const image of images) {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';
            imageItem.textContent = image.name;
            imageGrid.appendChild(imageItem);
        }
    });
});
