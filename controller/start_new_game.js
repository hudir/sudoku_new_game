const Sudoku = require('./sudoku')

function startNewGame(req, res){
    const sudoku = new Sudoku()
    
    const newGame = {
        sudoku: sudoku.createNewGame(),
        roundToCreateFulfilledPuzzle: sudoku.roundToCreateFulfilledPuzzle,
        hiddenCells: sudoku.hide.length

    }

    if(req.params.cheat == 'solution'){
        newGame.solution = sudoku.puzzle.join('')
    }
    
    res.json(newGame)
}

module.exports = startNewGame