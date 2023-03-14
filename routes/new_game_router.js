const newGameRouter = require('express').Router();
const startNewGame = require('../controller/start_new_game');

newGameRouter.get('newgame', startNewGame)

module.exports = newGameRouter