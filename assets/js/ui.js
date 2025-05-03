import { HangmanGame } from './game.js';

export class HangmanUI {
    constructor() {
        this.game = new HangmanGame();
        this.wordElement = document.getElementById("word");
        this.keyboardElement = document.getElementById("keyboard");
        this.statusElement = document.getElementById("status");
        this.gameOverElement = document.getElementById("gameOver");
        this.gameWonElement = document.getElementById("gameWon");
        this.correctWordElement = document.getElementById("correctWord");
        this.restartButton = document.getElementById("restartButton");
        this.winRestartButton = document.getElementById("winRestartButton");
        this.winsElement = document.getElementById("wins");
        this.lossesElement = document.getElementById("losses");
        this.difficultyButtons = document.querySelectorAll(".difficulty-btn");
        this.hintButton = document.getElementById("hintButton");
        this.hintTextElement = document.getElementById("hintText");
        this.categoryElement = document.getElementById("category");
        this.themeToggleButton = document.getElementById("themeToggle");

        this.bindEvents();
        this.initGame();
    }

    initGame() {
        this.game.initGame();
        this.updateWordDisplay();
        this.createKeyboard();
        this.updateHangmanDisplay();
        this.updateStatus();
        this.updateHintButton();
        this.gameOverElement.classList.remove("active");
        this.gameWonElement.classList.remove("active");
        this.categoryElement.textContent = `Category: ${this.game.wordCategory}`;
        this.hintTextElement.textContent = "";
    }

    updateWordDisplay() {
        this.wordElement.innerHTML = "";
        this.game.selectedWord.split("").forEach(letter => {
            const letterElement = document.createElement("div");
            letterElement.classList.add("letter");
            if (this.game.guessedLetters.includes(letter)) {
                letterElement.textContent = letter;
                letterElement.classList.add("revealed");
            }
            this.wordElement.appendChild(letterElement);
        });
    }

    createKeyboard() {
        this.keyboardElement.innerHTML = "";
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
            const key = document.createElement("button");
            key.classList.add("key");
            key.textContent = letter;
            if (this.game.guessedLetters.includes(letter)) {
                key.classList.add(this.game.selectedWord.includes(letter) ? "correct" : "wrong");
                key.disabled = true;
            }
            key.addEventListener("click", () => this.handleGuess(letter));
            this.keyboardElement.appendChild(key);
        });
    }

    handleGuess(letter) {
        const isCorrect = this.game.handleGuess(letter);
        if (isCorrect) {
            this.updateWordDisplay();
            if (this.game.checkWin()) {
                this.game.incrementWins();
                this.winsElement.textContent = this.game.wins;
                this.gameWonElement.classList.add("active");
            }
        } else {
            this.updateHangmanDisplay();
            if (this.game.checkLoss()) {
                this.game.incrementLosses();
                this.lossesElement.textContent = this.game.losses;
                this.correctWordElement.textContent = this.game.selectedWord;
                this.gameOverElement.classList.add("active");
            }
        }
        this.updateKeyboard();
        this.updateStatus();
    }

    updateKeyboard() {
        const keys = this.keyboardElement.querySelectorAll(".key");
        keys.forEach(key => {
            const letter = key.textContent;
            if (this.game.guessedLetters.includes(letter)) {
                key.classList.add(this.game.selectedWord.includes(letter) ? "correct" : "wrong");
                key.disabled = true;
            }
        });
    }

    updateHangmanDisplay() {
        const hangmanParts = ["base", "pole", "beam", "rope", "head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
        hangmanParts.forEach((part, index) => {
            const element = document.getElementById(part);
            element.classList.toggle("visible", index < this.game.wrongGuesses);
        });
    }

    updateStatus() {
        this.statusElement.textContent = `Attempts remaining: ${this.game.getAttemptsRemaining()}`;
    }

    handleHint() {
        const hint = this.game.getHint();
        if (hint) {
            this.hintTextElement.textContent = hint;
            this.updateHintButton();
        }
    }

    updateHintButton() {
        this.hintButton.disabled = this.game.hintsRemaining <= 0;
    }

    handleDifficultyChange(event) {
        const newDifficulty = event.target.getAttribute("data-difficulty");
        if (newDifficulty !== this.game.difficulty) {
            this.game.setDifficulty(newDifficulty);
            this.difficultyButtons.forEach(button => button.classList.remove("active"));
            event.target.classList.add("active");
            this.initGame();
        }
    }

    toggleTheme() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    }

    bindEvents() {
        this.restartButton.addEventListener("click", () => this.initGame());
        this.winRestartButton.addEventListener("click", () => this.initGame());
        this.hintButton.addEventListener("click", () => this.handleHint());
        this.difficultyButtons.forEach(button => {
            button.addEventListener("click", e => this.handleDifficultyChange(e));
        });
        this.themeToggleButton.addEventListener("click", () => this.toggleTheme());
        document.addEventListener("keydown", event => {
            const key = event.key.toUpperCase();
            if (/^[A-Z]$/.test(key)) {
                const keyElement = Array.from(this.keyboardElement.querySelectorAll(".key"))
                    .find(el => el.textContent === key && !el.disabled);
                if (keyElement) keyElement.click();
            }
        });
    }
}

// Initialize the UI when the page loads
window.addEventListener("load", () => new HangmanUI());