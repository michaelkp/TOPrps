//const playerSelection = 'rock';
//console.log(playerSelection);
//const rock = 0;
//const paper = 1;
//const scissors = 2;
const playerSelection = playerPlay();
const computerSelection = computerPlay(1, 3);

function playerPlay() {
    let input = prompt(`Please choose Rock, Paper or Scissors.`)
    
    if(input.toLowerCase() === 'rock') {
        console.log(`You chose Rock!`);
    } else if (input.toLowerCase() === 'paper') {
        console.log(`You chose Paper!`)
    } else if (input.toLowerCase() === 'scissors') {
        console.log(`You chose Scissors!`)
    } else {
        console.log(`Not an item, please choose Rock, Paper or Scissors.`)
        playerPlay();
    }
}


//computer chooses random item
function computerPlay( min, max) {
   
   let x = Math.floor((Math.random() * max - min) + 1);
   if (x === 0) {
    console.log('The computer chose Rock!');
} else if (x === 1) {
    console.log('The computer chose Paper!');
} else { 
    console.log('The computer chose Scissors!');
}
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log(`Tied!`);
    } else {
        console.log('test');
    }
}
console.log(playRound(computerSelection, playerSelection));

