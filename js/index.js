const images = [
    "images/bg.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg",
    "images/bg5.jpg",
];

const imageElement = document.querySelector(".img");

let currentIndex = 0;

imageElement.src = images[currentIndex];

setInterval(() => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    imageElement.setAttribute("src", images[currentIndex]);
    imageElement.setAttribute("alt", `background image${currentIndex + 1}`)
}, 3000);