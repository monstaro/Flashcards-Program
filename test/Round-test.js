/* eslint-disable max-len */

//bring in chai library
const chai = require('chai');
const expect = chai.expect;

//bring in classes being tested
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

//create global variables for the instances we are testing 
let round;
let deck;
let card1;
let card2;
let card3;
let turn;

//beforeEach hook, instantiates our objects to test
beforeEach(() => {
  card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
  card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
  card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
  deck = new Deck([card1, card2, card3])
  turn = new Turn()
  round = new Round(deck)
})

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })
  it('should return the current round being played', () => {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })
  it('should increase turn count for every guess', () => {
    expect(round.turns).to.equal(0)
    round.takeTurn()
    expect(round.turns).to.equal(1)
  })
  it('should remove the first card from the deck after a guess', () => {
    expect(round.deck[0]).to.equal(card1)
    round.takeTurn()
    expect(round.deck[0]).to.equal(card2)
  })
  it('should put the question id from any incorrect guesses into an array', () => {
    expect(!round.incorrectGuesses)
    round.takeTurn('array')
    expect(round.incorrectGuesses[0]).to.equal(1)
  })
  it('should give feedback depending if the answer is correct', () => {
    round.takeTurn('array')
    expect(round.takeTurn()).to.equal('incorrect')
    round.takeTurn('array')
    expect(round.takeTurn()).to.equal('correct')
  })
  it('should create a new turn instance', () => {
    round.takeTurn()
    expect(turn).to.be.instanceof(Turn)
  })
  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('object')
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('object')
    expect(round.calculatePercentCorrect()).to.equal(50)
  })
})