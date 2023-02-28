const {queue} = require('./index')



########################################################################################################################################################################
Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome
########################################################################################################################################################################
test('Queue test 2', assert => {
  function isPalindrome (word) {
    const letter = new RegExp('[a-z]')
    let palindrome = word.toLowerCase().split('')
    let a, b
    palindrome = palindrome.filter(item => letter.test(item))
    const q = queue(palindrome)

    const dequeueBack = function (element) {
      const dataStore = this.getQueue()
      const data = dataStore.unshift(element)
      this.setQueue(data)
      return data
    }

    Object.assign(q, {dequeueBack})

    while (!q.isEmpty()) {
      if (q.length() > 1) {
        a = q.front()
        b = q.back()
      } else {
        // console.log(`The string '${word.toUpperCase()}' is palindrome!`)
        return true
      }
      if (a === b && q.length() > 1) {
        q.dequeue()
        q.dequeueBack()
      } else {
        // console.log(`The string '${word.toUpperCase()}' is not palindrome!`)
        return false
      }
    }
  }

  const word = 'racecar'
  const word2 = 'A man, a plan, a canal: Panama'
  const word3 = 'what is this'

  assert.equal(true, isPalindrome(word), `the string = '${word}' is palindrome`)
  assert.equal(true, isPalindrome(word2), `the string = '${word2}' is palindrome`)
  assert.equal(false, isPalindrome(word3), `the string = '${word3}' is not a palindrome`)
})
