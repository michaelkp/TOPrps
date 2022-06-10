const ITEMS = ['rock', 'paper', 'scissors'];
const itemSTRING = ITEMS.join(' ').toLocaleLowerCase();
/*
const computerPlay = ITEMS[Math.floor(Math.random()*ITEMS.length)];
console.log(computerPlay);
*/
//playerChoice function case insensitivity and make first letter uppercase

function playerSelection(ITEMS) {
    let input = prompt(`Please choose an item ${ITEMS}.`);
    let choice = input.toLocaleLowerCase();
    
    //make case in sensitive
    if (choice) {
        choice === itemSTRING;
        choice.localeCompare(itemSTRING, undefined, {sensitivity: 'base' });   
    }

    //make first letter of choice uppercase
    const playerChoice = choice[0].toUpperCase() + choice.substring(1).toLowerCase();

    //compare player choice to ITEMS
    if (itemSTRING.includes(choice)) {
        console.log(`You chose ${playerChoice}!`);
    } else {  
        console.log(`${playerChoice} is not an item, please try again.`);
        playerSelection(ITEMS);
    } 
}
playerSelection(ITEMS);

//computer chooses item and make it upperCase
function computerSelection(ITEMS) {
    const computerPlay = ITEMS[Math.floor(Math.random()*ITEMS.length)];
    const computerChoice = computerPlay[0].toUpperCase() + computerPlay.substring(1).toLowerCase();
    console.log(`The computer chose ${computerChoice}!`);
    
}
computerSelection(ITEMS);