function computerPlay()
{
    let computerChoice = getRandomInt(3);
    if (computerChoice === 0) {
        return 'Rock';
    }
    else if (computerChoice === 1){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function playRound(playerSelection, computerSelection) {
     let lowerPlayer = playerSelection.toLocaleLowerCase();
     let lowerComputer = computerSelection.toLocaleLowerCase();
    
    animateSelec(lowerPlayer,lowerComputer);
    
    
     if (lowerPlayer === lowerComputer){
        dialogue.textContent='Draw.'
        return;
    }
    else if (((lowerPlayer == 'rock') && (lowerComputer == 'scissors')) || 
             ((lowerPlayer == 'scissors') && (lowerComputer == 'paper')) ||
             ((lowerPlayer == 'paper') && (lowerComputer == 'rock'))){
                pScore.textContent = parseInt(pScore.textContent) + 1;
                dialogue.textContent='Heck ya nice pick!';
                checkWin();
                return;
             }
    else if (((lowerPlayer == 'scissors') && (lowerComputer == 'rock')) || 
            ((lowerPlayer == 'paper') && (lowerComputer == 'scissors')) ||
            ((lowerPlayer == 'rock') && (lowerComputer == 'paper'))){
                cScore.textContent = parseInt(cScore.textContent) + 1;
                dialogue.textContent='Ouch, keep your head up';
                checkWin();
                return;
    }
  }

  function checkWin(){
    if (parseInt(pScore.textContent) === 5) {
        dialogue.textContent='You Win!';
        disableGame();
        return;
    }
    else if (parseInt(cScore.textContent) === 5){
        dialogue.textContent='Computer Wins :(';
        disableGame();
        return;
    }
  }

  function animateSelec(lowerPlayer, lowerComputer){
    if (lowerPlayer == 'rock') pRock.classList.add('clicked');
    else if (lowerPlayer == 'scissors') pScissors.classList.add('clicked');
    else if (lowerPlayer == 'paper') pPaper.classList.add('clicked');

    if (lowerComputer == 'rock') cRock.classList.add('clicked');
    else if (lowerComputer == 'scissors') cScissors.classList.add('clicked');
    else if (lowerComputer == 'paper') cPaper.classList.add('clicked');

  }
  /*
  function game(){
      for (let i = 0; i < 5;i++) {
          playRound(prompt('Rock, paper, or scissors?'), computerPlay());
      }
      return;
  }
*/
  /* DOM MANIP */

  const pRock = document.querySelector('.pRock');
  const pPaper = document.querySelector('.pPaper');
  const pScissors = document.querySelector('.pScissors');
  const cRock = document.querySelector('.cRock');
  const cPaper = document.querySelector('.cPaper');
  const cScissors = document.querySelector('.cScissors');
  const pScore = document.querySelector('.pScore');
  const cScore = document.querySelector('.cScore');
  const start = document.querySelector('.start');
  const reset = document.querySelector('.reset');
  const dialogue = document.querySelector('.dialogue');

  const rockClick = () => playRound('rock', computerPlay());
  const paperClick = () => playRound('paper', computerPlay());
  const scisClick = () => playRound('scissors', computerPlay());


  function enableGame(){
  resetGame();
  pRock.addEventListener('click', rockClick);
  pPaper.addEventListener('click', paperClick);
  pScissors.addEventListener('click', scisClick);
  pRock.addEventListener('transitionend', removeTransition);
  pPaper.addEventListener('transitionend', removeTransition);
  pScissors.addEventListener('transitionend', removeTransition);
  cRock.addEventListener('transitionend', removeTransition);
  cPaper.addEventListener('transitionend', removeTransition);
  cScissors.addEventListener('transitionend', removeTransition);
  dialogue.textContent='';
  return;
  }

  function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      this.classList.remove('clicked');

  }
  function disableGame(){
    pRock.removeEventListener('click', rockClick);
    pPaper.removeEventListener('click', paperClick);
    pScissors.removeEventListener('click',scisClick);
    dialogue.textContent='Press Start to Begin!'
    return;
  }
  function resetGame(){
      pScore.textContent = 0;
      cScore.textContent = 0;
  }

  start.addEventListener('click', function() {enableGame()});

  reset.addEventListener('click', function() {resetGame()});


