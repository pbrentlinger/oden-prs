// [0]Rock is > Scissors, [1]Scissors is > Paper, [3] Paper is > Rock
// computer selects one of the three
// player types one of the three
// set player input to lowercase
// check input is valid against possible list of inputs

const rps = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
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

function getScore(){
    return `Current score: \n Computer: ${computerScore} \n You: ${playerScore}`;
}

function getComputerChoice(){
    return rps[Math.floor(Math.random()*rps.length)];
}

function getPlayerChoice(){
   let playerSelection = window.prompt("Do you want to choose: Rock, Paper, or Scissors?").toLocaleLowerCase();

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
        return playerSelection;
    } else if (playerSelection === null) {
        alert('Good bye.');
    } else {
        alert('invalid input try again');
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock'
    ){
        computerScore += 1;
        let score = getScore();
        return `You lose! ${computerSelection} beats ${playerSelection}!\n` + score;
    } else if (playerSelection === computerSelection){
        let score = getScore();
        return "You tie! Try again.\n" + score;
    }
    else {
        playerScore += 1;
        let score = getScore();
        return `You win! ${playerSelection} beats ${computerSelection}!\n` + score;
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    let score = getScore();
    if (playerScore > computerScore){
        console.log(`You won!\n` + score);
    } else if (playerScore === computerScore){
        console.log("Tie set, better luck next time\n" + score);
    } else {
        console.log("You lose!\n" + score);
    }
}

game();
