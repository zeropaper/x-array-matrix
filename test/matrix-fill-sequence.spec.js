var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixFillSequence = require('./../src/matrix-fill-sequence');

describe('matrixFillSequence', function() {
  it('is a function', function() {
    expect(matrixFillSequence).to.be.a('function');
  });

  it('fills the values of a multi-dimensional array in sequence', function() {
    var matrix = createMatrix(3, 3);
    var result = matrixFillSequence(matrix);
    expect(result[0][0]).to.be(0);
    expect(result[0][1]).to.be(1);
    expect(result[0][2]).to.be(2);
    expect(result[1][0]).to.be(3);
    expect(result[1][1]).to.be(4);
    // ...
    expect(result[2][2]).to.be(8);
  });
});