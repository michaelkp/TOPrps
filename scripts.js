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
    let won = console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    let lost = console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
    
    //tie
   if (playerSelection == computerSelection) {
       console.log(`You tied!`);
       return;
   }
    //rock
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        //console.log(`You won! Rock beats Scissors.`);
        return won;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        //console.log(`You lost! Paper beats Rock.`);
        return lost;
    }

    //paper
    if (playerSelection =='paper' && computerSelection == 'rock'){
        //console.log(`You won! Paper beats Rock.`);
        return won;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        //console.log(`You lost! Scissors beats Paper.`);
        return lost;
    }

    //scissors
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        //console.log(`You won! Scissors beats Paper.`);
        return won;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        //console.log(`You lost! Rock beats Scissors.`);
        return lost;
    }
}
playRound(computerSelection, playerSelection);


