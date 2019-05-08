// Arrays for Words & Letters
let category = ['BEACH', 'SUN', 'POOL', 'VACATION', 'SWIMMING']









let letterButton = document.querySelector('#letter')
let wordButton = document.querySelector('#word')

let randWord = Math.floor((Math.random() * 5))
let loopWord = category[randWord]
let lArray = (loopWord.split(''))


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
    }
    else {
        console.log(false)
    }
   
 })

console.log(document.querySelectorAll('h2')[0])

let byeFunc = () => {
    console.log('Not A Match')

///
}

let locations = [];

letterButton.addEventListener('click', function checkLetters() {
    event.preventDefault();
    let guessLetter = document.querySelector('#word-field').value;
    let uGuessLetter = String(guessLetter.toUpperCase());

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
    }
    else {
        byeFunc();
    }

})



// Class to Instantiate the Players

class Player {
    constructor (name) {
        this.name = name;
        this.points= 0;
    }

    totalPoint() {
        // points gained + points lost
    }

}


let playerName = () => {
    let name = document.querySelector('#person')

};