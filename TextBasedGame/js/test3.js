//debug west and east in switch statement

// creating the Room class that holds the image, description and items
class Room {
  constructor ( title, image, description, blockedMessage, items)
  {
    this.title = title;
    this.description = description;
    this.blockedMessage = blockedMessage;
    this.items = items;
  }
  describeRoom() {
    console.log(`Title: ${this.title} Desciption  ${this.description}. Blocked message: ${this.blockedMessage}. Items:  ${this.items}.`);
    }
}

//creating the individual rooms from the room class
var areaZero = new Room("A Garden", "../images/garden.jpg", "You are standing in a beautiful garden. There are birds overhead, the sun is bright and the flowers look amazing.", "It's too dangerout to go that way.", "a lighter");
areaZero.describeRoom();

var areaOne = new Room("Waterfall", "../images/waterfall.jpg", "A magnigicat waterfall is in front of you with clear flowing water.  To the east you see an entrace to a cave.", "The current is too strong to swim through.", "");
areaOne.describeRoom();

var areaTwo = new Room("Cavern I", "../images/cavern1", "a cave: cavern I", "There's large poiseness spider's that way.", "a torch");
areaTwo.describeRoom();

var areaThree = new Room("The Gate", "../images/gate.jpg", "The grand gate awaits you.  It's as if the gates are begging you to pass through", "The walls are too tall to climb.", "a backpack");
areaThree.describeRoom();

var areaFour = new Room ("Wooded Forest", "../images/forest2.jpg", "There are trees all around you.  So many trees and leaves that the sunlight just barely makes it though for you to see.", "", "a key");
areaFour.describeRoom();

var areaFive = new Room("Cavern II", "../images/cavern2.jpg", "another section of the cave: carern II", "That pathway is blocked.  There is a very large heavy stone in the way.", "");
areaFive.describeRoom();

var areaSix = new Room("THE TREE", "../images/tree.jgp", "THE tree", "Go another way.  The castle guards say no one may enter", "");
areaSix.describeRoom();

var areaSeven = new Room("Fire Swamp", "../images/fireswamp.jpg", "the fire swamp", "The fire is too hot to go that way.", "a sword");
areaSeven.describeRoom();

var areaEight = new Room("Cavern III", "../images/cavern3.jpg", "yet another section of the cave: carven III", "You're too afraid to go that way.  It sounds like a large orc may be sleeping down there.", "a  sspell book");
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
var gameResponce = "";

/* creating an array of possible moves a player can make that the game to understands also a variable to store the user actionsIKnow */
var actionKnown = ["north", "south", "east", "west"];
var move = "";

/*declairing the input (userInput) and ouput (roomInfo) of room title, picture, userInput and userOutput */
var roomTitle = document.getElementById("roomTitle");
var roomImage = document.getElementById("roomImage");
var roomInfo = document.getElementById("roomInfo");
var userInput = document.getElementById("userInput");
var userOutput = document.getElementById("userOutput");

roomTitle.innerHTML = currentRoom[roomLocation].title;
console.log("initialze the room title");

roomImage.src  = currentRoom[roomLocation].image;

roomInfo.innerHTML = currentRoom[roomLocation].description;
console.log("Initialize current location ");

userOutput.innerHTML = `${gameResponce}`;
console.log("Initialize game responce");


//creating the button move
var btnUserInput = document.getElementById("btnUserInput");
btnUserInput.style.cursor = "pointer";
btnUserInput.addEventListener("click", clickHandler, false);

//Displaying the player's location
function clickHandler(){
  theGame();
  move = "";
}

function theGame(){
  // taking the user's input and making it all lowercase
  var str = userInput.value;
  userInput.value = str.toLowerCase();

  //resetting the vars from the user's last turn
  for(i=0; i<actionKnown.length; i++){
    if(userInput.value.indexOf(actionKnown[i]) != -1){
      move = actionKnown[i];
      console.log(`User's move: ${move}`);
      break;
    }
  }
//Moving around the board

console.log("input move before switch");
switch (move){
  case "north":
  if (roomLocation >= 3){
    roomLocation -=3;
    gameResponce = "";
  }
    else {
      gameResponce = currentRoom[roomLocation].blockedMessage;
    }
    break;

  case ("south"):
  if (roomLocation<6){
    roomLocation+=3;
    gameResponce = "";
  }
  else {
    gameResponce = currentRoom[roomLocation].blockedMessage;
  }
      break;

    case ("west"):
    if (roomLocation % 3 != 0) {
        roomLocation -= 1;
        gameResponce = "";
    }
    else{
      gameResponce = currentRoom[roomLocation].blockedMessage;
    }
      break;

    case("east"):
    if (mapLocation % 3 != 2){
      roomLocation += 1;
      gameResponce = "";
    }
    else{
      gameResponce = currentRoom[roomLocation].blockedMessage;
    }
      break;

  default:
    gameResponce = "Please try again.  I do not understand.";
}
    console.log(`current location: ${currentRoom[roomLocation]}`);
// deliver the location to the page
console.log("test before deliver function");
deliver();
}
  function deliver(){
    // the actual output description
    roomTitle.innerHTML = currentRoom[roomLocation].title;
    roomInfo.innerHTML = currentRoom[roomLocation].description;
    console.log("test inside deliver function");

    //Desplaying the message from the game
    userOutput.innerHTML += `<br/> ${gameResponce}`;
  }
