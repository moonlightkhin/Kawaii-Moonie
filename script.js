let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;

function nextHat() {
    hatIndex = (hatIndex >= 9) ? 1 : hatIndex + 1;
    document.getElementById("hat").src = "hat" + hatIndex + ".png";
}
function prevHat() {
    hatIndex = (hatIndex <= 1) ? 9 : hatIndex - 1;
    document.getElementById("hat").src = "hat" + hatIndex + ".png";
}

function nextDress() {
    dressIndex = (dressIndex >= 9) ? 1 : dressIndex + 1;
    document.getElementById("dress").src = "dress" + dressIndex + ".png";
}
function prevDress() {
    dressIndex = (dressIndex <= 1) ? 9 : dressIndex - 1;
    document.getElementById("dress").src = "dress" + dressIndex + ".png";
}

function nextShoes() {
    shoesIndex = (shoesIndex >= 4) ? 1 : shoesIndex + 1;
    document.getElementById("shoes").src = "shoes" + shoesIndex + ".png";
}
function prevShoes() {
    shoesIndex = (shoesIndex <= 1) ? 4 : shoesIndex - 1;
    document.getElementById("shoes").src = "shoes" + shoesIndex + ".png";
}