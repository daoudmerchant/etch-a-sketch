// Starting values

let container = document.querySelector('#container');
let gridSize = 16;

// Create grid cell element in memory

let square = document.createElement('div');
square.textContent = "";
square.classList.add("gridbox");
let columnCount = container.style.gridTemplateColumns;

// Functions

let fillGrid = function(gridSize) { 
    let addColumn = (gridSize) => { 
        for (let i = 1; i <= gridSize; i++) {
            columnCount += " 1fr";
        }
        container.style.setProperty('grid-template-columns', columnCount);
    }
    
    let createSquares = (gridSize) => {
        for (let j = 1; j <= (gridSize ** 2); j++) {
            container.appendChild(square.cloneNode());
        }
    }
    
    
    document.querySelector('#default').addEventListener('click', () => applyColor());
    
    addColumn(gridSize);
    createSquares(gridSize);
}

let resetGrid = function() {
    columnCount = "";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function colorRandomiser() {
    let rgbValue = () => Math.floor(Math.random() * 256);
    return `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
}

// Drawing function

function applyColor(color = () => "black") {
    let gridBoxes = document.querySelectorAll('.gridbox');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = color();
        })
    });
}

// Color buttons

document.querySelector('#makerandom').addEventListener('click', () => {
    selectedColor = colorRandomiser;
    applyColor(selectedColor);
});

document.querySelector('#default').addEventListener('click', () => "black")

// Initial function evocations

fillGrid(gridSize);
applyColor()

// // Reset button

document.querySelector('#reset').addEventListener('click', () => {
    let gridInput = prompt('Please enter a number up to 100', '');
    while (gridInput > 100) {
        gridInput = prompt('I said UP TO 100...', '');
    }
    resetGrid();
    fillGrid(gridInput);
    applyColor();
});

// Color buttons
