function removeDuplicates(nums) {
    let leftPointer = 0;
    for(let i =1; i<nums.length; i++){
        if(nums[i]>nums[leftPointer]){
            nums[++leftPointer] = nums[i];
        }
    }
    return leftPointer+1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))