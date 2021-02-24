        // insertion sort. Iterate through each array index moving left to right
        // move the value found at each index from right to left until it's sorted
        // [1, 2, 6, 7, 4]  on the final pass  ==>   [1, 2, 4, 6, 7]
        // 4 moves to spaces to the left 
  
        for (let i = 1; i < length; i++) {
            let currentIndex = i
            let valueToSort = inputArr[currentIndex] // stored for later
            // we'll now be "pasting" over this index of the array
            // scanning right to left, we'll paste the value found
            // at each index into the index to the right. This stops
            // when we find a value lower than the number we are sorting.
            // Then, we paste the original value to sort into the index
            // to the right of the lower value's index

            let leftIndex = i - 1

            // right to left motion of value until it's sorted
            while (0 <= leftIndex && inputArr[leftIndex] > valueToSort) {
                inputArr[leftIndex + 1] = inputArr[leftIndex]
                leftIndex -= 1
            }
            inputArr[leftIndex + 1] = valueToSort
        }
        return inputArr;