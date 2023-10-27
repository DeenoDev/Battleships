const gamesBoardContainer = document.querySelector('#gamesboard-container');
const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');

//Option Choosing
let angle = 0;
function flip(){
    const optionShips = Array.from (optionContainer.children);
    if(angle === 0) {
        angle = 90;
    } else {
        angle = 0;
    }
    //    Turnarury Function
    // angle = angle === 0 ? 90 : 0;
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`);
}
flipButton.addEventListener('click', flip);

//Creating Boards
const width = 10;

function createBoard(color, user){
   const gameBoardContainer = document.createElement('div');
   gameBoardContainer.classList.add('game-board');
   gameBoardContainer.style.backgroundColor = color;
   gameBoardContainer.id = user;

   for (let i = 0; i < width * width; i++){
    const block = document.createElement('div');
    block.classList.add('block');
    block.id = i;
    gameBoardContainer.append(block);


   }

   gamesBoardContainer.append(gameBoardContainer);
    
}
createBoard('yellow', 'player');
createBoard('pink', 'computer');

//Creating Ships
class Ship {
    constructor(name, length){
        this.name = name;
        this.length = length;
    }
}

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 3 );
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);



