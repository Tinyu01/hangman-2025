import { words } from './words.js';

export class HangmanGame {
    constructor() {
        this.selectedWord = "";
        this.wordCategory = "";
        this.wordHint = "";
        this.guessedLetters = [];
        this.wrongGuesses = 0;
        this.wins = 0;
        this.losses = 0;
        this.difficulty = "easy";
        this.hintsRemaining = 1;
    }

    initGame() {
        const wordObj = this.getRandomWord();
        this.selectedWord = wordObj.word;
        this.wordCategory = wordObj.category;
        this.wordHint = wordObj.hint;
        this.guessedLetters = [];
        this.wrongGuesses = 0;
        this.hintsRemaining = 1;
    }

    getRandomWord() {
        const wordList = words[this.difficulty];
        return wordList[Math.floor(Math.random() * wordList.length)];
    }

    handleGuess(letter) {
        if (this.guessedLetters.includes(letter)) return false;
        this.guessedLetters.push(letter);
        if (this.selectedWord.includes(letter)) {
            return true;
        } else {
            this.wrongGuesses++;
            return false;
        }
    }

    checkWin() {
        return this.selectedWord.split("").every(letter => this.guessedLetters.includes(letter));
    }

    checkLoss() {
        return this.wrongGuesses >= 10;
    }

    getAttemptsRemaining() {
        return 10 - this.wrongGuesses;
    }

    getHint() {
        if (this.hintsRemaining > 0) {
            this.hintsRemaining--;
            return this.wordHint;
        }
        return null;
    }

    setDifficulty(newDifficulty) {
        this.difficulty = newDifficulty;
    }

    incrementWins() {
        this.wins++;
    }

    incrementLosses() {
        this.losses++;
    }
}