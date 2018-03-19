/*jshint esversion: 6 */
// Arrow key codes
var UP = 38,
    DOWN = 40,
    RIGHT = 39,
    LEFT = 37;

//  health and lives
var currentHealth = document.getElementById("health");
var lifeCount = 3;
var currentLives = document.getElementById("lives");

var gameBoard = document.getElementById("gameBoard");
var startBtn = document.getElementById("start");


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
        describeArea(){
            console.log(`Name: ${this.areaName} -- Health: ${this.areaHealth}`);
        }
    }

    //create the  map objects
    var cliff = new area("Cliff", 0, "images/cliff.png");
    cliff.describeArea();

    var mine = new area("Mine", -1, "images/grass.png");
    mine.describeArea();

    var food = new area("Food", 1, "images/food.png");
    var temple = new area("Temple", 0, "images/temple2.png");
    var trail = new area("Trail", 0, "images/grass.png");

    //class for user icon
class piece {
    constructor(pieceName, pieceHealth, pieceImage, pieceLocationRow, pieceLocationColumn)
    {
        this.pieceName = pieceName;
        this.pieceHealth = pieceHealth;
        this.pieceImage = pieceImage;
        this.pieceLocationRow = pieceLocationRow;
        this.pieceLocationColumn = pieceLocationColumn;
    }
    describeUser(){
        console.log(`User Name: ${this.pieceName} -- User health: ${this.pieceHealth}`);
    }
}

//piece objects
var player = new piece("Player", 3, "images/user.png", 7, 0);
var monster = new piece("Monster", "", "images/monster.png", 0, 0);

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

//set players health
currentHealth.innerHTML = player.pieceHealth;
currentLives.innerHTML = lifeCount;

//the size of the each cell
var SIZE = 64;
//the number of rows and columns
var ROWS = board.length;
var COLUMNS = board[0].length;

//Set player's start location
var playerLocation;
// Set monster's start location
var monsterLocation;


//Initialize objects on the screen
render();

startBtn.addEventListener("click", startGameHandler, false);
//Add a keyboard listner
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event)
{
    switch (event.keyCode) {
        case UP:
            if(player.pieceLocationRow > 0) {
                board[player.pieceLocationRow][player.pieceLocationColumn] = 0;
                console.log("entered UP Arrow");
                if (board[player.pieceLocationRow-1][player.pieceLocationColumn]!=cliff) {
                    switch (board[player.pieceLocationRow-1][player.pieceLocationColumn]) {
                        case mine:
                        console.log("stepped on mine. -1 health");
                        player.pieceLocationRow--;
                        player.pieceHealth = player.pieceHealth - mine.areaHealth;
                        board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                            break;
                        case food:
                        console.log("Found food. +1 health");
                        player.pieceLocationRow--;
                        player.pieceHealth = player.pieceHealth + food.areaHealth;
                        board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                            break;
                        case trail:
                        console.log("just a good ol' trail ");
                        player.pieceLocationRow--;
                        board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                            break;
                        case temple:
                        console.log("Congrats! You've made it to the temple!");
                        player.pieceLocationRow--;
                        board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                            break;
                        default:
                        console.log('There is an error with UP arrow in area switch');
                    }
                }
                else {
                    console.log("There is a cliff in the way");
                }
            }
            else {
                console.log("Cannot go that direction.");
            }
            break;

            case DOWN:
                if (player.pieceLocationRow <  ROWS-1) {
                    board[player.pieceLocationRow][player.pieceLocationColumn] = 0;
                    console.log("entered DOWN Arrow");

                    if (board[player.pieceLocationRow+1][player.pieceLocationColumn]!=cliff) {

                        switch (board[player.pieceLocationRow+1][player.pieceLocationColumn]) {
                            case mine:
                            console.log("stepped on mine. -1 health");
                            player.pieceLocationRow++;
                            player.pieceHealth = player.pieceHealth - mine.areaHealth;
                            board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                break;

                            case food:
                            console.log("Found food. +1 health");
                            player.pieceLocationRow++;
                            player.pieceHealth = player.pieceHealth + food.areaHealth;
                            board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                break;

                            case trail:
                            console.log("just a good ol' trail ");
                            player.pieceLocationRow++;
                            board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                break;
                            default:
                            console.log('There is an error in DOWN area switch');
                        }
                    }
                    else {
                        console.log("There is a cliff in the way");
                    }
                }
                else {
                    console.log("You cannot go that way.");
                }
                break;

            case LEFT:
                if (player.pieceLocationColumn > 0) {
                    board[player.pieceLocationRow][player.pieceLocationColumn] = 0;
                    console.log("entered LEFT Arrow");

                    if (board[player.pieceLocationRow][player.pieceLocationColumn-1]!=cliff) {

                        switch (board[player.pieceLocationRow][player.pieceLocationColumn-1]) {
                            case mine:
                            console.log("stepped on mine. -1 health");
                            player.pieceLocationColumn--;
                            player.pieceHealth = player.pieceHealth - mine.areaHealth;
                            board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                break;
                            case food:
                            console.log("Found food. +1 health");
                            player.pieceLocationColumn--;
                            player.pieceHealth = player.pieceHealth + food.areaHealth;
                            board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                break;

                                case trail:
                                console.log("just a good ol' trail ");
                                player.pieceLocationColumn--;
                                board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                    break;
                            default:
                            console.log('There is an error in LEFT arrow area switch');
                        } // end switch for area location
                    }
                    else {
                        console.log("There is a cliff in the way");
                    }
                } // end if != cliff
                else {
                    console.log("Error in first if statement in LEFT arrow");
                } // end if statement re: end of board
                break;

            case RIGHT:
                if (player.pieceLocationColumn < COLUMNS - 1) {
                    board[player.pieceLocationRow][player.pieceLocationColumn] = 0;

                    console.log("entered RIGHT Arrow");

                    if (board[player.pieceLocationRow][player.pieceLocationColumn+1]!=cliff) {

                        switch (board[player.pieceLocationRow][player.pieceLocationColumn+1]) {
                            case mine:
                            console.log("stepped on mine. -1 health");
                            player.pieceLocationColumn++;
                            player.pieceHealth = player.pieceHealth - mine.areaHealth;
                            board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                break;

                                case food:
                                console.log("Found food. +1 health");
                                player.pieceLocationColumn++;
                                player.pieceHealth = player.pieceHealth + food.areaHealth;
                                board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                    break;

                                    case trail:
                                    console.log("just a good ol' trail ");
                                    player.pieceLocationColumn++;
                                    board[player.pieceLocationRow][player.pieceLocationColumn] = player;
                                        break;
                            default:
                            console.log('Error in the right arrow != switch statement');
                        } // end switch statement on what area
                    } // end if statement != cliff
                    else {
                        console.log("There is a cliff in the way");
                    }
                } // if statement of boarder of map
                else {
                    console.log("Error in first if statement in RIGHT arrow");
                }
                break;
        default:
        console.log("Cannot go that direction");
    } // end switch statment for right arrow
    render();
} // end function keydownHandler  statement for movement


//Hide the intro screen and show the game screen
function startGameHandler()
{
    introScreen.style.display = "none";
    gameScreen.style.display = "block";
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
                else {
                    cell.src = boardOrginal[row][column].areaImage;
                }

            //Position the cell
            cell.style.top = row*SIZE+"px";
            cell.style.left = column*SIZE+"px";
        }
    }
}
