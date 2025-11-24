
export const greet = "Hello, Odinite!";

const gameBoard = document.querySelector("#game-board");

export function makeBoard() {
    const size = 5;
    const board = [];

    let boxSize = 100;
    let boardWidth = size * boxSize; //the physical width of our boxes are 100px, and we set the pixel width of our board to 100 x the amoutn of boxes
    gameBoard.style.width = boardWidth + "px";

    for (let y = 0; y < size; y++) {
        const row = [];

        for (let x = 0; x < size; x++) {
            const box = document.createElement("div");
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";
            box.style.border = "solid red 1px"
            box.style.backgroundColor = "white";
            box.style.boxSizing = "border-box";

            gameBoard.appendChild(box);
            row.push({
                map: null,
                player: null,
                el: box
            }); // your “empty cell”s properties, map, player, and element (the div)
        }

        board.push(row); //push each cell on each row and repeat for loop
    }
    console.log(board)
    return board;

}


export function setBoard(board) {
    // Buildings
    const buildings = [
        [0, 1], [0, 3], [2, 1], [2, 3]
    ];
    buildings.forEach(([y, x]) => {
        board[y][x].map = "building";
    });

    // Walkable paths
    const paths = [
        [4, 2], [3, 2], [2, 2], [1, 2], [0, 2],
        [1, 3], [1, 4], [1, 0], [1, 1],
        [3, 0], [3, 1], [3, 3], [3, 4]
    ];
    paths.forEach(([y, x]) => {
        board[y][x].map = "path";
    });

    // Player
    const [playerY, playerX] = [4, 2];
    board[playerY][playerX].player = "player";
}


export function isWalkable(board, x, y) {
    // bounds check
    // buildings = false
    // path = true
    // empty = true
}




// ✔ What objects exist?

// Examples:

// "player"

// "building"

// "path"

// "empty"

// ✔ What can the player walk on?

// Simple rule:

// path = walkable

// empty = walkable

// board[y][x].value = "building";
// board[y][x].value = "path";
