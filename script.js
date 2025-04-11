const animateBtn = document.getElementById('animate-btn');
const wishText = document.getElementById('wish-text');
const images = document.querySelectorAll('.image-container img');

animateBtn.addEventListener('click', () => {
    // Animate the wish text
    wishText.style.animation = 'fadeIn 2s ease-in-out';
    wishText.style.opacity = 1;

    // Animate the images
    images.forEach((image, index) => {
        image.style.animation = `fadeIn ${index + 1}s ease-in-out`;
        image.style.opacity = 1;
    });
});

// Add animation effects
wishText.style.opacity = 0;
images.forEach((image) => {
    image.style.opacity = 0;
});


