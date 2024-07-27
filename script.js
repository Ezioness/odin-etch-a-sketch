const gridContainer = document.querySelector("#grid-container");

let removeGrid = () => {
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());
}

let createGrid = (size) => {
    if(gridContainer.childNodes.length < 0) {
        removeGrid();
    }

    for(let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.classList.add("row")
        for(let j = 0; j < size;j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell")
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }

    addHoverEffect();
}

let addHoverEffect = () => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", e => {
            const red = Math.random() * 255;
            const green = Math.random() * 255;
            const blue = Math.random() * 255;
            if(!e.target.style.backgroundColor) {
                e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }
        });
    })
}

createGrid(16);

let newBtn = document.querySelector("#new-button");
newBtn.addEventListener("click", () => {
    removeGrid();
    let gridSize = +prompt("New grid size ? (1-100)");
    
    gridSize = Math.min(100, Math.max(1, gridSize));
    createGrid(gridSize);
})