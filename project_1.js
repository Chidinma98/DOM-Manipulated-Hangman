// Arrays for Words & Letters

let objTopic ={

Summer: ['n'],

Winter: ['u'],

Sports: ['l'],
}

let playerNumber = 4;
let altPlayer = document.querySelector('#userName')
// console.log(objTopic.keys)

function reFresh() {
    window.location.reload()
}


let category = ['BEACH', 'SUN', 'POOL', 'VACATION', 'SWIMMING']

let locations = [];

let letterButton = document.querySelector('#letter')
let wordButton = document.querySelector('#word')

let randWord = Math.floor((Math.random() * 5))
let loopWord = category[randWord]
let lArray = (loopWord.split(''))

let player0Points = 0
let player1Points = 0
let player2Points = 0

let vPoints = document.querySelector('#value')


let wordsPlay = () => {
    let words = document.querySelector('.blank-Words');

    for (let i = 0; i < loopWord.length; i++) {
        let dash = document.createElement('h2');

        words.appendChild(dash)
       
        dash.textContent += ('-')
    }
    console.log(words)
}

wordsPlay();

//This Function checks If The Word Matches

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
        //Function that shows you the points for Each players in the Game.
        //Another Function that restarts the game
        
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

    }
    else {
        alert('Incorect You loose 2 points')
    }
   
 })

// console.log(document.querySelectorAll('h2')[0])
}




let letterFunction = () => {

letterButton.addEventListener('click', function checkLetters() {
    event.preventDefault();
    let guessLetter = document.querySelector('#word-field').value;
    let uGuessLetter = String(guessLetter.toUpperCase());

    let byeFunc = () => {
        alert('Incorecct, You Lose 1 Point')
    
    
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
        locations = [];

    }

    // let lArray = (loopWord.split(''))
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
        byeFunc();
    }

})

}



//Player Switch Function



let switchPlayers = () => {



let currentPlayer = () => {
playerNumber = ((playerNumber + 1) % 3)
altPlayer.innerHTML = `player: ${playerNumber}`;
// return((`player: ${playerNumber}`))
console.log(playerNumber)
}

let run = () => {
    currentPlayer();
    
}
setInterval(run, 10000)
}

switchPlayers();
// let altPlayer = document.querySelector('#userName')

letterFunction();
wordFunction();

// Class to Instantiate the Players



