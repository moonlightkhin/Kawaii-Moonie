// Starting positions
let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;

// Configuration: Matches your image counts
const MAX_HATS = 9;
const MAX_DRESSES = 9;
const MAX_SHOES = 4;

// Hat Functions
function nextHat() {
    hatIndex = (hatIndex % MAX_HATS) + 1;
    document.getElementById("hat").src = `hat${hatIndex}.png`;
}
function prevHat() {
    hatIndex = (hatIndex - 2 + MAX_HATS) % MAX_HATS + 1;
    document.getElementById("hat").src = `hat${hatIndex}.png`;
}

// Dress Functions
function nextDress() {
    dressIndex = (dressIndex % MAX_DRESSES) + 1;
    document.getElementById("dress").src = `dress${dressIndex}.png`;
}
function prevDress() {
    dressIndex = (dressIndex - 2 + MAX_DRESSES) % MAX_DRESSES + 1;
    document.getElementById("dress").src = `dress${dressIndex}.png`;
}

// Shoes Functions
function nextShoes() {
    shoesIndex = (shoesIndex % MAX_SHOES) + 1;
    document.getElementById("shoes").src = `shoes${shoesIndex}.png`;
}
function prevShoes() {
    shoesIndex = (shoesIndex - 2 + MAX_SHOES) % MAX_SHOES + 1;
    document.getElementById("shoes").src = `shoes${shoesIndex}.png`;
}