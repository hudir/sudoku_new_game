[Live](https://soduko-new-game.onrender.com/)

[About](#sudoku-new-game)

[Quick start](#how-to-start-the-server-locally)

[API](#api)

[Algorithm](#algorithm)

# Sudoku new game
- Simple server for generating a new sudoku puzzle
- Each puzzle is randomly generated and should have a unique solution
- Now only have level easy
- The number of hidden cells is about 30 - 40
- Use [Sudoku Solver](https://soduko-solver.onrender.com/) to check if the puzzle can get a solution
- Have fun!

# How to start the server locally

- Clone this repo
- In the root folder Open terminal
- Install dependencies using $ `npm install`
- Starting the server with $ `npm start`

now the server is running and in the terminal, you can see `Sudoku new game server is running on http://localhost:5000`

You can use the browser with the URL [http://localhost:5000/newgame](http://localhost:5000/newgame) to check it.

# API
GET method
- `/newgame` 
   
     will return JSON with a newly generated sudoku puzzle that looks like this:
     ```
     {
        "sudoku":".7.3.8.45.54679318...15497249.8.273......7564..654..89...413896.4.7..1.3..829.45.",
        "roundToCreateFulfilledPuzzle":81,
        "hiddenBlocks":32
      }
     ```
- `/newgame/solution`

     will return JSON with a newly generated sudoku puzzle and its solution, like this:
     ```
     {
        "sudoku":".497.62.3.31894.6.76.23.849....79184....1.75.5....839265.4...31......425..3.2.678",
        "roundToCreateFulfilledPuzzle":81,
        "hiddenCells":36
        "solution":"849756213231894567765231849326579184984312756517648392652487931178963425493125678"
     }
     ```


# Algorithm 

## How to create a new sudoku puzzle?

  #### 1 - Generate a random fulfilled sudoku puzzle
  - 9x9 puzzle with numbers from 1-9

     - at the beginning the puzzle should have 81 cells, each cell is an array, and each array has 1-9 inside it
     - find the min length of all arr cells. Use the min length to find cells.
     - randomly take one of the shortest cells as a target
     - the target is an arr now get a random number from it
     - use that number to update all cells of the same line, row and region, all the array cells should not have that number anymore
       - after the update, check the cell's length, it should be bigger than 0 
         - if the cell is empty after the update, change the puzzle to init state and restart the whole process
       - if the arr cell has only one number inside it. it will be pushed to an array, which will be used for hiding cells after
       - replace the arr cell with that random number
     - repeat this process 81 times until all cells in the puzzle are numbers

  #### 2 - hide some cells of it
  - hide all the cells in the hide arr
  - That means for level easy/one (what we only have now), each hidden number is a unique choice for its cell during the process of creating the fulfilled puzzle
  - so the puzzle should always have one unique solution
         
