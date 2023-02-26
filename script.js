const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const gridSize = 16;

gridBox.className = 'grid-box';

// Function to add the Grid Boxes to the container
function addGridBoxes(gridSize, targetElement) {
  const totalBoxes = Math.pow(gridSize, 2);
  targetElement.appendChild(gridBox);

  for (let i = 0; i < totalBoxes - 1; i++) {
    targetElement.appendChild(gridBox.cloneNode(true));
  }
}

// addGridBoxes(gridSize, container);

addGridBoxes(gridSize, container);
