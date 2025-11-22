let random = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guess");
const submit = document.querySelector("#submit");
const guessSlot = document.querySelector(".preGuesses");
const chances = document.querySelector(".Chances");
const LowOrHi = document.querySelector(".LowOrHi");
const startOver = document.querySelector(".result")
let preGuess = [];
let noGuess = 1;

userInput.focus();

const p = document.createElement("p");

let KEY = true;
if (KEY) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    }
});

function validateGuess(guess) {
    if (isNaN(guess))
        alert("Enter a valid number");
    else if (guess < 0)
        alert("Enter positive number")
    else if (guess > 100)
        alert("Enter number less than or equal 100")
    else {
        preGuess.push(guess);
        if (noGuess === 10) {
            cleanUp(guess);
            displayMessage(`Game Over. Random number was ${random}`);
            endGame();
        }
        else {
            cleanUp(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage("You Guessed The Number");
        endGame();
    }

    else if (guess < random) {
        userInput.focus();
        displayMessage("Number is Low")


    }
    else if (guess > random) {
        userInput.focus();
        displayMessage("Number is High")

    }
}

function cleanUp(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    noGuess++;
    chances.innerHTML = `${11 - noGuess}`;
}
function displayMessage(message) {
    LowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList = "button";
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    KEY = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (e) => {
        random = parseInt(Math.random() * 100 + 1);
        guessSlot.innerHTML = ``;
        preGuess = [];
        noGuess = 1;
        chances.innerHTML = `${11 - noGuess}`;
        userInput.removeAttribute("disabled");
        userInput.focus();
        startOver.removeChild(p);
        displayMessage("");
        KEY = true;
    });
}