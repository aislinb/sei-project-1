// * A #start button should start the game...
// * When the game starts:
// * Tell player 1 to take their turn by selecting a column
// * Add event listener for selecting a column


function init() {

  const grid = document.querySelector('.grid')
  console.log(grid)
  
  const width = 7
  const height = 6
  const cellCount = width * height
  const cells = []


// * Make the grid *
function createGrid() {
  for (let i=0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
}
createGrid()


}

window.addEventListener('DOMContentLoaded', init)

