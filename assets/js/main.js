const title = document.querySelector('#title');
const contentWrapper = document.querySelector('#content-wrapper');
const gameContent = document.querySelector('#game-content');
const roundsElem = document.querySelector('#rounds');
const setRoundsElem = document.querySelector('#set-rounds');

let rounds = 1;

amountRounds = (setRounds) => {
  title.style.animation = 'scaleOut 500ms';
  contentWrapper.classList.add('invisible');
  contentWrapper.classList.remove('visible');
  gameContent.classList.add('visible');
  gameContent.classList.remove('invisible');

  roundsElem.textContent = rounds;
  setRoundsElem.textContent = setRounds;
}