let x = Math.floor((Math.random() * 3));
console.log(x);

let input = prompt(`Please choose Rock, Paper or Scissors.`);

const playerSelection = playerInput(input);
//console.log('player' + playerSelection);
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
function playRound(computerSelection, playerSelection) {

    const win = `You won! ${capPlay} beats ${capCom}.`;
    const lose = `You lost! ${capCom} beats ${capPlay}.`;
    const tied = `Tied! ${capPlay} and ${capCom} are the same.`;
    //if player and computer choose same item
   if (playerSelection === computerSelection) {
        console.log(tied);
        return;
   }
    //if player chooses rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log(win);
            return;
        } else {
            console.log(lose);
            return;
        }
    }

    //if player chooses paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(win);
            return;
        } else {
            console.log(lose);
            return;
        }
    }

    //if player chooses scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log(win);
            return ;
        } else {
            console.log(lose);
            return ;
        }
    }
}
playRound(computerSelection, playerSelection);

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        playRound(computerSelection, playerSelection);
    }

}
game(playRound);
