let color = "black"

//Spawning in the grid
function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "gray";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

//Change the amount of divs in the grid
function changeSize(input) {
    if(input <= 1 || input >= 101 ){
        console.log("Invalid input");
    } else {
        populateBoard(input);
    }
} 

//changing color
function changeColor(choice) {
    color = choice;
}

//Colouring in the divs
function colorSquare() {
    if ((color == "Random")) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else{
        this.style.backgroundColor = color;
    }
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "gray");
}