# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|May 6th| Project Aproval/Wireframing (HTML, CSS)| Incomplete
|May 7th| Finish Functions 1 -4  | Incomplete
|May 8th| Finish Function 5 & 6 | Incomplete
|May 8th| Final Commits/ bug fixing | Incomplete
|May 8th| Testing/MVP | Incomplete
|May 9th| Post MVP | Incomplete
|May 10th| Present | Incomplete


## Project Description

This game will be a combination of Hangman and Wheel of Fortune. Three players take turns either guessing a letter or a word that matches the chosen word in the array.

If the user decides to  guess a letter and the letter is inside the word, the user gets a point. If the letter is not inside the word they lose a point.

However, the player can also choose to guess the word. In each case they risk losing or gaining 10 additional points depending on whether the word they guessed is correct.

The game ends when the word is guessed correctly or when the player hits restart game.

The player with the most points win.


## Wireframes

SEE IMAGES IN PROJECT-1 REPO

## Priority Matrix
SEE Project-1 repo 

### MVP/PostMVP - 5min
My MVP is just a working hangman game that is able to compare letters and words to imputed values. 



#### MVP 



Necessary Functions:
1.	Function that Assigns Turns to Players
2.	Solve the Puzzle function that checks whether the input matches the world in play.
3.	Choose a letter Function that Checks Whether the letter inputted matches any letters in the word in play.
4.	Function that keeps track of the Points and announces the Winner After Every Game
5.	Make sure Every-time the game runs, none of the words are repeated.
6.	Another Function that keeps track of the letters used.


Necessary Arrays:
1.	Array for the words in play.
2.	Array that shows all the letters used.

Necessary Classes
1.	Players



#### PostMVP 

Some additional features are that I can create a customizable number of players.
Add actual depictions of hangman.


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |


## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
