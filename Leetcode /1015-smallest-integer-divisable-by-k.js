function smallestRepunitDivByK(k) {
  if (k % 2 === 0 || k % 5 === 0) return -1;
  if (k === 1) return 1;
  let mod = 1;
  let length = 1;

  while (mod !== 0) {
    mod = (mod * 10 + 1) % k;
    length++;
  }
  return length;
}

console.log(smallestRepunitDivByK(17));
