function merge(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        currentIndex = i;
        for (let j = m + i; j >= 0; j--) {
            currentIndex = j;
            if (nums2[i] < nums1[j-1]) {
                nums1[j] = nums1[j-1];
            }  else {
                break
            }
        }
        nums1[currentIndex] = nums2[i];
    }

    return nums1
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));