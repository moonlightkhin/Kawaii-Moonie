// --- 1. CONFIGURATION & STATE ---
let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;
let isPlaying = false;

// Maximum number of images you have for each category
const MAX_HATS = 9;
const MAX_DRESSES = 9;
const MAX_SHOES = 4;

// --- 2. MUSIC LOGIC ---
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

/**
 * Handles the Play/Pause functionality for background music
 */
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "🎵 OFF";
        console.log("Music paused");
    } else {
        // We use a promise check because browsers often block audio 
        // until the user interacts with the page.
        music.play()
            .then(() => {
                musicBtn.innerText = "🎵 ON";
                console.log("Music playing!");
            })
            .catch(error => {
                console.error("Music playback failed. Check if 'music.mp3' exists in your folder!", error);
                alert("Please make sure you have uploaded 'music.mp3' to your GitHub folder!");
            });
    }
    isPlaying = !isPlaying;
}

// --- 3. CLOTHING LOGIC ---

/**
 * Helper function to update the image source path
 */
function updateImage(id, category, index) {
    const element = document.getElementById(id);
    if (element) {
        element.src = `${category}${index}.png`;
    }
}

// Hat Functions
function nextHat() {
    hatIndex = (hatIndex % MAX_HATS) + 1;
    updateImage("hat", "hat", hatIndex);
}
function prevHat() {
    hatIndex = (hatIndex - 2 + MAX_HATS) % MAX_HATS + 1;
    updateImage("hat", "hat", hatIndex);
}

// Dress Functions
function nextDress() {
    dressIndex = (dressIndex % MAX_DRESSES) + 1;
    updateImage("dress", "dress", dressIndex);
}
function prevDress() {
    dressIndex = (dressIndex - 2 + MAX_DRESSES) % MAX_DRESSES + 1;
    updateImage("dress", "dress", dressIndex);
}

// Shoes Functions
function nextShoes() {
    shoesIndex = (shoesIndex % MAX_SHOES) + 1;
    updateImage("shoes", "shoes", shoesIndex);
}
function prevShoes() {
    shoesIndex = (shoesIndex - 2 + MAX_SHOES) % MAX_SHOES + 1;
    updateImage("shoes", "shoes", shoesIndex);
}