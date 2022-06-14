let x = Math.floor((Math.random() * 3));
console.log(x);

let input = prompt(`Please choose Rock, Paper or Scissors.`);

const playerSelection = playerInput(input);

const computerSelection = computerPlay(x);

//capitialize first letter of playerSelection and computerSelection
const capPlay = playerSelection.substring(0,1).toUpperCase()+playerSelection.slice(1);

const capCom = computerSelection.substring(0,1).toUpperCase()+computerSelection.slice(1);

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
function playRound(playerSelection, computerSelection) {
   
     
   //if player and computer choose same item
   if (playerSelection === computerSelection) {
        console.log(`You tied! ${capCom} is the same as ${capPlay}.`);
        result = 'tied';
        return result + console.log(result);
   }
    //if player chooses rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You won! ${capPlay} beats ${capCom}.`)
        result = 'win';
        return result + console.log(result);
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(`You lost! ${capCom} beats ${capPlay}.`);
        result = 'lose';
        return result + console.log(result);
    }

    //if player chooses paper
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You won! ${capPlay} beats ${capCom}.`)
        result = 'win';
        return result + console.log(result);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You lost! ${capCom} beats ${capPlay}.`);
        result = 'lose';
        return result + console.log(result);
    }

    //if player chooses scissors
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log(`You won! ${capPlay} beats ${capCom}.`)
        result = 'win';
        return console.log(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lost! ${capCom} beats ${capPlay}.`);
        result = 'lose';
        return result + console.log(result);
    }   
}
console.log('playround ' + playRound(playerSelection, computerSelection));


function score(result) {
    let playerScore = 0;
    let comScore = 0;

    if (result == 'win') {
        playerScore = playerScore++;
    } else if (result == 'lose') {
        comScore = comScore++;
    } console.log('player score ' + playerScore + ' computer score ' + comScore);
    return;
}
score();

function game(playRound) {
    for ( let round = 0; round < 5; round++) {
        
        console.log('round ' + round);
    }
} 
game(playRound);

