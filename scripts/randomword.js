function getRandomWord() {
    fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(data => {
      document.getElementById("word").innerHTML = data[0];   //retrieves word (this api only has a single word)
    })
    .catch(error => console.error('Error:', error));
  }
  
  // Call the function immediately when the script is loaded
  getRandomWord();