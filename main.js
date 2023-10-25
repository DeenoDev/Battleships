const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');

function flip(){
    const optionShips = (Array.from (optionContainer.children));
    optionShips.forEach(optionShip => optionShip.style.transform = 'rotate(90deg)');
}


flipButton.addEventListener('click', flip);