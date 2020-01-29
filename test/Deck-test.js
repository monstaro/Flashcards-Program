/* eslint-disable max-len */

//bring in chai library
const chai = require('chai');
const expect = chai.expect;

//bring in classes being tested
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


//create global variables for the instances we are testing 
let turn;
let deck;
let card1;
let card2;
let card3;

//beforeEach hook, instantiates our objects to test
beforeEach(() => {
  card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
  card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
  card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
  deck = new Deck([card1, card2, card3])
  turn = new Turn()
})


describe('Deck', () => {

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should take an array of cards', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it('should return the length of the deck', () => {
    expect(deck.countCards()).to.equal(deck.cards.length)
  })

});