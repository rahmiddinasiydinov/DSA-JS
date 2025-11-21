function insertionSort(arr, comparator){
    if(typeof comparator !== "function"){
        comparator =compare
    }
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i];
        let jIndex = i;
        for(let j = i-1; j>=0 && comparator(arr[j] , currentVal) > 0; j--){
            arr[j+1]=arr[j];
            jIndex = j
        }
        if(jIndex !==i)
            arr[jIndex]=currentVal
    }
    return arr
}


function compare(first, second){
    return first -second;
}