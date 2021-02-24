
// You are given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.

// For example: 
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''


/** 
 * @param {string} s a lowercase string whose characters will be selectively removed
 * @param {integer} k the number of characters that must be removed from s
 */

const solve = (s, k) => {
        
    let stringCopy = s
    let deletionCount = 0
  
    // fills an array with strings "A" through "Z" of English alphabet
    const alphabet = [...Array(26)].map((el, i) => String.fromCharCode(i+97))
    
    for (let i = 0; i<=k; i++){
        if (deletionCount === k) break 
      alphabet.forEach(letter => {
            let numOfRepeats = ((stringCopy.split("")).filter(char => char === letter)).length
            let totalLeftToDelete = k - deletionCount
            let numToDelete = totalLeftToDelete <= numOfRepeats ? totalLeftToDelete : numOfRepeats
            for (let i = 0; i < numToDelete; i++){
                stringCopy = stringCopy.replace(letter, "")
                deletionCount += 1
            }
        })
    }

  return stringCopy
}