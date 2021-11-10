const board = document.querySelector('#board');
const colors = ['#4c6479', '#572fb5', '#e09782', '#70f7ec', '#6460d1', '#4352d0', '#c54899', '#3c581f', '#6bec24', '#2db88b', '#bae0b5', '#dabe62', '#73775c', '#a7952e', '#45891c', '#fd23fb', '#37d7a0', '#608ab6'];
const backgrond = document.querySelector('body');
const SQUARES_NUMBER = 110;

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div');
   square.classList.add('square');

   square.addEventListener('mouseover', setColor);

   square.addEventListener('mouseleave', removeColor);

   board.append(square);
}

function setColor(event) {
   const element = event.target;
   const color = getRandomColor();
   element.style.backgroundColor = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
   backgrond.style.backgroundColor = color;
}

function removeColor(event) {
   const element = event.target;
   element.style.backgroundColor = '#1d1d1d';
   element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {

   return colors[Math.floor(Math.random() * colors.length)];
}

function backgroundColor() {

}