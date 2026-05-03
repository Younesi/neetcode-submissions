class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = [];

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const reminder = target - num
            if (hashMap[reminder] !== undefined) {
                return [hashMap[reminder], i];
            }

            hashMap[num] = i;
        }

        return [];
    }
}
