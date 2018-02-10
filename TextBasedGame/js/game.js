//var currentImage = document.getElementById("gamePhoto").innerHTML;

//var currentDescription = document.getElementById("description").innerHTML ;
//var currentItems =  document.querySelector("img");

// creating the Room class that holds the image, description and items
class Room {
  constructor (image, description, items){
    this.image=image;
    this.description = description;
    this.items = items;
  }
  describeRoom() {
    console.log(`You are in ${this.description}. You see ${this.items}`);
    }

    get cDescription() {
      return this.description;
    }
    set cDescription(test){
      this.description = test;
    }
}

//creating the individual rooms from the room class
var areaZero = new Room("images/garden.jpg", " a beautiful garden", "a lighter");
areaZero.describeRoom();

var areaOne = new Room(src="images/waterfall.jpg", "a waterfall", "nothing");
areaOne.describeRoom();

var areaTwo = new Room(src="images/cavern1", "a cave: cavern I", "a torch");
areaTwo.describeRoom();

var areaThree = new Room(scr="images/gate.jpg", "a gated entrance", "a backpack");
areaThree.describeRoom();

var areaFour = new Room (src="images/forest2.jpg", "wooded forest", "a key");
areaFour.describeRoom();

var areaFive = new Room(src="images/cavern2.jpg", "another section of the cave: carern II", "nothing");
areaFive.describeRoom();

var areaSix = new Room(src="images/tree.jgp", "THE tree", "nothing");
areaSix.describeRoom();

var areaSeven = new Room(src="images/fireswamp.jpg", "the fire swamp", "a sword");
areaSeven.describeRoom();

var areaEight = new Room(src="images/cavern3.jpg", "yet another section of the cave: carven III", "a  sspell book");
areaSeven.describeRoom();




areaOne.cDescription = "test";
currentDescription = areaOne.cDescription;

//Putting the rooms into an array
var currentRoom = [9];
currentRoom [0]= areaZero;
currentRoom [1] = areaOne;
currentRoom[2] = areaTwo;
currentRoom[3] = areaThree;
currentRoom[4] = areaFour;
currentRoom[5] = areaFive;
currentRoom[6] = areaSix;
currentRoom[7] = areaSeven;
currentRoom[8] = areaEight;
console.log(currentRoom);


//Set the player's start location
var playerLocation = 4;

//Initialize the player's input
var playerInput = "";

//Initialize the game gameMessage
var gameMessage = "";

//An array of actions that the game understands
// and var to store the current action

var directionIKnow = ["north", "east", "south", "west"];
var direction = "";

var roomInfo = document.getElementById("roomInfo");
var input = document.getElementById("input");

//The button
var  button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//Display the player's locaiton
//render();

function clickHandler(){
  playGame();
}

function playGame(){
  //converting player's input to all losercase
  playerInput = input.value;
  playerInput = playerInput.toLowerCase();
}

//Reseting messages from previous return
gameMessage = "",
action = "";

//moving the playerInput
for(i=0; i<directionIKnow.length; i++){
  if(playerInput.indexOf(directionIKnow[i]) !== -1){
    action = actionsIKnow[i];
    console.log(`player's action: ${action}`);
    break;
  }
}

var roomInfo = document.getElementById("roomInfo");
roomInfo.innerHTML = currentRoom[playerLocation].description;


//Backpack that will hold all the items picked up.
var backpack = [];
console.log(backpack);
