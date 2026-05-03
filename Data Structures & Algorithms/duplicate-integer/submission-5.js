class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicates = [];
        for (var i = 0; i < nums.length; i++) {    
            if (duplicates.includes(nums[i])) {
                return true;
            }      
            duplicates.push(nums[i]);
        }
        return false;
    }
}
