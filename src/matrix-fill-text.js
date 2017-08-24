module.exports = function matrixFillText(data, string) {
  var counter = -1;
  return data.map(function(columns, rowNum) {
    return columns.map(function(cell, columnNum) {
      counter++;
      return string[counter];
    });
  });
};