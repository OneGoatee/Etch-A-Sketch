const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const gridSizeButton = document.querySelector('.grid-size-btn');

let gridBoxes = null;
let gridSize;
let gridMaxSize = 64;
let totalGridBoxes;
let gridBoxWidth;
let gridBoxHeight;

gridBox.className = 'grid-box';

function getGridSizeFromUser() {
  let userSelection = prompt('Type your Grid Size (Max: 64)');

  if (userSelection === null || userSelection === '') {
    return;
  } else if (userSelection > gridMaxSize) {
    alert('Invalid Grid Size (Max Size: 64)');
    return;
  }

  gridSize = userSelection;
  totalGridBoxes = Math.pow(gridSize, 2);
  gridBoxWidth = container.offsetWidth / gridSize;
  gridBoxHeight = gridBoxWidth;
}

function addGridBoxes(targetElement) {
  if (totalGridBoxes === undefined || totalGridBoxes === 0) {
    return;
  }

  targetElement.appendChild(gridBox);

  for (let i = 0; i < totalGridBoxes - 1; i++) {
    targetElement.appendChild(gridBox.cloneNode(true));
  }
}

function setGridBoxesDimensions() {
  gridBoxes = document.querySelectorAll('.grid-box');

  gridBoxes.forEach(e => {
    e.style.width = `${gridBoxWidth}px`;
    e.style.height = `${gridBoxHeight}px`;
  });
}

function addBoxActiveState(e) {
  let min = 0;
  let max = 255;

  e.target.classList.add('grid-box-active');

  e.target.style.backgroundColor = `rgb(${Math.random() * (max - min) + min}, ${Math.random() * (max - min) + min}, ${Math.random() * (max - min) + min})`;
}

function activateClickedGridBox() {
  gridBoxes.forEach(e => {
    e.addEventListener('mouseover', addBoxActiveState);
  });
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function generateGrid() {
  clearGrid();
  getGridSizeFromUser();
  addGridBoxes(container);
  setGridBoxesDimensions();
  activateClickedGridBox();
}

gridSizeButton.addEventListener('click', generateGrid);
