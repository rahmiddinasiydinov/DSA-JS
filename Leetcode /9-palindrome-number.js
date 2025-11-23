function isPalindrome(x)  {
    if(x<0) return false;
    let copiedX=x;
    let reversed =0;
    
    while(copiedX>0){
        const remainder = copiedX%10;
        reversed = reversed*10+remainder;
        copiedX = (copiedX-remainder)/10;
    }

    return reversed===x
};

console.log(isPalindrome(12))