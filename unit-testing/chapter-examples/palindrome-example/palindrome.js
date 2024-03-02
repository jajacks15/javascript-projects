// function reverse(str) {
//    return str.split('').reverse().join('');
//  }
 
//  function isPalindrome(str) {
//    return reverse(str) === str;
//  }
 
//  module.exports = isPalindrome;

function parseData(text, delimiter) {
  return text.split(delimiter);
}

module.exports = parseData;