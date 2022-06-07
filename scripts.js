//Array with game pieces
const ITEMS = ['rock', 'paper', 'scissors'];

//Computer player chooses game piece
let computerPlay = ITEMS[Math.floor(Math.random()*ITEMS.length)];


//Play a round of the game
/*
let playerSelection = 'rock';
*/
const computerSelection = computerPlay;

//playerSelection input function
let playerSelection = prompt(String);

//switch function to announce playerSelection
switch(playerSelection) {
    case 'rock':
        alert("Player chooses Rock!");
        break;
    case 'paper':
        alert("Player chooses Paper");
        break;
    case 'scissors':
        alert("Player chooses Scissors!");
        break;
}

function playRound(playerSelection, computerSelection) {

    //if both players choose same item return 'try again'
    if (playerSelection == computerSelection) {
        return('Try again!');
    } //if player choose 'rock' and computer choose 'paper' return 'game over'
    else if (computerSelection == 'paper') {
        return('Game over');
    } //if player chooses 'rock' and comptuer choose 'scissors' return 'You win!'
    else if (computerSelection == 'scissors') {
        return('You win!');
    }

}
console.log(playRound(playerSelection, computerSelection));