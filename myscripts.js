
// TODO: search up what Math.random does 0 - 1 (non inclu) * 3

/*function computerPlay() {
    let handRandom = Math.floor((Math.random() * 3) +1)

    if (handRandom === 1) {
        return "Rock";
    } else if (handRandom === 2) {
        return "Paper";
    } else { 
        return "Scissors";
    }
}

console.log(computerPlay()) */

//make switch statement

function computerPlay() {
    let handRandom = Math.floor((Math.random() * 3) + 1)
    let test = ''
    switch (handRandom) {
        case 1:
            test = 'Rock';
            break;
        case 2:
            test = 'Paper';
            break;
        case 3:
            test = 'Scissors'
            break;
        default:
            console.error("Should not have hit here");
            break;
    }

    return test
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "You tied!";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")) {
        userScore += 1;
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!`
    } else {
        computerScore += 1;
        return `You Lose! ${playerSelection.toLowerCase()} loses to ${computerSelection.toLowerCase()}!`
    }

}



// console.log(playRound("sCISSors", computerPlay()))
/*const a = "rocK";
const b = computerPlay();
console.log(playRound(a, b));*/

let userScore = 0;
let computerScore = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick a move.");
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
        console.log("your score = " + userScore);
        console.log("Computer's score = " + computerScore);
    }
}
function winCond() {
    if (userScore > computerScore) {
        return "Player wins";
    } else {
        return "Computer wins";
    }
}
game()