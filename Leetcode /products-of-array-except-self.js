function   productExceptSelf(nums) {
       const result = []
   
       let prefix= 1
        for(let i = 0; i<nums.length; i++){
           result[i]=prefix
           prefix *=nums[i]
        }
        let postfix=1
        for(let i = nums.length; i>=0; i--){
           result[i]=prefix
           postfix *=nums[i]
        }

        return result
    }

    console.log(productExceptSelf([-1,0,1,2,3]))