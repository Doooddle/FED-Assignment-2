
// Selecting the HTML elements and initializing variables
var temp = document.querySelector('.time');
 	var button = document.querySelector("button");
 	var words = document.querySelector(".words");
 	var timerDiv = document.querySelector(".time");
 	var scoreDiv = document.querySelector(".score");
 	var points = 0;
 	var spans;
 	var typed;
 	var seconds;
	




 var list = ['Hello'];     // Used to intialize the words list

 // Function to fetch words from the API
function fetchWords() {
    fetch('https://random-word-api.vercel.app/api?words=50&type=uppercase&alphabetize=true')              // Retrieves 50 words from Api that are uppercase and alpabetize
        .then(response => response.json())
        .then(data => {
            list = data;  
            console.log(list);  // Log the list to the console
        })
        .catch(error => console.error('Error:', error));
}

// Call the fetchWords function when the page loads
window.onload = fetchWords;
  


// Function to start the countdown
 	function countdown() {
 		points = 0;
 		var timer = setInterval(function(){   // Starts a timer that runs every second
 			button.disabled = true;
    		seconds--;
    		temp.innerHTML = seconds;
    		if (seconds === 0) {
    			alert("Game over! Your score is " + points);
    			scoreDiv.innerHTML = "0";  // Resets the score display
    			words.innerHTML = "";     // Clears the words
    			button.disabled = false;
    			clearInterval(timer);    // Stops the timer
    			button.disabled = false;	
    		}
 		}, 1000);
  	}


      

// Function to generate a random word
     function random() {
  		words.innerHTML = ""; 
  		var random = Math.floor(Math.random() * list.length);   // Generates a random number
        console.log(random);
  		var wordArray = list[random].split("");      // Splits the selected word into an array of letters
        console.log(wordArray);
  		for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
  			var span = document.createElement("span");
  			span.classList.add("span");
  			span.innerHTML = wordArray[i];
  			words.appendChild(span);
  		}
  		spans = document.querySelectorAll(".span");
  	}
 



  // Add a click event listener to the button
  	button.addEventListener("click", function(e){
		console.log(timeSelect);
		var timeSelect = document.querySelector("#timeSelect");  // Selects the "Difficulty" timer from user input (Default is 15)
    	seconds = parseInt(timeSelect.value);
		timerDiv.innerHTML = seconds;
  		countdown();
  		random();   // Generate a random word
  		button.disabled = true;	  // Disable the button
  	});

// Function to handle typing
  	function typing(e) {
  			typed = String.fromCharCode(e.which);   // Get the typed character
  			for (var i = 0; i < spans.length; i++) {  
  				if (spans[i].innerHTML === typed) { // if typed letter is the one from the word
  					if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
  						continue;
  					} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
  						spans[i].classList.add("bg");
  						break;
  					}
  				}
  			}
  			var checker = 0;
  			for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
  				if (spans[j].className === "span bg") {
  					checker++;
  				}
  				if (checker === spans.length) { // if so, animate the words with animate.css class

  					words.classList.add("animated");
  					words.classList.add("fadeOut");
  					points++; // increment the points
  					scoreDiv.innerHTML = points; //add points to the points div
  					document.removeEventListener("keydown", typing, false);
  					setTimeout(function(){
  						words.className = "words"; // restart the classes
  						random(); // give another word
  						document.addEventListener("keydown", typing, false);
  					}, 400);
  				}

  			}
  	}
// Add a keydown event listener
  	document.addEventListener("keydown", typing, false);