// WRONG SOLUTIONS IF INPUTS ARE OVERLAPPING STRINGS


function search(str, val){
    let totalCounts=0;
    let valIndex=0;
    const valLength = val.length;

    for(let i=0; i<str.length; i++ ){
        if(valIndex === valLength){
            totalCounts++;
            valIndex=0;
        }
        if(str[i]===val[valIndex]){
            valIndex++
        } else{
            valIndex=0
        }
    }
    return totalCounts
}

console.log(search('aaaaa', 'aaa'))