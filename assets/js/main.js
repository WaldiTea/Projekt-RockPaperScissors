const title = document.querySelector('#title');
const contentWrapper = document.querySelector('#content-wrapper');
const gameContent = document.querySelector('#game-content');
const roundsElem = document.querySelector('#rounds');
const setRoundsElem = document.querySelector('#set-rounds');
const roundCounter = document.querySelector('.round-counter');
const possibleChoices = document.querySelectorAll('.choose');
const scoreUser = document.querySelector('#score-user');
const scoreComputer = document.querySelector('#score-computer');
const gameplay = document.querySelector('#gameplay');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let rounds = 1;
let chooseRounds;
let userChoice;
let computerChoice = ['rock', 'paper', 'scissors'];
let setScoreUser = 0;
let setScoreComputer = 0;

amountRounds = (setRounds) => {
  title.style.animation = 'scaleOut 500ms';
  contentWrapper.classList.add('invisible');
  contentWrapper.classList.remove('visible');
  gameContent.classList.add('visible');
  gameContent.classList.remove('invisible');
  roundsElem.innerHTML = rounds;
  setRoundsElem.innerHTML = setRounds;
  chooseRounds = setRounds
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  rounds++;
  userChoice = e.target.id;
  if(rounds > chooseRounds) {
    roundCounter.innerHTML = 'Finish';
    if(setScoreUser > setScoreComputer) {
      gameplay.innerHTML = `You WIN!`;
    } else if(setScoreUser < setScoreComputer) {
      gameplay.innerHTML = `You LOOSE!`;
    } else {
      gameplay.innerHTML = `DRAW`;
    }
    return false;
  }
  getResults(userChoice, computerChoice[Math.floor(Math.random() * computerChoice.length)]);
  roundsElem.innerHTML = rounds;
}));

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      setScoreUser++;
      printResult(setScoreUser, scoreUser, userChoice, computerChoice);
      if(userChoice + computerChoice === 'rockscissors') {
        rock.style.animation = 'backgroundWin 500ms';
      } else if(userChoice + computerChoice === 'paperrock') {
        paper.style.animation = 'backgroundWin 500ms';
      } else {
        scissors.style.animation = 'backgroundWin 500ms';
      }
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      setScoreComputer++;
      printResult(setScoreComputer, scoreComputer, computerChoice, userChoice);
      if(userChoice + computerChoice === 'rockpaper') {
        rock.style.animation = 'backgroundLoose 500ms';
      } else if(userChoice + computerChoice === 'paperscissors') {
        paper.style.animation = 'backgroundLoose 500ms';
      } else {
        scissors.style.animation = 'backgroundLoose 500ms';
      }
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      gameplay.innerHTML = `It was a draw`;
      if(userChoice + computerChoice === 'rockrock') {
        rock.style.animation = 'backgroundDraw 500ms';
      } else if(userChoice + computerChoice === 'paperpaper') {
        paper.style.animation = 'backgroundDraw 500ms';
      } else {
        scissors.style.animation = 'backgroundDraw 500ms';
      }
      break
  }
}

const printResult = (setScorePlayer, scorePlayer, playerChoice, opponentChoice ) => {
  scorePlayer.innerHTML = setScorePlayer;
  gameplay.innerHTML = `${playerChoice} beats ${opponentChoice}`;
}
