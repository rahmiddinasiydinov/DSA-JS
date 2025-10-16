// VERSION 1
function isAnagram1(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    };

    const counter1 = {};
    const counter2 = {};

    for (let letter of str1) {
        counter1[letter] = (counter1[letter] || 0) + 1;
    }

    for (let letter of str2) {
        counter2[letter] = (counter2[letter] || 0) + 1;
    }

    for (let key in counter1) {
        if (!(key in counter2) || counter1[key] !== counter2[key]) {
            return false
        }
    }

    return true;
}

// VERSION 2
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const lookup = {};
    for (let letter of s1) {
        lookup[letter] = (lookup[letter] || 0) + 1;
    }
console.log(lookup);

    for (let letter of s2) {
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter]--;
        }
    }
    return true
        ;
}

console.log(isAnagram('anagram', 'nagara'))