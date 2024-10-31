let computerScore = 0;
let humanScore = 0;
let round = 0
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
function getHumanChoice(choice)
{

    if (choice.toUpperCase() == 'ROCK')
        return "rock";
    else if(choice.toUpperCase() == 'PAPER')
        return 'paper';
    else if(choice.toUpperCase() == 'SCISSORS')
        return "scissors";
}


let playRound = function(humanChoice, computerChoice) {

    whowon = document.querySelector("#whowon")
    if (humanChoice == computerChoice && humanChoice!=0 &&computerChoice != 0)
    {
        whowon.textContent = "It is a draw"
    }
    else{
        if(humanChoice == "paper" && computerChoice == "rock") {
            whowon.textContent = "You win, paper beats rock";
            humanScore++;
        }
        else if(humanChoice == "rock" && computerChoice == "scissors") {
            whowon.textContent = "You win, rock beats scissors";
            humanScore++;
        }
        else if(humanChoice == "scissors" && computerChoice == "paper") {
            whowon.textContent = "You win, scissors beat paper";
            humanScore++;
        }
        else {
            whowon.textContent = "You lose!";
            computerScore++;
        }        
    }
    round += 1;
    printRound();
    printScore();
    
}

function printRound()
{
    const noround = document.querySelector("#noRound");
    noround.textContent = `Round n° ${round}`
}
function printScore()
{
    scores = document.querySelector("#score");
    scores.innerText = `
    Human : ${humanScore}
    Computer:${computerScore}`
}

function playGame()
{
    printRound()
    printScore();
    const gameMenu = document.getElementById("game")
    gameMenu.addEventListener('click', event => {
        if(round < 5)
        {
            
            const mtarget = event.target;
            switch (mtarget.id)
            {
                case "rock":
                    playRound(getHumanChoice('rock'), getComputerChoice(3));
                    break;
                case "paper":
                    playRound(getHumanChoice('paper'), getComputerChoice(3));
                    break;
                case "scissors":
                    playRound(getHumanChoice('scissors'), getComputerChoice(3));
                    break;
            }
        }
        if (round == 5)
        {
            winner = document.querySelector("#winner");
            if(humanScore < computerScore)
                winner.textContent = "YOU LOSE"
            else
                winner.textContent = "YOU WON"

            round = 0
            computerScore = 0;
            humanScore = 0;
        }});
    
}



document.addEventListener("DOMContentLoaded", () => {
    
        playGame();
    });
