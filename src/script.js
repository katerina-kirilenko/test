function isPalindrome(line) {
  let newLine = String(line);
  for (let i = 0; i < newLine.length / 2; i++) {
    if (newLine[i] !== newLine[newLine.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("anna")); //true
console.log(isPalindrome("walter")); // false
console.log(isPalindrome(12321)); //true
console.log(isPalindrome(123456)); // false
