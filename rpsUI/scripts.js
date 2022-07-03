
//score
let playerScore = 0;
let comScore = 0;

let playerSelection;
let computerSelection;

let buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', btn));  
  
function btn() {
    playerSelection = this.name;
    computerSelection = computerPlay();
    buttons.onclick = playRound(playerSelection, computerSelection);
    if(playerScore === 5 || comScore === 5) {
        gameOver(playerScore, comScore);
        return;
    }
    return console.log(playerSelection + ' test btn');
    }
console.log(playerSelection + ' player test');


//JS UI elements
const container = document.querySelector('#container');
const gameUI = document.createElement('div');
    gameUI.classList.add('gameUI');
    gameUI.textContent = 'Play Game';
    container.appendChild(gameUI);

//computer chooses random item
function computerPlay() {
    let x = Math.floor((Math.random() * 3));
        
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
function playRound() {
   
   //if player and computer choose same item
   if (playerSelection === computerSelection) {
        console.log(`You tied!`);
        result = 'tied';
        playerScore;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result;
   }
    //if player chooses rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You won! Rock beats Scissors.`)
        result = 'win';
        playerScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(`You lost! Paper beats Rock.`);
        result = 'lose';
        comScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result;
    }

    //if player chooses paper
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You won! Paper beats Rock.`)
        result = 'win';
        playerScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You lost! Scissors beats Paper.`);
        result = 'lose';
        comScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result;
    }

    //if player chooses scissors
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log(`You won! Scissors beats Paper.`)
        result = 'win';
        playerScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lost! Rock beats Scissors.`);
        result = 'lose';
        comScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result;
    }   
}

//playRound(playerSelection, computerSelection);

/*
// game function loops through playRound for 5 rounds
function game() {
    //for (let round = 2; round <= 5; round++) {
        let result;

        if (playerScore == 5 || comScore == 5) {
            gameOver(playerScore, comScore);
        }
        if (result == 'win') {
        //input = prompt('Round ' + round + ': Choose Rock, Paper or Scissors!');
        playerSelection = btn; //playerInput(input);
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else if (result == 'lose') {
        //input = prompt('Round ' + round + ': Choose Rock, Paper or Scissors!');
        playerSelection = btn; //playerInput(input);
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else if (result == 'tied') {
        //input = prompt('Round ' + round + ': Choose Rock, Paper or Scissors!');
        playerSelection = btn; //playerInput(input);
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection); 
    }   

    
    }console.log( ' game test')
game(); 
*/


//declares winner with final score
function gameOver(playerScore, comScore) {
    if(playerScore == 5 || comScore == 5) {
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = true;
        };
        console.log('disable test');
    }
    if (playerScore > comScore) {
        console.log('You won!' + '\n' + 'Final score is:' + '\n' +  'Player: ' + playerScore + '\n' + 'Computer: ' + comScore);
        return;
    } else if (comScore > playerScore) {
        console.log('You lost!' + '\n' + 'Final score is:' + '\n' + 'Player: ' + playerScore + '\n' + 'Computer: ' + comScore);
        return;
    } else if (playerScore == comScore) {
        console.log('You tied!' + '\n' + 'Final score is:' + '\n' + 'Player: ' + playerScore + '\n' + 'Computer: ' + comScore);
        return;
    }
}
//gameOver(playerScore, comScore);

function playAgain() {
    let playAgainDiv = document.createElement('div');
    let playAgainBtn = document.createElement('button') 
    playAgainDiv.appendChild(playAgainBtn);
    playAgainBtn.textContent = 'Play Again?';

    playAgainBtn.onclick = function(){ 
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = false;
    } playerScore = 0; 
        comScore = 0;
    console.log(playerScore + ' plScore test' + comScore + ' comScore test');
    };
    
    container.appendChild(playAgainDiv);
}
playAgain();



