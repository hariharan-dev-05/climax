// Home page scripting

// Array of background images
const images = [
    './Asserts/bg/1.jpg',
    './Asserts/bg/2.jpg',
    './Asserts/bg/3.jpg',
    './Asserts/bg/4.jpg',
    './Asserts/bg/5.jpg'  // Add the 5 images here
];

// Get the background div elements
let bgSlide1 = document.getElementById('bgSlide1');
let bgSlide2 = document.getElementById('bgSlide2');

// Initialize variables
let currentIndex = 0;
let nextIndex = 1;
let activeSlide = 1;  // Keep track of which slide is currently visible
const changeInterval = 5000;  // 5 seconds interval

// Function to switch between background divs
function changeBackgroundImage() {
    if (activeSlide === 1) {
        // Show the second div, hide the first one
        bgSlide2.style.backgroundImage = `url(${images[nextIndex]})`;
        bgSlide2.style.opacity = 1;
        bgSlide1.style.opacity = 0;
        activeSlide = 2;
    } else {
        // Show the first div, hide the second one
        bgSlide1.style.backgroundImage = `url(${images[nextIndex]})`;
        bgSlide1.style.opacity = 1;
        bgSlide2.style.opacity = 0;
        activeSlide = 1;
    }

    // Update indices for the next image
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % images.length;  // Loop back to the start after the last image
}

// Set the initial background images
bgSlide1.style.backgroundImage = `url(${images[0]})`;
bgSlide2.style.backgroundImage = `url(${images[1]})`;

// Start the image rotation every few seconds
setInterval(changeBackgroundImage, changeInterval);

// Countdown Timer Logic
const timerElement = document.querySelector('.count-down');
const countdownDate = new Date('2024-10-11T00:00:00').getTime(); // Countdown to October 10, 2024

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `
        <div class="countdown-item"><span class="day">${days}</span> Days</div>
        <div class="timing">
        <div class="countdown-item"><span class="hr">${hours}</span> H</div>
        <div class="countdown-item"><span class="min">${minutes}</span> M</div>
        <div class="countdown-item"><span class="sec">${seconds}</span> S</div>
        </div>
    `;

    if (distance < 0) {
        clearInterval(countdownInterval);
        timerElement.innerHTML = "Welcome to Climax";
    }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();

// Sidebar scripting

let ham = document.getElementById('ham');
let sideBar = document.getElementById("sidebar");
let nav = document.getElementById('nav');
let hamSrc = document.getElementById("ham-src");

// Track the state of the sidebar
let isSidebarOpen = false;

ham.addEventListener('click', () => {
    if (isSidebarOpen) {
        // Close the sidebar
        sideBar.style.left = "-100dvw";
        nav.style.zIndex = "11";
        hamSrc.src = "./Asserts/list.svg";
    } else {
        // Open the sidebar
        sideBar.style.left = "0";
        nav.style.zIndex = "13";
        hamSrc.src = "./Asserts/list.svg";
    }

    // Toggle the state
    isSidebarOpen = !isSidebarOpen;
});

let year = document.getElementById('year');

year.textContent = new Date().getFullYear();