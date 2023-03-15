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
     "lastGameIndex":2,
     "newGameIndex":1,
     "sudoku":"1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37."
  }
  ```

  ## How to create a new sudoku puzzle?

  #### 1- need a random fulfilled sudoku puzzle
  - 9x9 puzzle with numbers from 1-9
     - at begining puzzle shold looks like [1-9].repeat(81) - array with 81 element, each ele is also a arr with 1-9 inside of it
     - find the first shortes array element, and get a random number from it
     - update the line, row and region, all the array element should not have the random number anymore
     - during the update process check the arr make sure each arr ele's length >= 1
     - if any arr ele is empty after update, change puzzle to init state and restar the process
     - replace the arr with the random number
     - repeat this process until all element in puzzle are numbers(no array ele left)
  - check each line, each number should only only appear only 1 time
  - check each row
  - check each region
   
  #### 2- hide some element of it
  - but make sure the puzzle still have and only have one unique solution
         