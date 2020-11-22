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

  let currentPlayer = playerOne
  let winner = null 
  let isEndGame = false
  let coinRow = null
  let coinColumn = null

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
  const topRow = [cells[0],cells[1],cells[2],cells[3],cells[4],cells[5],cells[6]]
  const rowOne = [cells[7],cells[8],cells[9],cells[10],cells[11],cells[12],cells[13]]
  const rowTwo = [cells[14],cells[15],cells[16],cells[17],cells[18],cells[19],cells[20]]
  const rowThree = [cells[21],cells[22],cells[23],cells[24],cells[25],cells[26],cells[27]]
  const rowFour = [cells[28],cells[29],cells[30],cells[31],cells[32],cells[33],cells[34]]
  const rowFive = [cells[35],cells[36],cells[37],cells[38],cells[39],cells[40],cells[41]]
  const rowSix = [cells[42],cells[43],cells[44],cells[45],cells[46],cells[47],cells[48]]

  console.log('topRow is', topRow)
  console.log('rowOne is', rowOne)
  console.log('rowtwo is', rowTwo)

  
  
  // * Columns
  // const topRow = 
  
  

  // * Display empty and taken cells in board *

  function displayBoard() {
    for (let i=0; i < cellCount; i++) {
      console.log('')
  }
  }
  return displayBoard

// * Handle player's turn () *
// ------player selects column 
// event listener click - column 1 - 7 - loop through all cells in column from bottom upwards, until div/cell has no class

const handleCellMouseover = event => {
  const cell = event.target
  console.log(cell)
  }
  return handleCellMouseover




// * Display empty and taken cells in board [again] *

// * Check if game has been won * (either horizontally, vertically, diagonally)
// -----    == if logic is true (boolean) = ENDGAME

// * switchPlayer *


}
createGrid()

//* event listeners - loop through all cells (including invisible top row) 

cells.addEventListener('mouseover', handleCellMouseover)


}

window.addEventListener('DOMContentLoaded', init)