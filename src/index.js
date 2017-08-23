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

var newMatrix = createMatrix(4, 4);
document.querySelector('#step-2').textContent = renderPlainText(newMatrix);




function renderTableHTMLString(data) {
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

newMatrix = createMatrix(4, 4);
document.querySelector('#step-3').innerHTML = renderTableHTMLString(newMatrix);



function matrixFillSequence(data) {
  var counter = 0;
  var returned = [];

  for (var r = 0; r < data.length; r++) {
    returned[r] = [];

    for (var c = 0; c < data[r].length; c++) {
      returned[r].push(counter);

      counter++;
    }
  }

  return returned;

  // var counter = -1; // start at -1 so that we can increment the counter
  // return data.map(function(columns) {
  //   return columns.map(function(cell) {
  //     counter++;
  //     return counter;
  //   });
  // });
}

newMatrix = matrixFillSequence(createMatrix(4, 4));
document.getElementById('step-4').innerHTML = renderTableHTMLString(newMatrix);



function matrixFillRowNum(data) {
  var returned = [];

  for (var r = 0; r < data.length; r++) {
    returned[r] = [];

    for (var c = 0; c < data[r].length; c++) {
      returned[r].push(r);
    }
  }

  return returned;

  // return data.map(function(columns, rowNum) {
  //   return columns.map(function(cell) {
  //     return rowNum;
  //   });
  // });
}

newMatrix = matrixFillRowNum(createMatrix(5, 2));
document.querySelector('#step-5').textContent = renderPlainText(newMatrix);



function matrixFillColNum(data) {
  // var returned = [];
  // for (var r = 0; r < data.length; r++) {
  //   var counter = 0;
  //   returned[r] = [];
  //   for (var c = 0; c < data[r].length; c++) {
  //     returned[r].push(c);
  //   }
  //   counter++;
  // }
  // return returned;

  return data.map(function(columns) {
    return columns.map(function(cell, columnNum) {
      return columnNum;
    });
  });
}

newMatrix = matrixFillColNum(createMatrix(2, 5));
document.querySelector('#step-6').textContent = renderPlainText(newMatrix);






function matrixIncrement(data) {
  return data.map(function(columns, rowNum) {
    return columns.map(function(cell, columnNum) {
      return data[rowNum][columnNum] + 1;
    });
  });
}

newMatrix = matrixFillSequence(createMatrix(3, 5));
newMatrix = matrixIncrement(newMatrix);
document.querySelector('#step-7').innerHTML = renderTableHTMLString(newMatrix);




function matrixFillText(data, string) {
  var counter = -1;
  return data.map(function(columns, rowNum) {
    return columns.map(function(cell, columnNum) {
      counter++;
      return string[counter];
    });
  });
}

var text = 'abcdefghijklmnopqrstu';
newMatrix = createMatrix(3, 5);
newMatrix = matrixFillText(newMatrix, text);
document.querySelector('#step-8').innerHTML = renderTableHTMLString(newMatrix);




function renderTableDom(element, data) {
  data.forEach(function(columns) {
    var tr = document.createElement('tr');
    columns.forEach(function(cell) {
      var td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    element.appendChild(tr);
  });
}


newMatrix = createMatrix(3, 5)
newMatrix = matrixFillText(newMatrix, text);
renderTableDom(document.querySelector('#bonus'), newMatrix);