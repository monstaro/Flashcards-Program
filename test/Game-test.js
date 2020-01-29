/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

let game;

beforeEach(() => {
  game = new Game();
})

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });
  it('should keep track of the current round', () => {
    
  })
});