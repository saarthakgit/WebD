// board 
let board;
// defining dimensions
const colCount = 19;
const rowCount = 21;
const tileSize = 32;
const boardWidth = colCount*tileSize;
const boardHeight = rowCount*tileSize;

// image refs
let blueGhost ;
let cherry  ;
let orangeGhost  ;
let pacmanDown  ;
let pacmanUp  ;
let pacmanLeft  ;
let pacmanRight  ;
let pinkGhost  ;
let redGhost  ;
let scaredGhost  ;
let wall  ;

// board and context
let context;
window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context=board.getContext("2d"); //used to draw on the board.
    getImages()
}

// sets to collect wall blocks, ghosts and food dots
const walls = new Set();
const foods = new Set();
const ghosts = new Set(); 
// pacman is single so,
let pacman;

// getting images
function getImages(){
    wall = new Image()
    wall.src = './wall.png'

    //Ghosts
    blueGhost = new Image();
    blueGhost.src = "./blueGhost.png"
    orangeGhost = new Image();
    orangeGhost.src = "./orangeGhost.png"
    pinkGhost = new Image();
    pinkGhost.src = "./pinkGhost.png"
    redGhost = new Image();
    redGhost.src = "./redGhost.png"
    scaredGhost = new Image();
    scaredGhost.src = "./scaredGhost.png"

    //Cherry
    cherry = new Image()
    cherry.src = "./cherry.png"

    //Pacman movts
    pacmanUp = new Image()
    pacmanUp.src = "./pacmanUp.png"
    pacmanDown = new Image()
    pacmanDown.src = "./pacmanDown.png"
    pacmanLeft = new Image()
    pacmanLeft.src = "./pacmanLeft.png"
    pacmanRight = new Image()
    pacmanRight.src = "./pacmanRight.png"

}

function loadMap(){
    walls.clear();  // because game resets with this same function
    foods.clear();
    ghosts.clear();

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            
            
        }
        
    }

}


//X = wall, O = skip, P = pacman, ' ' = food
//Ghosts: b = blue, o = orange, p = pink, r = red
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

class Block{
    constructor(image, x , y, width , height){
        this.image = image;
        this.x = x;  //where to place
        this.y = y;  //where to place
        this.width = width;
        this.height = height;

        this.StartX = x;  //starting pos of pacman and ghost
        this.StartY = y;  //starting pos of pacman and ghost
    }
}