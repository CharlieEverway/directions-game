// index.js
import "./styles.css";
import { makeBoard, setBoard, isWalkable } from "./board.js";
import { setDisplay, updatePlayer } from "./renderer.js";
import { createPlayer } from './player.js';

const board = makeBoard();
const player = createPlayer(4, 2);
setBoard(board);
setDisplay(board);
updatePlayer(player)
//Game Setup

//btns
const turnRightBtn = document.querySelector('#turn-right-btn');
turnRightBtn.addEventListener("click", () => {
    player.turnRight();
    updatePlayer(player);
});

const turnLeftBtn = document.querySelector('#turn-left-btn');
turnLeftBtn.addEventListener("click", () => {
    player.turnLeft();
    updatePlayer(player);
});


const goStraightBtn = document.querySelector('#go-straight-btn');
goStraightBtn.addEventListener("click", () => {
    board[player.y][player.x].player = null;
    //Clear player position

    if (isWalkable(board, player.y, player.x, player.orientation)) {
        player.move();
    } else {
        return;
    };

    board[player.y][player.x].player = player;
    //set new position
    updatePlayer(player);
});

//RESET BTN


// To Dp: Add GOAL building, add "you can see it on your right etc."
// create a nice design
//reset button
//levels
//how are goals set
//how are buildings set?
//start screen
//refactor my code, using odin principles. Each function should have a single purpose
//multipurpose functiosn can be condensed
//How is the player and board is being stored? Seperately? Shouldnt they be synced better?


// 2. You store player twice: in player.js state AND in board cells

// You maintain:

// The player object’s own (y, x)

// And board[y][x].player = player

// This duplication is easy to desync.
// You already track the player’s coordinates internally → board shouldn’t also track it unless you have a later mechanic that truly needs cell occupancy.

// If you don’t need it, remove:

// board[y][x].player = player;
// board[player.y][player.x].player = null;


// Your render function uses only player.x/y anyway.

// Confidence: 9/10.


// 3. buildingCounter increments in fixed order; this relies on board layout stability

// If the map changes, building images will mismatch tile positions.
// Better: assign a building image ID when setting up the board.

// Instead of:

// case "building":
//     cell.el.style.backgroundImage = `url(${buildingImgs[buildingCounter]})`;
//     buildingCounter++;
//     break;


// Assign during board creation:

// board[y][x].img = buildingImgs[someIndex];


// Then rendering becomes stable.

// Not critical now, but future-proofing.



// 4. A tiny off-center issue on the player

// You offset by 35px:

// left = x * 100 + 35
// top  = y * 100 + 35


// Correct center = (100 - 50) / 2 = 25.
// If it looked “a bit left,” your source icon probably has empty padding.

// Use translate(-50%, -50%) instead. That removes pixel-magic completely.

// Example (not code you must use; concept):

// Place player at (x * TILE_SIZE + 50, y * TILE_SIZE + 50)

// Apply CSS transform to center it.


// 5. isWalkable should check allowed types more cleanly

// Right now:

// if (map === "path" || map === "path2" || map === "path3")


// Consider a whitelist:


// 7. setDisplay() resets transforms every frame

// Not required unless:

// orientation affects tiles

// you plan dynamic updates

// Otherwise, you could drop:

// cell.el.style.transform = "rotate(0deg)";


// Minor optimization.

// Confidence: 6/10.

// 8. makeBoard() mixes data and DOM too tightly

// Right now, each board cell directly stores:

// el: DOM element


// This is fine for a small project, but it prevents:

// offscreen rendering

// changing the rendering system

// alternate views

// A more flexible pattern is:

// Board = pure data

// Renderer = consumes data + DOM

// Not mandatory for your scope. Just a design concern.

// Confidence: 5/10.

// 9. Path types (path, path2, path3) feel arbitrary

// You could unify them:

// type: "path"
// variant: "straight" | "center" | "horizontal"


// Cleaner long-term.

// const walkable = new Set(["path", "path2", "path3"]);
// return walkable.has(board[y][x].map);


// Simplifies future expansion.





// future implementations ( a legend, for self study) -- explains game logic in JP and English
//you can see it on your left etc. how to make it work.
// memo, my PATH should be thinner than the rest of the board



// console.log("Checking player stats")
// console.log(player.y, player.x);
// console.log(player.getPosition());
// console.log(board)
// console.log("Checking player stats end")
//     console.log(player.y, player.x);
// console.log(player.getPosition())