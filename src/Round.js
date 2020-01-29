/* eslint-disable no-console */
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[this.turns]
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[0].id)
    }

    this.turns++

    return turn.giveFeedback()
  }
  calculatePercentCorrect() {
    let incorrect = this.incorrectGuesses.length

    return Math.round(((this.turns - incorrect) / this.turns) * 100)
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;