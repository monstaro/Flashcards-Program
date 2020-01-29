const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0]
  }
  takeTurn(guess) {
    this.turns++

    let turn = new Turn(guess, this.returnCurrentCard())

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[0].id)
    }

    this.deck.shift()
    return turn.giveFeedback()
  }
  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100
  }
}

module.exports = Round;