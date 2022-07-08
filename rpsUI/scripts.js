let result;
let tied;
let win;
let lose;
//score
let playerScore = 0;
console.log(playerScore + ' test pscore let');
let comScore = 0;

//let score = [playerScore, comScore];
let scoreP  = document.createElement('p');
    scoreP.classList.add('score');
    
   
    
//console.log(score[0] + ' pscore test');

let playerSelection;
let computerSelection;
//JS UI elements
const container = document.querySelector('#container');
const gameUI = document.createElement('div');
    gameUI.classList.add('gameUI');
    gameUI.textContent = 'Play Game';
    
    gameUI.appendChild(scoreP);
    container.appendChild(gameUI);



let buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', btn));  
  
const cPlay = document.createElement('div');
      cPlay.setAttribute('id', 'cPlay');
const cText = document.createElement('p');
      cText.setAttribute('id', 'cText');
        
      cPlay.appendChild(cText);
      gameUI.appendChild(cPlay);

 
let roundNum = 0;
const roundText = document.createElement('p');
      roundText.classList.add('round');
      roundText.textContent = `Round: ${roundNum}!`;

      container.insertBefore(roundText, gameUI);

    console.log(roundNum + ' playR rNum test')
    

function btn() {
    playerSelection = this.name;
    computerSelection = computerPlay();
    buttons.onclick = playRound(playerSelection, computerSelection), ++roundNum;
    roundText.textContent = `Round: ${roundNum}!`;
    
    if(roundNum === 5) {
            gameOver(playerScore, comScore);  
        };
        console.log(roundNum + ' btn test roundNum')
        console.log(playerScore + ' btn test playerscore');
        console.log(comScore + ' btn test comscore');
    //console.log('btn score test ' + score[0] + ' <pscore' + score[1] + ' <comscore');
    //return score = [playerScore, comScore];
    }

//computer chooses random item
function computerPlay() {

    let x = Math.floor((Math.random() * 3));

    if (x == 0) { 
        x = 'rock';
        cText.textContent = `The computer chose ${x}`;
        return x;
    }  else if (x == 1) {
        x = 'paper';
        cText.textContent = `The computer chose ${x}`;
        return x;
    }  else if (x == 2) { 
        x = 'scissors';
        cText.textContent = `The computer chose ${x}`;
        return x; 
    }
    const removeCText = document.getElementById('cText');
    removeCText.remove('cText');
}

//play a round of the game
function playRound() {
 
    
   //if player and computer choose same item
   if (playerSelection === computerSelection) {
        console.log(`You tied!`);
        //round.textContent = 'You tied';
        //result = tied;
        console.log(playerScore + ' tied test')
        playerScore;
      //return score[playerScore, comScore];

        
        //return result;
   }
    //if player chooses rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You won! Rock beats Scissors.`)
        //result = win;
        console.log(playerScore + ' won test')
        ++playerScore;
        
        
        //return result;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(`You lost! Paper beats Rock.`);
        //result = lose;
        console.log(playerScore + ' lose test')
        ++comScore;
        
        
        //return result;
    }

    //if player chooses paper
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You won! Paper beats Rock.`)
        //result = win;
        console.log(playerScore + ' won test')
        ++playerScore;
        
        
        //return result;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You lost! Scissors beats Paper.`);
        //result = lose;
        console.log(playerScore + ' lose test')
        ++comScore;
        
       
        //return result;
    }

    //if player chooses scissors
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log(`You won! Scissors beats Paper.`)
        //result = win;
        console.log(playerScore + ' won test')
        ++playerScore;
        
        //return result;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lost! Rock beats Scissors.`);
        //result = lose;
        console.log(playerScore + ' lose test')
        ++comScore;
        //console.log( 'round score test ' + score);
        
        //return result;
    } scoreP.textContent = `The score is Player: ${playerScore} and Computer ${comScore}!`;

    
}


let final = document.createElement('p');
final.classList.add('gameOver');
gameUI.appendChild(final);

//declares winner with final score
function gameOver(playerScore, comScore) {


    if(roundNum === 5) {
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = true;
        };
        scoreP.textContent = `The final score is Player: ${playerScore} and Computer ${comScore}!`;
    }
    if (playerScore > comScore) {
        final.textContent = `You won! \n Final score is: \n Player: ${playerScore} \n Computer: ${comScore}`;
        return;
    } else if (comScore > playerScore) {
        final.textContent = `You lost! \n Final score is: \n Player: ${playerScore} \n Computer: ${comScore}`;
        return;
    } else if (playerScore == comScore) {
        final.textContent = `You tied! \n Final score is: \n Player: ${playerScore} \n Computer: ${comScore}`;
        return;
    }
}

/*function reset(playerScore, comScore) {
    playerScore === 0;
    comScore === 0;
    console.log(reset + ' reset test')
}*/

function playAgain() {
    let playAgainDiv = document.createElement('div');
    let playAgainBtn = document.createElement('button') 
    playAgainDiv.appendChild(playAgainBtn);
    playAgainBtn.textContent = 'Play Again?';

    playAgainBtn.addEventListener('click', () => {
        playerScore = 0;
        comScore = 0;
        console.log(playerScore + ' ' + comScore + ' pabtn reset test');
        console.log('new game')
        return;
    });

    playAgainBtn.addEventListener('click', () => { 
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = false;
        } 
           
        roundNum = 0;

        roundText.textContent = `Round: ${roundNum}!`;
        //console.log(playerScore + ' plScore test' + comScore + ' comScore test');
        scoreP.textContent = `The score is Player: ${playerScore} and Computer ${comScore}!`;

        final.textContent = '';
        //console.log(score + 'playagain score test')
        //return score;
    });
    gameUI.appendChild(playAgainDiv);
}
playAgain();



