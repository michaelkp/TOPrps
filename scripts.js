//Array with game pieces
const ITEMS = ['rock', 'paper', 'scissors'];

//Computer player chooses game piece
let computerPlay = ITEMS[Math.floor(Math.random()*ITEMS.length)];


//Play a round of the game
/*
let playerSelection = 'rock';
*/

//playerSelection input function
let playerSelection = prompt('Please choose an item: Rock, Paper or Scissors');


//switch function to announce playerSelection
switch(playerSelection) {
    case 'rock':
        console.log("Player chooses Rock!");
        break;
    case 'paper':
        console.log("Player chooses Paper");
        break;
    case 'scissors':
        console.log("Player chooses Scissors!");
        break;
}
const computerSelection = computerPlay;
switch(computerSelection) {
    case 'rock':
        console.log("Computer chooses Rock!");
        break;
    case 'paper':
        console.log("Computer chooses Paper");
        break;
    case 'scissors':
        console.log("Computer chooses Scissors!");
        break;
}

function playRound(playerSelection, computerSelection) {

    //if both players choose same item return 'try again'
    if (playerSelection == computerSelection) {
        return('Try again!') && prompt('Choose again!');
        
    } //if player choose 'rock' and computer choose 'paper' return 'game over'
    else if (computerSelection == 'paper') {
        return('Game over');
    } //if player chooses 'rock' and comptuer choose 'scissors' return 'You win!'
    else if (computerSelection == 'scissors') {
        return('You win!');
    }

}
console.log(playRound(playerSelection, computerSelection));