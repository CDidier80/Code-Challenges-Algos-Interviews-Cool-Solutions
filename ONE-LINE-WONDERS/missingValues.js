// Task
// You are given a sequence of positive ints where every element appears three times, 
// except one that appears only once (let's call it x) and one that appears only twice 
// (let's call it y).

// Your task is to find x * x * y.

// Example
// For arr=[1, 1, 1, 2, 2, 3], the result should be 18

// 3 x 3 x 2 = 18

// For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

// 200 x 200 x 100 = 4000000

// Input/Output
// [input] integer array arr

// an array contains positive integers.

// [output] an integer

// The value of x * x * y


missingValues=(b)=>([1,1,2].reduce((a,v)=>a*b.filter(e=>b.filter(r=>e===r).length===v)[0],1)) 


  // HOW DOES THIS WORK?
  
  // 1. Filter is used on an array to create a newly filtered array. 

  // 2. You can filter an array with the condition that each repeat of a specific element 
  // is added to the new array. This would give you an array of repeated values.

  // 3. If the length of the new array is 1, there was exactly one repeat. If the array 
  //   length is 2, there were 2 repeats. 

  // 4. Every element of the array must be checked for repeats. That means each 
  //   value of the passed array must use it's own filtered array. 

  // 5. Only two of the filtered arrays will have repeats. Most will be empty. 

  // 6. One original array value has 1 repeat. Another has 2 repeats. That means 
  //   there will be one filtered array with one element and another with 2 elements.

  // 7. Those arrays can be identified by checking them for array lengths of 1 and 2. 

  // 8. Because we need to weed out the empty arrays from the arrays of lengths 1 and 2, we'll 
  //   filter all of the filtered arrays. 

  // 9. We'll use a nested filter to capture the array of length 1, and another nested filter 
  //   to capture the array of length 2. 

  // 10. Then we can extract the values from each array and we have our repeats. Then we 
  //   simply square the once-repeated value and multiply it by the value of the element repeated 3 times. 

  // 11. i.e. ([repeatValue].length===1 ** 2) *  [repeatValue].length===2

  // THE RESULT

// => arr.filter(elem => arr.filter(repeatedElem => elem === repeatedElem).length===1)[0] ** 2) * arr.filter(elem => arr.filter(subElem => elem === subElem).length===2)[0]}

  // but why write out .filter() so many times? The only difference between finding X and Y for  X * X * Y is that X's array has length 1 while y has length 2.   Therefore, it's
  // easy to use .reduce() to "accumulate" the product of each multiple.
// That refractoring produces the above solution.