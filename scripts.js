let playerScore = 0;
let comScore = 0;

let playerSelection;
let computerSelection;

//JS UI elements
const scoreP  = document.createElement('p');
      scoreP.classList.add('score');

const container = document.querySelector('#container');
const title = document.createElement('div')
      title.classList.add('title');
const titleText = document.createElement('h1');
      titleText.classList.add('titleText');
      titleText.textContent = 'Want to play a game?';
      title.appendChild(titleText);
    
const yesBtn = document.createElement('button');
      yesBtn.id = 'yesBtn';
      yesBtn.textContent = 'Yes!';
      title.appendChild(yesBtn);

const noBtn = document.createElement('button');
      noBtn.id = 'noBtn';
      noBtn.textContent = 'No!';
      title.appendChild(noBtn);

const gameUI = document.createElement('div');
      gameUI.classList.add('gameUI');
      gameUI.appendChild(scoreP);
      
      container.appendChild(gameUI);
      container.insertBefore(title, gameUI);  

function hideGame() {
    gameUI.style.opacity = 0; 
}
hideGame();

function fade() {
        gameUI.style.opacity = 1;
        gameUI.style.transition = ('opacity .2s ease');   
}

function showGame() {
    yesBtn.addEventListener('click', (e) => {
        yesBtn.style.visibility = 'hidden';
        noBtn.style.visibility = 'hidden';
        fade();
    })
    noBtn.addEventListener('click', () => {
        noBtn.onclick = window.open('https://google.com', '_blank')
    })
}
showGame();

function removeTransition(e) {
    if(e){
         //this.classList.remove('gameBtn');
         this.style.transform = 'skew(0deg)';
         this.style.transition = 'transform .02s ease';
         this.disabled = false;
         
    }
 }

const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', btn));

    buttons.forEach(button => button.addEventListener('click', () => {
        button.style.transform = 'skew(10deg)';
        button.style.transition = 'transform .03s ease';
        button.disabled = true;
    }));

    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
    
const gameBtns = document.querySelectorAll('.gameBtn');
      gameBtns.forEach(button => button.addEventListener('click', (e) => {
          roundNum++;
          roundText.textContent = `Round: ${roundNum}!`;
          if(roundNum === 6){
            roundText.style.display = 'none';
        }
      }));
      
const cPlay = document.createElement('div');
      cPlay.setAttribute('id', 'cPlay');

const cText = document.createElement('p');
      cText.setAttribute('id', 'cText');

      cPlay.appendChild(cText);
      gameUI.insertBefore(cText, scoreP);
      gameUI.insertBefore(btns, cText);

 
let roundNum = 1;
const roundText = document.createElement('p');
      roundText.classList.add('round');
      roundText.textContent = `Round: ${roundNum}!`;
      gameUI.insertBefore(roundText, btns);
  
    

function btn() {
    playerSelection = this.name;
    computerSelection = computerPlay();
    this.onclick = playRound(playerSelection, computerSelection)
     if(roundNum <= 5) {
            gameOver(playerScore, comScore);  
        };
    }
    

//computer chooses random item
function computerPlay() {

    let x = Math.floor((Math.random() * 3));

    if (x == 0) { 
        x = 'rock';
        cText.textContent = `The computer chose ${x}.`;
        return x;
    }  else if (x == 1) {
        x = 'paper';
        cText.textContent = `The computer chose ${x}.`;
        return x;
    }  else if (x == 2) { 
        x = 'scissors';
        cText.textContent = `The computer chose ${x}.`;
        return x; 
    }
    const removeCText = document.getElementById('cText');
    removeCText.remove('cText');
}

let result = document.createElement('p');
        result.id = 'result';
        gameUI.insertBefore(result, scoreP);

//play a round of the game
function playRound() {
    
   //if player and computer choose same item
    if (playerSelection === computerSelection) {
        result.textContent = 'You tied!';
        playerScore;
    }
    //if player chooses rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You won! Rock beats Scissors.';
        ++playerScore; 
        //return result;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        result.textContent = 'You lost! Paper beats Rock.';
        ++comScore;
    }
    //if player chooses paper
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You won! Paper beats Rock.';
        ++playerScore;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        result.textContent = 'You lost! Scissors beats Paper.';
        ++comScore;
    }
    //if player chooses scissors
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        result.textContent = 'You won! Scissors beats Paper.';
        ++playerScore; 
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lost! Rock beats Scissors.';
        ++comScore;
    } 
    scoreP.textContent = `The score is Player: ${playerScore} and Computer ${comScore}!`;

}


const final = document.createElement('p');
      final.classList.add('gameOver');
      final.style.whiteSpace = 'pre';
      gameUI.appendChild(final);

//declares winner with final score
function gameOver(playerScore, comScore) {
    if(roundNum === 5) {
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = true;
        };
        btns.style.visibility = 'hidden';
        btns.style.height = '0px';
        scoreP.textContent = '';
    }
    if (roundNum === 5 && playerScore > comScore) {
        final.textContent = `Final score is: \r\n Player: ${playerScore} \r\n Computer: ${comScore}`;
        return;
    } else if (roundNum === 5 && comScore > playerScore) {
        final.textContent = `Final score is: \r\n Player: ${playerScore} \r\n Computer: ${comScore}`;
        return;
    } else if (roundNum === 5 && playerScore == comScore) {
        final.textContent = `Final score is: \r\n Player: ${playerScore} \r\n Computer: ${comScore}`;
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
        return;
    });

    playAgainBtn.addEventListener('click', () => { 
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = false;
            btns.style.visibility = 'visible';
            btns.style.height = 'auto';
            roundText.style.display = 'block';
        };
           
        roundNum = 1;
        roundText.textContent = `Round: ${roundNum}!`;
        
        final.textContent = '';
        cText.textContent = '';
        result.textContent = '';
        
    });

    playAgainBtn.addEventListener('click', () => {
        playAgainBtn.style.display = 'none';
    });
    
    gameUI.appendChild(playAgainDiv);
}
playAgain();


function hidePAbtn(){
    if(roundNum <= 6) {
        document.getElementById('playAgain').style.display = 'none';
    }
};
hidePAbtn();

function showPAbtn() {
    buttons.forEach(button => button.addEventListener('click', (e) => {if (roundNum >= 6){
        document.getElementById('playAgain').style.display = 'inline';
    }}));
}
showPAbtn();


