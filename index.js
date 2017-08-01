function createMatrix(rowsCount, columnsCount) {
  var matrix = [];

  for (var rowNum = 0; rowNum < rowsCount; rowNum++) {
    var row = [];
    // // alternatively...
    // matrix[rowNum] = [];
    for (var colNum = 0; colNum < columnsCount; colNum++) {
      row.push(0);
      // // alternatively...
      // matrix[rowNum].push(0);
    }

    matrix.push(row);
  }

  return matrix;
}



function renderPlainText(data) {
  var rows = [];

  data.forEach(function(columns) {
    var rowString = columns.join('');
    rows.push(rowString);
  });

  return rows.join('\n');

  // // using .map()
  // var rows = matrix.map(function(columns) {
  //   // columns is an array ;)
  //   return columns.join('');
  // });
  // // rows is also an array
  // // (because it's what the .map() function returns)
  // // the "\n" is the code for a new line in a string
  // return rows.join('\n');
}

document.querySelector('#step-2').textContent = renderPlainText(createMatrix(4, 4));




function renderHTMLBodyString(data) {
  var htmlString = '';

  data.forEach(function(columns) {
    htmlString += '<tr>';

    columns.forEach(function(cell) {
      htmlString += '<td>' + cell + '</td>';
    });

    htmlString += '</tr>';
  });

  return htmlString;
}

document.querySelector('#step-3').innerHTML = renderHTMLBodyString(createMatrix(4, 4));