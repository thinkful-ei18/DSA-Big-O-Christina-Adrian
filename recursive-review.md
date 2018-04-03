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
    Exponential: the data input is recursed over by the forEach loop and grows exponentially with the input
    O(2^n)
  #### traverseB
    Exponential: the data input is recursed over by the for in loop and grows exponentially with the input    
    O(2^n)


################################################ ITERATIVE ################################################

### Counting sheep
Linear: output increases based on input, the num is looped over once
O(n)

### Double All
Linear: output increases based on input, one for loop
O(n)

### Reverse string
Linear: output increses based on input, one for loop
O(n)

### Triangle
Linear: output increases based on input, if the input is larger the output will be larger
O(n)

### String Split
Linear: while the sep is contained in the string split at the sep and str equals left over string after slice, continue
O(n)

### Binary Representation 
Linear: the num is converted to binary inside the while loop, output would increase based on input
O(n)

### Factorial
Linear: the factorial increases based on the input
O(n)

### Fibonacci 
Linear: the number increases based on the input because of the while loop
O(n)