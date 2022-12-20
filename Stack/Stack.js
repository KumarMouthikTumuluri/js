########################################################################################################################################################################
Description
Pattern type: Last item In is the First item Out (LIFO)

common operations you can perform on graphs:

push: adds a new element to the stack
pop: remove the last item pushed from the stack
peek: returns the last item pushed to stack
length: returns the size of the stack
isEmpty: returns true if the stack has elements or false if it has no elements
getStack: returns the data of the stack

Example use case
>Using the back and forward buttons in your browser
>dfs search algorithm for graphs search
>balanced arithmetic operations
>convert infix to postfix arithmetic operations
>JS engine uses a stack data structure to execute the algorithms


(function (exports) {
  const stack = (data = [], t = 0) => {
    let dataStore = data
    let top = t

    const stackProto = {
      push (element) {
        dataStore[top++] = element
      },
      pop: () => dataStore.splice(--top, 1),
      peek: () => dataStore[top - 1],
      length: () => top,
      isEmpty: () => top === 0,
      getStack: () => dataStore
    }

    return Object.create(stackProto)
  }

  Object.assign(exports, {stack})
}((typeof module.exports !== undefined) ? module.exports : window))

/*(function (exports) {
  const {stack} = require('./stack.module')
  Object.assign(exports, {stack})
}((typeof module.exports !== undefined) ? module.exports : window))*/













#########################################################################################################################################################################
// Chapter 4 - Stacks

class Stack {
  constructor(){
    this.data = []
    this.top = () => this.data.length
    this.push = (...element) => {for(var i of element){this.data.push(i)}}
    this.pop = () => this.data.pop()
    this.peek = () => this.data[this.data.length-1]
    this.clear = () => this.data = []
  }
}

module.exports = Stack;

// Multiple Base Conversions
function multiBase(n,b){
  let s = new Stack()
  while(n > 0){
  s.push(n%b)
  n = Math.floor(n /= b)
  }
  return s.data.reverse().join('')
}

// Palindrome Check
function isPalindrome(word){
  let s = new Stack()
  for(let i of word){s.push(i)}
  let rev = '', leng = s.top()
  for(let i = 0;i < leng;i++){rev += s.pop()}
  return word == rev ? true : false
}
