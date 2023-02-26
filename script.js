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

function toggleBoxActiveState(e) {
  e.target.classList.toggle('grid-box-active');
}

addGridBoxes(gridSize, container);

const gridBoxes = document.querySelectorAll('.grid-box');

gridBoxes.forEach(e => {
  e.addEventListener('click', toggleBoxActiveState);
});
