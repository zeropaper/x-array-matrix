# x-array-matrix

## Exercise

 - Create a `index.html` with a `pre` eelment.
 - Create a `index.js`
   - Declare an array variable called `matrix` which is made of 4 arrays containing 4 times `0` (use 2 `for` loops for that).

1. Fill the `pre` element with a based on the `matrix` array so it renders to:


````
0000
0000
0000
0000
````
Note: to create a new line in a string, you should use `\n`.

2. based on the code generating the string for the `pre` element, create a `function` called `renderPlainText` so you can use it like:

````js
document.getElementById('my-preformated-text').textContent = renderPlainText(matrix);
````

3. add an empty `table` element to your HTML create a new function which will create the HTML for `tr` elements (rows)
and `td` elements (columns) which contain the value (`0`).
So you can use it like:

````js
document.getElementById('my-table').innerHTML = renderHTMLTable(matrix);
````














