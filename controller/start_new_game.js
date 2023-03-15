const Sudoku = require('./sudoku')

function startNewGame(req, res){
    const sudoku = new Sudoku()
    const newGame = {
        sudoku: sudoku.createNewGame(),
        roundToCreateFulfilledPuzzle: sudoku.roundToCreateFulfilledPuzzle,
        hiddenCells: sudoku.hide.length

    }
    
    res.json(newGame)
}

module.exports = startNewGame