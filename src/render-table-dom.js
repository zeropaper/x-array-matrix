module.exports = function renderTableDom(element, data) {
  data.forEach(function(columns) {
    var tr = document.createElement('tr');
    columns.forEach(function(cell) {
      var td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    element.appendChild(tr);
  });
};