class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const reminder = target - num
            if (hashMap.has(reminder)) {
                return [hashMap.get(reminder), i];
            }
            hashMap.set(num, i);
        }

        return [];
    }
}
