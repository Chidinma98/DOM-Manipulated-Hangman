// Arrays for Words & Letters
let category = ['Beach', 'Sun', 'Pool', 'Vacation']
let guessWord = document.querySelector('#word-field').value
let letterButton = document.querySelector('#letter')
let wordButton = document.querySelector('#word')





let wordsPlay = ()=> {

let randWord = Math.floor((Math.random() * 4))
let words = document.querySelector('.blank-Words');


let loopWord = category[randWord]
let dash = document.createElement('p');


for (let i = 0; i < loopWord.length; i++) {
   
   let dash = document.createElement('h1');
   words.appendChild(dash)
   dash.textContent = ('-')

}

}




wordsPlay();

wordButton.addEventListener('click', function checkWords(guessWord){
guessWord.preventDefault();


console.log(guessWord);


})


