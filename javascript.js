function getComputerChoice(max)
{
    let choice =  Math.floor (Math.random() * max);

    if (choice == 0)
        return "rock";
    else if (choice == 1)
        return "paper";
    else
        return "scissors";
}
function getHumanChoice()
{

    let choice = prompt("rock, paper , scissors? ____>", "default")

    if (choice.toUpperCase() == 'ROCK')
        return "rock";
    else if(choice.toUpperCase() == 'PAPER')
        return 'paper';
    else if(choice.toUpperCase() == 'SCISSORS')
        return "scissors";
    else
        return getHumanChoice();
}



let round_count = 0;


function playGame()
{
    let computerScore = 0;
    let humanScore = 0;

    let playRound = function(humanChoice, computerChoice) {
        if (humanChoice == computerChoice)
        {
            console.log("It is a draw")
        }
        else{
            if(humanChoice == "paper" && computerChoice == "rock") {
                console.log("You win, paper beats rock");
            }
            else if(humanChoice == "rock" && computerChoice == "scissors") {
                console.log("You win, rock beats scissors");
            }
            else if(humanChoice == "scissors" && computerChoice == "paper") {
                console.log("You win, scissors beat paper");
            }
            else {
                console.log("You lose!");
            }        
        }
        round_count++;
    };

    if (round_count < 5)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    else{
        if(computerScore < humanScore)
        {
            console.log("YOU WIN THE GAME!!!!!!!!!!");
        }
        else{
            console.log("YOU LOSE THE GAME!!!!!!!!!!");
        }
    }


    return 
}



