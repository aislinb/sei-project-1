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
  const topRow = 'topRow'

  let currentPlayer = playerOne
  let winner = null 
  let isEndGame = false
  let coinRow = null
  let coinColumn = null
  let playerStart = null

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
  }

  // * Rows /// need to create classes for the below arrays instead of consts
  // const topRow = [cells[0],cells[1],cells[2],cells[3],cells[4],cells[5],cells[6]]
  // const rowOne = [cells[7],cells[8],cells[9],cells[10],cells[11],cells[12],cells[13]]
  // const rowTwo = [cells[14],cells[15],cells[16],cells[17],cells[18],cells[19],cells[20]]
  // const rowThree = [cells[21],cells[22],cells[23],cells[24],cells[25],cells[26],cells[27]]
  // const rowFour = [cells[28],cells[29],cells[30],cells[31],cells[32],cells[33],cells[34]]
  // const rowFive = [cells[35],cells[36],cells[37],cells[38],cells[39],cells[40],cells[41]]
  // const rowSix = [cells[42],cells[43],cells[44],cells[45],cells[46],cells[47],cells[48]]

  // console.log('topRow is', topRow)
  // console.log('rowOne is', rowOne)
  // console.log('rowtwo is', rowTwo)

  
  
  // * Columns /// need to create classes for the below arrays instead of consts
  // const column0 = [cells[0],cells[7],cells[14],cells[21],cells[28],cells[35],cells[42]]
  // const column1 = [cells[1],cells[8],cells[15],cells[22],cells[29],cells[36],cells[43]]
  // const column2 = [cells[2],cells[9],cells[16],cells[23],cells[30],cells[37],cells[44]]
  // const column3 = [cells[3],cells[10],cells[17],cells[24],cells[31],cells[38],cells[45]]
  // const column4 = [cells[4],cells[11],cells[18],cells[25],cells[32],cells[39],cells[46]]
  // const column5 = [cells[5],cells[12],cells[19],cells[26],cells[33],cells[40],cells[47]]
  // const column6 = [cells[6],cells[13],cells[20],cells[27],cells[34],cells[41],cells[48]]

  
  
 
  // * Display empty and taken cells in board *

  function displayBoard() {
    for (let i=0; i < cellCount; i++) {
      console.log('')
  }
  return displayBoard
  }
  displayBoard()


// * Handle player's turn () *
// ------player selects column 
// event listener click - column 0 - 6 - loop through all cells in column from bottom upwards, until div/cell has no class. then assign that cell to currentPlayer colour, (class & style)
// step 1 - create event listener to check when you hover over any element in the grid, it can log it

/// when you hover over cells of playerStart 
function addPlayerOneClass(e) {
  

}

function handleCellMouseOver(e) {
  const currentPosition = e.target.innerHTML
  console.log(currentPosition)
      cells[currentPosition].classList.add(playerOne)

  // if (cells[currentPosition].classList.contains(playerOne)) {
  //   removePlayerOneClass()
  // }
  // function removePlayerOneClass(currentPosition) {
  //   cells[currentPosition].classList.remove(playerOne)
  // }
  // removePlayerOneClass()
  // could create two functions inside this - one to add the class and one to remove
  // console.log('hover')
  // const currentPosition = e.target.innerHTML
  // console.log(currentPosition)
  // cells[currentPosition].classList.add(playerOne)
  // cells[currentPosition].classList.remove(playerOne)
  // cells[playerStart].classList.add(playerOne)
}

function handleCellMouseLeave(e) {
  console.log(e.target.innerHTML)
  const currentPosition = e.target.innerHTML
  cells[currentPosition].classList.remove(playerOne)
}

function handleCellMouseClick(e) {
  console.log('clicked', e.target.innerHTML)
  const cellIndex = e.target.innerHTML
  if (cellIndex === [0,7,14,21,28,35,42])
  return 42
}

// function handleCellMouseOver(event){
//   if (event.target.class === 'column0') {
    
//   }
//   const cells = event.target
//   console.log(cells)
//   }
//   return handleCellMouseover

// if cell index < width and , classlist.add (hover) 


// * Display empty and taken cells in board [again] *

// * Check if game has been won * (either horizontally, vertically, diagonally)
// -----    == if logic is true (boolean) = ENDGAME

// * switchPlayer *



createGrid()

//* event listeners - loop through all cells (including 'invisible' top row) 

// cells.addEventListener('mouseover', handleCellMouseOver)
cells.forEach(cell => cell.addEventListener('mouseover', handleCellMouseOver))
cells.forEach(cell => cell.addEventListener('mouseleave', handleCellMouseLeave))
cells.forEach(cell => cell.addEventListener('click', handleCellMouseClick))

}

window.addEventListener('DOMContentLoaded', init)