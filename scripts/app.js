// * A #start button should start the game...
// * When the game starts:
// * Tell player 1 to take their turn by selecting a column
// * Add event listener for selecting a column


function init() {

  // * Global Variables * //

  const grid = document.querySelector('.grid')
  console.log(grid)
  
  const width = 7
  const height = 7
  const cellCount = width * height
  const cells = []

  const topRowClass = 'topRow'
  const rowOneClass= 'rowOne'
  const rowTwoClass= 'rowTwo'
  const rowThreeClass= 'rowThree'
  const rowFourClass= 'rowFour'
  const rowFiveClass= 'rowFive'
  const rowSixClass= 'rowSix'

  const column0Class = 'column0'
  const column1Class = 'column1'
  const column2Class = 'column2'
  const column3Class = 'column3'
  const column4Class = 'column4'
  const column5Class = 'column5'
  const column6Class = 'column6'

  let currentPlayer = 'playerOneCoin'
  let winner = null
  let isEndGame = false

  // * Make the grid * //

  function createGrid() {
    for (let i=0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      cell.setAttribute('data-id', i)
      grid.appendChild(cell)
      cells.push(cell)
    }
    console.log(cells)
    defineRowClasses()
    defineColumnClasses()
  }

  // * Row arrays * //

  const topRow = [0, 1, 2, 3, 4, 5, 6]
  const rowOne = [7, 8, 9, 10, 11, 12, 13]
  const rowTwo = [14, 15, 16, 17, 18, 19, 20]
  const rowThree = [21, 22, 23, 24, 25, 26, 27]
  const rowFour = [28, 29, 30, 31, 32, 33, 34]
  const rowFive = [35, 36, 37, 38, 39, 40, 41]
  const rowSix = [42, 43, 44, 45, 46, 47, 48]
  
  // * Column arrays * //

  const column0 = [0, 7, 14, 21, 28, 35, 42]
  const column1 = [1, 8, 15, 22, 29, 36, 43]
  const column2 = [2, 9, 16, 23, 30, 37, 44]
  const column3 = [3, 10, 17, 24, 31, 38, 45]
  const column4 = [4, 11, 18, 25, 32, 39, 46]
  const column5 = [5, 12, 19, 26, 33, 40, 47]
  const column6 = [6, 13, 20, 27, 34, 41, 48]
  
  // * Define Row Arrays * //
  function defineRowClasses() {
    topRow.forEach(cell => {
      cells[cell].classList.add(topRowClass)
    })
    rowOne.forEach(cell => {
      cells[cell].classList.add(rowOneClass)
    })
    rowTwo.forEach(cell => {
      cells[cell].classList.add(rowTwoClass)
    })
    rowThree.forEach(cell => {
      cells[cell].classList.add(rowThreeClass)
    })
    rowFour.forEach(cell => {
      cells[cell].classList.add(rowFourClass)
    })
    rowFive.forEach(cell => {
      cells[cell].classList.add(rowFiveClass)
    })
    rowSix.forEach(cell => {
      cells[cell].classList.add(rowSixClass)
    })
    }

  // * Define Column Arrays * //
  function defineColumnClasses() {
    column0.forEach(cell => {
      cells[cell].classList.add(column0Class)
    })
    column1.forEach(cell => {
      cells[cell].classList.add(column1Class)
    })
    column2.forEach(cell => {
      cells[cell].classList.add(column2Class)
    })
    column3.forEach(cell => {
      cells[cell].classList.add(column3Class)
    })
    column4.forEach(cell => {
      cells[cell].classList.add(column4Class)
    })
    column5.forEach(cell => {
      cells[cell].classList.add(column5Class)
    })
    column6.forEach(cell => {
      cells[cell].classList.add(column6Class)
    })
    }
  
  // * Display empty and taken cells in board * //

  function displayBoard() {
    for (let i=0; i < cellCount; i++) {
      console.log('')
  }
  return displayBoard
  }


// * Handle player's turn () * //

// step 1 - create event listener to check when you hover over any element in the grid, it can log it
  // ------ player selects column 

  function handleCellMouseOver(event) {
    const currentPosition = event.target.innerHTML
    console.log(currentPosition)
    cells[currentPosition].classList.add(currentPlayer)
  }

  function handleCellMouseLeave(event) {
    console.log(event.target.innerHTML)
    const currentPosition = event.target.innerHTML
    cells[currentPosition].classList.remove(currentPlayer)
  }
  // * event listener click - column 0 - 6 - loop through all cells in column from bottom upwards, until div/cell has no class. then assign that cell to currentPlayer colour, (class & style) * //

  function handlePlayerSelectsColumn(event) {
    // console.log('clicked id =', event.target.dataset.id)
    // const clickedCellId = event.target.dataset.id
    const clickedCellColumn = event.target.classList[1]
    console.log(clickedCellColumn)
    if (clickedCellColumn.contains(number) 
    // if event.target.classList.contains('0') {//add class currentPlayer to final item in the array of that const class
      // classList[(length -1)] = currentPlayer
    // }
    // check column class - use a check to loop through column
    // create ternary - asking if currentPlayer equals playeroneCoin
    currentPlayer = currentPlayer === 'playerOneCoin' ? 'playerTwoCoin': 'playerOneCoin'
    console.log(currentPlayer)
  }
  handlePlayerSelectsColumn

//final index of array^^ //
// function handleCellMouseOver(event){
//   if (event.target.class === 'column0')
// if cell index < width and , classlist.add (hover) 

// * Display empty and taken cells in board [again] *

// * Check if game has been won [either horizontally, vertically, diagonally] * //
// -----    == if logic is true (boolean) = ENDGAME

  createGrid()

// * Event listeners * //

// cells.addEventListener('mouseover', handleCellMouseOver)
  cells.forEach(cell => cell.addEventListener('mouseover', handleCellMouseOver))
  cells.forEach(cell => cell.addEventListener('mouseleave', handleCellMouseLeave))
  cells.forEach(cell => cell.addEventListener('click', handlePlayerSelectsColumn))

}

window.addEventListener('DOMContentLoaded', init)