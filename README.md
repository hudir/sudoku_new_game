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