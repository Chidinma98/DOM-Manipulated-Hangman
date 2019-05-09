// Arrays for Words & Letters

//Post MVP

let objTopic = {

    Season: ['B', 'SU', 'OOL', 'VACA', 'SWIMM'],

    Summer: ['n'],

    Winter: ['u'],

    Sports: ['l']
}

let yay = () => {
    console.log('yay')
    jSeasons.style.backgroundColor = 'blue'
    let season = objTopic.Season

}

let jSeasons = document.querySelector('#seasons')
jSeasons.addEventListener('click', yay)


//MVP

let category = ['B', 'SU', 'OOL', 'VACA', 'SWIMM']
let playerNumber = 4;
let altPlayer = document.querySelector('#userName')

let locations = [];

let letterButton = document.querySelector('#letter')
let wordButton = document.querySelector('#word')

let randWord = null
let loopWord = null
let lArray = null;

let player0Points = 0
let player1Points = 0
let player2Points = 0

let vPoints = document.querySelector('#value')
let guessedAnswer = '';

let reFresh = () => {
    window.location.reload()
}

let wordsPlay = () => {
    let words = document.querySelector('.blank-Words');

    randWord = Math.floor((Math.random() * 5))

    loopWord = category[randWord]

    lArray = (loopWord.split(''))

    for (let i = 0; i < loopWord.length; i++) {
        let dash = document.createElement('h2');

        words.appendChild(dash)

        dash.textContent += ('-')
    }

}

wordsPlay();

let wordFunction = () => {

    wordButton.addEventListener('click', function checkWords() {
        event.preventDefault();

        let guessWord = document.querySelector('#word-field').value;
        let uGuessWord = String(guessWord.toUpperCase());


        if (category.includes(uGuessWord)) {
            let allDashes = document.querySelectorAll('h2');
            for (let i = 0; i < allDashes.length; i++) {
                allDashes[i].innerHTML = ''

            }
            document.querySelector('h2').innerHTML = uGuessWord;

            alert(`You Have Solved The Puzzle`)
            winner();


            if (playerNumber === 0) {
                player0Points += 10
                vPoints.innerHTML = `Points: ${player0Points}`
            }
            else if (playerNumber === 1) {
                player1Points += 10
                vPoints.innerHTML = `Points: ${player1Points}`
            }

            else if (playerNumber === 2) {
                player2Points += 10
                vPoints.innerHTML = `Points: ${player2Points}`
            }

            setInterval(newGame, 850)
        }
        else {
            alert('Incorect!')
            document.querySelector('#word-field').value = ""
        }

    }

    )

}

let letterFunction = () => {

    letterButton.addEventListener('click', function checkLetters() {
        event.preventDefault();
        let guessLetter = document.querySelector('#word-field').value;
        let uGuessLetter = String(guessLetter.toUpperCase());



        let isGuessedword = () => {
            for (let i = 0; i < category.length; i++) {
                if (category[i] === guessedAnswer) {
                    return true
                }
            }

            return false
        }
        let hiFunc = () => {
            for (let i = 0; i < lArray.length; i++) {
                if (uGuessLetter === lArray[i]) {
                    locations.push(i)

                }

            }


            for (let i = 0; i < locations.length; i++) {
                let blank = document.querySelectorAll('h2')[locations[i]];
                console.log(blank);
                blank.textContent = uGuessLetter;
            }

            guessedAnswer = document.querySelector(".blank-Words").innerText.replace(/(\r\n|\n|\r)/gm, "")
            console.log(guessedAnswer);

            if (isGuessedword()) {
                winner();
                setTimeout(newGame, 850)
            }


            locations = [];
            document.querySelector('#word-field').value = ""

        }

        let checkMatch = () => {
            return lArray.includes(uGuessLetter)
        }
        if (lArray.some(checkMatch)) {

            hiFunc();

            if (playerNumber === 0) {
                player0Points += 1
                vPoints.innerHTML = `Points: ${player0Points}`
            }
            else if (playerNumber === 1) {
                player1Points += 1
                vPoints.innerHTML = `Points: ${player1Points}`
            }

            else if (playerNumber === 2) {
                player2Points += 1
                vPoints.innerHTML = `Points: ${player2Points}`
            }

        }
        else {
            alert('Incorrect!')
            document.querySelector('#word-field').value = ""

        }

    })


}


let switchPlayers = () => {

    let currentPlayer = () => {
        playerNumber = ((playerNumber + 1) % 3)
        altPlayer.innerHTML = `player: ${playerNumber}`;

    }

    let run = () => {
        currentPlayer();
    }
    setInterval(run, 8000)
}

let pointsReturn = () => {

    let wScores = document.querySelector('#scores')

    let jScore0 = document.querySelector('#score0')
    jScore0.innerHTML = (`player 0 Points : ${player0Points}`)

    let jScore1 = document.querySelector('#score1')
    jScore1.innerHTML = (`player 1 Points : ${player1Points}`)

    let jScore2 = document.querySelector('#score2')
    jScore2.innerHTML = (`player 2 Points : ${player2Points}`)

}

function winner() {
    if (player0Points > player1Points && player0Points > player2Points) {
        alert('Player 0 Wins')
    }

    else if (player1Points > player0Points && player1Points > player2Points) {
        alert('Player 1 Wins')
    }

    else if (player2Points > player0Points && player2Points > player1Points) {
        alert('Player 2 Wins')
    }

    else {
        alert('tie')
    }

}

setInterval(pointsReturn, 850)

let newGame = () => {
    clearInterval(pointsReturn)
    letterFunction();
    wordFunction();
    switchPlayers();
    setInterval(pointsReturn, 850)
}

newGame();