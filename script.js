const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const gridSize = 16;

gridBox.className = 'grid-box';

// Function to add the Grid Boxes to the container
function addGridBoxes(gridSize, targetElement) {
  // Calculates number of boxes based on Grid Size
  const totalBoxes = Math.pow(gridSize, 2);

  // Appends first Gird Box to the container
  targetElement.appendChild(gridBox);

  // Clone the original Grid Box to complete the grid based on the Grid Size
  for (let i = 0; i < totalBoxes - 1; i++) {
    targetElement.appendChild(gridBox.cloneNode(true));
  }
}

// Function to Toggle the Gid Box Active state when clicked
function toggleBoxActiveState(e) {
  e.target.classList.toggle('grid-box-active');
}

addGridBoxes(gridSize, container);

const gridBoxes = document.querySelectorAll('.grid-box');

gridBoxes.forEach(e => {
  e.addEventListener('click', toggleBoxActiveState);
});
