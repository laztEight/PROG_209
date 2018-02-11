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
var roomLocation = 4;

//Creating the user's input
var userInput = "";

//Initialize the gameResponce
var gameResponce = "Initialize gameResponce";

/* creating an array of possible moves a player can make that the game to understands also a variable to store the user actionsIKnow */
var actionKnown = ["north", "south", "east", "west"];
var move = "";

//declairing the input (userInput) and ouput (roomInfo) of room discription
var roomInfo = document.getElementById("roomInfo");
var userInput = document.getElementById("userInput");
var userOutput = document.getElementById("userOutput");

roomInfo.innerHTML = currentRoom[roomLocation].description;
console.log("testing at Initialize");
userOutput.innerHTML = `${gameResponce}`;
console.log("gameResponce initialize")


//creating the button move
var btnUserInput = document.getElementById("btnUserInput");
btnUserInput.style.cursor = "pointer";
btnUserInput.addEventListener("click", clickHandler, false);

//Displaying the player's location
function clickHandler()
{
  theGame();
  move = "";
}

function theGame()
{
  // taking the user's input and making it all lowercase
  var str = userInput.value;
  userInput.value = str.toLowerCase();

  //resetting the vars from the user's last turn
  for(i=0; i<actionKnown.length; i++)
  {
    if(userInput.value.indexOf(actionKnown[i]) != -1)
    {
      move = actionKnown[i];
      console.log(`User's move: ${move}`);
      break;
    }
  }
//Moving around the board

console.log("input move before switch");
switch (move)
{
  case "north":
    roomLocation -=3;
    break;

  case ("south"):
      roomLocation+=3;
      break;

    case ("west"):
    roomLocation -=1;
      break;

    case("east"):
      roomLocation +=1;
      break;

  default:
    gameResponce = "Please try again.  I do not understand.";
}
// deliver the location to the page
console.log("test before deliver function");
deliver();
}
  function deliver()
  {
    // the actual output description
    roomInfo.innerHTML = currentRoom[roomLocation].description;
    console.log("test inside deliver function");

    //Desplaying the message from the game
    userOutput.innerHTML += `<br/> ${gameResponce}`;
  }
