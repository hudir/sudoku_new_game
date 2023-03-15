const Sudoku = require('./sudoku')

function startNewGame(req, res){
    const sudoku = new Sudoku()
    const newGame = {
        sudoku: sudoku.createNewGame(),
        solution: sudoku.puzzle.join(''),
        roundToCreateFulfilledPuzzle: sudoku.roundToCreateFulfilledPuzzle
    }
    
    res.json(newGame)
}

module.exports = startNewGame