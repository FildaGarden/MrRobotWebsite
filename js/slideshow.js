const images = ['img/1.jfif', 'img/2.jfif', 'img/3.jfif'];
const titles = [
    'Introduction',
    'Awards',
    'Now on Spotify!'
]; 
const descriptions = [
    '"Mr. Robot" is a gripping TV series that follows Elliot Alderson, a cybersecurity engineer by day and a vigilante hacker by night, as he navigates a complex world of underground hacking and corporate corruption while battling his own personal demons.',
    '"Mr. Robot" received critical acclaim and numerous awards, including multiple Emmys and a Golden Globe for Best Television Drama Series. Its innovative storytelling and standout performances were widely celebrated throughout its run.',
    'The music from "Mr. Robot" is now on Spotify! That means you can easily listen to the cool tunes that helped set the shows mood. Whether youre a big fan or just getting started.<iframe style="border-radius:12px" class="spotify-container" src="https://open.spotify.com/embed/playlist/1xDNuLHKQHghKR9SmkR9pD?utm_source=generator" width="80%" height="250" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
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
    descriptionContainer.innerHTML = descriptions[currentIndex];
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
