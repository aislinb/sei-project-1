// * A #start button should start the game...
// * When the game starts:
// * Tell player 1 to take their turn by selecting a column
// * Add event listener for selecting a column


function init() {

  // * Global Variables *

  const grid = document.querySelector('.grid')
  console.log(grid)
  
  const width = 7
  const height = 6
  const cellCount = width * height
  const cells = []

  let currentPlayer = 'x'
  let winner = null
  let isEndGame = false

  // cell chosen by currentPlayer = 

// * Make the grid *
function createGrid() {
  for (let i=0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }

// * Display empty and taken cells in board *

// * Handle player's turn () *
// ------player selects column 

// * Display empty and taken cells in board [again] *

// * Check if game has been won * (either horizontally, vertically, diagonally)
// -----    == if logic is true (boolean) = ENDGAME

// * switchPlayer *
}
createGrid()


}

window.addEventListener('DOMContentLoaded', init)

