const ITEMS = ['rock', 'paper', 'scissors'];
const itemSTRING = ITEMS.join(' ').toLocaleLowerCase();

let computerPlay = ITEMS[Math.floor(Math.random()*ITEMS.length)];
console.log(computerPlay);

function playerSelection(ITEMS) {
    let input = prompt(`Please choose an item ${ITEMS}.`);
    let choice = input.toLocaleLowerCase();
    //make case in sensitive
    if (choice) {
        choice === itemSTRING;
        choice.localeCompare(itemSTRING, undefined, {sensitivity: 'base' });
        
    }
      
    console.log(itemSTRING)
    //compare player choice to ITEMS
    if (itemSTRING.includes(choice)) {
        console.log(`You chose ${choice}`);
    } else {  
        console.log(`${choice} is not an item, please try again`);
        playerSelection(ITEMS);
    } 
    }

playerSelection(ITEMS);