/* eslint-disable no-console */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck.js')
const Round = require('../src/Round.js')
const Card = require('../src/Card.js')

let round;
let deck;

class Game {
  constructor() {
    this.currentRound = 0;
  }
  start() {
    deck = new Deck(data.prototypeData)
    console.log(deck)
    round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;