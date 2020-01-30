/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

let game;
let round;

beforeEach(() => {
  // round = new Round()
  game = new Game()
})

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

});