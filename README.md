# Sudoku new game
- Simple server for generate a new sudoku puzzle
- Each puzzle is random generated and shold have a unique solution
- Now only have level easy
- The numbers of hidden cells is about 30 - 40
- Have fun!

# How to start the server locally

- Clone this repo
- In root folder Open terminal
- Install dependencies using $ `npm install`
- Starting the server with $ `npm start`

now the server is running and in terminal you can see `Sudoku new game server is running on 5000`

You can use broswer with the url [http://localhost:5000/newgame](http://localhost:5000/newgame) to check it.

## API
GET method
- `/newgame` 
   
     will return JSON with New generated sudoku puzzle looks like this:
     ```
     {
        "sudoku":".7.3.8.45.54679318...15497249.8.273......7564..654..89...413896.4.7..1.3..829.   45.",
        "roundToCreateFulfilledPuzzle":81,
        "hiddenBlocks":32
      }
     ```
- `/newgame/solution`

     will return JSON with New generated sudoku puzzle looks like this:
     ```
     {
        "sudoku":".497.62.3.31894.6.76.23.849....79184....1.75.5....839265.4...31......425..3.2.678",
        "roundToCreateFulfilledPuzzle":81,
        "hiddenCells":36,"solution":"849756213231894567765231849326579184984312756517648392652487931178963425493125678"
     }
     ```

   



## How to create a new sudoku puzzle?

  #### 1- need a random fulfilled sudoku puzzle
  - 9x9 puzzle with numbers from 1-9

     - at begining puzzle shold looks like [1-9].repeat(81) - array with 81 element, each ele is also a arr with 1-9 inside of it
     - find the minlenth of all arr element and take a random one as target
     - get a random number from the target
     - update the line, row and region, all the array element should not have the random number anymore
     - during the update process check the arr ele make sure each arr ele's length > 0
     - if any arr ele is empty after update, change puzzle to init state and restar the process
     - if the ele arr has only one num inside it. it will be push to hide
     - replace the arr ele with the random number
     - repeat this process 81 times until all element in puzzle are numbers(no array ele left)

   
  #### 2- hide some element of it
  - hide all the ele in the hide arr
  - That means for level one(what we only have now), each hidden num is a unique num for it's cell duiring the process of create the fulfilled puzzle
  - so the puzzle should always have one unique solution
         