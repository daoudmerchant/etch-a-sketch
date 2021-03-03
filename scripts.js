let container = document.querySelector('#container');
let square = document.createElement('div'); 
square.classList.add("gridbox");
let gridCount = 8;

let fillGrid = function(gridCount) {
    // let addColumns = () => 
    let columnCount = container.style.gridTemplateColumns;
    for (let i = 1; i <= gridCount; i++) {
        columnCount += " 1fr";
        console.log(columnCount);
    }
    container.style.setProperty('grid-template-columns', columnCount);
    for (let j = 1; j <= (gridCount ** 2); j++) {
        container.appendChild(square.cloneNode());
    }
}

fillGrid(gridCount);


// fillGrid(gridCount);