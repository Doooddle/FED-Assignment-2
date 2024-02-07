/*jshint esversion: 6 */ 
// Selecting DOM elements for the game interface
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;     // Maximum allowed wrong guesses

const resetGame = () => {
    // Reset game variables
    correctLetters = [];
    wrongGuessCount = 0;

    // Reset UI elements
    hangmanImage.src = "../images/hangman-game-images/images/hangman-0.svg";   // Initial hangman image (without the body)
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");   // Display blank spaces for letters
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);  // Enable all keyboard buttons
    gameModal.classList.remove("show");    // Hide game over modal
};

// Function to select a random word and hint
const getRandomWord = () => {
    // Selecting a random word and hint from the wordList (taken from hangman-wordlist.js)
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; // Set the current word for the game
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();  // Start a new game with the selected word
};


// Function to handle game over scenarios (win or loss)
const gameOver = (isVictory) => {
    // Prepare content for the game over modal
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `../images/hangman-game-images/images/${isVictory ? 'victory' : 'lost'}.gif`;  // Display victory or loss gif
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");   // Show the game over modal
};


// Function to handle letter guesses
const initGame = (button, clickedLetter) => {
    // Check if the guessed letter is in the current word
    if(currentWord.includes(clickedLetter)) {
        // Reveal all occurrences of the letter in the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // Wrong guess: increment wrong guess count and update hangman image
        wrongGuessCount++;
        hangmanImage.src = `../images/hangman-game-images/images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Disabling the clicked button so user can't click again
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;   // Update guess count display

    // Calling gameOver function if any of these condition meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);                 // Game over: loss
    if(correctLetters.length === currentWord.length) return gameOver(true);    // Game over: win
};

// Create keyboard buttons and attach click events
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}


getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);