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
        return choice1;
    }
    else if (prob > 0.333 && prob < 0.666) {
        return choice2;
    } else {
        return choice3;
    }

}

function getHumanchoice() {
    let choice = prompt("rock , paper  , scissors  ? Type an option: ");
    return choice;
    
}

function playRound(humanChoice, computerChoice) {

    humanChoice.toLowerCase(); //rock

    switch (humanChoice.toLowerCase()) {

        case "rock":

            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock");
                break;
            }
            else if (computerChoice == "scissors") {
                console.log("You Win! Rock beats scissors");
                break;
            } else {
                console.log("Draw! No Winner");
                break;
            }
        
        case "paper":
            if (computerChoice == "rock") {
                console.log("You Win! Paper beats Rock");
                break;
            }
            else if (computerChoice == "scissors") {
                console.log("You Lose! Scissors beats paper");
                break;
            } else {
                console.log("Draw! No Winner");
                break;
            }
        
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You Lose! Rock beats Scissors");
                break;
            }
            else if (computerChoice == "scissors") {
                console.log("Draw! No Winner");
                break;
            } else {
                console.log("You Win! Scissors beats paper");
                break;
            }
        default:
            console.log("end");
            break;
    }

 
}

const humanSelection = getHumanchoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)