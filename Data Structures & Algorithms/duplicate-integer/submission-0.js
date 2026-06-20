class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (!nums.indexOf(i) !== -1) return true
            else return false;
        }
    }
}
