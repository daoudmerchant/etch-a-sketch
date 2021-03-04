// Starting values

let container = document.querySelector('#container');
let selectionButtons = document.querySelectorAll('.choice');
let gridSize = 16;
let columnCount = container.style.gridTemplateColumns;
let selectedColor = "hsl(0, 0%, 100%)";

// Create grid cell element in memory

let square = document.createElement('div');
square.textContent = "";
square.classList.add("gridbox");

// Functions

let fillGrid = function(gridSize) { 
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`);
    for (let i = 1; i <= (gridSize ** 2); i++) {
        container.appendChild(square.cloneNode());
    }
    let gridBoxes = document.querySelectorAll('.gridbox');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', e => {
            let currentColor = e.target.style.backgroundColor;
            console.log(currentColor);
            box.style.backgroundColor = pickColor(currentColor);
        })
    });
};

let emptyGrid = function() {
    columnCount = "";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

// Color function(s)

function pickColor(currentColor) {
    if (selectedColor === "makerandom") {
        return randomiseColor();
    } else if (selectedColor === "greyscale") {
        return greyOut(currentColor);
    } else {
        return selectedColor;
    }
}

function randomiseColor() {
    let rgbValue = () => Math.floor(Math.random() * 256);
    return `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
}

function greyOut(currentColor) {
    if (currentColor === "rgb(0, 0, 0)") {
        return;
    } else if (currentColor.slice(0, 4) !== "rgba") {
        return "rgba(0, 0, 0, 0.1)";
    } else {
        let currentHue = Number(currentColor.slice(-4, -1));
        return `rgba(0, 0, 0, ${currentHue + 0.1})`;
    }
}

// Color buttons

selectionButtons.forEach(button => {
    button.addEventListener('click', e => {
        selectedColor = e.target.getAttribute("id");
    });
})

// Initial function evocations

fillGrid(gridSize);

// Reset button

document.querySelector('#reset').addEventListener('click', () => {
    let userGridSize = prompt('Please enter a number from 1 to 100', '');
    while ((userGridSize > 100) ||
           (userGridSize < 1) ||
           (isNaN(Number(userGridSize)))) {
        userGridSize = prompt('Note: Must be a numeric number between 1 and 100', '');
    }
    emptyGrid();
    fillGrid(userGridSize);
});