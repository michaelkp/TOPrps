const playerSelection = 'rock';
console.log(playerSelection);
const computerSelection = computerPlay(1, 3);

//computer chooses random item
function computerPlay( min, max) {
   
   let x = Math.floor((Math.random() * max - min) + 1);
   
   
   if (x === 0) {
    console.log('The computer chose Rock!');
} else if (x === 1) {
    console.log('The computer chose Paper!');
} else { 
    console.log('The computer chose Scissors!')
}
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log(`Tied!`);
    } 
}
console.log(playRound(computerSelection, playerSelection));

