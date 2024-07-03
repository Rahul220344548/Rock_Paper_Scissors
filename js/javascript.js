let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";
    let prob = Math.random();
    if (prob > 0 && prob < 0.333) {
        return console.log(choice1);
    }
    else if (prob > 0.333 && prob < 0.666) {
        return console.log(choice2);
    } else {
        return console.log(choice3);;
    }

}

// getComputerChoice();

function getHumanchoice() {

    let choice = prompt("rock (1) , paper (2) , scissors (3) ? choose an option: ");
    return choice;
    
}

// getHumanchoice();

function playRound(humanChoice, computerChoice) {

    // humanChoice.toLowerCase();

    return console.log(humanChoice.toLowerCase());
}

const humanSelection = getHumanchoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)