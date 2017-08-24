var expect = require('expect.js');
var lib = require('./../src/lib');

describe('library', function() {
  it('is an object', function() {
    expect(lib).to.be.an('object');
  });

  it('has a createMatrix function', function() {
    expect(lib.createMatrix).to.be.an('function');
  });

  it('has a createMatrix function', function(){
    expect(lib.createMatrix).to.be.a('function');
  });

  it('has a renderPlainText function', function(){
    expect(lib.renderPlainText).to.be.a('function');
  });

  it('has a renderTableHTMLString function', function(){
    expect(lib.renderTableHTMLString).to.be.a('function');
  });

  it('has a matrixFillSequence function', function(){
    expect(lib.matrixFillSequence).to.be.a('function');
  });

  it('has a matrixFillRowNum function', function(){
    expect(lib.matrixFillRowNum).to.be.a('function');
  });

  it('has a matrixFillColNum function', function(){
    expect(lib.matrixFillColNum).to.be.a('function');
  });

  it('has a matrixIncrement function', function(){
    expect(lib.matrixIncrement).to.be.a('function');
  });

  it('has a matrixFillText function', function(){
    expect(lib.matrixFillText).to.be.a('function');
  });

  it('has a renderTableDom function', function(){
    expect(lib.renderTableDom).to.be.a('function');
  });
});