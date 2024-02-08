# EduLand Educational Website Project (FED Assignment 2) By Danish and Garrett #


User’s goal:
Unleash student's inner word wizard: Master the art of vocabulary through captivating challenges, unlocking new words with every victory and feeling the exhilarating rush of linguistic growth.

Website's goal:
Transform learning from a chore into a thrilling adventure. The Website aims to Ignite a passion for words by weaving exciting game mechanics with language acquisition, empowering students to conquer vocabulary challenges with smiles.

## Design Process ##

This website is designed for students seeking to learn through the use of interactive and fun games. The users want to play games that will allow then to learn more words and increase their vocabulary. The project aims to provide a user-friendly and interactive platform that meets these needs and establishes the goal of the website, which is to educate student through interactive and fun games.


User Stories:
 - As a student, I want to Play engaging word games that challenge my vocabulary and spelling skills. (e.g., exciting typing races, hangman game that challenges student on new words)

 - As a parent, I want to ensure that my son would understand the new words that they would learn through the website. (e.g., built in dictionary so that students can discover new words and their meanings easily)

 - As a student, I want to be continously learning and ensure that I will learn something new everyday. (e.g., word of the day ability via API)

### Wireframe ###

- The wireframe shows our intital idea on designing our website. [Wireframe](https://xd.adobe.com/view/30e21a27-e5c4-49e8-8031-d41c51f639f9-65b1/)



## Features ##


1. ### Navigation Bar (Javascript)
    - This feature utilizes Javascript.
    - Javascript Implementation (nav.js)
        - Toggles responsive view: On-click, responsive view of navigation bar will slide into frame.
        - Toggles menu: On-click, hamburger menu will be replaced with an 'X', representing close.
        - Blurred screen: Aids users to focus on menu across the various pages.

2. ### Home Page

    - ### Word of the Day Implementation (API & Javascript)

        -  This feature utilizes both API and Javascript. 
        - API Implementation
            -  Utlizes two APIs Heroku Random Word API and Dictionary API. We retrieve a random word from Random Word Api. This word is then used to fetch defintions and the type of word from the Dictionary API.
        - Javascript Implementation (randomword.js)
            - Based on the data retrieved from the APIs it is then displayed on to the page.

    - ### Carousel Implementation (Bootstrap)
        - This feature ultilizes bootstrap.
        - Carousel component in bootstrap creates a carousel to display the featured games section of the homepage
            - Automatic sliding: Every few seconds when the cursor is not on the carousel, it will slide to the next page.
            - Responsive: Carousel will resize itself as page size decreases.

3. ### Games Page

    - ### Typing Game (API & Javascript & Lottie)

        - This feature utlizes API, Javascript and Lottie.
        - API Implementation
            - Utilizes Vercel Random Word API, where we retrieve 50 random words, that are uppercase and alphabetized, adding it to a list, which would be used for the typing game.
        - Javascript Implementation (typinggame.js):
            - Difficulty: Players are given a choice in the difficulty, this is in the form of 15,30,45,60 seconds as the difficulty level. The harder the difficulty, the less the time given.
            - Random word generation: Selected word to be typed in the game is randomzed based on the number of words in the list, in this case 50.
            - Keystroke detection: Tracks player input and highlights matching letters, providing visual feedback and a sense of progress. (span)
            - Scorekeeping: Tracks correctly typed words and displays the player's score, motivating them to improve their performance. A pop up message is shown when the countdown ends.
            - Animated word fading: Adds a visual flourish to the game, making it more visually appealing and rewarding for players.
        - Lottie Animation Implementation (preloader.js)
            - While waiting for the page to load, we utilised a lottie animation that vanishes after 3 seconds.
        - Instructions are added to the game ensuring that users will understand how to play it.


    - ### Hangman Game (Javascript & Lottie & API)

        - This feature utlizes API, Javascript and Lottie.
        - Javascript Implementation (hangman.js)
            - Hangman visuals: Displays an evolving hangman image as players make incorrect guesses, creating a sense of urgency and engagement. If a user inputs a wrong character, a new hangman visual is shown.
            - Word selection: Randomly chooses a word from a list, ensuring a different challenge each time. The words are randomly selected from the hangman-wordlist.js.
            - Hint system: Provides a helpful hint to guide players towards the correct word. The hints are randomly selected from the hangman-wordlist.js.
            - Letter guessing: Allows players to click on keyboard buttons to guess letters. We utilized ASCII to convert the numbers to keys.
            - Guess tracking: Highlights correctly guessed letters within the word and keeps track of wrong guesses. The player is given 6 tries to guess the word, this is displayed on the page.
            - Game over scenarios: Displays a modal with a victory or loss message, along with the correct word, at the end of each game, after 6 wrong tries.
            - Play again option: Offers a convenient button to initiate a new game. The games is then restarted and a new word and hint is shown. The hangman picture changes to the original hangman back.
        - API Implementation (hangman-wordlist.js)
            - The words and hints(defintion) are retrieved from 2 APIs (I only used APIs that are free and did not require a key.) After retrieving a word from the first API, it retrieves the definition from the second API. The code is recursive because sometimes the dictionary API did not have the defintion, therefore had to retrieve again. This is done so until the list has 20 words retrieved from the APIs.
        - Lottie Animation Implementation (preloader.js)
            - While waiting for the page to load, we utilised a lottie animation that vanishes after 3 seconds.
        - Instructions are added to the game ensuring that users will understand how to play it.

    - ### Dictionary (API & Javascript & Lottie)

        - This feature utlizes API, Javascript and Lottie.
        - API Implementation
            - Inputed word is used to retrieve data from the Dictionary API. If the data is available we would retrieve its defintion, sound (how to pronounce the word) and example on how to use the word.
        - Javascript Implementation (dictionary.js)
            - Word search: Allows users to type in a word and view its definition, part of speech, phonetic transcription, and an example sentence.
            - Audio pronunciation: Plays an audio clip of the word's pronunciation (if available from the API).
            - Error handling: Displays an error message if the word is not found or if there's an issue fetching data.
            - User-friendly interface: Presents information in a clear and readable format, with a dedicated button to play pronunciation audio.
        - Lottie Implementation
            - Before page loads, a lottie animation plays for 3 seconds.
        - Instructions are added to the page ensuring that users will understand how to play it.

    - ### Number Guessing Game (Javascript & Lottie)
        - This feature utlizes Javascript and Lottie.
        -Javascript Implementation (numberguessing.js)
            - Random Number Generation: When page is loaded, a random number between 1 and 1000 is chosen randomly.
            - Hint system: Higher or lower message is given when number is inputted.
            - Guess tracking: Each round, the user is given 10 guesses to try to pinpoint the correct answer, if inputted answer is wrong, guessing chance is decreased.
            - Game Over: When answer is inputted correctly or the user runs out of guessing attempts, either a victory or a loss message is shown.
            - Restart button: Restart button is implemented when game is over, 'check' button becomes 'restart' button.
        - Lottie Animation Implementation (preloader.js)
            - While waiting for the page to load, we utilised a lottie animation that vanishes after 3 seconds.
        - Instructions are added to the game ensuring that users will understand how to play it.

4. ### About Page

    - ### About Us Section (Lottie Implementation)
        - This section explains the reason for the website and why it is set up. It is seperated into 3 sections, with each section having a lottie animaton which would animate when hovered.
    - ### Contact Us Form (API)
        - The user will input name, email and message into the form, The form will then utilize Formspree API to send the data to the Formspree database for the owner to see the information. A pop up message is then shown.

5. ### Login Page

    - ### Login Form (Javascript)
        - The user is able to input their email and password into the form. There is a clickable checkbox if user wants the website to "Remember me". Once user presses Login button, a pop up message is then shown. There is also a clickable "Register" so that the page changes to Registration Form. This is done so by making the wrapper active.
    - ### Register form (Javascript)
        - The user is able to input their username, email and password into the form. There is a clickable checkbox if user wants the website to "Agree to the terms & Conditions". Once user presses Register button, a pop up message is shown. There is also a clickable "Login" so that the page changes to Login Form. This is done so by making the wrapper unactive.

6. ### Responsive Web Design

    - The navigation bar will adjust to a Hamburger Menu, in top down design, when the screen is less than 35rem, making it easier for users to go to other sections.
    - In the Home Page, the 'Featured Games' carousel will resize itself to fit the frame, and descriptive text will be removed to aid visibility

    - In the Games Page, the games will adjust to a top down design, 1 game stacked on each other, instead of 3 side by side each other.
    - In the About Us Section, the 3 sections explaining the about us, will be stacked on top of each other, when the screen become smaller.

### Javascript Features (Explained in-depth above)
 1. nav.js (Used to improve the functionality of the navbar.)
 2. randomword.js (Uses API to retrieve a word and its definition.)
 3. message.js (Used to show pop up message after submitting a form.)
 4. typinggame.js (Uses API to retrieve words for the typing game, and used to implement the functions of the typing game.)
 5. hangman.js (Used to play the Hang Man Game.)
 6. hangman-wordlist.js (Uses API to retrieve word and hint, into a list.)
 7. dictionary.js (Used API to retrieve the defintions of the word.)
 8. numberguessing.js (Used to play the number guessing game.)
 9. login.js (Used to change the form, from login to register and vice versa.)
 10. preloader.js (Used to create loading screen for lottie animation.)


### API Features (Explained in-depth above)
 1. Heroku Random Word API (Used in Word Of The Day Implementation)
 2. Dictionary API (Used in Word Of The Day Implementation and Dictionary Implementation)
 3. FormSpree API (Used in Contact Us Form Implemenation)
 4. Vercel Random Word API (Used in Typing Game Implementation)


### Lottie Implementation (Explained in-depth above)
 1. Lottie animates when hovered. (Used in about us section)
 2. Lottie animation used as loading screen before page loads fully. (Used in Hangman Game, Typing Game, Number Guessing and Dictionary)

### Features to Implement in Future
1. Track score of students.
2. Leaderboard showing highscores.


## Technologies Used ##

- [Visual Studio Code](https://code.visualstudio.com/)
    - The project uses **Visual Studio Code** as its IDE.
- [HTML](https://html.spec.whatwg.org/)
    - The project mainly uses **HTML** for making the website design.
- [CSS](https://www.w3.org/TR/CSS/#css)
    - The project uses **CSS** to stylize the website.
- [JSS](https://262.ecma-international.org/5.1/)
    - The project uses **JS** to enhance the functionality of the website.
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to implement carousel and stylize the website.
- API
    - The project uses **API** to enhance the functionality of the website.
- [Lottie](https://lottiefiles.com/)
    - The project uses **Lottie** to enhance the visualization of the website.
- [AdobeXD](https://helpx.adobe.com/support/xd.html)
    - The project uses **AdobeXD** in creating the wireframes for the website.
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google Fonts** to enhance the visualization and styling of the text in the website.
- [JShint](https://jshint.com/), [Jigsaw](https://jigsaw.w3.org/css-validator/), [w3c](https://validator.w3.org/)
    - The project uses the above code validators to ensure that the project is error free.



## Testing ##
 1. Navigation Bar
    - When a user clicks a chosen section (Home, Game, About, Login), the page changes to the chosen section.
    - When a user has a smaller screen, the navbar adjusts to a hamburger menu.
 2. Featured Games Carousel
    - When cursor is not placed over carousel, carousel enables auto-sliding capability.
    - When a user presses the arrows symbolizing back and forth, it will slide to the next page.
    - When a user presses the game buttons, it will redirect them to that respective game.
 2. Typing Game
    - When a user presses the start button, a word shows up and the countdown starts.
    - As the user types, the word highlights the typed key, highlighting to red.
    - For each correct typed answer, the score adds up by one.
    - When the game ends, a pop up message shows up, showing the score of the user.
    - When a user changes the difficulty of the game, the timer changes to the appropriate time. The harder the difficulty the less the time.
 3. Hangman Game
    - When a user presses a key, the button changes to a greyish colour, showing that the button is pressed already.
    - When a user presses the right key, the character is shown in the word area.
    - When a user presses the wrong key, the hangman changes image, the number of incorrected guesses add up.
    - When a user has exceeded the maximum of incorrect guesses (6 guesses) the losing gif shows up and the game is restarted.
    - When a user found the word, the winning gif shows up and the game is restarted.
    - When a user loads into the page, the hint is shown, and the lines depicting the number of characters of the word is shown.
 4. Dictionary
    - When a user searches for a word and presses the button, its defintions are shown.
    - When a user searches for a word that is not available, a error message is shown. ("Couldn't Find The Word")
 5. Number Guessing
    - When a user presses a number out of range, guessing chances will not decrease. ("Number is invalid")
    - When a user correctly guesses the correct number, a message of congratulations will be given, and 'check' button will switch to 'restart' button.
    -When a user uses up all their attempts, the correct number will be shown and 'check' button will switch to 'restart' button.
 6. Contact Us Form
    - When a user presses submit button, a pop up message is shown telling them their Query is submitted.
 7. Login Form
    - When a user presses submit button, a pop up message is shown telling them that they are logged in.
 8. Register Form
    - When a user presses submit button, a pop up message is shown telling them that they are registered.
 9. Footer
    - When a user presses the links, it will redirect them to that respective page.



## Credits ##
- The inspiration for the navigation bar is from [KevinPowell](https://www.youtube.com/watch?v=HbBMp6yUXO0&ab_channel=KevinPowell)
- The inspiration for the Typing Game is from [zunit](https://codepen.io/zunit)
- The inspiration for the Hangman Game is from [codingnepal.com](https://www.codingnepalweb.com/)
- The API used are from [Formspree.com](https://formspree.io/), [VercelRandomWordApi.com](https://random-word-api.vercel.app/),[HerokuRandomWordApi.com](https://random-word-api.herokuapp.com/home), [DictionaryApi.com](https://dictionaryapi.dev/).


### Media
- The logo and icons used are from [flaticon.com](https://www.flaticon.com/)
- The hangman images are used from [codingnepal.com](https://youtu.be/hSSdc8vKP1I?si=wGXzVW75S_JZUpBY)
- The Roboto Font is used from [Google Fonts](https://fonts.google.com/specimen/Roboto)


### Acknowledgements
- In creating the Hangman Game, I (Danish) used a youtube tutorial from [codingnepal.com](https://youtu.be/hSSdc8vKP1I?si=wGXzVW75S_JZUpBY) to aid me in creating the concept of the game, however the incorporation of API into the game was created by me.


### Our GitHub Page
- Our Page [Eduland](https://doooddle.github.io/FED-Assignment-2/)

### Our Individual Contributions
- Danish
    1. Word of the day implementation
        - I coded the API implementation in retrieving the word and its defintion recursively from the two APIs.
    2. Typing Game. Coded the entire implementation of the game.
        - I coded the API implementation in order to retrieve words from the API. 50 words would be retrieved and added to the list which is used to play the game.
        - Coded the javascript to play the game, all the features required for the game, the countdown, the random word function to retrieve the word from the list and the Span function where the background colour of the word changes as the user types.
        - Created the design of the game (css).
        - Ensured responsive layout.
    3. Hang Man Game. Coded the entire implementation of the game.
        - Coded the API implementation for the game, where it retrieves a word and its defintion (hint) from the two APIs recursively.
        - Created the design of the game (css).
        - Coded the concept of the game, the keys for the game, the hangman changes each wrong answer, the gifs when the user wins or losses the game.
        - Ensured responsive layout.
    4. Dictionary Implementation. Coded the entire Implemenation of this page.
        - Coded the API Implemenation for the game, retrieves definition from API after user inputs word.
        - Coded the concept of the implementation, showcase its definitions and input error message if word does not exist in dictionary API.
        - Created the design of the game (css).
        - Ensured responsive layout.
    5. About Us Section. Coded the entire implementation for this page
        - Content of the about section, explaining the purpose of the website.
        - Lottie animation in each section.
        - Created the design of the implementation (css).
        - Ensured responsive layout.
    6. Contact Us Form. Coded the entire implementation for this page
        - Coded the API implementation for the form ensuring that data can be sent to the API.
        - Created the design of the implementation (css).
        - Ensured responsive layout.
        - Pop up message when user submits the form.
    7. Login and Registration. Coded the entire implementation for this page
        - Created the design of the implementation (css).
        - Ensured responsive layout.
        - Pop up message when user submits the form.
    8. Lottie Animations
        - Coded the lottie animation used in About Us Section and implementing it.
        - Coded the lottie animation used as Loading Screen before game loads and implementing it.
        - Design the lottie animation, changing the design to fit the design of the page.

- Garrett
    1. 

