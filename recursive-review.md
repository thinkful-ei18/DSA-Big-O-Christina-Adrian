'use strict';

### Count Sheep Function
Linear: output is increased by input

### Array Double
Linear: we iterate through the array and slice new items into it
O(n)

### Reverse string
Linear: slice iterates through the array
O(n)

### Triangular Number
Linear: the output is increased based on input
O(n)

### String Splitter
Linear: indexOf and Slice iterate through the entire string
O(n)

### Binary Representation
Linear: the input is passed into recursive call
O(n)

### Factorial
Linear: the output gets bigger based on the input
O(n)

### Fibonacci
Quadratic: the fibonacci recursive function is called twice for each value in the sequence
O(n^2)

### Anagrams
Exponential (or quadratic?) : the input is recursed over for i < str.length times 
O(2^n)

### Animal Hierarchy
Log: The dataset is filtered by the {parent: } key so each dataset being recursed is smaller
O(Log n)

### Organizational Chart
  #### traverseA
    Linear: the data input is recursed over by the forEach loop and grows with the input
    O(n)
  #### traverseB
    Linear: the data input is recursed over by the for in loop and grows with the input    
    O(n)