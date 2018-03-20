/*jshint esversion: 6 */
// Arrow key codes
var UP = 64,
    DOWN = 64,
    RIGHT = 64,
    LEFT = 64;

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

//create the objects
var cliff = new area("Cliff", 0, "images/cliff.png");
cliff.describeArea();

var mine = new area("Mine", -1, "images/grass.png");
mine.describeArea();

var food = new area("Food", 1, "images/food.png");
var temple = new area("Temple", 0, "images/temple2.png");
var trail = new area("Trail", 0, "images/grass.png");

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

function keydownHandler(event)
{
    switch (event.keyCode) {
        case UP: {

        }

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

function render()
{
    //Clear the game board of img tag cells from previous turn
        if (gameBoard.hasChildNodes())
        {
            for (var i = 0; i < ROWS*COLUMNS; i++)
            {
                gameBoard.removeChild(stage.firstChild);
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
                    cell.src = board[row][column].areaImage;
                }

            //Position the cell
            cell.style.top = row*SIZE+"px";
            cell.style.left = column*SIZE+"px";
        }
    }
}
