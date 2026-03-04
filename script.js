// Starting positions
let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;

// Hat Functions
function nextHat() {
    hatIndex++;
    if (hatIndex > 9) hatIndex = 1;
    document.getElementById("hat").src = "hat" + hatIndex + ".png";
}
function prevHat() {
    hatIndex--;
    if (hatIndex < 1) hatIndex = 9;
    document.getElementById("hat").src = "hat" + hatIndex + ".png";
}

// Dress Functions
function nextDress() {
    dressIndex++;
    if (dressIndex > 9) dressIndex = 1;
    document.getElementById("dress").src = "dress" + dressIndex + ".png";
}
function prevDress() {
    dressIndex--;
    if (dressIndex < 1) dressIndex = 9;
    document.getElementById("dress").src = "dress" + dressIndex + ".png";
}

// Shoes Functions
function nextShoes() {
    shoesIndex++;
    if (shoesIndex > 4) shoesIndex = 1;
    document.getElementById("shoes").src = "shoes" + shoesIndex + ".png";
}
function prevShoes() {
    shoesIndex--;
    if (shoesIndex < 1) shoesIndex = 4;
    document.getElementById("shoes").src = "shoes" + shoesIndex + ".png";
}