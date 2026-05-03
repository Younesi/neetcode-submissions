class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let high = nums.length - 1;
        while (left <= high) {
            let mid = Math.floor((left + high) / 2);
            if (nums[mid] == target) {
               return mid;
            } else if (nums[mid] < target) {
               left = mid +1
            } else {
               high = mid -1
            }

           
        }
        return -1;
    }
}
