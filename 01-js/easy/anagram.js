/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // taking care of case and space
  str1 = str1.toLowerCase().replace(/\s+/g, '')
  str2 = str2.toLowerCase().replace(/\s+/g, '')

  let map1 = new Map()
  let map2 = new Map()

  // freq for str1
  for (let char of str1) {
    map1.set(char, (map1.get(char) || 0) + 1)
  }
  // freq for str2
  for (let char of str2) {
    map2.set(char, (map2.get(char) || 0) + 1)
  }

  if (map1.size !== map2.size) return false

  for (let [key, val] of map1) {
    if (map2.get(key) !== val) return false
  }

  return true
}

module.exports = isAnagram

console.log(isAnagram('Listen', 'Silent')) // true
console.log(isAnagram('Hello', 'Olelh')) // true
console.log(isAnagram('Test', 'Taste')) // false