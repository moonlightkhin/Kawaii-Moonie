let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;
let isPlaying = false;

const MAX_HATS = 9;
const MAX_DRESSES = 9;
const MAX_SHOES = 4;

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
music.loop = true; 

// Toggle Music
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "🎵 OFF";
    } else {
        music.play().then(() => {
            musicBtn.innerText = "🎵 ON";
        }).catch(err => alert("Please upload 'music.mp3' to your folder!"));
    }
    isPlaying = !isPlaying;
}

// Save Photo Logic
function savePhoto() {
    const container = document.querySelector(".character-container");
    const musicBtn = document.getElementById("music-btn");


    musicBtn.style.visibility = "hidden";

    html2canvas(container, {
        backgroundColor: "#fffcfd",
        scale: 2, 
    }).then(canvas => {
        musicBtn.style.visibility = "visible";
        const link = document.createElement("a");
        link.download = "my-moonie-outfit.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

// Clothing Update
function updateImage(id, category, index) {
    document.getElementById(id).src = `${category}${index}.png`;
}

function nextHat() { hatIndex = (hatIndex % MAX_HATS) + 1; updateImage("hat", "hat", hatIndex); }
function prevHat() { hatIndex = (hatIndex - 2 + MAX_HATS) % MAX_HATS + 1; updateImage("hat", "hat", hatIndex); }

function nextDress() { dressIndex = (dressIndex % MAX_DRESSES) + 1; updateImage("dress", "dress", dressIndex); }
function prevDress() { dressIndex = (dressIndex - 2 + MAX_DRESSES) % MAX_DRESSES + 1; updateImage("dress", "dress", dressIndex); }

function nextShoes() { shoesIndex = (shoesIndex % MAX_SHOES) + 1; updateImage("shoes", "shoes", shoesIndex); }
function prevShoes() { shoesIndex = (shoesIndex - 2 + MAX_SHOES) % MAX_SHOES + 1; updateImage("shoes", "shoes", shoesIndex); }