let x = Math.floor((Math.random() * 3));
console.log(x);

let input = prompt(`Please choose Rock, Paper or Scissors.`);

const playerSelection = playerInput(input);
console.log('player' + playerSelection);
const computerSelection = computerPlay(x);
//console.log('computer' + computerSelection);

//asks player to choose item
function playerInput() {
    
    if(input.toLowerCase() === 'rock') {
        console.log(`You chose Rock!`);
    } else if (input.toLowerCase() === 'paper') {
        console.log(`You chose Paper!`);
    } else if (input.toLowerCase() === 'scissors') {
        console.log(`You chose Scissors!`);
    } else {
        input = prompt(`Not an item, please choose Rock, Paper or Scissors.`);
        playerInput();
    }
    return input;
}


//computer chooses random item
function computerPlay(x) {
    
    if (x == 0) { 
        x = 'rock';
        //console.log(x);
        console.log('The computer chose Rock!');
        return x;
        
    }  else if (x == 1) {
        x = 'paper';
        ///console.log(x);
        console.log('The computer chose Paper!');
        return x;
        
    }  else if (x == 2) { 
        x = 'scissors';
        //console.log(x);
        console.log('The computer chose Scissors!');
        return x;
          
    }
}
//play a round of the game
function playRound(computerSelection, playerSelection) {

    //tie
   if (playerSelection === computerSelection) {
        console.log(`Tied! ${playerSelection} and ${computerSelection} are the same.`);
        return ;
   }
    //rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
            return;
        } else {
            console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
            return;
        }
    }

    //paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
            return;
        } else {
            console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
            return;
        }
    }

    //scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
            return;
        } else {
            console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
            return;
        }
    }
}
playRound(computerSelection, playerSelection);


