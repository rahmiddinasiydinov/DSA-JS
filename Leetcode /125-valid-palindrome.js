function isPalindrome(s) {
  s = s
    .toLowerCase()
    .split("")
    .filter(
      (letter) =>
        (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ||
        (letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57)
    );

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    console.log(s[left], s[right]);

    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

console.log(isPalindrome(".,"));
