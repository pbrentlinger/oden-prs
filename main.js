// [0]Rock is > Scissors, [1]Scissors is > Paper, [3] Paper is > Rock
// computer selects one of the three
// player types one of the three
// set player input to lowercase
// check input is valid against possible list of inputs

const rps = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let maxRounds = 5;

const rock = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;

const paper = `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`;

const scissors = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`
const rpsImages = [rock, paper, scissors];

function getScoreBoard(){
    return `<table class='score_board'>
                <tr>
                    <th>Current score:</th>
                    <td>as of round ${roundCount}</td>
                </tr>
                <tr>
                    <th>Computer:</th>
                    <td>${computerScore}</td>
                </tr>
                <tr>
                    <th>You:</th>
                    <td>${playerScore}</td>
                </tr>
            </table>`;
}

function getComputerChoice(){
    return rps[Math.floor(Math.random()*rps.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock'
    ){
        computerScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!\n`;
    } else if (playerSelection === computerSelection){
        return "You tie! Try again.\n";
    }
    else {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!\n`;
    }
}

function game(playerChoice){
    const results = document.getElementById("results");
    const controls = document.getElementById("gameControls");

    function roundMessage(){
        if (playerScore > computerScore){
            results.insertAdjacentText('beforeend', `\nYou're winning!\n`);
        } else if (playerScore === computerScore){
            results.insertAdjacentText('beforeend',"You're tied, keep going!\n");
        } else {
            results.insertAdjacentText('beforeend',"You're losing!\n");
        }
    }

    function setMessage(){
        if (playerScore > computerScore) {
            results.insertAdjacentText("beforeend", "Congratulations you won this five round match!")
        } else if (playerScore < computerScore) {
            results.insertAdjacentText("beforeend", "Sorry you lost this five round match!")
        } else {
            results.insertAdjacentText("beforeend", "You tied this five round match!")
        }
    }

    if (roundCount <= maxRounds - 1 ){
        roundCount += 1;

        let roundTitle = `<h3>Round #${roundCount}/${maxRounds}</h3>`;

        results.innerHTML = `${roundTitle} 
                 ${playRound(playerChoice, getComputerChoice())}`;

        let score = getScoreBoard();
        results.insertAdjacentHTML('beforeend', score);

        if (roundCount < 5){
            roundMessage();
        } else{
            setMessage();
            const btn = document.createElement("button");
            btn.innerHTML = "Play Again?";
            btn.addEventListener("click", function(){
                playerScore = 0;
                computerScore = 0;
                roundCount = 0;
                results.innerHTML = "Press a button above to play";
                btn.remove();
            });
            controls.insertAdjacentElement("beforeend", btn);
        }
    }
}
