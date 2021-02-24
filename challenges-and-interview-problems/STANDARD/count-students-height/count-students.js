
// attempt with single loop for performance
// const countStudents = (height) => {
//     let unorderedItems = 0

//     for (let i = 1; i < height.length; i++) {
//         let currentIndex = i
//         let valueToSort = height[currentIndex] 
//         let nextLowestIndex = i - 1

//         while (0 <= nextLowestIndex && height[nextLowestIndex] > valueToSort) {
//             unorderedItems+=1
//             height[nextLowestIndex + 1] = height[nextLowestIndex]
//             nextLowestIndex -= 1
//         }

//         height[nextLowestIndex + 1] = valueToSort
//     }
//     return unorderedItems
// }


const insertionSort = (height) => {
    for (let i = 1; i < height.length; i++) {
        let valueToSort = height[i] 
        let nextLowestIndex = i - 1
        while (0 <= nextLowestIndex && height[nextLowestIndex] > valueToSort) {
            height[nextLowestIndex + 1] = height[nextLowestIndex]
            nextLowestIndex -= 1
        }
        height[nextLowestIndex + 1] = valueToSort
    }
    return height
}


const countStudents = (height) => {
    let sortedCopy = insertionSort([...height])
    let misplacedItems = 0
    for (let i=0; i<height.length; i++){
        height[i] !== sortedCopy[i] && misplacedItems++
    }
    return misplacedItems
}


let array = [ 1, 1, 3, 4, 1]
console.log(countStudents(array))