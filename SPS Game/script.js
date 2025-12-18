let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg2");

const uscore = document.querySelector("#userscore");
const cscore = document.querySelector("#compscore");

// Function to get computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

// Function -> to show winner
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        uscore.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.background = "green";
    } else {
        compScore++;
        cscore.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.background = "red";
    }
}

// Function -> drawGame
const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.background = "grey";
}

// Main Game Function
const playGame = (userChoice) => {
    // Generating computer choice
    const compChoice = genCompChoice();

    // GameWin Logic
    if (userChoice === compChoice) {
        // Calling Function -> drawGame
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

// Function to get the user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
