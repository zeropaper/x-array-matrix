# x-array-matrix

## Exercise



### Preparation

- Create a `index.html` with
  - a `pre` element with an `id` `step-2`
  - a `table` element with an `id` `step-3`
  - a `table` element with an `id` `step-4`
  - a `pre` element with an `id` `step-5`
- Create a `index.js`
- Declare an array variable called `matrix` which is made of
  4 arrays containing 4 times `0` (use 2 `for` loops for that).

### Step 1

Create a function called `createMatrix` which takes
2 arguments (`rowsCount` and `columnsCount`) and generates nested arrays

### Step 2

Create a function called `renderPlainText` which takes 1 argument called data
and returns a string like

````
0000
0000
0000
0000
````

__Note__: to create a new line in a string, you should use `\n`.

And then use it like:

````js
document.querySelector('#step-2').textContent = renderPlainText(createMatrix(4, 4));
````

__BONUS__: use .map(), .join()


### Step 3

add an empty `table` element to your HTML create a new function called
`renderHTMLBodyString` which will create the HTML **string** for
`tr` elements (rows) and `td` elements (columns) which contain the value (`0`).
So you can use it like:

````js
document.querySelector('#step-3').innerHTML = renderHTMLBodyString(createMatrix(4, 4));
````

### Step 4

create a function called `matrixFillSequence` which will return a
new array, based on the `matrix` but its values will be 0 to 15 like so:

````js
[
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
]
````

and then use it like:

````js
var newMatrix = matrixFillSequence(createMatrix(4, 4));
document.getElementById('step-4').innerHTML = renderHTMLBodyString(newMatrix);
````

### Step 5

create an other function called `matrixFillRowNum` which produces a
new array (like `matrixFillSequence`) but will produce nested arrays
like

````js
[
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3]
]
````

and then use it like:

````js
newMatrix = matrixFillRowNum(createMatrix(5, 2));
document.querySelecto('step-5').textContent = renderPlainText(newMatrix);
````

The `pre` tag content will then be

### Step 6

create an other function called `matrixFillColNum` which produces a
new array (like `matrixFillSequence` and `matrixFillRowNum`) but will
produce nested arrays like

````js
[
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3]
]
````

### SUPER BONUS OF DEATH

Create a function which will fill a `table` element with DOM only