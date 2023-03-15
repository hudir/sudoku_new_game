const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const PORT = process.env.PORT;
const DOMIN = process.env.DOMIN
const newGameRouter = require('./routes/new_game_router')

app.use(express.json());
app.use(cors());

basicUrl = DOMIN + PORT
app.get('/', (req,res) => {
    res.send(`
    <h1>Welcome to simple Sudoku new game server</h1>
    <p><a href="${basicUrl}/newgame">Start New Game</a></p>
    <p><a href="${basicUrl}/newgame/solution">Puzzel with solution</a></p>`)
})
app.use('/', newGameRouter)

app.listen(PORT, error => {
    if(error) console.log(error)
    else console.log('Sudoku new game server is running on ' + basicUrl)
})