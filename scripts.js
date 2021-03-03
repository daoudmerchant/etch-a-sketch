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

    addColumn(gridSize);
    createSquares(gridSize);
    changeColor();
}

let resetGrid = function() {
    columnCount = "";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

// Initial function evocation

fillGrid(gridSize);

// Drawing listener

function changeColor() {
    let gridBoxes = document.querySelectorAll('.gridbox');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "black";
        })
    });
}

// Reset button

document.querySelector('#reset').addEventListener('click', () => {
    let gridInput = prompt('Please enter a number up to 100', '');
    while (gridInput > 100) {
        gridInput = prompt('I said UP TO 100...', '');
    }
    resetGrid();
    fillGrid(gridInput);
});