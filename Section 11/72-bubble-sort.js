function bubbleSort(arr){
    for(let i = arr.length; i>0; i--){
        let swapped = false;
        for(let j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
              swapped=true
            }   
            if(!swapped) break;
        }
    }
    return arr
 }

 console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))