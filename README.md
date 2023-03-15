# sudoku_new_game
simple server for start a new sudoku game

# How to start the server locally

- Clone this repo
- In root folder Open terminal
- Install dependencies using $ `npm install`
- Starting the server with $ `npm start`

now the server is running and in terminal you can see `Sudoku new game server is running on 5000`

You can use broswer with the url [http://localhost:5000/newgame](http://localhost:5000/newgame) to check it.

## API

`/newgame` get method

  will return json looks like this:
  ```
  {
     "sudoku":".7.3.8.45.54679318...15497249.8.273......7564..654..89...413896.4.7..1.3..829.45.",
     "roundToCreateFulfilledPuzzle":81,
     "hiddenBlocks":32}
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

  - check each line, each number should  only appear only 1 time
  - check each row
  - check each region
   
  #### 2- hide some element of it
  - hide all the ele in the hide arr
  - That means for level one(what we only have now), each hidden num is a unique num for it's cell duiring the process of create the fulfilled puzzle
  - so the puzzle should have and only have one unique solution
         