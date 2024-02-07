/*jshint esversion: 6 */ 
const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainingChances = document.querySelector(".chances");

input.focus();

let randomNumber = generateRandomNumber();
let chance = 10;

// Function to generate a random number between 1 and 1000
function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

// Function to update remaining chances display
function updateChancesDisplay() {
    remainingChances.textContent = chance;
}

// Function to check the guess
function checkGuess() {
    let inputValue = parseInt(input.value);
    
    chance--; 

    if (isNaN(inputValue) || inputValue <= 0 || inputValue > 1000) {
        guess.textContent = "Your number is invalid";
        guess.style.color = "#DE0611";
    } else {
        if (inputValue === randomNumber) {
            guess.innerHTML = `<span style="color: green;">Congratulations! You guessed correctly! The correct answer was ${randomNumber}</span> `;
            input.disabled = true;
            checkButton.textContent = "Replay";
            checkButton.removeEventListener("click", checkGuess); 
            checkButton.addEventListener("click", resetGame); 
        } else if (inputValue > randomNumber) {
            guess.textContent = "Your guess is too high";
            guess.style.color = "#DE0611";
        } else {
            guess.textContent = "Your guess is too low";
            guess.style.color = "#DE0611";
        }
    }

    if (chance === 0 && inputValue !== randomNumber) {
        guess.textContent = "You've lost, try again!";
        guess.style.color = "#DE0611";
        guess.textContent += ` The correct answer was ${randomNumber}`;
        checkButton.textContent = "Replay";
        checkButton.removeEventListener("click", checkGuess); 
        checkButton.addEventListener("click", resetGame); 
    }

    input.value = ""; 
    updateChancesDisplay();
}

// Function to reset the game
function resetGame() {
    randomNumber = generateRandomNumber();
    chance = 10;
    guess.textContent = "";
    input.disabled = false;
    input.value = ""; 
    checkButton.textContent = "Submit";
    updateChancesDisplay(); 
    input.focus();
    checkButton.removeEventListener("click", resetGame); 
    checkButton.addEventListener("click", checkGuess); 
}


checkButton.addEventListener("click", checkGuess);
updateChancesDisplay(); 
