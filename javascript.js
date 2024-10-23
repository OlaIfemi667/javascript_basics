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
    alert("Chose 'r' for rock, 'p' for paper and 's' for scissors");

    let choice = prompt(["____>"], "default")

    if (choice == 'r')
        return "rock";
    else if(choice == 'p')
        return 'paper';
    else if(choice == 's')
        return "scissors";
    else
        return getHumanChoice();
}

getComputerChoice();