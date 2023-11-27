const images = ['img/1.jfif', 'img/2.jfif', 'img/3.jfif']; // Add paths to your images
const titles = [
    'New album dropped',
    'Another title',
    'Yet another title'
]; // Corresponding titles for the images
const descriptions = [
    'Looks really good you know, some stuff, blababl',
    'Description for the second image',
    'Description for the third image'
]; // Corresponding descriptions for the images

let currentIndex = 0;
const imageContainer = document.querySelector('.image-container img');
const titleContainer = document.querySelector('.text-container h1');
const descriptionContainer = document.querySelector('.text-container p');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

// Function to show the current content
function showContent() {
    imageContainer.src = images[currentIndex];
    titleContainer.textContent = titles[currentIndex];
    descriptionContainer.textContent = descriptions[currentIndex];
}

// Event listener for the left arrow button
arrowLeft.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showContent();
});

// Event listener for the right arrow button
arrowRight.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showContent();
});

// Show the initial content
showContent();
