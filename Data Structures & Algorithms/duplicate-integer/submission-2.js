class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            if(nums.lastIndexOf(nums[i]) !== i) return true;
        }
        return false;
    }
}
