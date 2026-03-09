// --- 1. SETTINGS & STARTING POINT ---
let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;
let isPlaying = false;

// Set these to match the number of files you uploaded to GitHub
const MAX_HATS = 9;
const MAX_DRESSES = 9;
const MAX_SHOES = 4;

// --- 2. MUSIC CONTROL ---
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "🎵 OFF";
    } else {
        // Browsers require a click to play music, so we handle it here
        music.play().then(() => {
            musicBtn.innerText = "🎵 ON";
        }).catch(err => {
            console.log("Music file missing or blocked by browser.");
            alert("Make sure you uploaded 'music.mp3' to your folder!");
        });
    }
    isPlaying = !isPlaying;
}

// --- 3. DRESS UP LOGIC ---

// Helper function to swap the images
function updateImage(id, category, index) {
    const element = document.getElementById(id);
    if (element) {
        element.src = `${category}${index}.png`;
    }
}

// Hat Buttons
function nextHat() {
    hatIndex = (hatIndex % MAX_HATS) + 1;
    updateImage("hat", "hat", hatIndex);
}
function prevHat() {
    hatIndex = (hatIndex - 2 + MAX_HATS) % MAX_HATS + 1;
    updateImage("hat", "hat", hatIndex);
}

// Dress Buttons
function nextDress() {
    dressIndex = (dressIndex % MAX_DRESSES) + 1;
    updateImage("dress", "dress", dressIndex);
}
function prevDress() {
    dressIndex = (dressIndex - 2 + MAX_DRESSES) % MAX_DRESSES + 1;
    updateImage("dress", "dress", dressIndex);
}

// Shoes Buttons
function nextShoes() {
    shoesIndex = (shoesIndex % MAX_SHOES) + 1;
    updateImage("shoes", "shoes", shoesIndex);
}
function prevShoes() {
    shoesIndex = (shoesIndex - 2 + MAX_SHOES) % MAX_SHOES + 1;
    updateImage("shoes", "shoes", shoesIndex);
}