// board interaction
let board;
const boardWidth = 100; //10*10 grid
const boardHeight = 100; 
const gridSize = 5;

window.onload = function(){
    board = document.getElementById('board');
    board.height = boardHeight*gridSize
    board.width = boardWidth*gridSize
}