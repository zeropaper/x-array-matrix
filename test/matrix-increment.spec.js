var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixIncrement = require('./../src/matrix-increment');

describe('matrixIncrement', function() {
  it('is a function', function() {
    expect(matrixIncrement).to.be.a('function');
  });

  it('increments the values of a multi-dimensional array', function() {
    var matrix = createMatrix(3, 3);
    var result = matrixIncrement(matrix);
    expect(result[0][0]).to.be(1);
    expect(result[2][2]).to.be(1);
  });
});