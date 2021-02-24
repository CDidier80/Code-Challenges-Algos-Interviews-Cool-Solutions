// solution 1
var coinCombo = function(cents) {
    let remainingCents = cents
    const coinValues = [25, 10, 5, 1]
    
  let coinCollection = coinValues.map((coinValue) => {
    let coinCount = Math.floor(remainingCents/coinValue)
    remainingCents -= coinCount * coinValue
    return coinCount
  })
    coinCollection.reverse()
    return coinCollection
  }        

  // solution 2

  var coinCombo = function(cents) {
    let remainingCents = cents
    const coinValues = [25, 10, 5, 1]
    let coinCollection = []
    
  coinValues.forEach((coinValue) => {
    let coinCount = Math.floor(remainingCents/coinValue)
    remainingCents -= coinCount * coinValue
    coinCollection.unshift(coinCount)
  })
  
    return coinCollection
  }                     