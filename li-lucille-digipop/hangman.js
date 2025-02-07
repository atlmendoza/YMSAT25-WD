const wordList = ["smiski", "mofusand", "sonnyangel", "chesca", "lucille","adenosinetriphosphate","popmart"];
let word = wordList[Math.floor(Math.random() * wordList.length)];
let wordDisplay = document.getElementById("wordDisplay");
let wrongGuessesText = document.getElementById("wrongGuesses");
let attemptsLeft = document.getElementById("attemptsLeft");
let alphabet = document.getElementById("alphabet");
let guessedLetters = [];
let wrongLetters = [];
let maxAttempts = 6;

let wrongGuessCount = 0; // Track wrong guesses

function displayWord() {
    let display = word.split("").map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
    wordDisplay.textContent = display;
}

function displayAlphabet() {
    let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.innerHTML = "";
    alphabetArray.forEach(letter => {
        let button = document.createElement("button");
        button.textContent = letter;
        button.addEventListener("click", () => guessLetter(letter));
        alphabet.appendChild(button);
    });
}

function guessLetter(letter) {
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) return;
    
    if (word.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        wrongLetters.push(letter);
        wrongGuessCount++;
        maxAttempts--;
        attemptsLeft.textContent = maxAttempts;
    }
    
    displayWord();
    wrongGuessesText.textContent = wrongLetters.join(", ");
    
    drawHangman(); // Update the hangman drawing
    
    if (maxAttempts === 0) {
        alert("Game Over! The word was " + word);
        resetGame();
    } else if (!word.split("").some(letter => !guessedLetters.includes(letter))) {
        alert("You win! The word was " + word);
        resetGame();
    }
}

function resetGame() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    guessedLetters = [];
    wrongLetters = [];
    wrongGuessCount = 0; // Reset wrong guesses count
    maxAttempts = 6;
    attemptsLeft.textContent = maxAttempts;
    displayWord();
    displayAlphabet();
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for the new game
}

const canvas = document.getElementById("hangmanCanvas");
const ctx = canvas.getContext("2d");

// Function to draw the hangman
function drawHangman() {
    switch(wrongGuessCount) {
        case 1:
            // Draw head
            ctx.beginPath();
            ctx.arc(75, 30, 15, 0, Math.PI * 2, true);
            ctx.stroke();
            break;
        case 2:
            // Draw body
            ctx.beginPath();
            ctx.moveTo(75, 45); 
            ctx.lineTo(75, 90); 
            ctx.stroke();
            break;
        case 3:
            // Draw left arm
            ctx.beginPath();
            ctx.moveTo(75, 60); 
            ctx.lineTo(50, 75); 
            ctx.stroke();
            break;
        case 4:
            // Draw right arm
            ctx.beginPath();
            ctx.moveTo(75, 60); 
            ctx.lineTo(100, 75); 
            ctx.stroke();
            break;
        case 5:
            // Draw left leg
            ctx.beginPath();
            ctx.moveTo(75, 90); 
            ctx.lineTo(50, 120); 
            ctx.stroke();
            break;
        case 6:
            // Draw right leg (full figure)
            ctx.beginPath();
            ctx.moveTo(75, 90); 
            ctx.lineTo(100, 120); 
            ctx.stroke();
            break;
    }
}

// Initialize the game on page load
displayWord();
displayAlphabet();
