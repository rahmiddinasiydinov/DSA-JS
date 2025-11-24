function prefixesDivBy5(nums){
    let mod = 0;
    const result = [];

    for (let bit of nums) {
        mod = (mod * 2 + bit) % 5;
        result.push(mod === 0);
    }

    return result;
   return result
};