/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

// We are taking in two different strings 
// We want to return a different string, sorted in alphabetical order, containing on distinct letters 

// What if we made a string, that combines the two strings
// and then, split that string to make it an array, each letter has its own index
// then, remove duplicates from array
// then sort, and then join string to make the new string, which we return

// const filteredArray = [...new Set(array)];

function sortedSingleLetters(str1, str2){
let twoStr = str1 + str2
twoStr = twoStr.split("")
return twoStr
}

console.log(sortedSingleLetters("xyz", "abc"))
console.log(sortedSingleLetters("xyxxxyqwqyyzzzzzz", "abbbbbderdaabcccc"))