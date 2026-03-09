let hatIndex = 1;
let dressIndex = 1;
let shoesIndex = 1;

// Config: Change these if you add more images
const totalHats = 9;
const totalDresses = 9;
const totalShoes = 4;

function nextHat() {
    hatIndex = (hatIndex % totalHats) + 1;
    document.getElementById("hat").src = `hat${hatIndex}.png`;
}
function prevHat() {
    hatIndex = (hatIndex - 2 + totalHats) % totalHats + 1;
    document.getElementById("hat").src = `hat${hatIndex}.png`;
}

function nextDress() {
    dressIndex = (dressIndex % totalDresses) + 1;
    document.getElementById("dress").src = `dress${dressIndex}.png`;
}
function prevDress() {
    dressIndex = (dressIndex - 2 + totalDresses) % totalDresses + 1;
    document.getElementById("dress").src = `dress${dressIndex}.png`;
}

function nextShoes() {
    shoesIndex = (shoesIndex % totalShoes) + 1;
    document.getElementById("shoes").src = `shoes${shoesIndex}.png`;
}
function prevShoes() {
    shoesIndex = (shoesIndex - 2 + totalShoes) % totalShoes + 1;
    document.getElementById("shoes").src = `shoes${shoesIndex}.png`;
}