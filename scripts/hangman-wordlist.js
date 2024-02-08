/*jshint esversion: 6 */ 
// list of word to be utilised for hangman game, it provides hints too
// API takes time to find words that also have defintions, so I added some filler words first
let wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    }
];

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Function to get a random word and its definition
function getRandomWordAndDefinition(count = 20) {
    if (count === 0) return; // Stop when we've retrieved the desired number of words (20 + 2 filler words)

    fetch('https://random-word-api.herokuapp.com/word') // Fetch a random word from the API
        .then(response => response.json())
        .then(data => {
            let word = data[0]; // Get the word
            fetch(`${url}${word}`) // Fetch the word's definition from the dictionary API
                .then((response) => {
                    if (!response.ok) { // If the response status is not ok (word's definition not found)
                        throw new Error('Word definition not found');
                    }
                    return response.json();  
                })
                .then((data) => {
                    // Add the word and its definition to the wordList
                    wordList.push({
                        word: word,
                        hint: data[0].meanings[0].definitions[0].definition
                    });

                    // Fetch the next word
                    getRandomWordAndDefinition(count - 1);
                })
                .catch(() => {
                    // console.log('Word definition not found, fetching a new word...');
                    getRandomWordAndDefinition(count); // If word's definition is not found, fetch a new word without decrementing the count
                });
        })
        .catch(error => console.error('Error:', error));
}

// Call the function immediately when the script is loaded
// to start fetching 20 words and their definitions
getRandomWordAndDefinition(20);
