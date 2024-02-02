/* function getRandomWord() {
    fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(data => {
      document.getElementById("word").innerHTML = data[0];   //retrieves word (this api only has a single word)
    })
    .catch(error => console.error('Error:', error));
  }
  
  // Call the function immediately when the script is loaded
  getRandomWord(); */


// Base URL for the dictionary API
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// DOM elements
const result = document.getElementById("result");   // Element to display results

// Function to get a random word and its definition
function getRandomWordAndDefinition() {
    fetch('https://random-word-api.herokuapp.com/word') // Fetch a random word from the API
        .then(response => response.json())
        .then(data => {
            let word = data[0]; // Get the word
            console.log("Retrieved word: " + word); // Log the word to the console
            fetch(`${url}${word}`) // Fetch the word's definition from the dictionary API
                .then((response) => {
                    if (!response.ok) { // If the response status is not ok (word's definition not found)
                        throw new Error('Word definition not found');
                    }
                    return response.json();
                })
                .then((data) => {
                    result.innerHTML = `
                    <div class="word">
                        <h3>${word}</h3>
                    </div>
                    <div class="details">
                        <p>${data[0].meanings[0].partOfSpeech}</p>        
                    </div>
                    <p class="word-meaning"> 
                        ${data[0].meanings[0].definitions[0].definition}         
                    </p>`;
                })
                .catch(() => {
                    console.log('Word definition not found, fetching a new word...');
                    getRandomWordAndDefinition(); // If word's definition is not found, fetch a new word
                });
        })
        .catch(error => console.error('Error:', error));
}

// Call the function immediately when the script is loaded
getRandomWordAndDefinition();



