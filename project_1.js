// Arrays for Words & Letters
let category = ['BEACH', 'SUN', 'POOL', 'VACATION']
// let guessWord = document.querySelector('#word-field')
// let ans = guess.value
let letterButton = document.querySelector('#letter')
let wordButton = document.querySelector('#word')

let randWord = Math.floor((Math.random() * 4))
let loopWord = category[randWord]
let lArray = (loopWord.split(''))
// console.log(loopWord.split(''))
console.log(loopWord);



let wordsPlay = () => {
    let words = document.querySelector('.blank-Words');
    let dash = document.createElement('p');

    // console.log(loopWord);
    for (let i = 0; i < loopWord.length; i++) {
        let dash = document.createElement('h2');
        
        words.appendChild(dash)
        // console.log(words)
        dash.textContent = ('-')

    }
    console.log(words)

}

wordsPlay();

wordButton.addEventListener('click', function checkWords() {
    event.preventDefault();

    let guessWord = document.querySelector('#word-field').value;
    let uGuessWord = String(guessWord.toUpperCase());
    if (category.includes(uGuessWord)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
})


let byeFunc = () => {
    console.log('Not A Match')
}


letterButton.addEventListener('click', function checkLetters() {
    event.preventDefault();
    let guessLetter = document.querySelector('#word-field').value;
    let uGuessLetter = String(guessLetter.toUpperCase());
    
    let hiFunc = () => {
       let location = lArray.indexOf(uGuessLetter)
       let blank = document.querySelectorAll('h2')[location];
       
       blank.textContent = guessLetter
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

//Function that Transfers guesses on to the Screen

//dash.textContent = guessLetter;

// let blank = document.querySelectorAll('h2')[location];
// blank.textContent(guessLetter)
