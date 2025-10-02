const carouselL = document.getElementById('carouselL');
const carouselR = document.getElementById('carouselR');
const images = document.getElementsByClassName('carouselImg');

let currentImg = 0;
let intervalId;

// Hide all images except the first one
for (let i = 1; i < images.length; i++) {
    images[i].style.display = "none";
}
images[currentImg].style.display = "block";

// Show next image
function nextImage() {
    images[currentImg].style.display = "none";
    currentImg = (currentImg + 1) % images.length;
    images[currentImg].style.display = "block";
}

// Show previous image
function previousImage() {
    images[currentImg].style.display = "none";
    currentImg = (currentImg - 1 + images.length) % images.length;
    images[currentImg].style.display = "block";
}

// Start auto-play
function startAutoPlay() {
    intervalId = setInterval(nextImage, 3000); // change every 3s
}

// Restart autoplay after manual click
function resetAutoPlay() {
    clearInterval(intervalId);
    startAutoPlay();
}

// Button events
carouselL.addEventListener("click", () => {
    previousImage();
    resetAutoPlay();
});

carouselR.addEventListener("click", () => {
    nextImage();
    resetAutoPlay();
});

// Kick off autoplay
startAutoPlay();
