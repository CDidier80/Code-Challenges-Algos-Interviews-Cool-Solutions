// const fizzBuzz = (n) => {
//     let log
//     switch(n) {
//         case (n % 15 === 0):
//             log = "FizzBuzz"
//         case (n % 5):
//             log = "Buzz"
//         case (n % 3): 
//             log = "Fizz"
//         default: 
//             log = n
//     }
//     console.log(log)
// }
// console.log(fizzBuzz(7))



const fizzBuzz = (n) => {
    for (let i=1; i <= n; i++){
        let log = ""
        i % 3 === 0 && (log += "Fizz")
        i % 5 === 0 && (log += "Buzz")
        !log && (log = n)
        console.log(log)
    }
}

fizzBuzz(10)
