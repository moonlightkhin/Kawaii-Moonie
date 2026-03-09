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

function toggleMusic() {
    if (music.readyState === 0) {
        music.load();
    }

    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "🎵 OFF";
    } else {
        music.play().then(() => {
            musicBtn.innerText = "🎵 ON";
        }).catch(err => {
            console.log(err);
        });
    }
    isPlaying = !isPlaying;
}

function savePhoto() {
    const container = document.getElementById("capture-area");
    const mBtn = document.getElementById("music-btn");

    mBtn.style.display = "none";

    html2canvas(container, {
        backgroundColor: "#fffcfd",
        scale: 3,
        useCORS: true
    }).then(canvas => {
        mBtn.style.display = "block";
        const link = document.createElement("a");
        link.download = "my-moonie.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

function updateImage(id, category, index) {
    document.getElementById(id).src = `${category}${index}.png`;
}

function nextHat() { hatIndex = (hatIndex % MAX_HATS) + 1; updateImage("hat", "hat", hatIndex); }
function prevHat() { hatIndex = (hatIndex - 2 + MAX_HATS) % MAX_HATS + 1; updateImage("hat", "hat", hatIndex); }
function nextDress() { dressIndex = (dressIndex % MAX_DRESSES) + 1; updateImage("dress", "dress", dressIndex); }
function prevDress() { dressIndex = (dressIndex - 2 + MAX_DRESSES) % MAX_DRESSES + 1; updateImage("dress", "dress", dressIndex); }
function nextShoes() { shoesIndex = (shoesIndex % MAX_SHOES) + 1; updateImage("shoes", "shoes", shoesIndex); }
function prevShoes() { shoesIndex = (shoesIndex - 2 + MAX_SHOES) % MAX_SHOES + 1; updateImage("shoes", "shoes", shoesIndex); }