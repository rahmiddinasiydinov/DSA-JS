  //SOLUTION 1
//   function topKFrequent(nums, k) {
    
//         const frequency = {};
//         for(let i=0; i<nums.length; i++){
//             frequency[nums[i]]=(frequency[nums[i]]||0)+1;
//         }
//     return Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]).slice(0, k)
// }

// console.log(topKFrequent([1,1,1,2,2,3, 3, 4, 3, 3, 4, 2, 2, 2, 2], 2))

//SOLUTION 2
function topKFrequent(nums, k){
    count = {}
    const frequency= new Array(nums.length);
    for(let index in nums){
        count
    }

}

console.log(topKFrequent([1,1,1,2,2,3, 3, 4, 3, 3, 4, 2, 2, 2, 2], 2))
