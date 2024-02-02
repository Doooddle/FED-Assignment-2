// Base URL for the dictionary API
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// DOM elements
const result = document.getElementById("result");   // Element to display results
const sound = document.getElementById("sound");     // Element to play pronunciation audio
const btn = document.getElementById("search-btn");  // Search button


// Event listener for the search button
btn.addEventListener("click", () => {
    // Get the word to search from the input field
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)                                   // Fetch word data from the API
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>        
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning"> 
                   ${data[0].meanings[0].definitions[0].definition}         
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);    // Set the audio source for pronunciation(Only if api has a sound link)
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;      // If word data is not found
        });
});
function playSound() {           // Function to play the pronunciation audio
    sound.play();
}