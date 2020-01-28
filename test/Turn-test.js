/* eslint-disable max-len */

//bring in chai library
const chai = require('chai');
const expect = chai.expect;

//bring in classes being tested
const Turn = require('../src/Turn');
const Card = require('../src/Card');

//create global variables for the instances we are testing 
let card;
let turn;

//beforeEach hook, instantiates our objects to test
beforeEach(() => {
  card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  turn = new Turn('pug', card)
})


describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('pug')
  })

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate to false if the answer is wrong', () => {
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should give feedback depending on the evaluation', () => {
    expect(turn.giveFeedback()).to.equal('incorrect')
  })

});