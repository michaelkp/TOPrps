let result;
let tied;
let win;
let lose;
//score
let playerScore = 0;
console.log(playerScore + ' test pscore let');
let comScore = 0;

let scoreP  = document.createElement('p');
    scoreP.classList.add('score');

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
      gameUI.insertBefore(cText, scoreP);

 
let roundNum = 1;
const roundText = document.createElement('p');
      roundText.classList.add('round');
      roundText.textContent = `Round: ${roundNum}!`;
      buttons.forEach(button => button.addEventListener('click', (e) => {
        ++roundNum;
        roundText.textContent = `Round: ${roundNum}!`;
        if(roundNum === 6){
            roundText.textContent = '';
        }
      }));
      

      container.insertBefore(roundText, gameUI);

    console.log(roundNum + ' playR rNum test')
    

function btn() {
    playerSelection = this.name;
    computerSelection = computerPlay();
    buttons.onclick = playRound(playerSelection, computerSelection) 
    
     if(roundNum <= 5) {
            gameOver(playerScore, comScore);  
        };
        console.log(roundNum + ' btn test roundNum')
        console.log(playerScore + ' btn test playerscore');
        console.log(comScore + ' btn test comscore');
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
    let result = document.createElement('p');
        result.id = 'result';
        gameUI.insertBefore(result, scoreP);
    
   //if player and computer choose same item
   if (playerSelection === computerSelection) {
        console.log(`You tied!`);
        result.textContent = 'You tied!';
        
        console.log(playerScore + ' tied test')
        playerScore;
   }
    //if player chooses rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You won! Rock beats Scissors.`)
        result.textContent = 'You won! Rock beats Scissors.';
        console.log(playerScore + ' won test')
        ++playerScore;
        
        
        //return result;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(`You lost! Paper beats Rock.`);
        result.textContent = 'You lost! Paper beats Rock.';
        console.log(playerScore + ' lose test')
        ++comScore;
    }

    //if player chooses paper
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You won! Paper beats Rock.`)
        result.textContent = 'You won! Paper beats Rock.';
        console.log(playerScore + ' won test')
        ++playerScore;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You lost! Scissors beats Paper.`);
        result.textContent = 'You lost! Scissors beats Paper.';
        console.log(playerScore + ' lose test')
        ++comScore;
    }

    //if player chooses scissors
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log(`You won! Scissors beats Paper.`)
        result.textContent = 'You won! Scissors beats Paper.';
        console.log(playerScore + ' won test')
        ++playerScore;
        
        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lost! Rock beats Scissors.`);
        result.textContent = 'You lost! Rock beats Scissors.';
        console.log(playerScore + ' lose test')
        ++comScore;

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

function playAgain() {
    let playAgainDiv = document.createElement('div');
    let playAgainBtn = document.createElement('button') 
    playAgainDiv.appendChild(playAgainBtn);
    playAgainBtn.id = 'playAgain';
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
        
        scoreP.textContent = `The score is Player: ${playerScore} and Computer ${comScore}!`;

        final.textContent = '';
        
    });

    playAgainBtn.addEventListener('click', () => {
        playAgainBtn.style.visibility = 'hidden';
    });
    gameUI.appendChild(playAgainDiv);
}
playAgain();

function hidePAbtn(){
    if(roundNum <= 6) {
        document.getElementById('playAgain').style.visibility = 'hidden';
        console.log('hidden test')
    }
};
hidePAbtn();

function showPAbtn() {
    buttons.forEach(button => button.addEventListener('click', (e) => {if (roundNum >= 6){
        document.getElementById('playAgain').style.visibility = 'visible';
        console.log( 'visible test')
    }}));
}
showPAbtn();


