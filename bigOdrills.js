'use strict';


/// EVEN OR ODD
function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}
// O(1)
/// The input will always be evaluated only once


/// ARE YOU HERE
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
      const el1 = arr1[i];
      for (let j=0; j<arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}
// O(n^2)
/// The first for loop depends on the inner loop before the code can complete, each array will be evaulated once


/// DOUBLER
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
      array[i] *= 2;
  }
  return array;
}
// O(n)
/// The input will only be evaluated once
// O(1)
/// The input will only be evaluated once


// NATIVE SEARCH
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}
// O(n)
/// The input will only be evaluted once


// CREATING PAIRS
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i+1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}
// O(n^2)
/// The outter loop goes through the array starting at index 0 then the inner loop beings
/// at array index 1 and create all possible value pairs, the input array is evaluted twice at a minimimum



// COMPUTING FIBONACCIS
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
// O(n)
/// The input only gets evaluted once in the for loop



// AN EFFICIENT SEARCH
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}
// O(log n)
/// Each sort of the array removed part or half of the data set so the time complexity increases by log



// RANDOM SEARCH
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// O(1)
// The algorithm always picks a random index so the size of the data set does not matter


// IS IT PRIME
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i === 0) return false;
  }
  return true;
}
// O(n)
/// The number input will always be evaluted once to check for divisibility


