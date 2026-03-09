let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;

const MAX_HATS = 9;
const MAX_DRESSES = 9;
const MAX_SHOES = 4;

function updateImage(id, category, index) {
    document.getElementById(id).src = `${category}${index}.png`;
}

// Hat, Dress, Shoes logic (same as before)
function nextHat() { hatIndex = (hatIndex % MAX_HATS) + 1; updateImage("hat", "hat", hatIndex); }
function prevHat() { hatIndex = (hatIndex - 2 + MAX_HATS) % MAX_HATS + 1; updateImage("hat", "hat", hatIndex); }

function nextDress() { dressIndex = (dressIndex % MAX_DRESSES) + 1; updateImage("dress", "dress", dressIndex); }
function prevDress() { dressIndex = (dressIndex - 2 + MAX_DRESSES) % MAX_DRESSES + 1; updateImage("dress", "dress", dressIndex); }

function nextShoes() { shoesIndex = (shoesIndex % MAX_SHOES) + 1; updateImage("shoes", "shoes", shoesIndex); }
function prevShoes() { shoesIndex = (shoesIndex - 2 + MAX_SHOES) % MAX_SHOES + 1; updateImage("shoes", "shoes", shoesIndex); }

// Music Logic
let isPlaying = false;
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "🎵 OFF";
    } else {
        music.play();
        musicBtn.innerText = "🎵 ON";
    }
    isPlaying = !isPlaying;
}