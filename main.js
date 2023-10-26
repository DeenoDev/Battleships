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

//Creating Boards
const width = 10;

function createBoard(){
   const gameBoardContainer = document.createElement('div');
   gameBoardContainer.classList.add('game-board');
   gameBoardContainer.style.backgroundColor = 'pink';

   gamesBoardContainer.append(gameBoardContainer);
    
}
createBoard();


flipButton.addEventListener('click', flip);