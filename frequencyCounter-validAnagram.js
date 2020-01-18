/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

validAnagram('', '') true
validAnagram('aaz', 'zza') false
validAnagram('rat', 'car') false
validAnagram('qwerty', 'qeywrt') true
*/

const validAnagram = (string1, string2) => {
  let chars ={}
  if (string1 === '' && string2 === '') {
    return true
  }
  for (let i = 0; i < string1.length; i ++) {
    let char = string1[i]
    if (chars.hasOwnProperty(char)) {
      chars[char]++
    } else {
      chars[char] = 1
    }
  }
  for (let i = 0; i < string2.length; i ++) {
    let char2 = string2[i]
    if (chars.hasOwnProperty(char2)) {
      if (chars[char2] > 1) {
        chars[char2]--
      } else {
        delete chars[char2]
      }
    } else {
      return false
    }
  }
  return Object.keys(chars).length === 0
}