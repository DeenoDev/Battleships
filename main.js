const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');


let angle = 0;
function flip(){
    const optionShips = Array.from (optionContainer.children);
    if(angle === 0) {
        angle = 90;
    } else {
        angle = 0;
    }
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`);
}


flipButton.addEventListener('click', flip);