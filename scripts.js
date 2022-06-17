//console.log(computerPlay());
//score
let playerScore = 0;
let comScore = 0;


//ask for player input
let input = prompt(`Please choose Rock, Paper or Scissors.`);
let playerSelection = playerInput(input);
let computerSelection = computerPlay();

//player chooses item
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
function computerPlay() {
    let x = Math.floor((Math.random() * 3));
        console.log(x);

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
        console.log(`You tied!`);
        result = 'tied';
        playerScore;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result + console.log(result);
   }
    //if player chooses rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You won! Rock beats Scissors.`)
        result = 'win';
        playerScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result + console.log(result);
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(`You lost! Paper beats Rock.`);
        result = 'lose';
        comScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result + console.log(result);
    }

    //if player chooses paper
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You won! Paper beats Rock.`)
        result = 'win';
        playerScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result + console.log(result);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You lost! Scissors beats Paper.`);
        result = 'lose';
        comScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result + console.log(result);
    }

    //if player chooses scissors
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log(`You won! Scissors beats Paper.`)
        result = 'win';
        playerScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return console.log(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lost! Rock beats Scissors.`);
        result = 'lose';
        comScore++;
        console.log('The score is Player: ' + playerScore + ' vs. Computer: ' + comScore);
        return result + console.log(result);
    }   
    return playerScore + comScore;
}
console.log('playround ' + playRound(playerSelection, computerSelection) + 'the result is ' + result);


// game function loops through playRound for 5 rounds
function game() {
    for (let round = 2; round < 5; round++) {
        
        if (result == 'win') {
        input = prompt('Round ' + round + ': Choose Rock, Paper or Scissors!');
        playerSelection = playerInput(input);
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else if (result == 'lose') {
        input = prompt('Round ' + round + ': Choose Rock, Paper or Scissors!');
        playerSelection = playerInput(input);
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else if (result == 'tied') {
        input = prompt('Round ' + round + ': Choose Rock, Paper or Scissors!');
        playerSelection = playerInput(input);
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection); 
    }   
} 
}
game();





