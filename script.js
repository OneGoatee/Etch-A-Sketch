const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const gridSize = 16;
const totalGridBoxes = Math.pow(gridSize, 2);
const gridBoxWidth = container.offsetWidth / gridSize;
const gridBoxHeight = gridBoxWidth;

gridBox.className = 'grid-box';

// Function to add the Grid Boxes to the container
function addGridBoxes(gridSize, targetElement) {
  // Appends first Gird Box to the container
  targetElement.appendChild(gridBox);

  // Clone the original Grid Box to complete the grid based on the Grid Size
  for (let i = 0; i < totalGridBoxes - 1; i++) {
    targetElement.appendChild(gridBox.cloneNode(true));
  }
}

// Function to Toggle the Gid Box Active state when clicked
function toggleBoxActiveState(e) {
  e.target.classList.toggle('grid-box-active');
}

function setGridBoxesDimensions(e) {
  e.style.width = `${gridBoxWidth}px`;
  e.style.height = `${gridBoxHeight}px`;
}

addGridBoxes(gridSize, container);

const gridBoxes = document.querySelectorAll('.grid-box');

gridBoxes.forEach(e => {
  setGridBoxesDimensions(e);
  e.addEventListener('click', toggleBoxActiveState);
});

console.log('Width:', gridBoxWidth, 'Height:', gridBoxHeight);
