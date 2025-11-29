import playerIcon from "./icons/player.png";


export function updateDisplay(board, player) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const cell = board[x][y];

            // Clear everything first
            cell.el.style.backgroundImage = "";
            cell.el.style.transform = "rotate(0deg)";

            // Draw terrain
            switch (cell.map) {
                case "building":
                    cell.el.style.backgroundColor = "grey";
                    break;
                case "path":
                    cell.el.style.backgroundColor = "blue";
                    break;
                default:
                    cell.el.style.backgroundColor = "green";
            }
        }
    }

    // Draw player at its current position
    const playerCell = board[player.y][player.x];
    playerCell.el.style.backgroundImage = `url(${playerIcon})`;
    playerCell.el.style.backgroundSize = "cover";
    playerCell.el.style.backgroundRepeat = "no-repeat";

    switch (player.orientation) {
        case "east":
            playerCell.el.style.transform = "rotate(90deg)";
            break;
        case "south":
            playerCell.el.style.transform = "rotate(180deg)";
            break;
        case "west":
            playerCell.el.style.transform = "rotate(270deg)";
            break;
        case "north":
            playerCell.el.style.transform = "rotate(0deg)";
            break;
    }
}
