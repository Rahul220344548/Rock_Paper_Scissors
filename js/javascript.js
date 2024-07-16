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
    if (prob < 1/3) {
        return choice1;
    }
    else if (prob < 2/3) {
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
                computerScore = computerScore + 1;
                const rockLose = document.createElement('h3');
                rockLose.textContent = " You lose! Paper beats Rock ";
                newDiv.appendChild(rockLose);
                break;
            }
            else if (computerChoice == "scissors") {
                humanScore = humanScore + 1;
                const rockWin = document.createElement("h3");
                rockWin.textContent = " You Win! Rock beats scissors ";
                newDiv.appendChild(rockWin);
                break;
            } else {
                const rockDraw = document.createElement("h3");
                rockDraw.textContent = " Draw! No Winner ";
                newDiv.appendChild(rockDraw);
                break;
            }
        
        case "paper":
            if (computerChoice == "rock") {
                humanScore = humanScore + 1;
                const paperWin = document.createElement("h3");
                paperWin.textContent = " You Win! Paper beats Rock ";
                newDiv.appendChild(paperWin);
                break;
            }
            else if (computerChoice == "scissors") {
                computerScore = computerScore + 1;
                const paperLose = document.createElement("h3");
                paperLose.textContent = " You lose! Rock beats Paper "
                newDiv.appendChild(paperLose);
                break;
            } else {
                const paperDraw = document.createElement("h3");
                paperDraw.textContent = " Draw! No Winner ";
                newDiv.appendChild(paperDraw);
                break;
            }
        
        case "scissors":
            if (computerChoice == "rock") {
                computerScore = computerScore + 1;
                const scissorsLose = document.createElement("h3");
                scissorsLose.textContent = " You Lose! Rock beats Scissors ";
                newDiv.appendChild(scissorsLose);
                break;
            }
            else if (computerChoice == "scissors") {
                const scissorsDraw = document.createElement("h3");
                scissorsDraw.textContent = " Draw! No Winner ";
                newDiv.appendChild(scissorsDraw);
                break;
            } else {
                humanScore = humanScore + 1;
                const scissorsWin = document.createElement("h3");
                scissorsWin.textContent = " You Win! Scissors beats pape ";
                newDiv.appendChild(scissorsWin);
                break;
            }
        default:
            console.log("end");
            break;
    }

 
}

const buttons= document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.id;
        playRound(value, computerSelection = getComputerChoice());

        const scores = document.createElement("h5");
        scores.textContent = " Human Score : " + humanScore + " Computer Score: " + computerScore;
        scores.style.color = "blue";
        newDiv.appendChild(scores);

        if (humanScore >= 5 || computerScore >= 5 ) {
            const winner = document.createElement("h3");
            winner.textContent = " Human Score : " + humanScore + " Computer Score: " + computerScore;
            winner.style.color = "red";
            newDiv.appendChild(winner);
            if (humanScore >= 5) {
                alert("You Win! "+ " Human Score : " + humanScore + " Computer Score: " + computerScore );
                setTimeout(() => window.location.reload(), 100);
            } else {
                alert("Computer Wins! "+ " Human Score : " + humanScore + " Computer Score: " + computerScore)
                setTimeout(() => window.location.reload(), 100);
            }            
        }
    });
});

const body = document.querySelector("body");
const newDiv = document.createElement("div");
body.appendChild(newDiv);
