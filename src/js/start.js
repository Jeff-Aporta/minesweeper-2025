let GAME_BOARD = [];

const SIDE_CELL = 50;

let nMines;

let WIDTH_BOARD = 10;
let HEIGHT_BOARD = 10;
let MINES_PERCENT = 0.05; // 10% de las celdas serán minas

let GAME_OVER = false;
let WIN = false;

const SINGLETON = {};

initGameBoard();

const elementStyle = document.createElement("style");
elementStyle.textContent = `
    :root {
        --side-cell: ${SIDE_CELL}px;
    }
`;
document.head.appendChild(elementStyle);
