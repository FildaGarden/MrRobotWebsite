const images = ['img/1.jfif', 'img/2.jfif', 'img/3.jfif'];
const titles = [
    'New album dropped',
    'Another title',
    'Yet another title'
]; 
const descriptions = [
    'Looks really good you know, some stuff, blababl',
    'Description for the second image',
    'Description for the third image'
];

let currentIndex = 0;
const imageContainer = document.querySelector('.image-container img');
const titleContainer = document.querySelector('.text-container h1');
const descriptionContainer = document.querySelector('.text-container p');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');


function showContent() {
    imageContainer.src = images[currentIndex];
    titleContainer.textContent = titles[currentIndex];
    descriptionContainer.textContent = descriptions[currentIndex];
}


arrowLeft.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showContent();
});

arrowRight.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showContent();
});

showContent();
