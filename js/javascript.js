


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

getComputerChoice();