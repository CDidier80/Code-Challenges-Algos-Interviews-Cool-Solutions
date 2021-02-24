
const quicksort = (array) => {

  const medianOfThreeArr = [array[0], array[Math.floor((array.length-1)/2)], array[array.length-1]]
  const pivot = medianOfThreeArr.filter((elem, index, arr) => elem != Math.max(arr[0], arr[1], arr[2]) && elem != Math.min(arr[0], arr[1], arr[2]))[0]
  
  if(array.length < 2) {
    return array;
  }

  let lesserPartition = [];
  let greaterPartition = [];

  for (let i = 1; i < array.length; i++) {
    if ( array[i] > pivot ) {
      greaterPartition.push(array[i]);
    } else {
      lesserPartition.push(array[i]);
    }
  }

  const aOnceSortedArray = lesserPartition.concat(pivot, greaterPartition)

  return quicksort(aOnceSortedArray);
}



                             [8, 9, 10, 13, 16, 20, 20, 36, 41]
let sortedArray = quicksort([10, 41, 8, 16, 20, 36, 9, 13, 20])

console.log(sortedArray)