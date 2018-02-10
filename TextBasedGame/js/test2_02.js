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

//declairing the ouput of room discription
var roomInfo = document.getElementById("roomInfo");

//Displaying the player's location
roomInfo.innerHTML = currentRoom[roomLocation].description;
