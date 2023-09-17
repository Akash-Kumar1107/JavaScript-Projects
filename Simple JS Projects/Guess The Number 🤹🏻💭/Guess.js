const randomNum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []  //save user input of guess
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)     // now getting userinput
        console.log(guess);
        validateGuess(guess)
    })

}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if (guess<1) {
         alert("Please enter a number more than one")
    }
    else if (guess>100) {
         alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('You guessed it right')
        endGame()
    }
    else if (guess < randomNum) {
        displayMessage('Number is TOOO Low')
    }
    else if (guess > randomNum) {
        displayMessage('Number is TOOO High')
    }
}

function displayGuess(guess) {
    userInput.value = ''            // cleanup guess
    guessSlot.innerHTML += `${guess}, `//show value
    numGuess++;                     // add value
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
}

function newGame() {
    
}

