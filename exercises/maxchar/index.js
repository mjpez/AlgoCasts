// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charObj = {};
  let max = 0;
  let maxChar = '';

  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]]) charObj[str[i]]++;
    else charObj[str[i]] = 1;
  }

  for (let char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
