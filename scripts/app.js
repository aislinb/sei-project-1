// * A #start button should start the game...
// * When the game starts:
// * Tell player 1 to take their turn by selecting a column
// * Add event listener for selecting a column


function init() {

  // * Global Variables *

  const grid = document.querySelector('.grid')
  console.log(grid)
  
  const width = 7
  const height = 7
  const cellCount = width * height
  const cells = []
  const playerOne = 'playerOneCoin'
  const playerTwo = 'playerTwoCoin'
  

  
  
  // * Columns
  // const topRow = 
  
  

  // let currentPlayer = playerOne
  // let winner = null
  // let isEndGame = false
  // let coinRow = null
  // let coinColumn = null

  // cell chosen by currentPlayer = 

// * Make the grid *
function createGrid() {
  for (let i=0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
console.log(cells)

  // * Rows
  // const firstRow = [cells[0],cells[1],cells[2],cells[3],cells[4],cells[5],cells[6]]
  // const secondRow = cells[7-13]
  // const thirdRow = cells[14-20]
  // const fourthRow = cells[21-27]

// * Display empty and taken cells in board *

function displayBoard() {


}

// * Handle player's turn () *
// ------player selects column 
// event listener click - column 1 - 7 - loop through all cells 

const handleCellHover = event => {
  const cell = event.target
 
}





// * Display empty and taken cells in board [again] *

// * Check if game has been won * (either horizontally, vertically, diagonally)
// -----    == if logic is true (boolean) = ENDGAME

// * switchPlayer *


}
createGrid()

//* event listeners - loop through all cells (including invisible top row) 

start.addEventListener('click', startGame)
cells.forEach(cell => cell.addEventListener('click', handleCellHover))


}

window.addEventListener('DOMContentLoaded', init)

