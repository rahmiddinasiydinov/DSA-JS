function groupAnagram(strs){
    let res ={};
    for(let i=0; i<strs.length; i++){
        let alphabet = Array(26).fill(0);
        for(let l of strs[i]){
            alphabet[l.charCodeAt(0) - 'a'.charCodeAt(0)]+=1;
        }
        if(res[alphabet]){
            res[alphabet].push(strs[i])
        } else {
            res[alphabet]=[strs[i]]
        }
    }
    
    return Object.values(res) ;
}
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))