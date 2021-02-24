// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
// Inspired by https://adriann.github.io/programming_problems.html


// const mergeArrays = (a, b) => {
//     let newArray = []
//     for(i=0; i<(a.length+b.length); i++){
//       i<a.length && newArray.push(a[i])
//       i<b.length && newArray.push(b[i])
//     }
//     return newArray
// }  


// const mergeArrays = (a,b) => ((new Array(a.length+b.length)).fill(null)).reduce((p,c,i) => (i<a.length && (p[i] = a[i]), i<b.length && (p[i+1] = b[i]), p),[])

// const mergeArrays = (a,b) => ((new Array(a.length+b.length)).fill(null)).reduce((p,c,i) => {
   
//    console.log((i<a.length && (p[i] = a[i]), i<b.length && (p[i+1] = b[i]), p)
// ,[])})



const mergeArrays = (a,b) => new Array(a.length+b.length).fill(null).reduce((p,c,i)=> [...p,...i<a.length?[a[i]]:[], ...i<b.length?[b[i]]:[]],[])


