const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const newGameRouter = require('./routes/new_game_router')

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('<h1>Welcome to simple Sudoku new game server</h1><p><a href="http://localhost:5000/newgame">Start New Game</a></p>')
})
app.use('/newgame', newGameRouter)

app.listen(PORT, error => {
    if(error) console.log(error)
    else console.log('Sudoku new game server is running on ' + PORT)
})