// function charCount(str) {
//     var obj = {};
//     for (let i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }
// console.log(charCount("HI HOw are you?"));


function charCount(str) {
    var obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false
    }
    return true;
}

console.log(charCount("HI HOw are you?"));
