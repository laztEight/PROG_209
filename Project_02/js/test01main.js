/*
Description: This project will reference chapter 5 of the Foundation Gaming textbook and online content/example files from modules 4-6. You are asked to create a a tile-based game similar to the island adventure example in chapter 5. The object of the game will be for the player to move their character "home" before the "monster" catches them. There is a lot to this game but we will have the most of the rest of the quarter to work on it!

 Modifications to the example game will include:

1. Your own theme for the game. You will want to choose your own genre for the game (outer space adventure, cave adventure, trying to shop at Target adventure... Whatever theme you wish to use).

2. You will need to use your own images including background image, hero,villain, and other icons. You may create your own images, or use icons you gather from the internet. Please give yourself a time for this. You don't want to be gathering all these images on the day the project is due. There are multiple places for free open source icons and images on the web. You may want to start with: http://www.iconarchive.com/ (Links to an external site.)Links to an external site.

3. The game board should be at least 8 tiles x 8 tiles. In the example game it is 6x6.

4. As with the example have a few "good" places to land (the islands in the game example) and have a few bad places to land (the pirates in the game example).

6. Code the game so it works with object literals rather than all global variables or global arrays.

7. Add three aspects of EcmaScript 6. At the most basic it can be let, const, and template literal. Get more complex than that if you want.

8. Add audio. There should be at least one audio file that plays during the game. This may be at the end when the player successfully makes it home. You may add multiple audio files. You will want to reference chapters 3 & 4 of our text book for adding audio. Adding audio is also described in module 4 in this Canvas site.

9. Add jQuery and at least one jQuery method. It doesn't have to be super complex. You can even just use jQuery to animate the start screen. You are free to experiment using it in your game too.

10. The "monster" will need to appear to be chasing the character (as in the game example)

11. The player should be able to use keyboard events to move their character.

12. Have a "Start" screen. This can be a place that will explain the directions. When the player presses a start button then it will show them the game map and they can begin playing. Keep in mind that this can be a div that hides and shows.

13.  You will need to modify the output text and fonts to match the theme of your game.

14. Add your own comments explaining your understanding for how the code is working.
*/

//  create classes
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
    constructor(pieceName, pieceHealth, pieceImage)
    {
        this.pieceName = pieceName;
        this.pieceHealth = pieceHealth;
        this.pieceImage = pieceImage;
    }
    describeUser(){
        console.log(`User Name: ${this.pieceName} -- User health: ${this.pieceHealth}`);
    }
}

//create the objects
//map objects
var cliff = new area("Cliff", 0, "../images/mountain.png");
cliff.describeArea();

var mine = new area("Mine", -1, "../images/trail.png");
mine.describeArea();

var flower = new area("Flower", 1, "../images/flower.png");
var temple = new area("Temple", 0, "");
var trail = new area("Trail", 0, "../images/trail.png");

//piece objects
var user = new piece("User", 3, "");
var monster = new piece("Monster", "", "");

// create 2D array of ojects (8X8) for the map
var board = [
    [trail, cliff, mine, mine, flower, trail, temple],
    [mine, flower, trail, trail, mine, cliff, trail, mine],
    [mine, trail, mine, trail, flower, trail, trail, cliff],
    [flower, trail, flower, cliff, mine, mine, trail, flower],
    [trail, cliff, trail, mine, flower, mine, trail, mine],
    [trail, mine, flower, mine, cliff, trail, trail, mine],
    [cliff, trail, trail, trail, trail, trail, mine, cliff],
    [trail, trail, mine, mine, flower, cliff, trail, flower]
];

var stage = document.getElementById("stage");
//the size of the each cell
var SIZE = 64;
//the number of rows and columns
var ROWS = board.length;
var COLUMNS = board[0].length;

render()

function render()
{
    //Clear the stage of img tag cells from previous turn
        if (stage.hasChildNodes())
        {
            for (var i = 0; i < ROWS*COLUMNS; i++)
            {
                stage.removeChild(stage.firstChild);
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
            //Add the img tag to the <div id="stage"> tag
            stage.appendChild(cell);

            //Find the correct image
            switch (expression)
            {
                case expression:

                    break;
                default:

            }
        }
    }
}
