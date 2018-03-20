/*jshint esversion: 6 */
// Get reference to areas on the screen
var startBtn = document.getElementById("start");
var introWords1 = document.getElementById('introWords1');
var introWords2 = document.getElementById("introWords2");
var introImage = document.getElementById('introImage');
var health = document.getElementById("health");
var gameBoard = document.getElementById("gameBoard");
var output = document.getElementById("output");

//animation on intro screen
var tl = new TimelineLite();
TweenMax.from(introImage, 1.5, {ease: Elastic.easeInOut.config(1, 0.3), y:-900});
TweenMax.from(introWords1, 2, {x:-650, y:-650});
 TweenMax.from(startBtn, 3, {ease: Back.easeInOut.config(1), y: -500});

// Arrow key codes
var UP = 38,
    DOWN = 40,
    RIGHT = 39,
    LEFT = 37;

    //class for location types
    // required p: name, health, image
    class area
    {
        constructor (areaName, areaHealth, areaImage)
        {
            this.areaName = areaName;
            this.areaHealth = areaHealth;
            this.areaImage = areaImage;
        }
    }

    //create the  map objects
    var cliff = new area("cliff", 0, "images/cliff.png");
    var mine = new area("mine", -1, "images/grass.png");
    var food = new area("food", 5, "images/food.png");
    var temple = new area("temple", 0, "images/temple2.png");
    var trail = new area("trail", 0, "images/grass.png");

    //class for user icon
class piece {
    constructor(pieceName, pieceHealth,  pieceImage, pieceLocationRow, pieceLocationColumn)
    {
        this.pieceName = pieceName;
        this.pieceHealth = pieceHealth;
        this.pieceImage = pieceImage;
        this.pieceLocationRow = pieceLocationRow;
        this.pieceLocationColumn = pieceLocationColumn;
    }
}

//piece objects
var player = new piece("Player", 5,"images/user.png", 7, 0);
var monster = new piece("Monster", -5, "images/monster.png", 0, 0);

// create 2D array of ojects (8X8) for the map
var board = [
    [trail, cliff, mine, mine, food, trail, temple],
    [mine, food, trail, trail, mine, cliff, trail, mine],
    [mine, trail, mine, trail, food, trail, trail, cliff],
    [food, trail, food, cliff, mine, mine, trail, food],
    [trail, cliff, trail, mine, food, mine, trail, mine],
    [trail, mine, food, mine, cliff, trail, trail, mine],
    [cliff, trail, trail, trail, trail, trail, mine, cliff],
    [trail, trail, mine, mine, food, cliff, trail, food]
];

var boardOrginal = [
    [trail, cliff, mine, mine, food, trail, temple],
    [mine, food, trail, trail, mine, cliff, trail, mine],
    [mine, trail, mine, trail, food, trail, trail, cliff],
    [food, trail, food, cliff, mine, mine, trail, food],
    [trail, cliff, trail, mine, food, mine, trail, mine],
    [trail, mine, food, mine, cliff, trail, trail, mine],
    [cliff, trail, trail, trail, trail, trail, mine, cliff],
    [trail, trail, mine, mine, food, cliff, trail, food]
];


//the size of the each cell
var SIZE = 64;
//the number of rows and columns
var ROWS = board.length;
var COLUMNS = board[0].length;

//Initialize objects on the screen
render();
var gameDone = false;
var gameMessage = 'Use the arrows to move around the board.';
health.innerHTML = `HEALTH: ${player.pieceHealth}`;
output.innerHTML = gameMessage;

startBtn.addEventListener("click", startGameHandler, false);
//Add a keyboard listner
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event)
{
    if (gameDone == true) {
        return;
    }
    switch (event.keyCode) {
        case UP:
        // checking if player's move is within board
        if(player.pieceLocationRow > 0) {
            console.log("entered UP Arrow");
            if (board[player.pieceLocationRow-1][player.pieceLocationColumn] != cliff) {
                // the ship can move, clear the current cell
                board[player.pieceLocationRow][player.pieceLocationColumn] = 0;
                /* subtract 1 from players pieceLocationRow to move it up one row on the board */
                player.pieceLocationRow--;
                // Apply the players new location to the board arry
                board[player.pieceLocationRow][player.pieceLocationColumn] = player;
            }
            else {
                console.log("There is a cliff in the way");
            }
        }
            break;

            case DOWN:
                if (player.pieceLocationRow <  ROWS-1) {
                    console.log("DOWN arrow");
                    if (board[player.pieceLocationRow+1][player.pieceLocationColumn] != cliff) {
                        board[player.pieceLocationRow][player.pieceLocationColumn] = 0;
                        player.pieceLocationRow++;
                        board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                    }
                    else {
                        console.log("There is a cliff in the way");
                    }
                }
                break;

            case LEFT:
                if (player.pieceLocationColumn > 0) {
                    console.log("LEFT arrow");
                    if (board[player.pieceLocationRow][player.pieceLocationColumn-1] != cliff) {
                        board[player.pieceLocationRow][player.pieceLocationColumn] = 0;
                        player.pieceLocationColumn--;
                        board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                    }
                    else {
                        console.log("There is a cliff in the way");
                    }
                }
                break;

            case RIGHT:
                if (player.pieceLocationColumn < COLUMNS - 1) {
                    console.log("RIGHT arrow");
                    if (board[player.pieceLocationRow][player.pieceLocationColumn+1] != cliff) {
                        board[player.pieceLocationRow][player.pieceLocationColumn] = 0;
                        player.pieceLocationColumn++;
                        board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                    }
                    else {
                        console.log("There is a cliff in the way");
                    }
                }
                break;
                //Player is on edge of game board
        default:
        console.log("Cannot go that direction");
    }

    //finding out what is in the players new cell
    switch (boardOrginal[player.pieceLocationRow][player.pieceLocationColumn].areaName) {
        case "trail":
            console.log("always follow the trail.");
            break;

        case "mine":
            console.log("It's a mine!");
            player.pieceHealth = player.pieceHealth + mine.areaHealth;
            gameMessage = "You've stepped on a mine. Be careful.";
            console.log(`${player.pieceHealth}`);
            let mineAudio = new Audio('audio/explosion.mp3');
            mineAudio.play();
            break;

        case "food":
            console.log('food');
            player.pieceHealth = player.pieceHealth + food.areaHealth;
            let foodAudio = new Audio('audio/food.mp3');
            foodAudio.play();
            gameMessage = "Food to increase you health."
            console.log(`${player.pieceHealth}`);
            break;

        case "cliff":
            gameMessage = "Oh No! A CLIFF.  Better go another direction.";
            console.log("oh no! A Cliff!")
            break;

        case "temple":
            console.log("THE TEMPLE");
            endGame();
            break;

        default:
        console.log('something wrong in the check new cell area switch');
    }

//Move the monster
moveMonster();

    //Subtact health for each turn
    player.pieceHealth--;

    // find out if the player has run out of energy
    if (player.pieceHealth<=0) {
        endGame();
    }

health.innerHTML = `HEALTH: ${player.pieceHealth}`;
output.innerHTML = gameMessage;
    render();
} // end function keydownHandler  statement for movement

function moveMonster(){
    //possi directions that the moster can move
    let UP = 1,
        DOWN = 2,
        LEFT = 3,
        RIGHT = 4;

        /* an array to store the valid direction that the monster is allowed to move in */
        let validDirections = [];

        // The final direction the monster will move in
        let direction = undefined;

        if (monster.pieceLocationRow>0) {
            validDirections.push(UP)
        }
        if (monster.pieceLocationRow<ROWS-1) {
            validDirections.push(DOWN)
        }
        if(monster.pieceLocationColumn>0){
            validDirections.push(LEFT)
        }
        if(monster.pieceLocationColumn<COLUMNS-1){
            validDirections.push(RIGHT)
        }
        //randomly choose a directoin to move in
        if (validDirections.length != 0) {
            var rnd = Math.floor(Math.random()*validDirections.length);
            direction = validDirections[rnd];
        }

        // Actually move the monster in the chosen direction
        switch (direction) {
            case UP:
                // clear the monster's current cell
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = 0;
                // subtact 1 from the monster's rows
                monster.pieceLocationRow--;
                //Apply the monster's new updated position to the array
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = monster;
                console.log('monster moved up');
                break;
            case DOWN:
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = 0;
                monster.pieceLocationRow++;
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = monster;
                console.log('monster moved down');
                break;
            case LEFT:
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = 0;
                monster.pieceLocationColumn--;
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = monster;
                console.log('monster move left');
                    break;
            case RIGHT:
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = 0;
                monster.pieceLocationColumn++;
                board[monster.pieceLocationRow][monster.pieceLocationColumn] = monster;
                console.log('moster move right');
                    break;
            default:

        }
}
//Hide the intro screen and show the game screen
function startGameHandler()
{
    introScreen.style.display = "none";
    gameScreen.style.display = "block";
}

function endGame()
{
    if (boardOrginal[player.pieceLocationRow][player.pieceLocationColumn] == temple) {
        //Display game message
        gameMessage = "You've done it!  You've made it safely to the temple."
    }
    else if (player.pieceHealth<=0) {
        let audio = new Audio('audio/gameover.mp3');
        audio.play();
        gameMessage = "You've run out of health! GAME OVER";
    }
    gameDone = true;
}

function render()
{
    //Clear the game board of img tag cells from previous turn
        if (gameBoard.hasChildNodes())
        {
            for (var i = 0; i < ROWS*COLUMNS; i++)
            {
                gameBoard.removeChild(gameBoard.firstChild);
            }
        }

    //Render game by looping through the board arrays
    for (var row = 0; row < ROWS; row++) {
        for (var column = 0; column < COLUMNS;  column++)
        {
            //Create an img tag
            var cell = document.createElement("img");
            //Set it's CSS class to "cell"
            cell.setAttribute("class", "cell");
            //Add the img tag to the <div id="gameScreen"> tag
            gameBoard.appendChild(cell);

            //Find the correct image
            if (player.pieceLocationRow == row && player.pieceLocationColumn == column) {
                cell.src = player.pieceImage;
            }
            else if (monster.pieceLocationRow == row && monster.pieceLocationColumn==column) {
                cell.src = monster.pieceImage;
            }
                else {
                    cell.src = boardOrginal[row][column].areaImage;
                }

            //Position the cell
            cell.style.top = row*SIZE+"px";
            cell.style.left = column*SIZE+"px";
        }
    }
}
