/* eslint-disable max-len */

//bring in chai library
const chai = require('chai');
const expect = chai.expect;

//bring in classes being tested
const Turn = require('../src/Turn');
const Card = require('../src/Card');

//create global variables for the instances we are testing 
let card;
let turn1;
let turn2

//beforeEach hook, instantiates our objects to test
beforeEach(() => {
  card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  turn1 = new Turn('pug', card)
  turn2 = new Turn('sea otter', card)

})


describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceOf(Turn)
  })

  it('should return the guess', () => {
    expect(turn1.returnGuess()).to.equal('pug')
  })

  it('should return the current card', () => {
    expect(turn1.returnCard()).to.equal(card)
  })

  it('should evaluate to false if the answer is wrong', () => {
    expect(turn1.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.equal(true)
  })

  it('should give feedback depending on the evaluation', () => {
    expect(turn1.giveFeedback()).to.equal('incorrect')
    expect(turn2.giveFeedback()).to.equal('correct')
  })
});