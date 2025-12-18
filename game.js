// Selecting user options
let userOptions = document.querySelectorAll(".img");

// Array for computer options
let compOpt = ["rock", "paper", "scissors"];

// Win Counter
let count = 1;

// Win text update 
let winText = document.querySelector("h3");

let userScoreCounter = document.querySelector("#uscoreupdate");
let compScoreCounter = document.querySelector("#cscoreupdate");

// Function and Event Listener to get user value
// Fetched value for each button
userOptions.forEach(userOption => {
    // Event listener for buttons
    userOption.addEventListener("click", () => {
        // Fetching option value from the filename itself
        const optVal = userOption.src.split('/').pop().split('.')[0];

        // Fetching computer choice from the options defined in the array above.
        const compVal = compOpt[Math.floor(Math.random() * compOpt.length)];

        // Passing userChoice and computerChoice to gameFunction
        gameFunction(optVal, compVal);
    })
})

// Game function
let gameFunction = (userVal, compVal) => {
    if (userVal === "rock" && compVal === "scissors") {
        winText.style.color = "green";
        winText.innerText = "User Wins";
        userScoreCounter.innerText = Number(userScoreCounter.innerText) + 1;
    } else if (userVal === "paper" && compVal === "rock") {
        winText.style.color = "green";
        winText.innerText = "User Wins";
        userScoreCounter.innerText = Number(userScoreCounter.innerText) + 1;
    } else if (userVal === "scissors" && compVal === "paper") {
        winText.style.color = "green";
        winText.innerText = "User Wins";
        userScoreCounter.innerText = Number(userScoreCounter.innerText) + 1;
    } else if (userVal === compVal) {
        winText.style.color = "black";
        winText.innerText = "Game Draw";
    } else {
        winText.style.color = "red";
        winText.innerText = "Computer Wins";
        compScoreCounter.innerText = Number(compScoreCounter.innerText) + 1;
    }
}