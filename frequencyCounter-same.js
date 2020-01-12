/*
Udemy: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816152?start=0#overview

Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

Should be O of n
*/

function same (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if ((array1[i] * array1[i]) !== array2[i]) {
      return false
    }
  }
  return true
}
