
export const greet = "Hello, Odinite!";

const gameBoard = document.querySelector("#game-board");

export function makeBoard() {
    const size = 5;
    const board = [];

    let boxSize = 100;
    let boardWidth = size * boxSize; //the physical width of our boxes are 100px, and we set the pixel width of our board to 100 x the amoutn of boxes
    gameBoard.style.width = boardWidth + "px";

    for (let x = 0; x < size; x++) {
        const col = [];

        for (let y = 0; y < size; y++) {
            const box = document.createElement("div");
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";
            box.style.border = "solid red 1px"
            box.style.backgroundColor = "white";
            box.style.boxSizing = "border-box";

            gameBoard.appendChild(box);
            col.push({
                map: null,
                player: null,
                el: box
            }); // your “empty cell”s properties, map, player, and element (the div)
        }

        board.push(col); //push each cell on each row and repeat for loop
    }
    console.log(board)
    return board;

}


export function setBoard(board) {
    // Buildings
    const buildings = [
        [0, 1], [0, 3], [2, 1], [2, 3]
    ];
    buildings.forEach(([x, y]) => {
        board[x][y].map = "building";
    });

    // Walkable paths
    const paths = [
        [4, 2], [3, 2], [2, 2], [1, 2], [0, 2],
        [1, 3], [1, 4], [1, 0], [1, 1],
        [3, 0], [3, 1], [3, 3], [3, 4]
    ];
    paths.forEach(([x, y]) => {
        board[x][y].map = "path";
    });

    // Player
    const [playerX, playerY] = [4, 2];
    board[playerX][playerY].player = "player";
}


export function isWalkable(board, x, y, orientation) {
    //we have... x y, and the orientation
    //first, depending the orien, adjusts our x, y


    if (orientation == "north") {
        y = y - 1;
    }
    switch (orientation) {
        case "north": y -= 1;
            // Code to execute if expression === value1
            break;
        case "south": y + - 1;
            // Code to execute if expression === value2
            break;
        case "west": x -= 1;
            // Code to execute if expression === value1
            break;
        case "east": x + - 1;
            // Code to execute if expression === value2
            break;
        // ... more cases
    }
    if (board[x][y].map === "path") {
        console.log("loction at " + x + " and " + y + " " + " is true")
        return true;
    } else {
        console.log("loction at " + x + " and " + y + " " + " is false")
        return false;
    }

    //check array at points x, y
    //

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


//You can see it on your right/left (buttons)
//these buttons check the blocks to the left and right of the player if they are the goal
//