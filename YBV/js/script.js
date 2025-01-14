window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};
// Array of image URLs
const images = [
    'images/p1.jpg',
    'images/p2.jpeg',
    'images/p3.jpeg',
    'images/p4.jpeg',
    'images/p5.jpeg',
    'images/p6.webp',
    'images/p7.jpeg',
    'images/p8.jpg',
    'images/p9.jpg'
];

// Select the image element
const imgElement = document.getElementById('changingImage');

// Start at the first image
let currentIndex = 0;

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    imgElement.src = images[currentIndex]; // Update the image source
}

// Change the image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);