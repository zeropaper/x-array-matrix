var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');

describe('createMatrix(rows, cols)', function() {
  it('creates a multi-dimensional array', function() {
    var result = createMatrix(1, 1);
    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('array');
  });


  it('creates the given amount of entries given by the first argument', function() {
    var result = createMatrix(3, 1);
    expect(result.length).to.be(3);
  });


  it('creates the given amount of entries given by the second argument', function() {
    var result = createMatrix(1, 3);
    expect(result[0]).to.be.an('array');
    expect(result[0].length).to.be(2);
  });
});