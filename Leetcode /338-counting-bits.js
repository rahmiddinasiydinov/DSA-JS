function countBits(n){
    let ans=[];
    for(let i=0; i<=n; i++){
        let currentNum = i;
        let count = 0;
        while(currentNum>0){
            count++
            currentNum = currentNum&(currentNum-1);
        }
        ans.push(count)
    }   
    return ans
}
console.log(countBits(1000000))