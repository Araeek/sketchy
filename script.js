const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear");
const eraserButton = document.querySelector("#eraser");
const sizeButton = document.querySelector("#size");
const colorPicker = document.querySelector("#color-picker");
const rainbowButton = document.querySelector("#rainbow");

clearButton.addEventListener("click", clearBoard);

eraserButton.addEventListener("click", () => {
    colorGrid("");
});

sizeButton.addEventListener("click", () => {
    let userSize;
    do {
        userSize = prompt("Enter a grid size between 2 and 64:", 16);
    } while (
        userSize < 2 ||
        userSize > 64 ||
        userSize === null ||
        userSize === ""
    );
    console.log(userSize);
    createGrid(parseInt(userSize));
});

colorPicker.addEventListener("change", (e) => {
    colorGrid(e.target.value);
});

rainbowButton.addEventListener("click", () => {
    let randomDegree = Math.floor(Math.random() * 361);
    colorGrid("rainbow");
});

function createGrid(gridSize = 16) {
    let gridArea = gridSize * gridSize;
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
                            grid-template-rows: repeat(${gridSize}, 1fr)`;
    container.innerHTML = "";
    for (i = 1; i <= gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
    colorGrid();
}

function colorGrid(color = "black", effect = "mouseover") {
    let divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) =>
        div.addEventListener(effect, (e) => {
            if(color === 'rainbow') {
                e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`
            }
            e.target.style.backgroundColor = color;
        })
    );
}

function clearBoard() {
    let divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) => (div.style.backgroundColor = ""));
}

createGrid();
