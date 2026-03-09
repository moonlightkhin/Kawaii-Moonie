// Current outfit state
let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;

// Maximum number of items available for each category
const MAX_HATS = 9;
const MAX_DRESSES = 9;
const MAX_SHOES = 4;

/**
 * Utility function to update the image source
 * @param {string} id - The ID of the HTML element (hat, dress, or shoes)
 * @param {string} category - The category name for the file path
 * @param {number} index - The current item index
 */
function updateImage(id, category, index) {
    const element = document.getElementById(id);
    if (element) {
        element.src = `${category}${index}.png`;
    }
}

// --- Hat Functions ---
function nextHat() {
    hatIndex = (hatIndex % MAX_HATS) + 1;
    updateImage("hat", "hat", hatIndex);
}
function prevHat() {
    hatIndex = (hatIndex - 2 + MAX_HATS) % MAX_HATS + 1;
    updateImage("hat", "hat", hatIndex);
}

// --- Dress Functions ---
function nextDress() {
    dressIndex = (dressIndex % MAX_DRESSES) + 1;
    updateImage("dress", "dress", dressIndex);
}
function prevDress() {
    dressIndex = (dressIndex - 2 + MAX_DRESSES) % MAX_DRESSES + 1;
    updateImage("dress", "dress", dressIndex);
}

// --- Shoes Functions ---
function nextShoes() {
    shoesIndex = (shoesIndex % MAX_SHOES) + 1;
    updateImage("shoes", "shoes", shoesIndex);
}
function prevShoes() {
    shoesIndex = (shoesIndex - 2 + MAX_SHOES) % MAX_SHOES + 1;
    updateImage("shoes", "shoes", shoesIndex);
}