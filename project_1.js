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
// console.log(loopWord);

let wordsPlay = () => {
    let words = document.querySelector('.blank-Words');
    // let dash = document.createElement('p');

    // console.log(loopWord);
    for (let i = 0; i < loopWord.length; i++) {
        let dash = document.createElement('h2');
        // dash.textContent = ('-')
        words.appendChild(dash)
        // console.log(words)
        dash.textContent = ('-')

    }
    console.log(words)

}

wordsPlay();

//This Function checks If The Word Matches

wordButton.addEventListener('click', function checkWords() {
    event.preventDefault();

    let guessWord = document.querySelector('#word-field').value;
    let uGuessWord = String(guessWord.toUpperCase());
   
   
   
    // if (category.includes(uGuessWord)) {
    //     console.log(true)
    // }
    // else {
    //     console.log(false)
    // }


    // for (let i = 0; i < cate.length; i++) {
    //     const element = array[i];
        
    // }


//     console.log(document.querySelectorAll(h2))
 })


//
//The guessWord should be equal to the h2 at different locations
//h2[i].textContent = (guessWord) 

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
        //    let location = lArray.indexOf(uGuessLetter)
        //    console.log(location)     
        //    let blank = document.querySelectorAll('h2')[location];  
        //    blank.textContent = guessLetter

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

//Function that Transfers guesses on to the Screen

//dash.textContent = guessLetter;

// let blank = document.querySelectorAll('h2')[location];
// blank.textContent(guessLetter)
