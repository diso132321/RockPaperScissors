var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render("choices");
});

/* GET turn */
router.get('/turn', function(req, res) {
  let playerChoice = req.query.choice;
  let PcChoice = getPcChoice(['rock', 'paper', 'scissors']);
  let winner = pickWinner(playerChoice, PcChoice);
  res.render('result', {
    playerChoice: playerChoice,
    PcChoice: PcChoice,
    winner: winner
  });
})
module.exports = router;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getPcChoice(options){
  let choiceIndex = getRandomInt(3);
  return options[choiceIndex];
}
function pickWinner(playerChoice, PcChoice) {
  if (playerChoice === PcChoice)
    return 'draw';

  if (playerChoice === 'rock') {
    if (PcChoice === 'paper') {
      return 'Pc';
    }
    if (PcChoice === 'scissors') {
      return 'player';
    }
  }
  if (playerChoice === 'paper') {
    if (PcChoice === 'rock') {
      return 'player';
    }
    if (PcChoice === 'scissors') {
      return 'pc';
    }
  }
  if (playerChoice === 'scissors') {
    if (PcChoice === 'rock') {
      return 'pc';
    }
    if (PcChoice === 'paper') {
      return 'player';
    }
  }
  return 'invalid';
}