module.exports = function matrixIncrement(data) {
  return data.map(function(columns, rowNum) {
    return columns.map(function(cell, columnNum) {
      return data[rowNum][columnNum] + 1;
    });
  });
};