/*You may see some JQuard type of language.  Those technques are being utilized because that is what ecmaScript 6 gave for directions.  What ecmaScript 6 I used i learned from lynda.com  */
class Room {
  constructor ( title, image, description, blockedMessage, items)
  {
    this.title = title;
    this.image = image;
    this.description = description;
    this.blockedMessage = blockedMessage;
    this.items = items;
  }
  describeRoom() {
    console.log(`Title: ${this.title} Desciption  ${this.description}. Blocked message: ${this.blockedMessage}. Items:  ${this.items}.`);
    }
}

//creating the individual rooms from the room class
var areaZero = new Room("A Garden", "./images/garden.png", "You are standing in a beautiful garden. There are birds overhead, the sun is bright and the flowers look amazing.", "It's too dangerout to go that way.", "");
var areaOne = new Room("Waterfall", "./images/waterfall.jpg", "A magnigicat waterfall is in front of you with clear flowing water.  To the east you see an entrace to a cave.", "The current is too strong to swim through.", "");
var areaTwo = new Room("Cavern I", "./images/cavern1.jpg", "a cave: cavern I", "There's large poiseness spider's that way.", "");
var areaThree = new Room("The Gate", "./images/gate.jpg", "The grand gate awaits you.  It's as if the gates are begging you to pass through", "The walls are too tall to climb.", "");
var areaFour = new Room ("Wooded Forest", "./images/forest2.jpeg", "There are trees all around you.  So many trees and leaves that the sunlight just barely makes it though for you to see.", "");
var areaFive = new Room("Cavern II", "./images/cavern2.jpg", "another section of the cave: carern II", "That pathway is blocked.  There is a very large heavy stone in the way.", "");
var areaSix = new Room("THE TREE", "./images/tree.jpg", "THE tree", "Go another way.  The castle guards say no one may enter", "");
var areaSeven = new Room("Fire Swamp", "./images/fireswamp.jpg", "the fire swamp", "The fire is too hot to go that way.", "sword");
var areaEight = new Room("Cavern III", "./images/cavern3.jpg", "yet another section of the cave: carven III", "You're too afraid to go that way.  It sounds like a large orc may be sleeping down there.", "");

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

// An array to store what the player is carrying
var backpack = [];
//Creating arry for available actions
var actionKnown = ["north", "south", "east", "west", "take", "drop", "use"];

//Initializing/clearing the board for the start of a

var move = "";
//Initialize the gameResponce
var gameResponce = "";
//Set the player's start location
var roomLocation = 4;

/*declairing majority of global variables for placement on html page.  Including input (userInput) and ouput (roomInfo) of room title, picture, userInput and userOutput */
var roomTitle = document.getElementById("roomTitle");
var roomImage = document.getElementById("roomImage");
var roomInfo = document.getElementById("roomInfo");
var roomItems = document.getElementById("roomItems");
var userInput = document.getElementById("userInput");
var userOutput = document.getElementById("userOutput");

//Initalizing elements
roomTitle.innerHTML = currentRoom[roomLocation].title;
console.log("initialze the room title");
roomImage.src  = currentRoom[roomLocation].image;
roomInfo.innerHTML = currentRoom[roomLocation].description;
console.log("Initialize current location and item if there is one ");
roomItems.innerHTML = `<u><strong>Item available:</strong></u><br/>`;
console.log("Initialize game responce");
userInput.innerHTML = "";

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
  str = str.toLowerCase();

// parse out user's input value
var userInputWords = [];
userInputWords = str.split(" ");
// move is the first world
move = userInputWords[0];
//userInputItem is the second word.
var userInputItem = userInputWords[1];

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

  case "south":
  if (roomLocation<6){
    roomLocation+=3;
    gameResponce = "";
  }
  else {
    gameResponce = currentRoom[roomLocation].blockedMessage;
  }
      break;

    case "west":
    if (roomLocation % 3 != 0) {
        roomLocation -= 1;
        gameResponce = "";
    }
    else{
      gameResponce = currentRoom[roomLocation].blockedMessage;
    }
      break;

    case"east":
    if (roomLocation % 3 != 2){
      roomLocation += 1;
      gameResponce = "";
    }
    else{
      gameResponce = currentRoom[roomLocation].blockedMessage;
    }
      break;

      case "take":
      takeItem(userInputItem);
      break;

      case "drop":
      dropItem(userInputItem);
      break;

         case "use":
             // TODO need to parse second word
            break;

  default:
    gameResponce = "Please try again.  I do not understand.";
}
    console.log(`current location: ${currentRoom[roomLocation]}`);
// deliver the location to the page
console.log("test before deliver function");
deliver();
}

function takeItem(pItem){
    //Does an item exist in curret room
if (currentRoom[roomLocation].items == pItem) {
    //placing item in backpack
    backpack.push(pItem);
    //remove from room
    currentRoom[roomLocation].items = "";
    gameResponce = `You picked up a ${pItem}`;
}
else {
    gameResponce = `There is no ${pItem} here`;
}
    console.log(`Current room item: ${currentRoom[roomLocation].items}`);
    console.log(`Current backpack items: ${backpack}`);
}

function dropItem(pItem){
    // Is there space in room to drop item
    if (currentRoom[roomLocation].items == "" ){
        //Is it in backpack
        if(backpack.indexOf(pItem) != -1){
            //add item back into game world at current location
            currentRoom[roomLocation].items = pItem;
            //remove item from backpack
            backpack.splice(backpack.indexOf(pItem), 1);
            //the message to the user that item has been dropped
            gameResponce = `You dropped the ${pItem}`;
        }
        else {
            //item was not in backpack.  Message to the user
            gameResponce = `You do not have a ${pItem} in your backpack`;
        }
    }
    else {
        gameResponce = `There's no space to drop ${pItem}`;
    }
    }

function useItem(){
//Check bacpack if item is in bag
if(backpack.indexOf(pItem) != -1){
    switch (pItem) {
        case key:
        if (currentRoom[roomLocation] == 8) {
            gameResponce = `The key unlocked a chest.  You found a book.`;
            currentRoom[roomLocation].items = "book";
        }
        else {
            gameResponce = `You cann't use the ${pItem} here`;
        }
            break;

        case sword:
            if (currentRoom[roomLocation]==0) {

                gameResponce = `You stunned the Orger with the sword.  You see a key.`;
                currentRoom[roomLocation].items = "key";
            }
            else {
                gameResponce = `You cannot use the ${pItem} here.`
            }
            break;

        case book:
            if (currentRoom[roomLocation]== 6) {
                gameRespone = 'YOU SAVED THE TREE OF LIFE! <br/> Game Over';
            }
            else {
                gameRespone = `You cannont use the ${pItem} here.`;
            }
            break;
        default:
        gameRespone = `There seems to be an error. Please type another command.`;
    }
}
else {
    //item was not in backpack.  Message to the user
    gameResponce = `You do not have a ${pItem} in your backpack`;
}
}

  function deliver(){
    // Current room title
    roomTitle.innerHTML = currentRoom[roomLocation].title;
    //current room image
    roomImage.src  = currentRoom[roomLocation].image;
    //current room description
    roomInfo.innerHTML = currentRoom[roomLocation].description;
    //current room items
    roomItems.innerHTML = `<u><strong>Item available:</strong></u><br/> ${currentRoom[roomLocation].items}`;
    //Desplaying the message from the game: if any
    userOutput.innerHTML = `<br/> <em>${gameResponce}</em>`;
    userInput.innerHTML = "";
  }
