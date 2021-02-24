
const list = {
    val: 1,
    next: {
      val: 5,
      next: {
        val: 3,
        next: {
          val: 2
        }
      }
    }
  }


const nextLargerNodes = head => {
    const stack = [], result = [];
    let index = 0;

    // iteration starts with head, ends when node is undefined, increments to the next node
    for (let node = head; node; node = node.next) {

        // stack[stack.length - 1][1]   =  previous node value

        //                          previous node value
        while (stack.length && stack[stack.length - 1][1] < node.val) {
            const poppedStackElement = stack.pop()
            const prevElemIndex = poppedStackElement[0]
            result[prevElemIndex] = node.val
        }
        stack.push([index++, node.val]);
    }

    // while stack has content
    while (stack.length) { 
        const poppedArray = stack.pop()
        const poppedArrIndex = poppedArray[0]
        result[poppedArrIndex] = 0
    }

    return result

};

console.log(nextLargerNodes(list));


  // list.next.next.next.next you get a pizza she gets a pizza they all get pizzas.
  // ?. = if it is undefined just return undefined do not try to get the property.
  // console.log(nextLargerNodes(list.next.next.next.next?.next));
  

