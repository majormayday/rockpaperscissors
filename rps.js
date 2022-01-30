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
    if (lowerPlayer === lowerComputer){
        return console.log('Draw. Play again.');
    }
    else if (((lowerPlayer == 'rock') && (lowerComputer == 'scissors')) || 
             ((lowerPlayer == 'scissors') && (lowerComputer == 'paper')) ||
             ((lowerPlayer == 'paper') && (lowerComputer == 'rock'))){
                 return console.log(`You win! ${lowerPlayer} beats ${lowerComputer}`);
             }
    else {
        return console.log(`You lose. :( ${lowerPlayer} loses to ${lowerComputer}`);
    }
  }

  function game(){
      for (let i = 0; i < 5;i++) {
          playRound(prompt('Rock, paper, or scissors?'), computerPlay());
      }
      return;
  }
