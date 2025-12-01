function lengthOfLastWord(s) {
  s = s.trim();
  let length = 0;
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] !== " ") {
      length++;
    } else break;
  }
  return length;
}

console.log(lengthOfLastWord(" fly me to the moon "));
